---
title: isLowerCase
tags: string,beginner
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Checks if a string is lower case.

Convert the given string to lower case, using `String.toLowerCase()` and compare it to the original.

```ts title="typescript"
const isLowerCase = (str) => str === str.toLowerCase();
```

```ts title="typescript"
isLowerCase("abc"); // true
isLowerCase("a3@$"); // true
isLowerCase("Ab4"); // false
```
