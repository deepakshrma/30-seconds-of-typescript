---
title: mapObject
tags: array,object,intermediate
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Maps the values of an array to an object using a function, where the key-value pairs consist of the original value as the key and the result of the function as the value.

Use `Array.prototype.reduce()` to apply `fn` to each element in `arr` and combine the results into an object.
Use `el` as the key for each property and the result of `fn` as the value.

```ts title="typescript"
const mapObject = <T = any>(arr: T[], fn: MapFunc<T>) =>
  arr.reduce((acc, el, i) => {
    acc[el] = fn(el, i, arr);
    return acc;
  }, {} as any);
```

```ts title="typescript"
mapObject([1, 2, 3], (a) => a * a); // { 1: 1, 2: 4, 3: 9 }
```
