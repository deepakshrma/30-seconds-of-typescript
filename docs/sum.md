---
title: sum
tags: math,array,beginner
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Returns the sum of two or more numbers/arrays.

Use `Array.prototype.reduce()` to add each value to an accumulator, initialized with a value of `0`.

```ts title="typescript"
const sum = (...arr: number[]) => [...arr].reduce((acc, val) => acc + val, 0);
```

```ts title="typescript"
sum(1, 2, 3, 4); // 10
sum(...[1, 2, 3, 4]); // 10
```
