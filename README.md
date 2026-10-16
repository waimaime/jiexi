# jiexi — 去水印解析服务（EdgeOne Pages Functions）

支持 **抖音 / 哔哩哔哩（本地解析）** 与 **小红书 / 快手等（回退到 qsy.kkkkm.com）** 的视频/图片去水印解析接口，部署在腾讯云 **EdgeOne Pages 边缘函数**。

## 接口

| 方法 | 路径 | 说明 |
|---|---|---|
| GET/POST/PUT | `/api/parse` | 解析分享链接，返回视频/图片直链 |
| GET/POST/PUT | `/api/dewatermark/parseurl` | 同上（兼容竞品接口风格） |
| GET | `/api/version` | 版本信息 |
| GET | `/api/proxy?url=` | 媒体代理下载（白名单 + Referer + Range） |
| GET | `/` | 健康检查 |

示例：

```
curl "https://<你的域名>/api/parse?url=<分享链接或口令>"
```

返回字段：`code`、`data.title`、`data.url`、`data.cover`、`data.vs[]`（多清晰度）、`data.audioUrl`、`data.e`（过期时间戳 ms）、`data._source`（local / fallback）。

## 环境变量（EdgeOne 项目 → 环境变量，改完需重新部署）

| 变量 | 说明 |
|---|---|
| `REVIEW_MODE` | 审核模式开关。`true` 时 `/api/config` 返回 `reviewMode: true`，小程序启动直接进「涂抹去水印」页，不显示解析首页；审核通过后改 `false`，**无需发新版** |
| `XHS_COOKIE` | 小红书登录 Cookie（`web_session=xxx`），解析需登录的笔记时使用 |
| `BILI_SESSDATA` | B站登录态，配置后可解锁 1080P / 4K（未登录最高 720P）。注意：只提升清晰度，去不掉 UP 主烧录的水印 |
| `PROXY_ALLOW_ALL` | **默认 `true`（不校验域名，任何 http/https 都可代理）**。想恢复白名单校验设成 `false` |
| `PROXY_EXTRA_HOSTS` | 逗号分隔的额外放行域名后缀，临时补漏用，例：`foo-cdn.com,bar.video`，无需改代码 |

### 代理白名单覆盖范围

默认（`PROXY_ALLOW_ALL` 未设或为 `true`）**不校验域名**，任何 http/https 都可走 `/api/proxy`，不会再出现「该域名不在代理白名单内」。设 `PROXY_ALLOW_ALL=false` 可恢复下列白名单校验：

字节系（抖音/西瓜/火山/今日头条）、快手（kwimgs / yximgs / gifshow / chenzhongtech）、小红书、B 站（bilibili / hdslb / akamaized / bfsimg）、微博 / 秒拍、腾讯系（微视/视频号）、皮皮虾 / 皮皮搞笑、最右、美拍、全民K歌、AcFun、好看视频、梨视频、新片场、TikTok、Twitter/X，以及通用对象存储（qiniu / aliyun / cloudfront / huaweicloud / cloudfront 等）。

**SSRF 防护**（`server/lib/proxy-guard.js`）：无论开关如何，`127.0.0.1` / `localhost` / `10.*` / `192.168.*` / `172.16-31.*` / `169.254.*` / IPv6 等内网地址一律拦截。

排查代理 403 用 `GET /api/debug/proxy?url=<媒体地址>`，会返回 `{ allowed, privateBlocked, allowAll, extraHosts, referer }`。

## 兜底源（多源并发）

主服务本地解析不出来时，会**并发**请求下列兜底源，取最先成功的那个（响应里 `_via` 标明实际用的源）：

```js
// edgeone/router.js
const FALLBACK_BASES = [
  'https://qsy.kkkkm.com',
];
```

新增/调整兜底源只需改这个数组。某源超时或报错会自动跳过（每个源 20s 超时）。

## 目录结构

```
edgeone.json                      # 部署清单（输出目录 + 路由重写）
public/index.html                 # 静态落地页（输出目录）
node-functions/index.js           # 根路由 「/」
node-functions/[[...path]].js     # 全捕获路由 「/*」（解析 / 代理接口）
```

## 部署（EdgeOne Pages / Makers）

1. 控制台 → **Makers / 项目** → 创建项目 → 选择 GitHub 仓库 `waimaime/jiexi`。
2. 配置项：
   - 框架预设：**Other**
   - 根目录：`/`
   - **输出目录：`public`**
   - **构建命令：留空**（仓库内 `npm run build` 为空操作，不会失败）
   - **安装命令：留空**
3. 点「开始部署」，`edgeone.json` 会自动把 `/` 和 `/*` 重写到 Node Functions。

> 说明：EdgeOne Pages 与 Cloudflare Pages 的 `functions/` 约定不同，
> 官方要求 Node 函数放在 `./node-functions`、边缘函数放在 `./edge-functions`。

## 说明

- B站解析需要 WBI 签名（MD5），已在构建时注入纯 JS 实现。
- `X-Identity` 签名头默认不强制（`SIGN_REQUIRED=true` 可开启校验）。
- 代理访问控制（白名单 / SSRF / 开关）见 `server/config.js` 与 `server/lib/proxy-guard.js`。
