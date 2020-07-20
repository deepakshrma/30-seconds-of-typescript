---
title: tail
tags: array,beginner
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Returns all elements in an array except for the first one.

Return `Array.prototype.slice(1)` if the array's `length` is more than `1`, otherwise, return the whole array.

```ts title="typescript"
const tail = (arr: any[]) => (arr.length > 1 ? arr.slice(1) : arr);
```

```ts title="typescript"
tail([1, 2, 3]); // [2,3]
tail([1]); // [1]
```
