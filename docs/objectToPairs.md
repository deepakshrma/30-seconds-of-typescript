---
title: objectToPairs
tags: object,array,beginner
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![TODO](https://img.shields.io/badge///TODO-blue.svg?style=flat-square)

Creates an array of key-value pair arrays from an object.

Use `Object.entries()` to get an array of key-value pair arrays from the given object.

```js
const objectToPairs = (obj) => Object.entries(obj);
```

```js
objectToPairs({ a: 1, b: 2 }); // [ ['a', 1], ['b', 2] ]
```
