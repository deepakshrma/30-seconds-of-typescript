---
title: either
tags: function,logic,beginner
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![TODO](https://img.shields.io/badge///TODO-blue.svg?style=flat-square)

Returns `true` if at least one function returns `true` for a given set of arguments, `false` otherwise.

Use the logical or (`||`) operator on the result of calling the two functions with the supplied `args`.

```js
const either = (f, g) => (...args) => f(...args) || g(...args);
```

```js
const isEven = (num) => num % 2 === 0;
const isPositive = (num) => num > 0;
const isPositiveOrEven = either(isPositive, isEven);
isPositiveOrEven(4); // true
isPositiveOrEven(3); // true
```
