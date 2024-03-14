---
title: flattenObject [羊毛 Object]
tags: [object, recursion, intermediate]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "flattenObject" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![TODO](https://img.shields.io/badge///TODO-blue.svg?style=flat-square)

用键的路径弄平一个对象。

使用递归。
使用 `Object.keys(obj)` 与 `Array.prototype.reduce()` 将每个叶子节点转换为平坦的路径节点。
如果密钥的值是对象，则该函数用适当的 `prefix` 使用 `Object.assign()`.
否则，它将适当的前缀键值对添加到累加器对象中。
您应该始终省略第二个论点， `prefix`, 除非您希望每个键都有一个前缀。

```js
const flattenObject = (obj, prefix = "") =>
  Object.keys(obj).reduce((acc, k) => {
    const pre = prefix.length ? prefix + "." : "";
    if (typeof obj[k] === "object")
      Object.assign(acc, flattenObject(obj[k], pre + k));
    else acc[pre + k] = obj[k];
    return acc;
  }, {});
```

```js
flattenObject({ a: { b: { c: 1 } }, d: 1 }); // { 'a.b.c': 1, d: 1 }
```
