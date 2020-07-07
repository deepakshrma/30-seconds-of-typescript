---
title: isNumber
tags: type,math,beginner
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Checks if the given argument is a number.

Use `typeof` to check if a value is classified as a number primitive.
To safeguard against `NaN`, check if `val === val` (as `NaN` has a `typeof` equal to `number` and is the only value not equal to itself).

```ts
const isNumber = (val: any) => typeof val === "number" && val === val;
```

```ts
isNumber(1); // true
isNumber("1"); // false
isNumber(NaN); // false
```
