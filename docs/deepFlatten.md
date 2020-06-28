---
title: deepFlatten
tags: array,recursion,intermediate
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Deep flattens an array.

Use recursion.[polyfill for `Array.prototype.flat`]
Use `Array.prototype.concat()` with an empty array (`[]`) and the spread operator (`...`) to flatten an array.
Recursively flatten each element that is an array.

```ts
const deepFlatten = (arr: any[]): any[] => {
  if (typeof Array.prototype.flat !== "undefined") return arr.flat(Infinity);
  return [].concat(
    ...arr.map((v: any) => (Array.isArray(v) ? deepFlatten(v) : v))
  );
};
```

```ts
deepFlatten([1, [2], [[3], 4], 5]); // [1, 2, 3, 4, 5]
deepFlatten([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```
