---
title: accumulate
tags: math,array,beginner
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Returns an array of partial sums.

Use `Array.prototype.reduce()`, `Array.prototype.slice(-1)` and the unary `+` operator to add each value to the unary array containing the previous sum.

```ts title="typescript"
const accumulate = (...nums: number[]): number[] =>
  nums.reduce((acc: number[], n) => [...acc, n + +acc.slice(-1)], []);
```

```ts title="typescript"
accumulate(1, 2, 3, 4); // [1, 3, 6, 10]
accumulate(...[1, 2, 3, 4]); // [1, 3, 6, 10]
```
