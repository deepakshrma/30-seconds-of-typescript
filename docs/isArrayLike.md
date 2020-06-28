---
title: isArrayLike
tags: type,array,intermediate
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![TODO](https://img.shields.io/badge///TODO-blue.svg?style=flat-square)

Checks if the provided argument is array-like (i.e. is iterable).

Check if the provided argument is not `null` and that its `Symbol.iterator` property is a function.

```js
const isArrayLike = (obj) =>
  obj != null && typeof obj[Symbol.iterator] === "function";
```

```js
isArrayLike([1, 2, 3]); // true
isArrayLike(document.querySelectorAll(".className")); // true
isArrayLike("abc"); // true
isArrayLike(null); // false
```
