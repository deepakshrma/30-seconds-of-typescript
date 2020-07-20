---
title: pickBy
tags: object,array,function,intermediate
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Creates an object composed of the properties the given function returns truthy for. The function is invoked with two arguments: (value, key).

Use `Object.keys(obj)` and `Array.prototype.filter()`to remove the keys for which `fn` returns a falsy value.
Use `Array.prototype.reduce()` to convert the filtered keys back to an object with the corresponding key-value pairs.

```ts title="typescript"
const pickBy = (obj: AnyObject, fn: Function) =>
  Object.keys(obj)
    .filter((k) => fn(obj[k], k))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {} as AnyObject);
```

```ts title="typescript"
pickBy({ a: 1, b: "2", c: 3 }, (x) => typeof x === "number"); // { 'a': 1, 'c': 3 }
```
