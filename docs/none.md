---
title: none
tags: array,function,beginner
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Returns `true` if the provided predicate function returns `false` for all elements in a collection, `false` otherwise.

Use `Array.prototype.some()` to test if any elements in the collection return `true` based on `fn`.
Omit the second argument, `fn`, to use `Boolean` as a default.

```ts
const none = (arr: any[], fn: Predicate<any> = Boolean) => !arr.some(fn);
```

```ts
none([0, 1, 3, 0], (x) => x == 2); // true
none([0, 0, 0]); // true
```
