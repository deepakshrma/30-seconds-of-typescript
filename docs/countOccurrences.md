---
id: countOccurrences
sidebar_label: countOccurrences
title: countOccurrences
tags: array,intermediate
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Counts the occurrences of a value in an array.

Use `Array.prototype.reduce()` to increment a counter each time you encounter the specific value inside the array.

```ts
const countOccurrences = <T extends any>(arr: T[], val: T) =>
  arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
```

```ts
countOccurrences([1, 1, 2, 1, 2, 3], 1); // 3
```
