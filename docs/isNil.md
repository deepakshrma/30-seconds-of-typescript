---
title: isNil
tags: type,beginner
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![TODO](https://img.shields.io/badge///TODO-blue.svg?style=flat-square)

Returns `true` if the specified value is `null` or `undefined`, `false` otherwise.

Use the strict equality operator to check if the value of `val` is equal to `null` or `undefined`.

```js
const isNil = (val) => val === undefined || val === null;
```

```js
isNil(null); // true
isNil(undefined); // true
isNil(""); // false
```
