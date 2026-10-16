'use strict';

/**
 * EdgeOne 打包器：把 edgeone/router.js 及其依赖打成单文件边缘函数。
 *
 * 与 esa/build.js 的区别：
 *   1. 自动递归收集依赖（只打包真正用到的模块，文件更小）；
 *   2. 注入纯 JS 的 MD5 实现 —— EdgeOne 没有 node:crypto，
 *      而 B站 WBI 签名必须有真 MD5，否则 B站解析会失败；
 *   3. 输出 ESM（export default { fetch }），符合 EdgeOne 边缘函数规范。
 *
 * 用法：node edgeone/build.js  → 产出 edgeone/dist/index.js
 */

const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.resolve(__dirname, '..');
const ENTRY = 'edgeone/router.js';
const OUT = path.join(__dirname, 'dist', 'index.js');

/* ---------------- 依赖收集 ---------------- */

function normalize(p) {
  const out = [];
  p.split('/').forEach((seg) => {
    if (!seg || seg === '.') return;
    if (seg === '..') out.pop();
    else out.push(seg);
  });
  return out.join('/');
}

function resolveFile(fromFile, request) {
  const base = normalize(path.posix.dirname(fromFile) + '/' + request);
  const candidates = [base, base + '.js', base + '/index.js'];
  for (const c of candidates) {
    if (fs.existsSync(path.join(ROOT, c))) return c;
  }
  return null;
}

function collect(entry, seen = new Set()) {
  if (seen.has(entry)) return seen;
  seen.add(entry);
  const src = fs.readFileSync(path.join(ROOT, entry), 'utf8');
  const requests = [...src.matchAll(/require\(\s*['"]([^'"]+)['"]\s*\)/g)].map((m) => m[1]);
  requests.forEach((req) => {
    if (!req.startsWith('.')) return; // node 内置模块，走 shim
    const target = resolveFile(entry, req);
    if (target) collect(target, seen);
  });
  return seen;
}

const modules = [...collect(ENTRY)];
console.log(`收集到 ${modules.length} 个模块：`);
modules.forEach((m) => console.log('  -', m));

/* ---------------- 运行时垫片（含纯 JS MD5） ---------------- */

const RUNTIME = `const __modules = {};
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
`;

/* ---------------- 组装输出 ---------------- */

function wrapModule(id, code) {
  const safeId = JSON.stringify(id);
  return `__define(${safeId}, function (module, exports, require) {\n${code}\n});\n`;
}

let out = '';
out += '/* eslint-disable */\n';
out += '/**\n * 本文件由 edgeone/build.js 自动生成，请勿手动修改。\n * 生成方式：node edgeone/build.js\n */\n';
out += RUNTIME + '\n';
modules.forEach((m) => {
  const code = fs.readFileSync(path.join(ROOT, m), 'utf8');
  out += wrapModule(m, code);
});

out += `
const __router = __require(${JSON.stringify(ENTRY)});

// process shim：源码/依赖里可能读 process.env（如 config.js 读环境变量）
if (typeof process === 'undefined') {
  globalThis.process = { env: {} };
}

export default {
  async fetch(request, env, ctx) {
    if (env && typeof env === 'object') {
      globalThis.process.env = Object.assign({}, globalThis.process.env, env);
    }
    return __router.handle(request, { env: env || {} }, ctx);
  },
};
`;

fs.mkdirSync(path.join(__dirname, 'dist'), { recursive: true });
fs.writeFileSync(OUT, out, 'utf8');

const sizeKb = (fs.statSync(OUT).size / 1024).toFixed(1);
console.log(`\n已生成 edgeone/dist/index.js（${sizeKb} KB）`);
