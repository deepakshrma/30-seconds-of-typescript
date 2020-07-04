---
title: intersectionBy
tags: array,function,intermediate
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Returns a list of elements that exist in both arrays, after applying the provided function to each array element of both.

Create a `Set` by applying `fn` to all elements in `b`, then use `Array.prototype.filter()` on `a` to only keep elements, which produce values contained in `b` when `fn` is applied to them.

```ts
export type MapFunc<T = any> = (val: T, index?: number, arr?: T[]) => T;
const intersectionBy = (a: any[], b: any[], fn: MapFunc) => {
  const s = new Set(b.map(fn));
  return [...new Set(a)].filter((x) => s.has(fn(x)));
};
```

```ts
intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [2.1]
```
