---
id: allEqual
sidebar_label: allEqual
title: AllEqual
tags: array,function,beginner
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Check if all elements in an array are equal.

Use `Array.prototype.every()` to check if all the elements of the array are the same as the first one.
Elements in the array are compared using the strict comparison operator, which does not account for `NaN` self-inequality.

```ts
const allEqual = <T extends any>(arr: T[]) =>
  arr.every((val) => val === arr[0]);
```

```ts
allEqual([1, 2, 3, 4, 5, 6]); // false
allEqual([1, 1, 1, 1]); // true
```
