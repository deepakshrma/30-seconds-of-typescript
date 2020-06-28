---
title: isLowerCase
tags: string,beginner
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![TODO](https://img.shields.io/badge///TODO-blue.svg?style=flat-square)

Checks if a string is lower case.

Convert the given string to lower case, using `String.toLowerCase()` and compare it to the original.

```js
const isLowerCase = (str) => str === str.toLowerCase();
```

```js
isLowerCase("abc"); // true
isLowerCase("a3@$"); // true
isLowerCase("Ab4"); // false
```
