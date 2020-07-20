---
title: takeWhile
tags: array,function,intermediate
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Removes elements in an array until the passed function returns `true`. Returns the removed elements.

Loop through the array, using a `for...of` loop over `Array.prototype.entries()` until the returned value from the function is `true`.
Return the removed elements, using `Array.prototype.slice()`.

```ts title="typescript"
const takeWhile = (arr: any[], func: Predicate) =>
  arr.reduce((acc, el) => (func(el) ? acc : acc.concat(el)), []);
```

```ts title="typescript"
takeWhile([1, 2, 3, 4], (n) => n >= 3); // [1, 2]
```
