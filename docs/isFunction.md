---
title: isFunction
tags: type,function,beginner
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![TODO](https://img.shields.io/badge///TODO-blue.svg?style=flat-square)

Checks if the given argument is a function.

Use `typeof` to check if a value is classified as a function primitive.

```js
const isFunction = (val) => typeof val === "function";
```

```js
isFunction("x"); // false
isFunction((x) => x); // true
```
