---
title: isObjectLike
tags: type,object,beginner
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![TODO](https://img.shields.io/badge///TODO-blue.svg?style=flat-square)

Checks if a value is object-like.

Check if the provided value is not `null` and its `typeof` is equal to `'object'`.

```js
const isObjectLike = (val) => val !== null && typeof val === "object";
```

```js
isObjectLike({}); // true
isObjectLike([1, 2, 3]); // true
isObjectLike((x) => x); // false
isObjectLike(null); // false
```
