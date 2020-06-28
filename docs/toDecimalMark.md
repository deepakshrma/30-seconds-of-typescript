---
title: toDecimalMark
tags: math,beginner
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![TODO](https://img.shields.io/badge///TODO-blue.svg?style=flat-square)

Converts a number to a decimal mark formatted string.

Use `Number.prototype.toLocaleString()` to convert the numbre to decimal mark format.

```js
const toDecimalMark = (num) => num.toLocaleString("en-US");
```

```js
toDecimalMark(12305030388.9087); // "12,305,030,388.909"
```
