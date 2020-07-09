---
title: maxN
tags: array,math,beginner
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Returns the `n` maximum elements from the provided array.
If `n` is greater than or equal to the provided array's length, then return the original array (sorted in descending order).
The default order for sorting is `desc`, pass `-1` for `asc`

Use `Array.prototype.sort()` combined with the spread operator (`...`) to create a shallow clone of the array and sort it in descending order.
Use `Array.prototype.slice()` to get the specified number of elements.
Omit the second argument, `n`, to get a one-element array.

```ts
type SortOrder = 1 | -1;
const maxN = (arr: any[], n = 1, order: SortOrder = 1) =>
  [...arr].sort((a, b) => order * (b - a)).slice(0, n);
```

```ts
maxN([1, 2, 3]); // [3]
maxN([1, 2, 3], 2); // [3,2]
maxN([1, 2, 3], 2, -1); // [1,2]
maxN([1, 2, 3], 1, -1)[0]; // 1
```
