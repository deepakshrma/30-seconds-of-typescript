---
title: unionBy
tags: array,function,intermediate
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Returns every element that exists in any of the two arrays once, after applying the provided function to each array element of both.

Create a `Set` by applying all `fn` to all values of `a`.
Create a `Set` from `a` and all elements in `b` whose value, after applying `fn` does not match a value in the previously created set.
Return the last set converted to an array.

```ts title="typescript"
const unionBy = (a: any[], b: any[], fn: MapFunc) => {
  const s = new Set(a.map(fn));
  return Array.from(new Set([...a, ...b.filter((x) => !s.has(fn(x)))]));
};
```

```ts title="typescript"
unionBy([2.1], [1.2, 2.3], Math.floor); // [2.1, 1.2]
```
