---
title: filterNonUnique
tags: array,beginner
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Filters out the non-unique values in an array.

Use `Array.prototype.filter()` for an array containing only the unique values.

```ts title="typescript"
const filterNonUnique = (arr) =>
  arr.filter((i) => arr.indexOf(i) === arr.lastIndexOf(i));
```

```ts title="typescript"
filterNonUnique([1, 2, 2, 3, 4, 4, 5]); // [1, 3, 5]
```
