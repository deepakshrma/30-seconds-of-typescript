---
title: isBoolean
tags: type,beginner
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![TODO](https://img.shields.io/badge///TODO-blue.svg?style=flat-square)

Checks if the given argument is a native boolean element.

Use `typeof` to check if a value is classified as a boolean primitive.

```js
const isBoolean = (val) => typeof val === "boolean";
```

```js
isBoolean(null); // false
isBoolean(false); // true
```
