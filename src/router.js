'use strict';

/**
 * EdgeOne 边缘函数路由器（源码版，由 edgeone/build.js 打包成单文件）
 *
 * 解析策略（实测数据驱动，不猜）：
 *   - 抖音   → 本地解析器（实测可解，免费且快）
 *   - B站    → 本地解析器（实测可解，依赖 WBI 签名需真 MD5）
 *   - 小红书 → 本地已失效（上游改版强制 token+签名），走兜底源
 *   - 快手   → 本地已失效（上游改版纯 SSR），走兜底源
 *   - 其它   → 走兜底源
 * 本地解析失败时一律自动降级到兜底源，保证可用性。
 */

const config = require('../server/config');
const { HttpError, extractUrl } = require('../server/lib/http');
const ownDouyin = require('../server/parsers/douyin');
const refBilibili = require('../server/parsers/ref/bilibili');

/* ---------------- 配置 ---------------- */

// 兜底解析源（你自部署的解析服务，GET ?url= 方式）
const FALLBACK_BASE = 'https://qsy.kkkkm.com';
const FALLBACK_PATH = '/api/parse';

// 超时
const PARSE_TIMEOUT_MS = 20000;
const PROXY_TIMEOUT_MS = 60000;

const PROXY_TOKEN = '';
const PARSER_VERSION = '2026.10.16.2';

// 本地可解析的平台（其它一律走兜底）
const DOUYIN_RE = /douyin\.com|iesdouyin\.com|snssdk\.com|wtturl\.cn/i;
const BILIBILI_RE = /bilibili\.com|b23\.tv/i;

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'content-type,authorization,x-identity,x-id,x-type,api-version,x-uid',
  'Access-Control-Allow-Methods': 'GET,POST,PUT,OPTIONS',
  'Access-Control-Expose-Headers': 'content-date,x-expire',
};

/* ---------------- 工具 ---------------- */

function json(payload, status = 200) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: Object.assign({ 'Content-Type': 'application/json; charset=utf-8' }, CORS_HEADERS),
  });
}

function jsonFail(err) {
  const status = err instanceof HttpError ? err.status : 500;
  const message = err && err.message ? err.message : '服务异常';
  return json({ ok: false, code: status, message }, status);
}

/** 从直链 URL 里推断过期时间戳（秒→毫秒） */
function parseExpire(url) {
  const matched = String(url || '').match(/[?&](?:deadline|e|x-expires)=(\d+)/);
  if (!matched) return 0;
  const n = Number(matched[1]);
  return n > 1e12 ? n : n * 1000;
}

/**
 * 把 ref 的 B站解析器返回适配成统一契约。
 * ref 返回：{ code:1, msg, title, imgurl, desc, data:[{title,duration,accept:[],video_url}], user }
 */
function adaptBilibili(res) {
  if (!res || (res.code !== undefined && res.code !== 200 && res.code !== 1)) return null;
  const list = Array.isArray(res.data) ? res.data : [];
  const first = list[0] || null;
  const videoUrl = (first && (first.video_url || first.url)) || '';
  if (!videoUrl) return null;

  // 多码率：B站 accept 数组是清晰度列表
  const vs = list
    .filter((v) => v && (v.video_url || v.url))
    .map((v) => ({
      u: v.video_url || v.url,
      q: Array.isArray(v.accept) && v.accept.length ? v.accept[0] : '默认',
      w: v.width || 0,
      h: v.height || 0,
    }));

  // 封面：ref 返回 /api/image?url=<encoded> 代理路径，还原真实地址
  let cover = res.imgurl || res.cover || '';
  if (cover.indexOf('?url=') >= 0) {
    try {
      cover = decodeURIComponent(cover.split('?url=').slice(-1)[0]);
    } catch (e) {
      /* 保留原值 */
    }
  }

  return {
    platform: 'bilibili',
    platformName: '哔哩哔哩',
    title: res.title || (first && first.title) || '',
    cover,
    videoUrl,
    images: [],
    vs: vs.length ? vs : [{ u: videoUrl, q: '默认', w: 0, h: 0 }],
    audioUrl: '',
    e: parseExpire(videoUrl),
    type: 'video',
  };
}

/* ---------------- 解析 ---------------- */

/** 本地解析（仅抖音 / B站）；返回统一契约或 null */
async function parseLocal(text) {
  if (DOUYIN_RE.test(text)) {
    const r = await ownDouyin.parse(text);
    if (r && (r.videoUrl || (r.images && r.images.length))) return r;
    return null;
  }
  if (BILIBILI_RE.test(text)) {
    const raw = await refBilibili(text);
    return adaptBilibili(raw);
  }
  return null;
}

/** 兜底源解析（GET ?url=） */
async function parseFallback(text) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), PARSE_TIMEOUT_MS);
  try {
    const upstream = await fetch(
      FALLBACK_BASE + FALLBACK_PATH + '?url=' + encodeURIComponent(text),
      {
        method: 'GET',
        signal: controller.signal,
        headers: {
          'X-Identity': `GET:${FALLBACK_PATH}`,
          'X-Id': String(Date.now()),
          'X-Type': 'wxmini',
          'api-version': 'wx_1.0.0',
        },
      }
    );
    clearTimeout(timer);
    if (!upstream.ok) return null;
    let payload = null;
    try {
      payload = await upstream.json();
    } catch (e) {
      return null;
    }
    if (!payload || (payload.code !== undefined && payload.code !== 200 && payload.code !== 1)) return null;

    let data = payload.data && typeof payload.data === 'object' ? payload.data : payload;
    if (Array.isArray(data)) data = data[0];
    if (!data || typeof data !== 'object') return null;

    // 视频可能在 videos[] 里
    const videoList = Array.isArray(data.videos) ? data.videos : [];
    const firstVideo = videoList[0] || null;
    const videoUrl =
      data.videoUrl || data.video_url || data.url || data.photoUrl ||
      (firstVideo && (firstVideo.video_url || firstVideo.url)) || '';

    const images = Array.isArray(data.images) ? data.images : (Array.isArray(data.is) ? data.is : []);
    const audioList = Array.isArray(data.ms) ? data.ms : [];
    const audioUrl = data.audioUrl || data.audio_url || (audioList[0] && (audioList[0].url || audioList[0].u)) || '';
    if (!videoUrl && !images.length && !audioUrl) return null;

    let cover = data.cover || data.coverUrl || data.imgurl || data.pic || '';
    if (cover.indexOf('?url=') >= 0) {
      try {
        cover = decodeURIComponent(cover.split('?url=').slice(-1)[0]);
      } catch (e) {
        /* 保留原值 */
      }
    }

    return {
      platform: data.platform || 'remote',
      platformName: data.platformName || '去水印',
      title: data.title || data.caption || data.desc || '',
      cover,
      videoUrl,
      images,
      vs: Array.isArray(data.vs) && data.vs.length
        ? data.vs
        : videoUrl ? [{ u: videoUrl, q: '默认', w: 0, h: 0 }] : [],
      audioUrl,
      e: parseExpire(videoUrl) || Number(data.e || 0) || 0,
      type: images.length ? 'image' : videoUrl ? 'video' : audioUrl ? 'audio' : '',
    };
  } catch (e) {
    clearTimeout(timer);
    return null;
  }
}

async function handleParse(req) {
  let body;
  try {
    body = await req.json();
  } catch (e) {
    throw new HttpError('请求体不是合法 JSON', 400);
  }
  const text = body && (body.text || body.url || body.u);
  const shareUrl = extractUrl(text) || String(text || '').trim();
  if (!shareUrl) throw new HttpError('请先粘贴分享链接', 400);

  // 1) 本地解析（抖音 / B站）
  try {
    const local = await parseLocal(shareUrl);
    if (local) return json({ ok: true, data: local, _source: 'local' });
  } catch (e) {
    // 本地失败，静默降级到兜底源
  }

  // 2) 兜底源（小红书 / 快手 / 其它，或本地失败时）
  const remote = await parseFallback(shareUrl);
  if (remote) return json({ ok: true, data: remote, _source: 'fallback' });

  throw new HttpError('解析失败，请稍后重试或反馈该链接', 502);
}

/* ---------------- 媒体代理 ---------------- */

async function handleProxy(req, url) {
  const token = PROXY_TOKEN || (config && config.proxyToken) || '';
  if (token && url.searchParams.get('token') !== token) {
    throw new HttpError('代理令牌校验失败', 403);
  }
  const raw = url.searchParams.get('url');
  if (!raw) throw new HttpError('缺少 url 参数', 400);

  let mediaUrl;
  try {
    mediaUrl = new URL(raw);
  } catch (e) {
    throw new HttpError('url 参数不是合法地址', 400);
  }
  if (mediaUrl.protocol !== 'http:' && mediaUrl.protocol !== 'https:') {
    throw new HttpError('仅支持 http/https 协议', 400);
  }

  const host = mediaUrl.hostname.toLowerCase();
  const allowed = (config.proxyAllowedHosts || []).some((re) => re.test(host));
  if (!allowed) throw new HttpError('该域名不在代理白名单内', 403);

  const headers = {
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
    Accept: '*/*',
  };
  const rule = (config.refererRules || []).find((r) => r.test.test(host));
  if (rule) {
    headers.Referer = rule.referer;
    headers.Origin = rule.origin;
  }
  const range = req.headers.get('range');
  if (range) headers.Range = range;

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), PROXY_TIMEOUT_MS);
  try {
    const upstream = await fetch(mediaUrl.href, { headers, signal: controller.signal });
    clearTimeout(timer);
    if (!upstream.ok && upstream.status !== 206) {
      throw new HttpError(`上游返回 ${upstream.status}`, 502);
    }
    const outHeaders = Object.assign({}, CORS_HEADERS, {
      'Content-Type': upstream.headers.get('content-type') || 'application/octet-stream',
      'Accept-Ranges': 'bytes',
      'Cache-Control': 'public, max-age=3600',
    });
    const contentLength = upstream.headers.get('content-length');
    if (contentLength) outHeaders['Content-Length'] = contentLength;
    const contentRange = upstream.headers.get('content-range');
    if (contentRange) outHeaders['Content-Range'] = contentRange;
    return new Response(upstream.body, {
      status: upstream.status === 206 ? 206 : 200,
      headers: outHeaders,
    });
  } catch (e) {
    clearTimeout(timer);
    if (e instanceof HttpError) throw e;
    throw new HttpError('代理请求失败', 502);
  }
}

/* ---------------- 路由入口 ---------------- */

async function handle(req, context) {
  const url = new URL(req.url);
  try {
    if (req.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }
    if (url.pathname === '/api/health') {
      return json({ ok: true, runtime: 'edgeone-edge-function' });
    }
    if (url.pathname === '/api/version') {
      return json({ ok: true, parserVersion: PARSER_VERSION, apiVersion: 'wx_1.0.0', serverTime: Date.now() });
    }
    if (url.pathname === '/api/config') {
      return json({
        ok: true,
        data: {
          parserVersion: PARSER_VERSION,
          announcement: '',
          platforms: [
            { platform: 'douyin', platformName: '抖音', enabled: true, notice: '' },
            { platform: 'bilibili', platformName: '哔哩哔哩', enabled: true, notice: '' },
            { platform: 'kuaishou', platformName: '快手', enabled: true, notice: '' },
            { platform: 'xiaohongshu', platformName: '小红书', enabled: true, notice: '' },
          ],
        },
      });
    }
    if (url.pathname === '/api/parse' && (req.method === 'POST' || req.method === 'PUT')) {
      return await handleParse(req);
    }
    if (url.pathname === '/api/proxy' && req.method === 'GET') {
      return await handleProxy(req, url);
    }
    if (url.pathname === '/') {
      return json({
        ok: true,
        service: 'watermark-tool',
        runtime: 'edgeone-edge-function',
        parserVersion: PARSER_VERSION,
        endpoints: ['POST|PUT /api/parse', 'GET /api/proxy?url=', 'GET /api/config', 'GET /api/version', 'GET /api/health'],
      });
    }
    return json({ ok: false, message: '接口不存在' }, 404);
  } catch (err) {
    return jsonFail(err);
  }
}

module.exports = { handle };
