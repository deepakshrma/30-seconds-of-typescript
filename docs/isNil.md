---
title: isNil
tags: type,beginner
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Returns `true` if the specified value is `null` or `undefined`, `false` otherwise.

Use the strict equality operator to check if the value of `val` is equal to `null` or `undefined`.

```ts title="typescript"
const isNil = (val) => val === undefined || val === null;
```

```ts title="typescript"
isNil(null); // true
isNil(undefined); // true
isNil(""); // false
```
