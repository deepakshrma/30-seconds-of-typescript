---
title: map
tags: array,function,beginner
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Creates a new map with the results of calling a provided function on every value in the calling function.

Use `Array.isArray()` to detect array, else destructure array like data(string).
Use `Array.prototype.map()` to map array of data.

```ts
interface IIterator<T = any> {
  [Symbol.iterator](): IterableIterator<T>;
}
const map = <T = any>(array: IIterator, fn: MapFunc<T>) => {
  const chars = Array.isArray(array) ? array : [...array];
  return chars.map((c, i) => fn(c, i, chars));
};
```

```ts
// map array of chars
map("lorem ipsum", (c) => c.toUpperCase()).join("")) // "LOREM IPSUM"

// map array of numbers
map([1, 2, 3, 4], (c) => c * c)); // [1, 4, 9, 16]
```
