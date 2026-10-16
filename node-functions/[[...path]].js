/* eslint-disable */
/**
 * 本文件由 edgeone/build.js 自动生成，请勿手动修改。
 * 生成方式：node edgeone/build.js
 */
const __modules = {};
const __cache = {};

// ---- 纯 JS MD5（EdgeOne 无 node:crypto，B站 WBI 签名必需）----
function __md5(input) {
  function toUtf8(str) {
    return unescape(encodeURIComponent(str));
  }
  function safeAdd(x, y) {
    const lsw = (x & 0xffff) + (y & 0xffff);
    const msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return (msw << 16) | (lsw & 0xffff);
  }
  function rol(num, cnt) {
    return (num << cnt) | (num >>> (32 - cnt));
  }
  function cmn(q, a, b, x, s, t) {
    return safeAdd(rol(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
  }
  function ff(a, b, c, d, x, s, t) {
    return cmn((b & c) | (~b & d), a, b, x, s, t);
  }
  function gg(a, b, c, d, x, s, t) {
    return cmn((b & d) | (c & ~d), a, b, x, s, t);
  }
  function hh(a, b, c, d, x, s, t) {
    return cmn(b ^ c ^ d, a, b, x, s, t);
  }
  function ii(a, b, c, d, x, s, t) {
    return cmn(c ^ (b | ~d), a, b, x, s, t);
  }
  function md5cycle(x, k) {
    let a = x[0], b = x[1], c = x[2], d = x[3];
    a = ff(a, b, c, d, k[0], 7, -680876936);
    d = ff(d, a, b, c, k[1], 12, -389564586);
    c = ff(c, d, a, b, k[2], 17, 606105819);
    b = ff(b, c, d, a, k[3], 22, -1044525330);
    a = ff(a, b, c, d, k[4], 7, -176418897);
    d = ff(d, a, b, c, k[5], 12, 1200080426);
    c = ff(c, d, a, b, k[6], 17, -1473231341);
    b = ff(b, c, d, a, k[7], 22, -45705983);
    a = ff(a, b, c, d, k[8], 7, 1770035416);
    d = ff(d, a, b, c, k[9], 12, -1958414417);
    c = ff(c, d, a, b, k[10], 17, -42063);
    b = ff(b, c, d, a, k[11], 22, -1990404162);
    a = ff(a, b, c, d, k[12], 7, 1804603682);
    d = ff(d, a, b, c, k[13], 12, -40341101);
    c = ff(c, d, a, b, k[14], 17, -1502002290);
    b = ff(b, c, d, a, k[15], 22, 1236535329);
    a = gg(a, b, c, d, k[1], 5, -165796510);
    d = gg(d, a, b, c, k[6], 9, -1069501632);
    c = gg(c, d, a, b, k[11], 14, 643717713);
    b = gg(b, c, d, a, k[0], 20, -373897302);
    a = gg(a, b, c, d, k[5], 5, -701558691);
    d = gg(d, a, b, c, k[10], 9, 38016083);
    c = gg(c, d, a, b, k[15], 14, -660478335);
    b = gg(b, c, d, a, k[4], 20, -405537848);
    a = gg(a, b, c, d, k[9], 5, 568446438);
    d = gg(d, a, b, c, k[14], 9, -1019803690);
    c = gg(c, d, a, b, k[3], 14, -187363961);
    b = gg(b, c, d, a, k[8], 20, 1163531501);
    a = gg(a, b, c, d, k[13], 5, -1444681467);
    d = gg(d, a, b, c, k[2], 9, -51403784);
    c = gg(c, d, a, b, k[7], 14, 1735328473);
    b = gg(b, c, d, a, k[12], 20, -1926607734);
    a = hh(a, b, c, d, k[5], 4, -378558);
    d = hh(d, a, b, c, k[8], 11, -2022574463);
    c = hh(c, d, a, b, k[11], 16, 1839030562);
    b = hh(b, c, d, a, k[14], 23, -35309556);
    a = hh(a, b, c, d, k[1], 4, -1530992060);
    d = hh(d, a, b, c, k[4], 11, 1272893353);
    c = hh(c, d, a, b, k[7], 16, -155497632);
    b = hh(b, c, d, a, k[10], 23, -1094730640);
    a = hh(a, b, c, d, k[13], 4, 681279174);
    d = hh(d, a, b, c, k[0], 11, -358537222);
    c = hh(c, d, a, b, k[3], 16, -722521979);
    b = hh(b, c, d, a, k[6], 23, 76029189);
    a = hh(a, b, c, d, k[9], 4, -640364487);
    d = hh(d, a, b, c, k[12], 11, -421815835);
    c = hh(c, d, a, b, k[15], 16, 530742520);
    b = hh(b, c, d, a, k[2], 23, -995338651);
    a = ii(a, b, c, d, k[0], 6, -198630844);
    d = ii(d, a, b, c, k[7], 10, 1126891415);
    c = ii(c, d, a, b, k[14], 15, -1416354905);
    b = ii(b, c, d, a, k[5], 21, -57434055);
    a = ii(a, b, c, d, k[12], 6, 1700485571);
    d = ii(d, a, b, c, k[3], 10, -1894986606);
    c = ii(c, d, a, b, k[10], 15, -1051523);
    b = ii(b, c, d, a, k[1], 21, -2054922799);
    a = ii(a, b, c, d, k[8], 6, 1873313359);
    d = ii(d, a, b, c, k[15], 10, -30611744);
    c = ii(c, d, a, b, k[6], 15, -1560198380);
    b = ii(b, c, d, a, k[13], 21, 1309151649);
    a = ii(a, b, c, d, k[4], 6, -145523070);
    d = ii(d, a, b, c, k[11], 10, -1120210379);
    c = ii(c, d, a, b, k[2], 15, 718787259);
    b = ii(b, c, d, a, k[9], 21, -343485551);
    x[0] = safeAdd(a, x[0]);
    x[1] = safeAdd(b, x[1]);
    x[2] = safeAdd(c, x[2]);
    x[3] = safeAdd(d, x[3]);
  }
  function md5blk(s) {
    const md5blks = [];
    for (let i = 0; i < 64; i += 4) {
      md5blks[i >> 2] =
        s.charCodeAt(i) +
        (s.charCodeAt(i + 1) << 8) +
        (s.charCodeAt(i + 2) << 16) +
        (s.charCodeAt(i + 3) << 24);
    }
    return md5blks;
  }
  function hex(n) {
    const hexTab = '0123456789abcdef';
    let str = '';
    for (let i = 0; i < 4; i++) {
      str += hexTab.charAt((n >> (i * 8 + 4)) & 0x0f) + hexTab.charAt((n >> (i * 8)) & 0x0f);
    }
    return str;
  }
  let s = toUtf8(String(input));
  const n = s.length;
  const state = [1732584193, -271733879, -1732584194, 271733878];
  for (let i = 64; i <= n; i += 64) {
    md5cycle(state, md5blk(s.substring(i - 64, i)));
  }
  s = s.substring(n - (n % 64));
  const tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i < s.length; i++) {
    tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
  }
  tail[s.length >> 2] |= 0x80 << (s.length % 4 << 3);
  if (s.length > 55) {
    md5cycle(state, tail);
    for (let i = 0; i < 16; i++) tail[i] = 0;
  }
  const len = n * 8;
  tail[14] = len;
  tail[15] = len >>> 32;
  md5cycle(state, tail);
  return hex(state[0]) + hex(state[1]) + hex(state[2]) + hex(state[3]);
}

// Node 内置模块 shim：优先真 crypto（若环境支持），否则用上面的纯 JS MD5
const __nodeBuiltins = {
  crypto: {
    createHash(alg) {
      const a = String(alg || '').toLowerCase();
      return {
        update(text) {
          this._text = String(text == null ? '' : text);
          return this;
        },
        digest(enc) {
          const h = __md5(this._text || '');
          return String(enc).toLowerCase() === 'hex' ? h : h;
        },
      };
    },
  },
};

function __define(id, factory) {
  __modules[id] = factory;
}

function __dirnameOf(id) {
  const parts = id.split('/');
  parts.pop();
  return parts.join('/');
}

function __normalize(input) {
  const out = [];
  input.split('/').forEach(function (segment) {
    if (!segment || segment === '.') return;
    if (segment === '..') out.pop();
    else out.push(segment);
  });
  return out.join('/');
}

function __resolve(fromId, request) {
  const target = request.startsWith('.')
    ? __normalize(__dirnameOf(fromId) + '/' + request)
    : request;
  if (__modules[target]) return target;
  if (__modules[target + '.js']) return target + '.js';
  if (__modules[target + '/index.js']) return target + '/index.js';
  if (__nodeBuiltins[target]) return target;
  if (__nodeBuiltins[target.replace(/^node:/, '')]) return target;
  throw new Error('模块不存在：' + request + '（来自 ' + fromId + '）');
}

function __require(id) {
  if (id in __nodeBuiltins) return __nodeBuiltins[id];
  const plain = id.replace(/^node:/, '');
  if (plain in __nodeBuiltins) return __nodeBuiltins[plain];
  if (__cache[id]) return __cache[id].exports;
  const factory = __modules[id];
  if (!factory) throw new Error('模块不存在：' + id);
  const module = { exports: {} };
  __cache[id] = module;
  factory(module, module.exports, function (request) {
    return __require(__resolve(id, request));
  });
  return module.exports;
}

__define("edgeone/router.js", function (module, exports, require) {
'use strict';

/**
 * EdgeOne 边缘函数路由器（源码版，由 edgeone/build.js 打包成单文件）
 *
 * 解析策略（实测数据驱动，不猜）：
 *   - 抖音   → 本地解析器（实测可解，免费且快）
 *   - B站    → 本地解析器（实测可解，依赖 WBI 签名需真 MD5）
 *   - 小红书 → 本地解析器（移动 UA 取 __INITIAL_STATE__，实测可取原片直链）
 *   - 快手   → 本地已失效（上游改版纯 SSR），走兜底源
 *   - 其它   → 走兜底源
 * 本地解析失败时一律自动降级到兜底源，保证可用性。
 */

const config = require('../server/config');
const { HttpError, extractUrl } = require('../server/lib/http');
const { isProxyHostAllowed, refererFor, isPrivateHost } = require('../server/lib/proxy-guard');
const ownDouyin = require('../server/parsers/douyin');
const refBilibili = require('../server/parsers/ref/bilibili');
const refXhs = require('../server/parsers/ref/xhs');

/* ---------------- 配置 ---------------- */

// 兜底解析源（自部署的解析服务，GET ?url= 方式）。
// 主服务（jiexi.kkkkm.com）解析不出来时，并发请求下面所有源，取最先成功的那个。
const FALLBACK_BASES = [
  'https://qsy.kkkkm.com',
];
const FALLBACK_PATH = '/api/parse';

// 超时
const PARSE_TIMEOUT_MS = 20000;
const PROXY_TIMEOUT_MS = 60000;

const PROXY_TOKEN = '';
const PARSER_VERSION = '2026.10.16.15';

// 本地可解析的平台（其它一律走兜底）
const DOUYIN_RE = /douyin\.com|iesdouyin\.com|snssdk\.com|wtturl\.cn/i;
const BILIBILI_RE = /bilibili\.com|b23\.tv/i;
const XHS_RE = /xiaohongshu\.com|xhslink\.com|xhslink\.cn/i;

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
    // no-store：解析结果带时效签名（如 B站 deadline），被 CDN 缓存会返回过期直链
    headers: Object.assign(
      { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' },
      CORS_HEADERS
    ),
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

/** ref 解析器把图片包成了站内代理路径 /api/image?url=<encoded>，这里还原成真实地址 */
function decodeProxy(u) {
  const s = String(u || '');
  if (s.indexOf('?url=') >= 0) {
    try {
      return decodeURIComponent(s.split('?url=').slice(-1)[0]);
    } catch (e) {
      return s;
    }
  }
  return s;
}

/**
 * 图片尽量取原图：小红书 CDN 链接常带 `!h5_1080jpg` 之类的裁剪后缀，
 * 去掉后缀可能是更高清的原图，也可能直接 404，故用 HEAD 探测后决定。
 */
async function upgradeImageUrl(raw) {
  const url = decodeProxy(raw);
  const bang = url.indexOf('!');
  if (bang < 0 || !/^https?:/i.test(url)) return url;
  const candidate = url.slice(0, bang);
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 4000);
    const head = await fetch(candidate, { method: 'HEAD', signal: controller.signal });
    clearTimeout(timer);
    if (head.ok) return candidate;
  } catch (e) {
    /* 探测失败，保留原链接 */
  }
  return url;
}

/**
 * 把 ref 的小红书解析器返回适配成统一契约。
 * ref 返回：{ code:200, data:[{ title, desc, url|images[], cover, author }] }
 */
async function adaptXhs(res) {
  if (!res || (res.code !== undefined && res.code !== 200 && res.code !== 1)) return null;
  const list = Array.isArray(res.data) ? res.data : [];
  const d = list[0] || res.data;
  if (!d || typeof d !== 'object') return null;

  const rawImages = Array.isArray(d.images) ? d.images : [];
  // 最多升级前 3 张，避免图集很多时拖慢响应
  const images = await Promise.all(
    rawImages.map((u, i) => (i < 3 ? upgradeImageUrl(u) : Promise.resolve(decodeProxy(u))))
  );
  let cover = d.cover ? await upgradeImageUrl(d.cover) : '';
  if (!cover && images.length) cover = images[0];

  const videoUrl = decodeProxy(d.url || d.videoUrl || '');
  if (!videoUrl && !images.length) return null;

  return {
    platform: 'xiaohongshu',
    platformName: '小红书',
    title: d.title || d.desc || '',
    cover,
    videoUrl,
    images,
    vs: videoUrl ? [{ u: videoUrl, q: '默认', w: 0, h: 0 }] : [],
    audioUrl: '',
    e: 0,
    type: images.length && !videoUrl ? 'image' : 'video',
  };
}

/* ---------------- 解析 ---------------- */

/**
 * 统一结果结构（对齐竞品「皮皮去水印」的 vs / is / ms / ts 四类模型）：
 *   vs —— 视频清晰度列表 [{ u, q, w, h }]
 *   is —— 图集 [{ i }]
 *   ms —— 音频 [{ m, q }]
 *   ts —— 结构化文案 [{ n: 标题/内容/封面, b: 文本, u: 链接, t: 是否图片 }]
 * 原有字段（videoUrl / images / audioUrl / title / cover）全部保留，
 * 老版本小程序不受影响。
 */
function normalizeResult(data) {
  if (!data || typeof data !== 'object') return data;
  const out = Object.assign({}, data);

  const vs = Array.isArray(data.vs) && data.vs.length
    ? data.vs
    : data.videoUrl ? [{ u: data.videoUrl, q: '默认', w: 0, h: 0 }] : [];
  out.vs = vs
    .map((v) => ({
      u: (v && (v.u || v.v || v.url)) || '',
      q: (v && (v.q || v.quality)) || '默认',
      w: (v && v.w) || 0,
      h: (v && v.h) || 0,
    }))
    .filter((v) => v.u);

  const images = Array.isArray(data.images) ? data.images : [];
  out.is = images
    .map((u) => (typeof u === 'string' ? { i: u } : { i: (u && (u.i || u.url || u.u)) || '' }))
    .filter((x) => x.i);

  const audioUrl =
    data.audioUrl ||
    (Array.isArray(data.ms) && data.ms[0] && (data.ms[0].m || data.ms[0].url || data.ms[0].u)) ||
    '';
  out.audioUrl = audioUrl;
  out.ms = audioUrl ? [{ m: audioUrl, q: '音频' }] : [];

  const title = data.title || '';
  const desc = data.desc || data.caption || '';
  const ts = [];
  if (title) ts.push({ n: '标题', b: title, u: '', t: 0 });
  if (desc && desc !== title) ts.push({ n: '内容', b: desc, u: '', t: 0 });
  if (data.cover) ts.push({ n: '封面', b: '', u: data.cover, t: 1 });
  out.ts = ts;

  return out;
}

/** 本地解析（抖音 / B站 / 小红书）；返回统一契约或 null */
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
  // 小红书：本地解析（移动 UA 取 __INITIAL_STATE__，实测可取到原片直链）
  if (XHS_RE.test(text)) {
    try {
      const raw = await refXhs(text);
      const adapted = await adaptXhs(raw);
      if (adapted) return adapted;
    } catch (e) {
      // 本地失败（风控/需登录）→ 由调用方降级到兜底源
    }
    return null;
  }
  return null;
}

/**
 * 兜底源解析：并发请求 FALLBACK_BASES 里的所有源，取最先成功的那个。
 * 某个源超时/报错/返回空一律跳过，全部失败才返回 null。
 */
async function parseFallback(text) {
  const tasks = FALLBACK_BASES.map((base) => fetchFallback(base, text).catch(() => null));
  for (let i = 0; i < tasks.length; i++) {
    const result = await tasks[i];
    if (result) return result;
  }
  return null;
}

/** 单个兜底源解析（GET ?url=） */
async function fetchFallback(base, text) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), PARSE_TIMEOUT_MS);
  try {
    const upstream = await fetch(
      base + FALLBACK_PATH + '?url=' + encodeURIComponent(text),
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
      // 记录实际由哪个兜底源解析成功，便于排查
      via: base,
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

async function handleParse(req, url) {
  let text;
  if (req.method === 'GET') {
    text = (url.searchParams.get('url') || url.searchParams.get('text') || url.searchParams.get('u') || '').trim();
  } else {
    let body;
    try {
      body = await req.json();
    } catch (e) {
      try {
        body = Object.fromEntries(new URLSearchParams(await req.text()));
      } catch (e2) {
        body = null;
      }
    }
    body = body || {};
    if (url && url.searchParams.get('url')) body.url = url.searchParams.get('url');
    text = String(body.text || body.url || body.u || '').trim();
  }
  const shareUrl = extractUrl(text) || text;
  if (!shareUrl) throw new HttpError('请先粘贴分享链接', 400);

  // 并发解析：本地解析器与兜底源同时发起，谁先成功用谁（本地优先）。
  // 参考竞品做法——多源同时跑，只把成功的结果呈现出来；串行会白等一个源超时。
  const isReliableLocal = DOUYIN_RE.test(shareUrl) || BILIBILI_RE.test(shareUrl);
  const fallbackPromise = isReliableLocal ? null : parseFallback(shareUrl).catch(() => null);

  try {
    const local = await parseLocal(shareUrl);
    if (local) return json({ ok: true, data: normalizeResult(local), _source: 'local' });
  } catch (e) {
    // 本地失败，静默降级
  }

  const remote = fallbackPromise ? await fallbackPromise : await parseFallback(shareUrl);
  if (remote) return json({ ok: true, data: normalizeResult(remote), _source: 'fallback', _via: remote.via || '' });

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
  // 内网/本机一律拦（SSRF 防护）；其余按白名单放行，
  // 环境变量 PROXY_ALLOW_ALL=true 时可整体关闭域名校验。
  if (!isProxyHostAllowed(host)) {
    throw new HttpError(`该域名不在代理白名单内：${host}`, 403);
  }

  const headers = {
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
    Accept: '*/*',
  };
  const rule = refererFor(host);
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

    // 上游返回错误状态：直接暴露真实状态码，别让小程序里只看到模糊的 net::OK
    if (!upstream.ok && upstream.status !== 206) {
      throw new HttpError(`上游返回 ${upstream.status}（${host}），直链可能已失效`, 502);
    }

    // 上游 200 但返回的是 HTML/JSON 错误页（部分 CDN 防盗链的行为）：
    // 当成媒体透传会导致 <video> 报 net::OK 但播不出来，这里直接拦截并说明
    const ctype = String(upstream.headers.get('content-type') || '').toLowerCase();
    if (/text\/html|application\/json|application\/xml|text\/plain/.test(ctype)) {
      throw new HttpError(`上游返回的不是媒体（${ctype}），直链已失效或被防盗链拦截（${host}）`, 502);
    }

    const outHeaders = Object.assign({}, CORS_HEADERS, {
      'Content-Type': ctype || 'application/octet-stream',
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

// EdgeOne Pages 重写后可能把函数路径透传给脚本，这里做一层还原
function normalizePath(pathname) {
  let p = String(pathname || '/');
  if (p.includes('/node-functions/') || p.includes('/edge-functions/')) {
    const m = p.match(/\/(?:node|edge)-functions\/[^/]*?\.js(\/[^?]*)?$/);
    if (m && m[1]) p = m[1];
    else p = '/';
  }
  return p;
}

/** 审核模式开关：由 EdgeOne 环境变量 REVIEW_MODE 控制（true/1 开启） */
function isReviewMode() {
  const raw = String((typeof process !== 'undefined' && process.env && process.env.REVIEW_MODE) || '');
  return /^(true|1|yes|on)$/i.test(raw.trim());
}

async function handle(req, context) {
  const url = new URL(req.url);
  const pathname = normalizePath(url.pathname);
  try {
    if (req.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }
    if (pathname === '/api/health') {
      return json({ ok: true, runtime: 'edgeone-edge-function' });
    }
    if (pathname === '/api/version') {
      return json({ ok: true, parserVersion: PARSER_VERSION, apiVersion: 'wx_1.0.0', serverTime: Date.now() });
    }
    if (pathname === '/api/config') {
      return json({
        ok: true,
        data: {
          parserVersion: PARSER_VERSION,
          announcement: '',
          // 审核模式：EdgeOne 环境变量 REVIEW_MODE=true 时，小程序启动直接进
          // 涂抹去水印页（不显示解析首页）；审核通过后改成 false，无需发新版。
          reviewMode: isReviewMode(),
          platforms: [
            { platform: 'douyin', platformName: '抖音', enabled: true, notice: '' },
            { platform: 'bilibili', platformName: '哔哩哔哩', enabled: true, notice: '' },
            { platform: 'kuaishou', platformName: '快手', enabled: true, notice: '' },
            { platform: 'xiaohongshu', platformName: '小红书', enabled: true, notice: '' },
          ],
        },
      });
    }
    if (pathname === '/api/debug/review') {
      return json({
        ok: true,
        data: {
          reviewMode: isReviewMode(),
          raw: String((process && process.env && process.env.REVIEW_MODE) || 'unset'),
          processEnvKeys: Object.keys((process && process.env) || {}).filter((k) => !/(SESSDATA|COOKIE|KEY|TOKEN|SECRET)/i.test(k)),
        },
      });
    }
    // 排查代理 403 用：/api/debug/proxy?url=<媒体地址>
    // 返回该地址是否被白名单放行，以及命中的防盗链规则。
    if (pathname === '/api/debug/proxy') {
      let host = '';
      let parsed = false;
      try {
        host = new URL(String(url.searchParams.get('url') || '')).hostname.toLowerCase();
        parsed = true;
      } catch (e) {
        /* url 参数非法 */
      }
      const rule = host ? refererFor(host) : null;
      return json({
        ok: true,
        data: {
          parsed,
          host,
          allowed: host ? isProxyHostAllowed(host) : false,
          privateBlocked: host ? isPrivateHost(host) : false,
          allowAll: !!config.proxyAllowAll,
          extraHosts: config.proxyExtraHosts || [],
          referer: rule ? rule.referer : '',
        },
      });
    }
    const isParse = pathname === '/api/parse' || pathname === '/api/dewatermark/parseurl' || pathname === '/parse';
    if (isParse) {
      return await handleParse(req, url);
    }
    if (pathname === '/api/proxy' && req.method === 'GET') {
      return await handleProxy(req, url);
    }
    if (pathname === '/') {
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

});
__define("server/config.js", function (module, exports, require) {
'use strict';

// 同时兼容 Node 与边缘函数（ESA 边缘函数没有 process 对象）
const env = typeof process !== 'undefined' && process.env ? process.env : {};

module.exports = {
  port: Number(env.PORT || 3000),

  // 代理接口令牌，强烈建议设置（防止代理地址被别人盗用刷流量）
  // 在服务器上设置环境变量：export PROXY_TOKEN=your-random-string
  proxyToken: env.PROXY_TOKEN || '',

  // 短链最多跟随几次跳转。ESA 边缘函数单次执行最多 4 次子请求，
  // 所以这里默认给 3（跳转 3 次 + 拿分享页 1 次）。
  maxRedirectHops: Number(env.MAX_REDIRECT_HOPS || 3),

  // ===== 运行时下发配置（小程序启动时拉取，改这些不需要发新版小程序） =====

  // 解析器版本号，每次改动 parsers/ 后递增，便于排查线上问题
  parserVersion: env.PARSER_VERSION || '2026.10.14.1',

  // 全局公告，非空时小程序首页展示横幅。例：export ANNOUNCEMENT="抖音接口升级中，预计今晚恢复"
  announcement: env.ANNOUNCEMENT || '',

  // 临时下架的平台（逗号分隔），对应 parsers 的 platform 字段。
  // 例：export DISABLED_PLATFORMS=douyin  →  抖音解析返回 503 维护提示
  disabledPlatforms: String(env.DISABLED_PLATFORMS || '')
    .split(',')
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean),

  // 各平台维护提示文案（JSON 字符串，key 为 platform，缺省用通用文案）
  // 例：export PLATFORM_NOTICES='{"douyin":"抖音接口升级中，预计 10-15 恢复"}'
  platformNotices: (() => {
    try {
      return env.PLATFORM_NOTICES ? JSON.parse(env.PLATFORM_NOTICES) : {};
    } catch {
      return {};
    }
  })(),

  // 每个 IP 的限流配置
  rateLimit: {
    parse: { limit: 20, windowMs: 60 * 1000 },
    proxy: { limit: 120, windowMs: 60 * 1000 },
  },

  // 访问上游的超时时间（毫秒）
  upstreamTimeout: 12000,

  // ===== 媒体代理（/api/proxy）访问控制 =====
  //
  // 默认放开：/api/proxy 不校验域名，任何 http/https 都可代理。
  // 想恢复白名单校验，设环境变量 PROXY_ALLOW_ALL=false 即可。
  // 注意：无论放开与否，内网/本机地址都会被 SSRF 防护拦掉（见 lib/proxy-guard.js）。
  proxyAllowAll: (() => {
    const raw = String(env.PROXY_ALLOW_ALL || '').trim();
    if (!raw) return true; // 未设置 → 默认放开
    return !/^(false|0|no|off)$/i.test(raw);
  })(),

  // 额外放行的域名后缀（逗号分隔），用于临时补漏而不用改代码重新构建。
  // 例：export PROXY_EXTRA_HOSTS="foo-cdn.com,bar.video"
  proxyExtraHosts: String(env.PROXY_EXTRA_HOSTS || '')
    .split(',')
    .map((s) => s.trim().toLowerCase().replace(/^\./, ''))
    .filter(Boolean),

  // 代理接口允许回源的域名（防止服务被当成开放代理）
  // 覆盖主流短视频/社交平台的「视频 + 图片(封面/图集) + 音频」CDN
  proxyAllowedHosts: [
    // ---- 抖音 / 火山 / 西瓜 / 今日头条（字节系）----
    /(^|\.)(douyin|douyinpic|douyinvod|douyincdn|douyinstatic|douyinmusic|iesdouyin|amemv|snssdk|ixigua|ixiguavideo|hotsoon|huoshan|toutiaovod|toutiaoimg|toutiaostatic|byteimg|bytecdn|byteoversea|zjcdn|ecombdimg|pstatp|volccdn|volcvod)\.(com|cn|net)$/i,
    // ---- 快手（视频走 kwimgs，图片走 yximgs / gifshow / chenzhongtech）----
    /(^|\.)(kuaishou|kscdn|kwimgs|yximgs|gifshow|chenzhongtech|ksyungslb|ksplay|kwai|kwaicdn|ks-cdn)\.(com|cn|net)$/i,
    // ---- 小红书 ----
    /(^|\.)(xhscdn|xiaohongshu|xhsusercontent|xhslink)\.(com|cn|net)$/i,
    // ---- B站 ----
    /(^|\.)(bilibili|bilivideo|acgvideo|hdslb|biliapi|bfsimg|bfs-static|b23)\.(com|cn|net|tv)$/i,
    /(^|\.)akamaized\.net$/i,
    // ---- 微博 / 秒拍 ----
    /(^|\.)(weibo|weibocdn|miaopai)\.(com|cn)$/i,
    /(^|\.)sinaimg\.cn$/i,
    /(^|\.)sina\.com\.cn$/i,
    // ---- 微视 / 腾讯系 ----
    /(^|\.)(qpic|gtimg|qcloudimg)\.(cn|com)$/i,
    /(^|\.)(video|weishi)\.qq\.com$/i,
    /(^|\.)tc\.qq\.com$/i,
    /(^|\.)(myqcloud|tencent-cloud)\.(com|net)$/i,
    // ---- 皮皮虾 / 皮皮搞笑（视频走 ppxyvod，图片走 ippzone / hjypbd）----
    /(^|\.)(ippzone|hjypbd|pipigx|baishancdn|ppxyvod|ppxs)\.(com|cn)$/i,
    // ---- 最右 ----
    /(^|\.)izuiyou\.(com|net)$/i,
    // ---- 美拍 ----
    /(^|\.)(meipai|meitudata)\.com$/i,
    // ---- 全民K歌 / QQ音乐 ----
    /(^|\.)(kg\.qq|kgcdn)\.com$/i,
    // ---- AcFun ----
    /(^|\.)acfun(video)?\.cn$/i,
    // ---- 好看视频 / 百度 ----
    /(^|\.)haokan\.baidu\.com$/i,
    /(^|\.)bdstatic\.com$/i,
    // ---- 梨视频 ----
    /(^|\.)pearvideo\.com$/i,
    // ---- 新片场 ----
    /(^|\.)(xinpianchang|vmsva)\.com$/i,
    // ---- TikTok ----
    /(^|\.)(tiktokcdn|tiktokv|muscdn|tiktok)\.com$/i,
    // ---- Twitter / X ----
    /(^|\.)(twimg\.com|pscp\.tv)$/i,
    // ---- 通用对象存储 / 商业 CDN（兜底，避免新 CDN 直接 403）----
    /(^|\.)(qiniu|qiniudn|qbox|clouddn|aliyuncs|alicdn|aliyuncdn|ksyuncs|wangsu|chinacache|bdydns|huaweicloud|hwcdn|cdn77)\.(com|cn|net|me|org)$/i,
    /(^|\.)cloudfront\.net$/i,
  ],

  // 代理回源时按域名补 Referer / User-Agent，绕开防盗链
  refererRules: [
    { test: /douyin|ixigua|snssdk|amemv|hotsoon|huoshan|toutiao|byteimg|bytecdn|zjcdn|ecombdimg|pstatp|volc/i, referer: 'https://www.douyin.com/', origin: 'https://www.douyin.com' },
    { test: /kuaishou|kscdn|kwimgs|yximgs|gifshow|chenzhongtech|ksyungslb|ksplay|kwai|ksyuncs/i, referer: 'https://www.kuaishou.com/', origin: 'https://www.kuaishou.com' },
    { test: /xhscdn|xiaohongshu|xhsusercontent/i, referer: 'https://www.xiaohongshu.com/', origin: 'https://www.xiaohongshu.com' },
    { test: /bilibili|bilivideo|hdslb|biliapi|acgvideo|bfsimg|akamaized/i, referer: 'https://www.bilibili.com/', origin: 'https://www.bilibili.com' },
    { test: /weibo|weibocdn|sinaimg|miaopai|sina\.com\.cn/i, referer: 'https://weibo.com/', origin: 'https://weibo.com' },
    { test: /qq\.com|qpic|gtimg|myqcloud|tencent-cloud|qcloudimg/i, referer: 'https://h5.weishi.qq.com/', origin: 'https://h5.weishi.qq.com' },
    { test: /ippzone|hjypbd|pipigx|baishancdn|ppxyvod|ppxs/i, referer: 'https://www.ippzone.com/', origin: 'https://www.ippzone.com' },
    { test: /izuiyou/i, referer: 'https://www.izuiyou.com/', origin: 'https://www.izuiyou.com' },
    { test: /meipai|meitudata/i, referer: 'https://www.meipai.com/', origin: 'https://www.meipai.com' },
    { test: /acfun/i, referer: 'https://www.acfun.cn/', origin: 'https://www.acfun.cn' },
    { test: /haokan|baidu|bdstatic/i, referer: 'https://haokan.baidu.com/', origin: 'https://haokan.baidu.com' },
    { test: /pearvideo/i, referer: 'https://www.pearvideo.com/', origin: 'https://www.pearvideo.com' },
    { test: /xinpianchang|vmsva/i, referer: 'https://www.xinpianchang.com/', origin: 'https://www.xinpianchang.com' },
    { test: /tiktok|muscdn|byteoversea/i, referer: 'https://www.tiktok.com/', origin: 'https://www.tiktok.com' },
    { test: /twimg|pscp\.tv/i, referer: 'https://twitter.com/', origin: 'https://twitter.com' },
  ],
};

});
__define("server/lib/http.js", function (module, exports, require) {
'use strict';

// 注意：本文件只使用 fetch / URL / AbortController 等标准 Web API，
// 因此既能跑在 Node 18+，也能直接跑在边缘函数（ESA / EdgeOne）里。
const config = require('../config');

const MOBILE_UA =
  'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 ' +
  '(KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1';

class HttpError extends Error {
  constructor(message, status = 500) {
    super(message);
    this.name = 'HttpError';
    this.status = status;
  }
}

/** 从一段分享文本里揪出第一个 http(s) 链接（去掉尾部标点） */
function extractUrl(text = '') {
  const matched = String(text).match(/https?:\/\/[^\s"'<>，。；、)）(（]+/);
  if (!matched) return null;
  return matched[0].replace(/[.,;:!?]+$/, '');
}

/** 按顺序尝试多个正则，返回第一个捕获组 */
function matchFirst(text, patterns) {
  for (const pattern of patterns) {
    const matched = String(text).match(pattern);
    if (matched) return matched[1];
  }
  return null;
}

async function request(url, options = {}) {
  const {
    method = 'GET',
    headers = {},
    timeout = 10000,
    redirect = 'manual',
    body,
  } = options;

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeout);

  try {
    return await fetch(url, {
      method,
      headers: {
        'User-Agent': MOBILE_UA,
        'Accept-Language': 'zh-CN,zh;q=0.9',
        ...headers,
      },
      redirect,
      body,
      signal: controller.signal,
    });
  } catch (err) {
    if (err.name === 'AbortError') throw new HttpError('请求上游超时，请稍后重试', 504);
    throw new HttpError(`请求上游失败：${err.message}`, 502);
  } finally {
    clearTimeout(timer);
  }
}

async function fetchText(url, options = {}) {
  const res = await request(url, { ...options, redirect: options.redirect || 'follow' });
  if (!res.ok) throw new HttpError(`上游返回状态码 ${res.status}`, 502);
  return res.text();
}

/** 手动跟随短链跳转，拿到最终地址（不下载整个页面） */
async function followRedirect(url, maxHops = config.maxRedirectHops || 3) {
  let current = url;
  for (let hop = 0; hop < maxHops; hop += 1) {
    const res = await request(current, { redirect: 'manual' });
    const location = res.headers.get('location');
    if (!location || res.status < 300 || res.status >= 400) break;
    current = new URL(location, current).toString();
  }
  return { finalUrl: current };
}

/**
 * 从 HTML 里提取一段内嵌 JSON。
 * sanitize 用于处理页面里直接写 undefined 的情况（小红书 __INITIAL_STATE__ 常见）。
 */
function jsonFromHtml(html, pattern, { sanitize = false } = {}) {
  const matched = String(html).match(pattern);
  if (!matched) return null;
  let raw = matched[1];
  if (sanitize) {
    raw = raw.replace(/([:,\[])\s*undefined/g, '$1null');
  }
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

/**
 * 从响应里收集 Set-Cookie 的 name=value 段。
 * 兼容 Node（headers.getSetCookie）与边缘运行时（可能只有合并的 set-cookie 字符串）。
 */
function collectCookies(res) {
  let rawList = [];
  if (typeof res.headers.getSetCookie === 'function') {
    rawList = res.headers.getSetCookie();
  } else {
    const combined = res.headers.get('set-cookie');
    if (combined) rawList = [combined];
  }
  return rawList
    .flatMap((item) => String(item).split(/,(?=[^;,=]+=[^;,]+)/))
    .map((cookie) => cookie.split(';')[0].trim())
    .filter((cookie) => cookie.includes('='));
}

module.exports = {
  MOBILE_UA,
  HttpError,
  extractUrl,
  matchFirst,
  request,
  fetchText,
  followRedirect,
  jsonFromHtml,
  collectCookies,
};

});
__define("server/lib/proxy-guard.js", function (module, exports, require) {
'use strict';

/**
 * 媒体代理（/api/proxy）的访问控制。
 *
 * 设计原则：
 *   1. 默认只放行短视频/社交平台的媒体 CDN（白名单），避免接口变成开放代理被刷流量；
 *   2. 环境变量 PROXY_ALLOW_ALL=true 可一键关闭域名校验；
 *   3. 环境变量 PROXY_EXTRA_HOSTS=a.com,b.com 可临时补漏，无需改代码；
 *   4. 无论开关如何，内网/本机地址一律拦截（SSRF 防护，这条是底线）。
 */

const config = require('../config');

const IPV4_RE = /^\d{1,3}(?:\.\d{1,3}){3}$/;

function isPrivateIpv4(host) {
  const parts = host.split('.').map(Number);
  if (parts.some((n) => Number.isNaN(n) || n < 0 || n > 255)) return true; // 非法 IP 一律拦
  const [a, b] = parts;
  if (a === 0 || a === 10 || a === 127) return true;
  if (a === 169 && b === 254) return true; // link-local
  if (a === 172 && b >= 16 && b <= 31) return true;
  if (a === 192 && b === 168) return true;
  if (a === 100 && b >= 64 && b <= 127) return true; // CGNAT 100.64/10
  if (a >= 224) return true; // 组播 / 保留 / 实验地址
  return false;
}

function isPrivateHost(rawHost) {
  const h = String(rawHost || '').toLowerCase().replace(/\.$/, '');
  if (!h) return true;
  if (h.includes(':')) return true; // IPv6（含 ::1）一律拦
  if (h === 'localhost' || h.endsWith('.localhost')) return true;
  if (h.endsWith('.local') || h.endsWith('.internal')) return true;
  if (h.endsWith('.intranet') || h.endsWith('.lan')) return true;
  if (h.endsWith('.home.arpa')) return true;
  if (IPV4_RE.test(h)) return isPrivateIpv4(h);
  return false;
}

function extraHostAllowed(host) {
  const list = config.proxyExtraHosts || [];
  if (!list.length) return false;
  return list.some((s) => host === s || host.endsWith('.' + s));
}

/** 判断某个回源域名是否允许被代理 */
function isProxyHostAllowed(rawHost) {
  const host = String(rawHost || '').toLowerCase();
  if (!host) return false;
  if (isPrivateHost(host)) return false; // SSRF：任何开关下都生效
  if (config.proxyAllowAll) return true;
  if (extraHostAllowed(host)) return true;
  return (config.proxyAllowedHosts || []).some((re) => re.test(host));
}

/** 命中防盗链规则时返回 { referer, origin }，否则 null */
function refererFor(rawHost) {
  const host = String(rawHost || '').toLowerCase();
  const rule = (config.refererRules || []).find((r) => r.test.test(host));
  return rule || null;
}

module.exports = { isProxyHostAllowed, refererFor, isPrivateHost };

});
__define("server/parsers/douyin.js", function (module, exports, require) {
'use strict';

const {
  HttpError,
  extractUrl,
  matchFirst,
  fetchText,
  followRedirect,
  jsonFromHtml,
  request,
  collectCookies,
} = require('../lib/http');

const ID_PATTERNS = [
  /\/video\/(\d{6,})/,
  /\/note\/(\d{6,})/,
  /modal_id=(\d{6,})/,
  /aweme_id=(\d{6,})/,
];

function match(text) {
  return /douyin\.com|iesdouyin\.com/i.test(text);
}

/** 从分享页 HTML 里提取视频/图集条目，结构不对时返回 null */
function extractItem(html) {
  const pageData = jsonFromHtml(html, /window\._ROUTER_DATA\s*=\s*(\{[\s\S]*?\});?\s*<\/script>/);
  const loaderData = pageData && pageData.loaderData;
  const page =
    loaderData &&
    (loaderData['video_(id)/page'] || loaderData['note_(id)/page'] || findFirstVideoPage(loaderData));
  return (page && page.videoInfoRes && page.videoInfoRes.item_list && page.videoInfoRes.item_list[0]) || null;
}

/**
 * 抖音的防爬策略（2026-10 实测）：首次请求分享页会种下 ttwid Cookie，
 * 但页面不含 videoInfoRes；带 Cookie 再请求才返回完整数据。
 * 且风控是间歇性的——同一 IP 部分请求即使带 Cookie 也拿不到数据，
 * 所以每次失败都换新 Cookie 重试，最多 3 次页面请求
 * （配合短链跳转 1 次，恰好不超 ESA 单次 4 个子请求的上限）。
 */
async function fetchSharePage(sharePageUrl) {
  let cookies = [];
  for (let attempt = 0; attempt < 3; attempt += 1) {
    const headers = cookies.length
      ? { Cookie: cookies.join('; '), Referer: 'https://www.iesdouyin.com/' }
      : {};
    const res = await request(sharePageUrl, { redirect: 'follow', headers });
    if (!res.ok) throw new HttpError(`上游返回状态码 ${res.status}`, 502);
    const html = await res.text();
    const item = extractItem(html);
    if (item) return item;

    const fresh = collectCookies(res);
    if (fresh.length) {
      cookies = fresh;
    } else {
      break; // 拿不到新 Cookie，重试无意义
    }
  }
  return null;
}

async function parse(shareText) {
  const shareUrl = extractUrl(shareText);
  if (!shareUrl) throw new HttpError('没找到链接，请重新复制分享内容', 400);

  let awemeId = matchFirst(shareUrl, ID_PATTERNS);
  if (!awemeId) {
    const { finalUrl } = await followRedirect(shareUrl);
    awemeId = matchFirst(finalUrl, ID_PATTERNS);
  }
  if (!awemeId) throw new HttpError('未从链接中解析出视频 ID，该链接可能已失效', 422);

  const item = await fetchSharePage(`https://www.iesdouyin.com/share/video/${awemeId}/`);

  if (!item) throw new HttpError('上游数据格式已变化，需要更新解析逻辑', 502);

  const images = (item.images || [])
    .map((img) => (img.url_list && img.url_list[img.url_list.length - 1]) || img.url)
    .filter(Boolean);

  let videoUrl = null;
  // 多码率列表（借鉴 parse.shenzjd.com 的 vs: [{ u, q }] 设计）
  const vs = [];
  if (!images.length) {
    const video = item.video || {};
    const bitRates = Array.isArray(video.bit_rate) ? video.bit_rate : [];
    bitRates.forEach((rate) => {
      const list = rate.play_addr && rate.play_addr.url_list;
      if (list && list.length) {
        vs.push({
          u: list[0].replace('/playwm/', '/play/').replace('&watermark=1', ''),
          q: rate.gear_name || (rate.quality_type ? `${rate.quality_type}` : ''),
          w: rate.play_addr && rate.play_addr.width,
          h: rate.play_addr && rate.play_addr.height,
        });
      }
    });
    // 兜底：bit_rate 缺失时用 play_addr 单码率
    if (!vs.length) {
      const urlList = video.play_addr && video.play_addr.url_list;
      if (urlList && urlList.length) {
        vs.push({ u: urlList[0].replace('/playwm/', '/play/').replace('&watermark=1', ''), q: '默认' });
      }
    }
    if (vs.length) videoUrl = vs[0].u;
  }

  return {
    platform: 'douyin',
    platformName: '抖音',
    title: item.desc || '',
    cover: firstUrl(item.video && item.video.cover),
    videoUrl,
    images,
    vs, // 多码率列表（无视频时为 []）
    e: 0, // 直链过期时间戳（抖音分享页不返回，由代理层按响应推断）
    audioUrl: firstUrl(item.music && item.music.play_url) || '',
    type: images.length ? 'image' : videoUrl ? 'video' : 'text',
  };
}

function findFirstVideoPage(loaderData) {
  const key = Object.keys(loaderData).find((item) => item.indexOf('video_(id)') === 0);
  return key ? loaderData[key] : null;
}

function firstUrl(node) {
  if (!node) return null;
  if (Array.isArray(node.url_list) && node.url_list.length) return node.url_list[0];
  return node.url || null;
}

module.exports = { platform: 'douyin', platformName: '抖音', match, parse };

});
__define("server/parsers/ref/bilibili.js", function (module, exports, require) {
/**
 * 哔哩哔哩解析（纯函数模块，无 HTTP 边界）
 * 由 /api/bilibili 路由与统一入口 /api/parse 直接函数调用；
 * 逻辑原样下沉自路由文件，行为未改动。
 */

const { logger, DELETED_CONTENT_MSG } = require("../../lib-ref/lib/api-utils");
const { extractBilibiliAnonCookie, getBiliAnonCookie, saveBiliAnonCookie,  } = require("../../lib-ref/lib/bilibili-cookie");
const { signWbiParams } = require("../../lib-ref/lib/bilibili-wbi");
const { biliFetch, BILIBILI_USER_AGENT } = require("../../lib-ref/lib/bilibili-fetch");


// 模块级匿名 Cookie 缓存：单次请求内复用，避免每次 fetch 都查库。
// 首次从 Turso 读取，后续请求内直接复用；响应返回新 Cookie 时更新。
let anonCookieCache = "";

// 从环境变量获取配置（UA 已统一写死在 bilibili-fetch.js，此处无需重复配置）

// B站按请求出口 IP 分配 CDN 节点：海外出口（如本服务器在新加坡）拿到 akamaized.net
// 海外节点，大陆用户浏览器无法播放。直链签名（upsig/uparams）不绑定 host，
// 把海外 host 归一化为国内镜像节点（bilivideo.com）即可在大陆正常播放。
const BILI_CN_HOST = "upos-sz-mirrorbd.bilivideo.com";

// 本地生成稳定 buvid3 兜底：B站对「无 Cookie 裸请求」风控最严，而匿名 Cookie
// 只有在请求成功后才会从响应头捕获——被 -412 拦截的 IP 永远等不到下发（死循环）。
// 参照 B站前端 buvid3 格式（UUID 大写 + infoc 后缀）本地生成一个进程级稳定的
// 设备指纹直接带上，配合 WBI 签名把「裸请求」特征清零。
function generateBuvid3() {
  const hex = (n) =>
    Array.from({ length: n }, () =>
      Math.floor(Math.random() * 16).toString(16).toUpperCase()
    ).join("");
  return `${hex(8)}-${hex(4)}-${hex(4)}-${hex(4)}-${hex(4)}${hex(8)}infoc`;
}

// B站图床（封面/头像）防盗链：hdslb.com 对外站 Referer 返回 403，且返回的是
// http 链接在 HTTPS 页面触发混合内容。参照小红书解析的做法，统一转成本站
// /api/image 图片代理（代理侧带 bilibili Referer，见 api/image/route.js）。
function proxyBiliImage(url) {
  if (!url) return url;
  return `/api/image?url=${encodeURIComponent(url)}`;
}

function normalizeCdnHost(url) {
  try {
    const parsed = new URL(url);
    if (parsed.hostname.endsWith(".akamaized.net")) {
      parsed.hostname = BILI_CN_HOST;
      return parsed.toString();
    }
  } catch (error) {
    logger.error("Error normalizing CDN host:", error.message);
  }
  return url;
}

function cleanUrlParameters(url) {
  try {
    const parsed = new URL(url);
    parsed.username = "";
    parsed.password = "";
    parsed.search = "";
    parsed.pathname = parsed.pathname.replace(/\/$/, "");
    return parsed.toString();
  } catch (error) {
    logger.error("Error cleaning URL:", error.message);
    return url;
  }
}

// B站风控/反爬返回的错误码：海外出口（Cloudflare Workers 等）请求频繁时，
// B站会临时拦截（code=-412 风控 / -403 无权限），此时重试通常可恢复。
const RISK_CODES = new Set([-412, -403, -400]);

// 判断响应是否为 HTML（B站对海外 IP 风控时，API 接口会返回 HTML 拦截页而非 JSON，
// 形如 "<!DOCTYPE html>..."，response.json() 会抛 "Unexpected token '<'"）。
function isHtmlResponse(text) {
  return /^\s*<!DOCTYPE|^\s*<html/i.test(text);
}

// 补全浏览器请求头，让 B 站风控认为请求来自真实浏览器而非爬虫。
// 海外出口（新加坡服务器）仅靠 UA/Referer 仍可能被风控，补全这些头 + 稳定
// 复用的匿名 Cookie（buvid3 等设备指纹）可显著降低被拦截概率。
function buildBilibiliHeaders(extra = {}) {
  const headers = {
    ...extra,
    "User-Agent": BILIBILI_USER_AGENT,
    // B站 API 要求 Referer：海外出口（如 GitHub Actions / 海外服务器）不带
    // 正确 Referer 会被风控返回 code=-412/-403，带上 bilibili.com 来源
    // 可正常返回国内数据。
    Referer: "https://www.bilibili.com/",
    Origin: "https://www.bilibili.com",
    Accept: "application/json, text/plain, */*",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
    "Accept-Encoding": "gzip, deflate, br",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-site",
    "Sec-Ch-Ua":
      '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
    "Sec-Ch-Ua-Mobile": "?0",
    "Sec-Ch-Ua-Platform": '"Windows"',
    "X-Requested-With": "XMLHttpRequest",
  };
  // 带上稳定复用的匿名 Cookie（buvid3 等设备指纹），让 B 站认为请求来自
  // 正常浏览的游客而非爬虫，显著降低海外出口被风控的概率。
  if (anonCookieCache) {
    headers.Cookie = anonCookieCache;
  }

  // 登录态（可选）：配置 BILI_SESSDATA 后，B站会按账号权限下发更高清晰度
  // （未登录最高 720P / 登录 1080P / 大会员 4K）。注意：它只影响清晰度，
  // 不影响水印——UP主开启的防盗录水印是服务端转码烧录的，任何清晰度都在。
  const sessdata = (process.env && process.env.BILI_SESSDATA || "").trim();
  if (sessdata) {
    const loginCookie = /SESSDATA=/i.test(sessdata) ? sessdata : `SESSDATA=${sessdata}`;
    headers.Cookie = headers.Cookie
      ? `${headers.Cookie}; ${loginCookie}`
      : loginCookie;
  }
  return headers;
}

// 带重试的 B 站 API 请求：网络错误、风控码、或 HTML 拦截页时重试（最多 2 次，
// 间隔递增），规避海外出口被 B 站临时风控导致的偶发「解析失败」。
async function bilibiliRequest(url, headers, retries = 2) {
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const response = await biliFetch(url, {
        headers: buildBilibiliHeaders(headers),
      });
      // 从响应头捕获 B 站下发的匿名 Cookie（首次访问会自动下发 buvid3 等），
      // 更新模块缓存并异步持久化，供后续请求稳定复用。
      const newCookie = extractBilibiliAnonCookie(response);
      if (newCookie && newCookie !== anonCookieCache) {
        anonCookieCache = newCookie;
        saveBiliAnonCookie(newCookie); // fire-and-forget，不阻塞主流程
      }
      const text = await response.text();
      // 返回 HTML 拦截页：海外 IP 被风控，重试通常可恢复
      if (isHtmlResponse(text)) {
        if (attempt < retries) {
          logger.warn(
            `B站返回 HTML 拦截页（海外IP风控），第 ${attempt + 1} 次重试: ${url.slice(0, 80)}`
          );
          await new Promise((r) => setTimeout(r, 400 * (attempt + 1)));
          continue;
        }
        logger.error("B站持续返回 HTML 拦截页（海外IP被风控）:", url.slice(0, 80));
        return { code: -412, msg: "风控拦截", html: true };
      }
      let json;
      try {
        json = JSON.parse(text);
      } catch {
        // 非 JSON 也非 HTML（异常响应）：按网络错误重试
        if (attempt < retries) {
          logger.warn(
            `bilibili 响应非 JSON，第 ${attempt + 1} 次重试: ${url.slice(0, 80)}`
          );
          await new Promise((r) => setTimeout(r, 400 * (attempt + 1)));
          continue;
        }
        logger.error("bilibili 响应非 JSON:", text.slice(0, 200));
        return null;
      }
      // 命中风控码且还有重试次数：短暂等待后重试
      if (json && RISK_CODES.has(json.code) && attempt < retries) {
        logger.warn(
          `B站风控码 ${json.code}，第 ${attempt + 1} 次重试: ${url.slice(0, 80)}`
        );
        await new Promise((r) => setTimeout(r, 300 * (attempt + 1)));
        continue;
      }
      return json;
    } catch (error) {
      // 网络错误（超时/断连）：还有重试次数则重试
      if (attempt < retries) {
        logger.warn(
          `bilibili 请求网络错误(${error.message})，第 ${attempt + 1} 次重试`
        );
        await new Promise((r) => setTimeout(r, 300 * (attempt + 1)));
        continue;
      }
      logger.error("Error making bilibili request:", error.message);
      return null;
    }
  }
  return null;
}

/**
 * 番剧（PGC）解析：/bangumi/play/ep<id>（单集）或 /bangumi/play/ss<id>（整季）
 *
 * 不能复用 UP 主稿件那套接口：番剧的 bvid 在 /x/web-interface/view 下能查到
 * （会被当成普通稿件返回 pages），但 /x/player/playurl 对它一律回 -404「啥都木有」
 * （2026-09-23 实测），必须走 PGC 专用接口：
 *   /pgc/view/web/season?ep_id=|season_id=   取剧集列表（含 cid / ep_id）
 *   /pgc/player/web/playurl                   取播放地址
 * 匿名 Cookie 下正常剧集可达 1080P；会员专享集会返回 -10403 / is_preview=1，
 * 此时仍返回剧集信息 + 明确提示，而不是笼统的「解析失败」。
 *
 * @param {"ep"|"ss"} kind ep=单集，ss=整季（取第一集）
 * @param {string} id 数字 ID
 */
async function getBilibiliBangumiInfo(kind, id) {
  try {
    const headers = { "Content-Type": "application/json;charset=UTF-8" };
    const seasonQuery =
      kind === "ep" ? `ep_id=${id}` : `season_id=${id}`;

    const season = await bilibiliRequest(
      `https://api.bilibili.com/pgc/view/web/season?${seasonQuery}`,
      headers
    );

    if (!season || season.code !== 0 || !season.result) {
      logger.warn("Failed to fetch bangumi season:", kind, id, season?.code);
      if (season && RISK_CODES.has(season.code)) {
        return { code: 0, msg: "B站风控拦截，请稍后重试" };
      }
      if (season && (season.code === -404 || season.code === 600404)) {
        return { code: 0, msg: DELETED_CONTENT_MSG };
      }
      return { code: 0, msg: "解析失败！" };
    }

    const info = season.result;
    const episodes = Array.isArray(info.episodes) ? info.episodes : [];
    // ep 链接按 ep_id 精确匹配；ss 链接取第一集（与网页端默认打开的行为一致）
    const episode =
      (kind === "ep" &&
        episodes.find((e) => String(e.ep_id) === String(id))) ||
      episodes[0];
    if (!episode) {
      logger.warn("bangumi season has no episode:", kind, id);
      return { code: 0, msg: DELETED_CONTENT_MSG };
    }

    const episodeLabel = episode.title ? `第${episode.title}集` : "";
    const title =
      [info.title, episodeLabel, episode.long_title]
        .filter(Boolean)
        .join(" ") || info.title || "番剧";
    const cover = proxyBiliImage(episode.cover || info.cover);
    const upInfo = info.up_info || (info.staff && info.staff[0]) || {};
    const user = {
      name: upInfo.uname || upInfo.name || info.title || "",
      user_img: proxyBiliImage(upInfo.avatar || upInfo.face || ""),
    };
    const durationSec = Math.max(
      1,
      Math.round(Number(episode.duration || info.duration || 0) / 1000)
    );

    // WBI 签名同样适用于 PGC 接口（算法一致），拿不到密钥时降级裸请求
    const playParams = {
      ep_id: episode.ep_id,
      cid: episode.cid,
      qn: 112,
      fnval: 1,
      fnver: 0,
      otype: "json",
      platform: "html5",
      high_quality: 1,
    };
    const signedPlayQuery = await signWbiParams(playParams);
    const plainPlayQuery = Object.entries(playParams)
      .map(([k, v]) => `${k}=${v}`)
      .join("&");
    const playUrl = await bilibiliRequest(
      `https://api.bilibili.com/pgc/player/web/playurl?${signedPlayQuery ?? plainPlayQuery}`,
      headers
    );

    // PGC 与普通稿件响应层级不同：结果是 result（老接口用 data），这里两者都兜
    const playData = playUrl?.result || playUrl?.data;
    const durl = playData?.durl?.[0];

    if (!durl?.url) {
      const vipOnly = playUrl?.code === -10403 || playData?.is_preview === 1;
      logger.warn(
        "bilibili bangumi playurl failed:",
        kind,
        id,
        playUrl?.code,
        playData?.is_preview
      );
      return {
        code: 0,
        msg: vipOnly
          ? "该剧集为大会员专享，匿名无法获取播放地址"
          : "获取播放地址失败，请稍后重试",
        title,
        imgurl: cover,
        desc: info.evaluate || "",
        user,
      };
    }

    logger.log("Successfully parsed bilibili bangumi:", kind, id);

    return {
      code: 1,
      msg: "解析成功！",
      title,
      imgurl: cover,
      desc: info.evaluate || "",
      data: [
        {
          title,
          duration: durationSec,
          durationFormat: new Date((durationSec - 1) * 1000)
            .toISOString()
            .substr(11, 8),
          accept: playData.accept_description,
          video_url: normalizeCdnHost(durl.url),
        },
      ],
      user,
    };
  } catch (error) {
    logger.error("Error parsing bilibili bangumi:", error.message);
    return { code: 0, msg: "解析失败！" };
  }
}

async function getBilibiliVideoInfo(url) {
  try {
    // 首次进入时从 Turso 加载持久化的匿名 Cookie 到模块缓存（仅加载一次，
    // 后续请求内直接复用；未配置 Turso 时静默跳过）。仍无 Cookie（如 IP 被风控
    // 等不到 B站下发）时本地生成稳定 buvid3 兜底，避免裸请求。
    if (!anonCookieCache) {
      anonCookieCache = await getBiliAnonCookie();
    }
    if (!anonCookieCache) {
      anonCookieCache = `buvid3=${generateBuvid3()}`;
    }
    const cleanUrl = cleanUrlParameters(url);
    const parsedUrl = new URL(cleanUrl);
    let bvid;
    
    if (parsedUrl.hostname === "b23.tv") {
      // b23.tv 短链重定向：带 UA + Referer，避免海外出口被 B站风控拦截
      const response = await biliFetch(url, {
        redirect: "follow",
        headers: {
          "User-Agent": BILIBILI_USER_AGENT,
          Referer: "https://www.bilibili.com/",
        },
      });
      const redirectUrl = new URL(response.url);
      bvid = redirectUrl.pathname;
    } else if (
      parsedUrl.hostname === "www.bilibili.com" ||
      parsedUrl.hostname === "m.bilibili.com"
    ) {
      bvid = parsedUrl.pathname;
    } else {
      return { code: -1, msg: "视频链接好像不太对！" };
    }
    
    if (!bvid.includes("/video/")) {
      // 番剧（PGC）：b23.tv/ep675522 → /bangumi/play/ep675522，
      // www.bilibili.com/bangumi/play/ss42916 → /bangumi/play/ss42916。
      // 这条分支原来直接被判「好像不是视频链接」（2026-09-22 线上 3 次连续失败）。
      const bangumiMatch = bvid.match(/\/bangumi\/play\/(ep|ss)(\d+)/);
      if (bangumiMatch) {
        return await getBilibiliBangumiInfo(bangumiMatch[1], bangumiMatch[2]);
      }
      return { code: -1, msg: "好像不是视频链接" };
    }
    
    // 提取 BV 号：b23.tv 重定向后 pathname 形如 /video/BV1sK826SENY/（带尾斜杠），
    // 简单地 replace("/video/","") 会残留 "/" 导致 B站 API 返回 code=-400 请求错误
    // （2026-08-25 实测：BV1sK826SENY/ → -400，BV1sK826SENY → 0 OK）。
    const bvidMatch = bvid.match(/\/(video|bilibili)\/([A-Za-z0-9_]+)\/?/);
    bvid = (bvidMatch ? bvidMatch[2] : bvid).replace(/\/+$/, "");
    logger.log("Processing bilibili video, bvid:", bvid);
    
    const headers = { "Content-Type": "application/json;charset=UTF-8" };

    // WBI 签名：B站 Web API 要求携带 wts + w_rid，缺失会被风控拦截（-412）。
    // 拿不到签名密钥时降级为裸请求（保持旧行为，靠重试兜底）。
    const signedViewQuery = await signWbiParams({ bvid });

    // 获取视频信息
    const videoInfo = await bilibiliRequest(
      `https://api.bilibili.com/x/web-interface/view?${signedViewQuery ?? `bvid=${bvid}`}`,
      headers
    );
    
    if (!videoInfo || videoInfo.code !== 0) {
      logger.warn("Failed to fetch video info, response:", videoInfo);
      // 区分「视频不存在/已删除」与「风控拦截」：前者是确定失败（-404/62002 不在
      // RISK_CODES 重试名单内，直接返回不重试），后者是临时风控
      if (videoInfo && RISK_CODES.has(videoInfo.code)) {
        return { code: 0, msg: "B站风控拦截，请稍后重试" };
      }
      if (videoInfo && (videoInfo.code === -404 || videoInfo.code === 62002)) {
        return { code: 0, msg: DELETED_CONTENT_MSG };
      }
      return { code: 0, msg: "解析失败！" };
    }
    
    // 并行获取所有分P的播放地址
    const playUrlPromises = videoInfo.data.pages.map(async (page) => {
      const signedPlayQuery = await signWbiParams({
        otype: "json",
        fnver: 0,
        fnval: 3,
        player: 3,
        qn: 112,
        bvid,
        cid: page.cid,
        platform: "html5",
        high_quality: 1,
      });
      const playUrl = await bilibiliRequest(
        `https://api.bilibili.com/x/player/playurl?${signedPlayQuery ?? `otype=json&fnver=0&fnval=3&player=3&qn=112&bvid=${bvid}&cid=${page.cid}&platform=html5&high_quality=1`}`,
        headers
      );
      
      if (playUrl && playUrl.data?.durl?.[0]?.url) {
        // 直链 host 归一化：海外 akamaized 节点 → 国内 bilivideo.com 节点（签名不绑定 host）
        const video_url = normalizeCdnHost(playUrl.data.durl[0].url);
        return {
          title: page.part,
          duration: page.duration,
          durationFormat: new Date((page.duration - 1) * 1000)
            .toISOString()
            .substr(11, 8),
          accept: playUrl.data.accept_description,
          video_url,
        };
      }
      return null;
    });
    
    const bilijson = (await Promise.all(playUrlPromises)).filter(Boolean);
    
    // 所有分P的播放地址都拿不到（如风控/版权限制）：仍返回视频信息，但提示播放地址获取失败
    if (bilijson.length === 0) {
      logger.warn("bilibili playurl all failed, bvid:", bvid);
      return {
        code: 0,
        msg: "获取播放地址失败，请稍后重试",
        title: videoInfo.data.title,
        imgurl: proxyBiliImage(videoInfo.data.pic),
        desc: videoInfo.data.desc,
        user: {
          name: videoInfo.data.owner.name,
          user_img: proxyBiliImage(videoInfo.data.owner.face),
        },
      };
    }
    
    logger.log("Successfully parsed bilibili video, pages:", bilijson.length);
    
    return {
      code: 1,
      msg: "解析成功！",
      title: videoInfo.data.title,
      imgurl: proxyBiliImage(videoInfo.data.pic),
      desc: videoInfo.data.desc,
      data: bilijson,
      user: {
        name: videoInfo.data.owner.name,
        user_img: proxyBiliImage(videoInfo.data.owner.face),
      },
    };
  } catch (error) {
    logger.error("Error parsing bilibili video:", error.message);
    return { code: 0, msg: "解析失败！" };
  }
}

const __DEFAULT__ = getBilibiliVideoInfo;


module.exports = __DEFAULT__;

});
__define("server/lib-ref/lib/api-utils.js", function (module, exports, require) {
'use strict';
const DELETED_CONTENT_MSG = '该视频已被发布者删除';
const logger = {
  log: (...a) => console.log('[parse]', ...a),
  warn: (...a) => console.warn('[parse]', ...a),
  error: (...a) => console.error('[parse]', ...a),
  info: (...a) => console.log('[parse]', ...a),
  debug: () => {},
};
function beijingNow() { return new Date(); }
module.exports = { logger, DELETED_CONTENT_MSG, beijingNow };

});
__define("server/lib-ref/lib/bilibili-cookie.js", function (module, exports, require) {
/**
 * B 站匿名 Cookie 捕获 / 持久化 / 复用。
 *
 * 背景：B 站对「无任何 Cookie 的裸请求」（海外出口尤其明显）风控最严，
 * 会返回 code=-412 或 HTML 拦截页。但未登录访问 B 站时，B 站会自动下发
 * 一组匿名 Cookie（buvid3 / buvid4 / b_nut 等设备指纹），带上一组稳定复用的
 * 匿名 Cookie 后，B 站会认为请求来自「正常浏览的游客」，风控阈值大幅放宽。
 *
 * 设计（借鉴抖音 ttwid 模式）：
 * - 首次请求从响应头 Set-Cookie 捕获匿名 Cookie；
 * - 有 Turso 时持久化到 kv_store 表，后续所有请求复用同一组（稳定是关键，
 *   B 站风控会看 buvid3 是否长期一致，频繁更换反而像爬虫）；
 * - 未配置 Turso 时降级为「单次请求内捕获复用」，不阻塞主流程。
 */

const { createTursoClient } = require("../lib/turso-client");
const { logger } = require("../lib/api-utils");

// 需要捕获并复用的匿名 Cookie 键（B 站设备指纹 / 游客标识）
const ANON_COOKIE_KEYS = ["buvid3", "buvid4", "b_nut", "buvid", "b_lsid"];
const ANON_COOKIE_NAMES = new Set(ANON_COOKIE_KEYS);

let db = null;
let tableReady = null;

function getClient() {
  if (db) return db;
  const url = process.env.TURSO_DB_URL;
  const token = process.env.TURSO_AUTH_TOKEN;
  if (!url || !token) return null;
  try {
    db = createTursoClient({ url, authToken: token });
  } catch (e) {
    logger.warn(`[bilibili-cookie] 数据库连接创建失败: ${e.message}`);
    return null;
  }
  return db;
}

/** 幂等建表：kv_store 通用 key-value 表（供匿名 Cookie 等持久化使用） */
async function ensureTable() {
  if (tableReady) return tableReady;
  const client = getClient();
  if (!client) {
    tableReady = Promise.resolve(false);
    return tableReady;
  }
  tableReady = (async () => {
    await client.execute(`
      CREATE TABLE IF NOT EXISTS kv_store (
        key TEXT PRIMARY KEY,
        value TEXT NOT NULL,
        updated_at TEXT NOT NULL
      )
    `);
    return true;
  })();
  tableReady.catch(() => {
    tableReady = null; // 建表失败允许下次重试
  });
  return tableReady;
}

/**
 * 从响应头 Set-Cookie 中提取 B 站匿名 Cookie 字符串。
 * 兼容 undici 的多 Set-Cookie 头（getSetCookie / entries 两种取法）。
 * @param {Response} response
 * @returns {string} 形如 "buvid3=xxx; buvid4=xxx; b_nut=xxx" 的 Cookie 串，无则返回 ""
 */
function extractBilibiliAnonCookie(response) {
  try {
    const setCookies = [];
    if (typeof response.headers.getSetCookie === "function") {
      setCookies.push(...response.headers.getSetCookie());
    } else {
      for (const [key, value] of response.headers.entries()) {
        if (key.toLowerCase() === "set-cookie") setCookies.push(value);
      }
    }
    const parts = [];
    for (const sc of setCookies) {
      const name = sc.split("=")[0].trim();
      if (ANON_COOKIE_NAMES.has(name)) {
        const value = sc.split(";")[0].trim();
        parts.push(value);
      }
    }
    return parts.join("; ");
  } catch (e) {
    logger.warn(`[bilibili-cookie] 提取匿名 Cookie 失败: ${e.message}`);
    return "";
  }
}

/**
 * 读取持久化的 B 站匿名 Cookie。
 * @returns {Promise<string>} 持久化的 Cookie 串，无则返回 ""
 */
async function getBiliAnonCookie() {
  try {
    const client = getClient();
    if (!client) return "";
    const ok = await ensureTable();
    if (!ok) return "";
    const { rows } = await client.execute({
      sql: "SELECT value FROM kv_store WHERE key = ?",
      args: ["bilibili_anon_cookie"],
    });
    return rows[0]?.value || "";
  } catch (e) {
    logger.warn(`[bilibili-cookie] 读取失败: ${e.message}`);
    return "";
  }
}

/**
 * 持久化 B 站匿名 Cookie（upsert）。
 * @param {string} cookie 形如 "buvid3=xxx; buvid4=xxx" 的 Cookie 串
 */
async function saveBiliAnonCookie(cookie) {
  if (!cookie) return;
  try {
    const client = getClient();
    if (!client) return;
    const ok = await ensureTable();
    if (!ok) return;
    await client.execute({
      sql: "INSERT INTO kv_store (key, value, updated_at) VALUES (?, ?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value, updated_at = excluded.updated_at",
      args: ["bilibili_anon_cookie", cookie, new Date().toISOString()],
    });
    logger.log("[bilibili-cookie] 已持久化匿名 Cookie");
  } catch (e) {
    logger.warn(`[bilibili-cookie] 写入失败: ${e.message}`);
  }
}

module.exports = Object.assign(module.exports || {}, { extractBilibiliAnonCookie, getBiliAnonCookie, saveBiliAnonCookie });

});
__define("server/lib-ref/lib/turso-client.js", function (module, exports, require) {
'use strict';
function createTursoClient() { return null; }
module.exports = { createTursoClient };

});
__define("server/lib-ref/lib/bilibili-wbi.js", function (module, exports, require) {
/**
 * B 站 WBI 签名（w_rid / wts）。
 *
 * 背景：B站 Web API（如 /x/web-interface/view）从 2023 年起要求请求携带
 * WBI 签名参数（wts + w_rid），缺失或校验失败会被风控拦截（code=-412）。
 * 2026-09 线上日志显示所有 B站解析连续数日 100% 被 -412，补上签名是
 * 恢复解析的前提。
 *
 * 算法：
 * 1. 请求 /x/web-interface/nav 拿 wbi_img.img_url / sub_url，文件名即
 *    img_key / sub_key（每天轮换一次）；
 * 2. 用固定重排表把 img_key+sub_key 重排后取前 32 位得到 mixin_key；
 * 3. 业务参数 + wts（秒级时间戳）按键名字典序排序、URL 编码后拼串，
 *    末尾拼 mixin_key 做 MD5 得到 w_rid。
 *
 * 密钥策略：
 * - 进程内存缓存 12 小时（官方密钥每日轮换，12h 内有效）；
 * - 有 Turso 时持久化到 kv_store（key=bilibili_wbi_keys），实例重启/冷启动
 *   后立即恢复，避免冷启动期间签名不可用；
 * - nav 接口请求失败时降级使用过期密钥（旧密钥签名有时也能过），彻底拿不到
 *   密钥则返回 null，调用方回退为不带签名的裸请求。
 */

const { createHash } = require("crypto");
const { createTursoClient } = require("../lib/turso-client");
const { logger } = require("../lib/api-utils");
const { biliFetch, BILIBILI_USER_AGENT } = require("../lib/bilibili-fetch");

// 密钥缓存有效期：官方每日轮换，取 12h 保守值
const WBI_KEY_TTL_MS = 12 * 60 * 60 * 1000;
// Turso kv_store 中的存储键
const KV_KEY = "bilibili_wbi_keys";

// WBI 混淆重排表（B站前端 JS 固定值）
const MIXIN_KEY_ENC_TAB = [
  46, 47, 18, 2, 53, 8, 23, 32, 15, 50, 10, 31, 58, 3, 45, 35, 27, 43, 5, 49,
  33, 9, 42, 19, 29, 28, 14, 39, 12, 38, 41, 13, 37, 48, 7, 16, 24, 55, 40, 61,
  26, 17, 0, 1, 60, 51, 30, 4, 22, 25, 54, 21, 56, 59, 6, 63, 57, 62, 11, 36,
  20, 34, 44, 52,
];

// 进程内密钥缓存
let wbiKeyCache = null; // { imgKey, subKey, fetchedAt: number }
let refreshing = null; // 并发去重：同一时刻只允许一次密钥刷新

function md5(text) {
  return createHash("md5").update(text).digest("hex");
}

/** img_key+sub_key 按混淆表重排后截取前 32 位 */
function getMixinKey(imgKey, subKey) {
  const orig = imgKey + subKey;
  let str = "";
  for (const i of MIXIN_KEY_ENC_TAB) {
    if (i < orig.length) str += orig[i];
  }
  return str.slice(0, 32);
}

/**
 * 生成带 WBI 签名的查询串。
 * @param {Object} params 业务参数
 * @param {string} mixinKey
 * @returns {string} 形如 "bvid=xxx&wts=...&w_rid=..." 的查询串
 */
function signQuery(params, mixinKey) {
  const wts = Math.floor(Date.now() / 1000);
  const merged = { ...params, wts };
  // 按键名字典序排序；value 移除特殊字符（B站前端同款清洗）后 URL 编码
  const query = Object.keys(merged)
    .sort()
    .map((key) => {
      const value = String(merged[key]).replace(/[!'()*]/g, "");
      return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    })
    .join("&");
  const wRid = md5(query + mixinKey);
  return `${query}&w_rid=${wRid}`;
}

// ---------- Turso 持久化（与 bilibili-cookie.js 同一 kv_store 表） ----------

let db = null;
function getClient() {
  if (db) return db;
  const url = process.env.TURSO_DB_URL;
  const token = process.env.TURSO_AUTH_TOKEN;
  if (!url || !token) return null;
  try {
    db = createTursoClient({ url, authToken: token });
  } catch (e) {
    logger.warn(`[bilibili-wbi] 数据库连接创建失败: ${e.message}`);
    return null;
  }
  return db;
}

async function loadKeysFromDb() {
  try {
    const client = getClient();
    if (!client) return null;
    const { rows } = await client.execute({
      sql: "SELECT value FROM kv_store WHERE key = ?",
      args: [KV_KEY],
    });
    if (!rows[0]?.value) return null;
    const parsed = JSON.parse(rows[0].value);
    if (parsed?.imgKey && parsed?.subKey) return parsed;
    return null;
  } catch {
    // kv_store 表可能尚未创建（匿名 Cookie 模块会建表），静默降级
    return null;
  }
}

async function saveKeysToDb(keys) {
  try {
    const client = getClient();
    if (!client) return;
    await client.execute({
      sql: "INSERT INTO kv_store (key, value, updated_at) VALUES (?, ?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value, updated_at = excluded.updated_at",
      args: [KV_KEY, JSON.stringify(keys), new Date().toISOString()],
    });
  } catch (e) {
    logger.warn(`[bilibili-wbi] 密钥持久化失败: ${e.message}`);
  }
}

// ---------- 密钥获取 ----------

/** 请求 nav 接口拉取最新密钥，失败返回 null */
async function fetchKeysFromNav() {
  try {
    const response = await biliFetch("https://api.bilibili.com/x/web-interface/nav", {
      headers: {
        "User-Agent": BILIBILI_USER_AGENT,
        Referer: "https://www.bilibili.com/",
        Origin: "https://www.bilibili.com",
        Accept: "application/json, text/plain, */*",
      },
      // nav 风控较宽松，超时兜底 3s，避免拖慢解析主流程
      signal: AbortSignal.timeout(3000),
    });
    const json = await response.json();
    const img = json?.data?.wbi_img;
    if (!img?.img_url || !img?.sub_url) return null;
    // 文件名即密钥：https://i0.hdslb.com/bfs/wbi/<img_key>.png
    const imgKey = img.img_url.split("/").pop().replace(/\.[a-zA-Z]+$/, "");
    const subKey = img.sub_url.split("/").pop().replace(/\.[a-zA-Z]+$/, "");
    if (!imgKey || !subKey) return null;
    return { imgKey, subKey, fetchedAt: Date.now() };
  } catch (e) {
    logger.warn(`[bilibili-wbi] nav 接口获取密钥失败: ${e.message}`);
    return null;
  }
}

/**
 * 获取可用的 WBI 密钥（含 mixin_key 生成）。
 * 优先级：内存缓存（未过期）> nav 刷新 > DB 持久化（含过期的，兜底）。
 * @returns {Promise<{imgKey: string, subKey: string, mixinKey: string}|null>}
 */
async function getWbiKeys() {
  // 1. 内存缓存未过期，直接用
  if (wbiKeyCache && Date.now() - wbiKeyCache.fetchedAt < WBI_KEY_TTL_MS) {
    return { ...wbiKeyCache, mixinKey: getMixinKey(wbiKeyCache.imgKey, wbiKeyCache.subKey) };
  }

  // 2. 并发去重刷新
  if (!refreshing) {
    refreshing = (async () => {
      const fresh = await fetchKeysFromNav();
      if (fresh) {
        wbiKeyCache = fresh;
        saveKeysToDb(fresh); // fire-and-forget
        return true;
      }
      return false;
    })();
    try {
      await refreshing;
    } finally {
      refreshing = null;
    }
  } else {
    await refreshing;
  }

  if (wbiKeyCache) {
    return { ...wbiKeyCache, mixinKey: getMixinKey(wbiKeyCache.imgKey, wbiKeyCache.subKey) };
  }

  // 3. nav 失败（如 IP 被临时拦截）：读 DB 兜底，过期密钥签名有时也能通过
  const persisted = await loadKeysFromDb();
  if (persisted) {
    return {
      ...persisted,
      mixinKey: getMixinKey(persisted.imgKey, persisted.subKey),
    };
  }
  return null;
}

/**
 * 生成 WBI 签名查询串。
 * @param {Object} params 业务参数（如 { bvid: "BVxxx" }）
 * @returns {Promise<string|null>} 已签名的查询串；拿不到密钥时返回 null
 */
async function signWbiParams(params) {
  const keys = await getWbiKeys();
  if (!keys) return null;
  return signQuery(params, keys.mixinKey);
}


module.exports = Object.assign(module.exports || {}, { getWbiKeys, signWbiParams });

});
__define("server/lib-ref/lib/bilibili-fetch.js", function (module, exports, require) {
/**
 * B 站请求统一出口（三档模式，按优先级自动选择）：
 *
 * 1. 中继模式（BILIBILI_RELAY_URL + BILIBILI_RELAY_TOKEN）：
 *    请求转发到部署在国内区的腾讯云函数（scf-bilibili-relay/），云函数以
 *    腾讯国内 IP 出口访问 B站，绕过 B站对海外数据中心 IP 的 -412 风控。
 *    2026-09-08 线上实证：新加坡出口带完整 WBI 签名 + Cookie 仍 100% 被
 *    IP 级风控拦截，唯有换国内出口有效。
 * 2. 代理模式（BILIBILI_PROXY）：http://[user:pass@]host:port，undici ProxyAgent。
 * 3. 直连（默认）：与原生 fetch 行为完全一致。
 *
 * 协议（中继模式，与 scf-bilibili-relay/server.js 对应）：
 *   POST { url, method, headers, body(b64), redirect, timeout }
 *   ->   { status, url, headers, setCookie: string[], body: base64 } 或 { error }
 */

// 在小程序 ESA 部署里没有 undici，直接用 Node 18+ 原生 fetch；
// BILIBILI_PROXY 代理模式（undici ProxyAgent）不支持，可通过中继模式替代。
const { logger } = require("../lib/api-utils");

// B站请求统一 UA（写死：模拟 Chrome 浏览器，基本不变，无需暴露为配置）
const BILIBILI_USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

let initialized = false;

function getDispatcher() {
  // 原 ref 支持 BILIBILI_PROXY 通过 undici ProxyAgent 走 HTTP 代理；
  // 小程序 ESA 部署无 undici，统一回退直连，行为等价于 getDispatcher 返回 null。
  if (initialized) return null;
  initialized = true;
  return null;
}

/** 中继响应：把云函数返回的 JSON 包装成 Response 兼容对象 */
class RelayResponse {
  constructor(data) {
    this.status = data.status;
    this.ok = data.status >= 200 && data.status < 300;
    // 最终 URL（云函数跟随重定向后的地址，b23.tv 短链解析依赖）
    this.url = data.url || "";
    this._headers = data.headers || {};
    this._setCookie = data.setCookie || [];
    this._bodyB64 = data.body || "";
  }

  get headers() {
    const headers = this._headers;
    const setCookie = this._setCookie;
    return {
      get: (name) => headers[String(name).toLowerCase()] ?? null,
      has: (name) => String(name).toLowerCase() in headers,
      entries: function* () {
        for (const [k, v] of Object.entries(headers)) yield [k, v];
      },
      // 兼容 extractBilibiliAnonCookie 的多 Set-Cookie 取法
      getSetCookie: () => setCookie.slice(),
    };
  }

  async text() {
    return Buffer.from(this._bodyB64, "base64").toString("utf8");
  }

  async json() {
    return JSON.parse(await this.text());
  }
}

/** 中继转发：请求经国内云函数访问 B站 */
let relayLogged = false;
async function relayFetch(url, init = {}) {
  const relayUrl = process.env.BILIBILI_RELAY_URL;
  const token = process.env.BILIBILI_RELAY_TOKEN || "";
  if (!relayLogged) {
    relayLogged = true;
    logger.log("[bilibili-relay] B站请求启用云函数中继出口");
  }
  const response = await fetch(relayUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Relay-Token": token,
    },
    body: JSON.stringify({
      url,
      method: init.method || "GET",
      headers: init.headers || {},
      body: init.body ? Buffer.from(init.body).toString("base64") : "",
      redirect: init.redirect || "follow",
      timeout: 12000,
    }),
    // 客户端侧超时（如 nav 密钥获取的 3s）直接透传给中继请求
    signal: init.signal,
  });
  const data = await response.json();
  if (data.error) throw new Error(`中继转发失败: ${data.error}`);
  return new RelayResponse(data);
}

/**
 * B站专用 fetch：优先中继，其次代理，均未配置时等同原生 fetch。
 * @param {string} url
 * @param {object} [init] 同 fetch init
 */
function biliFetch(url, init = {}) {
  if (process.env.BILIBILI_RELAY_URL) {
    return relayFetch(url, init);
  }
  const d = getDispatcher();
  if (d) {
    
  }
  // undici fetch 与标准 fetch 行为兼容（redirect/headers/AbortSignal 均支持）
  return fetch(url, init);
}


module.exports = Object.assign(module.exports || {}, { biliFetch, BILIBILI_USER_AGENT });

});
__define("server/parsers/ref/xhs.js", function (module, exports, require) {
/**
 * 小红书解析（纯函数模块，无 HTTP 边界）
 * 由 /api/xhs 路由与统一入口 /api/parse 直接函数调用；
 * 逻辑原样下沉自路由文件，行为未改动。
 */

const { logger, DELETED_CONTENT_MSG } = require("../../lib-ref/lib/api-utils");


/**
 * 小红书 H5 UA：**必须用移动端**。
 *
 * 2026-09-23 实测：同一篇笔记，桌面 Chrome/Edge UA 请求笔记页会被强制 302 到
 * /login?redirectPath=...（服务端出口 IP 无登录态一律如此），换了 redirectPath
 * 重试仍是登录页 → 线上 4 次全部报 403「该笔记需要登录小红书后才能查看」；
 * 同一 IP 换成 iPhone Safari UA 立刻拿到 200 + 完整 __INITIAL_STATE__
 * （noteData.data.noteData，含 video.media.stream 的 h264 backupUrls/masterUrl）。
 * xhslink 短链同理：移动 UA 下 302 直达笔记页而不是登录页。
 *
 * 移动端 UA 是「无需 Cookie 即可解析」的关键，不要为了「像浏览器」改回桌面 UA。
 */
const XHS_USER_AGENT =
  "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1";

/** 网页端登录 Cookie（可选）：形如 `web_session=xxx; a1=xxx`，配了才带 */
function xhsCookie() {
  return (process.env.XHS_COOKIE || "").trim();
}

/** 统一构造请求头：移动 UA + 可选 Cookie（短链与重定向两处共用） */
function xhsHeaders(extra = {}) {
  const headers = {
    "User-Agent": XHS_USER_AGENT,
    Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
    ...extra,
  };
  const cookie = xhsCookie();
  if (cookie) headers.Cookie = cookie;
  return headers;
}

function output(code, msg, data = []) {
  return {
    code,
    msg,
    data,
  };
}

function normalizeXhsUrl(url) {
  try {
    const u = new URL(url.trim());
    const host = u.hostname.toLowerCase();
    // xhslink.com / xhslink.cn 短链统一走 https
    if (["xhslink.com", "xhslink.cn"].includes(host) && u.protocol === "http:") {
      u.protocol = "https:";
      return u.toString();
    }
  } catch {
    /* ignore */
  }
  return url.trim();
}

/**
 * 短链与笔记页：手动跟随重定向，兼容 xhslink.com 的 o/ 短链。
 * 小红书对部分分享链接（或无 Cookie 的服务器请求）会强制 302 到
 * /login?redirectPath=<真实笔记页>；此时提取 redirectPath 直接请求
 * 真实笔记页重试，避免把登录页当笔记页解析。
 */
async function fetchXhsNoteHtml(url) {
  const target = normalizeXhsUrl(url);
  const { html, finalUrl } = await fetchWithRedirects(target);
  if (isLoginUrl(finalUrl)) {
    const realNoteUrl = extractRedirectPath(finalUrl);
    if (realNoteUrl) {
      const retry = await fetchWithRedirects(realNoteUrl);
      // 重试后仍是登录页 → 该笔记确实需要登录态，交由上层给出明确提示
      if (!isLoginUrl(retry.finalUrl)) {
        return retry;
      }
      return { html: retry.html, finalUrl: retry.finalUrl, loginRequired: true };
    }
    return { html, finalUrl, loginRequired: true };
  }
  return { html, finalUrl };
}

function isLoginUrl(url) {
  try {
    const u = new URL(url);
    return (
      u.hostname.toLowerCase().includes("xiaohongshu.com") &&
      /^\/login$/.test(u.pathname)
    );
  } catch {
    return false;
  }
}

function extractRedirectPath(loginUrl) {
  try {
    const u = new URL(loginUrl);
    const redirect = u.searchParams.get("redirectPath");
    if (redirect && /^https?:\/\//.test(redirect)) return redirect;
  } catch {
    /* ignore */
  }
  return null;
}

async function fetchWithRedirects(target) {
  // 第一步：请求短链，手动处理重定向
  let response = await fetch(target, {
    headers: xhsHeaders(),
    redirect: "manual",
  });

  // 手动跟随重定向（最多跟 5 次）
  let redirectCount = 0;
  const maxRedirects = 5;
  while (
    redirectCount < maxRedirects &&
    [301, 302, 303, 307, 308].includes(response.status)
  ) {
    const location = response.headers.get("location");
    if (!location) break;
    const nextUrl = new URL(location, response.url).toString();
    redirectCount++;
    response = await fetch(nextUrl, {
      // 带上 Referer 避免被拦截
      headers: xhsHeaders({ Referer: response.url }),
      redirect: "manual",
    });
  }

  const html = await response.text();
  return { html, finalUrl: response.url };
}

// 安全地获取嵌套属性
function safeGet(obj, path) {
  try {
    return path.split(".").reduce((current, key) => {
      if (current && typeof current === "object" && key in current) {
        return current[key];
      }
      return null;
    }, obj);
  } catch {
    return null;
  }
}

/**
 * 新版笔记页：note.currentNoteId + note.noteDetailMap[id].note
 * 旧版：noteData.data.noteData 等
 */
function resolveNotePayload(decoded) {
  // 新版结构：note.noteDetailMap
  const noteId = safeGet(decoded, "note.currentNoteId");
  const detailMap = safeGet(decoded, "note.noteDetailMap");
  if (noteId && detailMap && typeof detailMap === "object") {
    const entry = detailMap[noteId];
    if (entry?.note && typeof entry.note === "object") {
      return entry.note;
    }
    // 有些版本 note 直接挂在 entry 下
    if (entry && typeof entry === "object" && entry.title) {
      return entry;
    }
  }

  // 旧版结构
  return (
    safeGet(decoded, "noteData.data.noteData") ||
    safeGet(decoded, "note.data") ||
    safeGet(decoded, "noteDetail.data") ||
    safeGet(decoded, "data.noteData") ||
    // 更多兜底路径
    safeGet(decoded, "note.noteDetailMap")?.[noteId]?.note ||
    safeGet(decoded, "note.noteDetailMap")?.[noteId] ||
    safeGet(decoded, "note") ||
    null
  );
}

function extractInitialStateJson(html) {
  // 取到下一个 </script>，避免对大段 JSON 做错误的非贪婪 `}` 截断
  const re = /window\.__INITIAL_STATE__\s*=\s*(.*?)<\/script>/is;
  const m = html.match(re);
  if (m?.[1]) {
    return m[1].trim();
  }
  // 兼容旧版 script 标签格式
  const legacy =
    /<script>\s*window\.__INITIAL_STATE__\s*=\s*([\s\S]*?)<\/script>/i.exec(
      html
    );
  if (legacy?.[1]) {
    return legacy[1].trim();
  }
  // 兼容单行 script 格式
  const inline =
    /<script[^>]*>\s*window\.__INITIAL_STATE__\s*=\s*([\s\S]*?)<\/script>/i.exec(
      html
    );
  return inline?.[1]?.trim() ?? null;
}

/**
 * 把第三方图片 URL 包成站内代理路径，绕过 Referer 防盗链
 * （如小红书 sns-webpic 只允许 Referer: xiaohongshu.com）。
 * 视频不代理（耗资源），仅图片走 /api/image。
 */
function proxifyImage(url) {
  if (!url) return "";
  return `/api/image?url=${encodeURIComponent(url)}`;
}

/**
 * 选取稳定可用的视频直链。
 * backupUrls 为裸直链（无短时效签名，长期有效），优先使用；
 * masterUrl 带约 30 分钟签名，仅作兜底。
 * 统一转 https，避免 https 站点下 http 直链的 mixed content 问题。
 */
async function pickStableVideoUrl(entry) {
  if (!entry || typeof entry !== "object") return null;

  const toHttps = (u) => (u ? u.replace(/^http:/i, "https:") : u);

  const candidates = [];
  if (Array.isArray(entry.backupUrls)) {
    for (const u of entry.backupUrls) {
      if (u) candidates.push(toHttps(u));
    }
  }
  if (entry.masterUrl) candidates.push(toHttps(entry.masterUrl));

  // HEAD 轻量验证可用性（部分 CDN 节点 404，如 bak-v6），取第一个可用的
  for (const u of candidates) {
    try {
      const head = await fetch(u, {
        method: "HEAD",
        signal: AbortSignal.timeout(5000),
      });
      if (head.ok) return u;
    } catch {
      /* try next */
    }
  }
  return null;
}

async function xhs(url) {
  try {
    const { html, finalUrl, loginRequired } = await fetchXhsNoteHtml(url);

    console.log("[xhs] finalUrl:", finalUrl);
    console.log("[xhs] html length:", html?.length || 0);

    // 已删除/不可见笔记：小红书会把短链重定向到 /explore 并附带 undertake_note_error
    // 参数（值如「该内容暂时无法查看」）。这是确定失败，直接明确告知已删除，
    // 不进入页面解析（此时页面里也不会有目标笔记的媒体数据）
    if (finalUrl.includes("undertake_note_error=")) {
      return output(404, DELETED_CONTENT_MSG);
    }

    // 短链被强制跳到登录页且重试真实笔记地址后仍被拦：
    // 该笔记需要登录态才能查看，明确提示而不是笼统的「数据结构不匹配」
    if (loginRequired || isLoginUrl(finalUrl)) {
      console.log("[xhs] 需要登录态，无法解析:", finalUrl);
      return output(
        403,
        "该笔记需要登录小红书后才能查看，暂无法解析，可尝试在 App 内重新分享"
      );
    }

    if (!html) {
      return output(400, "请求失败，未获取到页面内容");
    }

    // 检查是否被小红书拦截或跳转到了非笔记页
    if (
      (finalUrl.includes("xhslink.com") || finalUrl.includes("xhslink.cn")) &&
      !html.includes("__INITIAL_STATE__")
    ) {
      return output(
        400,
        "短链重定向失败，请尝试复制小红书 App 内的分享链接"
      );
    }

    if (
      !finalUrl.includes("xiaohongshu.com") &&
      !html.includes("__INITIAL_STATE__")
    ) {
      return output(
        400,
        "无法打开小红书笔记页，请确认短链有效或使用 App 分享链接"
      );
    }

    let jsonRaw = extractInitialStateJson(html);
    if (!jsonRaw) {
      // 尝试打印 HTML 片段帮助调试
      console.log("[xhs] HTML preview:", html.substring(0, 500));
      return output(400, "未找到页面数据，小红书可能更新了页面结构");
    }

    jsonRaw = jsonRaw.replace(/undefined/g, "null");

    let decoded;
    try {
      decoded = JSON.parse(jsonRaw);
    } catch (e) {
      console.log("[xhs] JSON parse error:", e.message);
      return output(400, "JSON数据解析失败");
    }

    if (!decoded || typeof decoded !== "object") {
      return output(400, "数据格式错误");
    }

    const noteData = resolveNotePayload(decoded);

    if (!noteData || typeof noteData !== "object") {
      console.log("[xhs] decoded keys:", Object.keys(decoded));
      return output(400, "数据结构不匹配，请检查链接是否为有效的小红书内容");
    }

    // 安全地构建基础数据
    const data = {
      author:
        safeGet(noteData, "user.nickName") ||
        safeGet(noteData, "user.nickname") ||
        safeGet(noteData, "user.name") ||
        "",
      authorID:
        safeGet(noteData, "user.userId") || safeGet(noteData, "user.id") || "",
      title: noteData.title || "",
      desc: noteData.desc || noteData.description || "",
      avatar:
        safeGet(noteData, "user.avatar") ||
        safeGet(noteData, "user.avatarUrl") ||
        "",
    };

    // 检查视频URL
    let videoUrl = null;
    const videoStream = safeGet(noteData, "video.media.stream");

    if (videoStream && typeof videoStream === "object") {
      // h264 优先（浏览器兼容性最好），h265 兜底；均优先取裸直链
      const h264List = videoStream.h264;
      if (Array.isArray(h264List) && h264List.length > 0 && h264List[0]) {
        videoUrl = await pickStableVideoUrl(h264List[0]);
      }
      if (!videoUrl) {
        const h265List = videoStream.h265;
        if (Array.isArray(h265List) && h265List.length > 0 && h265List[0]) {
          videoUrl = await pickStableVideoUrl(h265List[0]);
        }
      }
    }

    if (videoUrl) {
      console.log("[xhs] videoUrl:", videoUrl);
      // 视频内容
      data.cover = "";
      const imageList = noteData.imageList;
      if (Array.isArray(imageList) && imageList.length > 0 && imageList[0]) {
        const first = imageList[0];
        data.cover = proxifyImage(
          (
            first.urlDefault ||
            first.url ||
            safeGet(first, "infoList.0.url") ||
            ""
          ).replace(/^http:/i, "https:")
        );
      }
      data.url = videoUrl;
      data.type = "video";
      return output(200, "解析成功", data);
    }

    // 检查图片内容
    const imageList = noteData.imageList;
    if (Array.isArray(imageList) && imageList.length > 0) {
      const images = [];
      let cover = "";

      for (let i = 0; i < imageList.length; i++) {
        const img = imageList[i];
        if (img && typeof img === "object") {
          let imageUrl = (
            img.urlDefault ||
            img.url ||
            safeGet(img, "infoList.0.url") ||
            ""
          ).replace(/^http:/i, "https:");
          if (imageUrl) {
            images.push(proxifyImage(imageUrl));
            if (i === 0) cover = proxifyImage(imageUrl);
          }
        }
      }

      if (images.length > 0) {
        data.cover = cover;
        data.images = images;
        data.type = "image";
        return output(200, "解析成功", data);
      }
    }

    return output(404, DELETED_CONTENT_MSG);
  } catch (error) {
    logger.error("xhs parse error:", error);
    return output(500, "服务器内部错误");
  }
}

const __DEFAULT__ = xhs;


module.exports = __DEFAULT__;

});

const __router = __require("edgeone/router.js");

// process shim：源码/依赖里可能读 process.env（如 config.js 读环境变量）
if (typeof process === 'undefined') {
  globalThis.process = { env: {} };
}

const __handler = {

  async fetch(request, env, ctx) {
    if (env && typeof env === 'object') {
      globalThis.process.env = Object.assign({}, globalThis.process.env, env);
    }
    return __router.handle(request, { env: env || {} }, ctx);
  },
};

export const onRequest = async (context) => {
  const { request, env } = context;
  try {
    // 把 EdgeOne 环境变量透传进去（BILI_SESSDATA / XHS_COOKIE / REVIEW_MODE / PROXY_ALLOW_ALL 等）
    return await __handler.fetch(request, env || {});
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, code: 500, message: String((err && err.message) || err) }), {
      status: 200,
      headers: { 'content-type': 'application/json; charset=utf-8' },
    });
  }
};
