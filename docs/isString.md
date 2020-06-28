---
title: isString
tags: type,string,beginner
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![TODO](https://img.shields.io/badge///TODO-blue.svg?style=flat-square)

Checks if the given argument is a string. Only works for string primitives.

Use `typeof` to check if a value is classified as a string primitive.

```js
const isString = (val) => typeof val === "string";
```

```js
isString("10"); // true
```
