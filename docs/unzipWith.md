---
title: unzipWith
tags: array,function,advanced
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "unzipWith" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Creates an array of elements, ungrouping the elements in an array produced by [zip](#zip) and applying the provided function.

Note: Provide size to make calculation faster

Use `Math.max.apply()` to get the longest subarray in the array, `Array.prototype.map()` to make each element an array.
Use `Array.prototype.reduce()` and `Array.prototype.forEach()` to map grouped values to individual arrays.
Use `Array.prototype.map()` and the spread operator (`...`) to apply `fn` to each individual group of elements.

```js
const unzipWith = (arr: any[], fn: Function, size = 0) =>
  arr
    .reduce(
      (acc, val) => (val.forEach((v: any, i: number) => acc[i].push(v)), acc),
      Array.from({
        length: size || Math.max(...arr.map((x) => x.length)),
      }).map((x) => [])
    )
    .map((val: any) => fn(...val));
```

```ts title="typescript"
unzipWith(
  [
    [1, 10, 100],
    [2, 20, 200],
  ],
  (...args) => args.reduce((acc, v) => acc + v, 0)
); // [3, 30, 300]
unzipWith(
  [
    [1, 10, 100],
    [2, 20, 200],
  ],
  (...args) => args.reduce((acc, v) => acc + v, 0),
  3
); // [3, 30, 300]
```
