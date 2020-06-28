---
title: isPlainObject
tags: type,object,intermediate
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![TODO](https://img.shields.io/badge///TODO-blue.svg?style=flat-square)

Checks if the provided value is an object created by the Object constructor.

Check if the provided value is truthy, use `typeof` to check if it is an object and `Object.constructor` to make sure the constructor is equal to `Object`.

```js
const isPlainObject = (val) =>
  !!val && typeof val === "object" && val.constructor === Object;
```

```js
isPlainObject({ a: 1 }); // true
isPlainObject(new Map()); // false
```
