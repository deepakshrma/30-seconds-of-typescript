---
title: unionWith
tags: array,function,intermediate
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Returns every element that exists in any of the two arrays once, using a provided comparator function.

Create a `Set` with all values of `a` and values in `b` for which the comparator finds no matches in `a`, using `Array.prototype.findIndex()`.

```ts title="typescript"
const unionWith = (a: any[], b: any[], comp: Predicate) =>
  Array.from(
    new Set([...a, ...b.filter((x) => a.findIndex((y) => comp(x, y)) === -1)])
  );
```

```ts title="typescript"
unionWith(
  [1, 1.2, 1.5, 3, 0],
  [1.9, 3, 0, 3.9],
  (a, b) => Math.round(a) === Math.round(b)
); // [1, 1.2, 1.5, 3, 0, 3.9]
```
