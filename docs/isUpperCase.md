---
title: isUpperCase
tags: string,beginner
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

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
