---
title: omitBy
tags: object,array,function,intermediate
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Creates an object composed of the properties the given function returns falsy for. The function is invoked with two arguments: (value, key).

Use `Object.keys(obj)` and `Array.prototype.filter()`to remove the keys for which `fn` returns a truthy value.
Use `Array.prototype.reduce()` to convert the filtered keys back to an object with the corresponding key-value pairs.

```ts
const omitBy = (obj: AnyObject, fn: Predicate) =>
  Object.keys(obj)
    .filter((k) => !fn(obj[k], k))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {} as AnyObject);
```

```ts
omitBy({ a: 1, b: "2", c: 3 }, (x: any) => typeof x === "number"); // { b: '2' }
```
