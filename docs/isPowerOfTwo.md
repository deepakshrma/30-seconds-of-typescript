---
title: isPowerOfTwo
tags: math,beginner
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![TODO](https://img.shields.io/badge///TODO-blue.svg?style=flat-square)

Returns `true` if the given number is a power of `2`, `false` otherwise.

Use the bitwise binary AND operator (`&`) to determine if `n` is a power of `2`.
Additionally, check that `n` is not falsy.

```js
const isPowerOfTwo = (n) => !!n && (n & (n - 1)) == 0;
```

```js
isPowerOfTwo(0); // false
isPowerOfTwo(1); // true
isPowerOfTwo(8); // true
```
