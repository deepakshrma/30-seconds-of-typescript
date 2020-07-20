---
title: getType
tags: type,beginner
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Returns the native type of a value.

Return `'undefined'` or `'null'` if the value is `undefined` or `null`.
Otherwise, use `Object.prototype.constructor.name` to get the name of the constructor.

```ts title="typescript"
const getType = (v: any) =>
  v === undefined
    ? "undefined"
    : v === null
    ? "null"
    : v.constructor.name.toLowerCase();
```

```ts title="typescript"
getType(new Set([1, 2, 3])); // 'set'
getType(null); // 'null'
getType(Deno), "object";
```
