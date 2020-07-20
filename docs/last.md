---
title: last
tags: array,beginner
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Returns the last element in an array.

Check if `arr` is truthy and has a `length` property, use `arr.length - 1` to compute the index of the last element of the given array and return it, otherwise return `undefined`.

```ts title="typescript"
const last = (arr: any[] = []) => arr[arr.length - 1];
```

```ts title="typescript"
last([1, 2, 3]); // 3
last([]); // undefined
last([null]); // null
last(undefined); // undefined
```
