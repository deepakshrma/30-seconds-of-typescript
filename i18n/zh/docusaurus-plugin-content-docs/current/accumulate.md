---
title: accumulate [积累]
tags: [math, array, beginner]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "accumulate" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

返回部分和的数组。

使用 `Array.prototype.reduce()、Array.prototype.slice(-1)` 和一元 `+` 运算符将每个值添加到包含前一个总和的一元数组中。

```ts title="typescript"
const accumulate = (...nums: number[]): number[] =>
  nums.reduce((acc: number[], n) => [...acc, n + +acc.slice(-1)], []);
```

```ts title="typescript"
accumulate(1, 2, 3, 4); // [1, 3, 6, 10]
accumulate(...[1, 2, 3, 4]); // [1, 3, 6, 10]
```
