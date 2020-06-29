---
title: filterNonUniqueBy
tags: array,function,intermediate
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Filters out the non-unique values in an array, based on a provided comparator function.

Use `Array.prototype.filter()` and `Array.prototype.every()` for an array containing only the unique values, based on the comparator function, `fn`.
The comparator function takes four arguments: the values of the two elements being compared and their indexes.

```ts
const filterNonUniqueBy = <T = any>(
  arr: T[],
  fn: (obj1: T, obj2: T, index1: number, index2: number) => any
) => arr.filter((v, i) => arr.every((x, j) => (i === j) === fn(v, x, i, j)));
```

```ts
filterNonUniqueBy(
  [
    { id: 0, value: "a" },
    { id: 1, value: "b" },
    { id: 2, value: "c" },
    { id: 1, value: "d" },
    { id: 0, value: "e" },
  ],
  (a, b) => a.id == b.id
); // [ { id: 2, value: 'c' } ]
```
