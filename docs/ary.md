---
title: ary
tags: function,intermediate
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Creates a function that accepts up to `n` arguments, ignoring any additional arguments.

Call the provided function, `fn`, with up to `n` arguments, using `Array.prototype.slice(0, n)` and the spread operator (`...`).

```ts title="typescript"
const ary = <T = any>(fn: (...args: T[]) => any, n: number) => (...args: T[]) =>
  fn(...args.slice(0, n));
```

```ts title="typescript"
const firstTwoMax = ary(Math.max, 2);
[[2, 6, 12], [6, 4, 8], [10]].map((x) => firstTwoMax(...x)); // [6, 6, 10]
```
