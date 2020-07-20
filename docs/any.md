---
title: any
tags: array,function,beginner
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Returns `true` if the provided predicate function returns `true` for at least one element in a collection, `false` otherwise.

Use `Array.prototype.some()` to test if any elements in the collection return `true` based on `fn`.
Omit the second argument, `fn`, to use `Boolean` as a default.

```ts title="typescript"
const any = <T = any>(arr: T[], fn: (t: T) => boolean = Boolean) =>
  arr.some(fn);
```

```ts title="typescript"
any([0, 1, 2, 0], (x) => x >= 2); // true
any([0, 0, 1, 0]); // true
```
