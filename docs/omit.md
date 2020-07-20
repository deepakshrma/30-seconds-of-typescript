---
title: omit
tags: object,array,intermediate
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Omits the key-value pairs corresponding to the given keys from an object.

Use `Object.keys(obj)`, `Array.prototype.filter()` and `Array.prototype.includes()` to remove the provided keys.
Use `Array.prototype.reduce()` to convert the filtered keys back to an object with the corresponding key-value pairs.

```ts title="typescript"
const omit = (obj: AnyObject, arr: string[]) =>
  Object.keys(obj)
    .filter((k) => !arr.includes(k))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {} as AnyObject);
```

```ts title="typescript"
omit({ a: 1, b: "2", c: 3 }, ["b"]); // { 'a': 1, 'c': 3 }
```
