---
title: isObject
tags: type,object,beginner
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Returns a boolean determining if the passed value is an object or not.

Uses the `Object` constructor to create an object wrapper for the given value.
If the value is `null` or `undefined`, create and return an empty object. Οtherwise, return an object of a type that corresponds to the given value.

```ts
const isObject = (obj) => obj === Object(obj);
```

```ts
isObject([1, 2, 3, 4]); // true
isObject([]); // true
isObject(["Hello!"]); // true
isObject({ a: 1 }); // true
isObject({}); // true
isObject(true); // false
```
