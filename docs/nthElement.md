---
title: nthElement
tags: array,beginner
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Returns the nth element of an array.[Curry Function]

Use `Array.prototype.slice()` to get an array containing the nth element at the first place.
If the index is out of bounds, return `undefined`.
Omit the second argument, `n`, to get the first element of the array.

```ts
const nthElement = curry(
  (n = 0, arr: any[]) => (n === -1 ? arr.slice(n) : arr.slice(n, n + 1))[0],
  2
);
```

```ts
nthElement(["a", "b", "c"], 1); // 'b'
nthElement(["a", "b", "b"], -3); // 'a'

nthElement(-1, [1, 2, 3, 4, 5]), 5;

// curry power
const third = nthElement(2);
const last = nthElement(-1);
third([1, 2, 3]); // 3
last([1, 2, 3, 4, 5]); // 5
```
