---
title: isUpperCase
tags: string,beginner
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![TODO](https://img.shields.io/badge///TODO-blue.svg?style=flat-square)

Checks if a string is upper case.

Convert the given string to upper case, using `String.prototype.toUpperCase()` and compare it to the original.

```js
const isUpperCase = (str) => str === str.toUpperCase();
```

```js
isUpperCase("ABC"); // true
isUpperCase("A3@$"); // true
isUpperCase("aB4"); // false
```
