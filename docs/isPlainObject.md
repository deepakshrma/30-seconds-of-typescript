---
title: isPlainObject
tags: type,object,intermediate
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Checks if the provided value is an object created by the Object constructor.

Check if the provided value is truthy, use `typeof` to check if it is an object and `Object.constructor` to make sure the constructor is equal to `Object`.

```ts
const isPlainObject = (val: any) =>
  !!val && typeof val === "object" && val.constructor === Object;
```

```ts
isPlainObject({ a: 1 }); // true
isPlainObject(new Map()); // false
```
