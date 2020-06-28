---
title: objectFromPairs
tags: object,array,beginner
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![TODO](https://img.shields.io/badge///TODO-blue.svg?style=flat-square)

Creates an object from the given key-value pairs.

Use `Array.prototype.reduce()` to create and combine key-value pairs.

```js
const objectFromPairs = (arr) =>
  arr.reduce((a, [key, val]) => ((a[key] = val), a), {});
```

```js
objectFromPairs([
  ["a", 1],
  ["b", 2],
]); // {a: 1, b: 2}
```
