---
title: filterNonUniqueBy
tags: array,function,intermediate
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "filterNonUniqueBy" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Filters out the non-unique values in an array, based on a provided comparator function.

Use `Array.prototype.filter()` and `Array.prototype.every()` for an array containing only the unique values, based on the comparator function, `fn`.
The comparator function takes four arguments: the values of the two elements being compared and their indexes.

```ts title="typescript"
const filterNonUniqueBy = <T = any>(
  arr: T[],
  fn: (obj1: T, obj2: T, index1: number, index2: number) => any
) => arr.filter((v, i) => arr.every((x, j) => (i === j) === fn(v, x, i, j)));
```

```ts title="typescript"
filterNonUniqueBy(
  [
    { id: 0, value: "a" },
    { id: 1, value: "b" },
    { id: 2, value: "c" },
    { id: 1, value: "d" },
    { id: 0, value: "e" },
  ],
  (a, b) => a.id == b.id
); // [ { id: 2, value: 'c' } ]
```
