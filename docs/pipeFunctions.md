---
title: pipeFunctions
tags: function,intermediate
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Performs left-to-right function composition.

Use `Array.prototype.reduce()` with the spread operator (`...`) to perform left-to-right function composition.
The first (leftmost) function can accept one or more arguments; the remaining functions must be unary.

```ts title="typescript"
const pipeFunctions = (...fns) =>
  fns.reduce((f, g) => (...args) => g(f(...args)));
```

```ts title="typescript"
const add5 = (x) => x + 5;
const multiply = (x, y) => x * y;
const multiplyAndAdd5 = pipeFunctions(multiply, add5);
multiplyAndAdd5(5, 2); // 15
```
