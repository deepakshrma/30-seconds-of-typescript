---
id: castArray
sidebar_label: castArray
title: castArray
tags: type,array,beginner
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Casts the provided value as an array if it's not one.

Use `Array.prototype.isArray()` to determine if `val` is an array and return it as-is or encapsulated in an array accordingly.

```ts
export const castArray = (val: any): any[] =>
  Array.isArray(val) ? val : [val];
```

```ts
castArray("foo"); // ['foo']
castArray([1]); // [1]
```
