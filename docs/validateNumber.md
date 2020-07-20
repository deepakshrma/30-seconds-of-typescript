---
title: validateNumber
tags: math,intermediate
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Returns `true` if the given value is a number, `false` otherwise.

Use `!isNaN()` in combination with `parseFloat()` to check if the argument is a number.
Use `isFinite()` to check if the number is finite.
Use `Number()` to check if the coercion holds.

```ts title="typescript"
const validateNumber = (n: number | string) =>
  !isNaN(parseFloat(n)) && isFinite(n) && Number(n) == n;
```

```ts title="typescript"
validateNumber("10"); // true
```
