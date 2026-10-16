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

## 部署（EdgeOne Pages）

1. 在 EdgeOne 控制台 → **Makers / 项目** → 创建项目 → 选择本 GitHub 仓库（`waimaime/jiexi`）。
2. 配置：
   - 框架预设：**Other**
   - 根目录：`/`
   - **输出目录：`public`**
   - **构建命令：留空**
   - **安装命令：留空**
3. 入口为 `functions/[[default]].js`（EdgeOne Pages Functions 约定的全捕获路由），自动识别，无需额外构建。

## 本地开发 / 构建

`src/build.js` 会将 `src/router.js`（及其依赖）打包并注入纯 JS MD5（EdgeOne 无 node:crypto），输出 `dist/index.js`：

```bash
npm run build
node test/test-dist.mjs   # 16 项冒烟测试
```

`functions/[[default]].js` 为构建产物的部署副本，修改 `src/` 后需重新构建并同步。

## 说明

- B站解析需要 WBI 签名（MD5），已在构建时注入纯 JS 实现。
- `X-Identity` 签名头默认不强制（`SIGN_REQUIRED=true` 可开启校验）。
- 代理白名单见 `src/router.js` 中的 `handleProxy`（含 B站 CDN 等）。
