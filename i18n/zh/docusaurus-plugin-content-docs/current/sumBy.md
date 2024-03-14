---
title: sumBy [总和]
tags: [math, array, function, intermediate]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "sumBy" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

[用中文]在使用提供的函数将每个元素映射到值之后，返回数组的总和。

使用 `Array.prototype.map()` 将每个元素映射到返回的值 `fn`, `Array.prototype.reduce()` 要将每个值添加到一个累加器中，以一个值初始化的值 `0`.

```ts title="typescript"
const sumBy = <T = AnyObject>(arr: T[], fn: string | ((a: T) => number)) => {
  return arr
    .map(typeof fn === "function" ? fn : (val: AnyObject) => val[fn])
    .reduce((acc, val) => acc + val, 0);
};
```

```ts title="typescript"
sumBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], (o) => o.n); // 20
sumBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], "n"); // 20
```
