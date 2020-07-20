---
title: intersectionWith
tags: array,function,intermediate
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Returns a list of elements that exist in both arrays, using a provided comparator function.

Use `Array.prototype.filter()` and `Array.prototype.findIndex()` in combination with the provided comparator to determine intersecting values.

```ts title="typescript"
const intersectionWith = (
  a: any[],
  b: any[],
  comp: (a: any, b: any) => boolean
) => a.filter((x) => b.findIndex((y) => comp(x, y)) !== -1);
```

```ts title="typescript"
intersectionWith(
  [1, 1.2, 1.5, 3, 0],
  [1.9, 3, 0, 3.9],
  (a, b) => Math.round(a) === Math.round(b)
); // [1.5, 3, 0]
```
