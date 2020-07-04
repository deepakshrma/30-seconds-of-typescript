---
title: intersection
tags: array,math,intermediate
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Returns a list of elements that exist in both arrays.

Create a `Set` from `b`, then use `Array.prototype.filter()` on `a` to only keep values contained in `b`.

```ts
const intersection = (a: any[], b: any[]) => {
  const s = new Set(b);
  return [...new Set(a)].filter((x) => s.has(x));
};
```

```ts
intersection([1, 2, 3], [4, 3, 2]); // [2, 3]
```
