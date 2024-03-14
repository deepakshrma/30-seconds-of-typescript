---
title: flatten
tags: [array, intermediate]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "flatten" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)


[用中文] 将阵列弄平到指定的深度。

使用递归，减少 `depth` 每个深度级别为 1。

使用 `Array.prototype.reduce()` and `Array.prototype.concat()` 以合并元素或数组。
基线，用于 `depth` 等于 `1` 停止递归.
省略第二个论点， `depth` 仅将其弄平到深度 `1` (单个平坦).

```ts title="typescript"
const flatten = (arr: any[], depth = 1): any[] => {
  if (typeof Array.prototype.flat !== "undefined") return arr.flat(depth);
  return arr.reduce(
    (a, v) =>
      a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v),
    []
  );
};
```

```ts title="typescript"
flatten([1, [2], 3, 4]); // [1, 2, 3, 4]
flatten([1, [2, [3, [4, 5], 6], 7], 8], 2); // [1, 2, 3, [4, 5], 6, 7, 8]
```
