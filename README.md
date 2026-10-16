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
- 代理白名单见 `src/router.js` 中的 `handleProxy`（含 B站 CDN 等）。
