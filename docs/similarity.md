---
title: similarity
tags: array,math,beginner
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![TODO](https://img.shields.io/badge///TODO-blue.svg?style=flat-square)

Returns an array of elements that appear in both arrays.

Use `Array.prototype.filter()` to remove values that are not part of `values`, determined using `Array.prototype.includes()`.

```js
const similarity = (arr, values) => arr.filter((v) => values.includes(v));
```

```js
similarity([1, 2, 3], [1, 2, 4]); // [1, 2]
```
