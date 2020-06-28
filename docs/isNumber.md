---
title: isNumber
tags: type,math,beginner
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![TODO](https://img.shields.io/badge///TODO-blue.svg?style=flat-square)

Checks if the given argument is a number.

Use `typeof` to check if a value is classified as a number primitive.
To safeguard against `NaN`, check if `val === val` (as `NaN` has a `typeof` equal to `number` and is the only value not equal to itself).

```js
const isNumber = (val) => typeof val === "number" && val === val;
```

```js
isNumber(1); // true
isNumber("1"); // false
isNumber(NaN); // false
```
