---
title: composeRight
tags: function,intermediate
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Performs left-to-right function composition.

Use `Array.prototype.reduce()` to perform left-to-right function composition.
The first (leftmost) function can accept one or more arguments; the remaining functions must be unary.

```ts
const composeRight = (...fns) =>
  fns.reduce((f, g) => (...args) => g(f(...args)));
```

```ts
const multiply = (x: number, y: number) => x * y;
const add5 = (x: number) => x + 5;
const multiplyAndAdd5 = compose(multiply, add5);
multiplyAndAdd5(5, 2); // 15
```

**Complex Example- Return with tuple:**

```ts
const multiply = (x: number, y: number) => x * y; // 5* 2 = 10
const add3 = (x: number) => [x + 3, 3]; // [10+3, 3] = [13, 3]
const add = (x: number, y: number) => x + y; // 13 + 3 = 16
const multiplyAndAdd3 = composeRight(multiply, add3, add);
assertEquals(multiplyAndAdd3(5, 2), 16);
```
