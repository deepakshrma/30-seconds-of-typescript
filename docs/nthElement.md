---
title: nthElement
tags: array,beginner
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "nthElement" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Returns the nth element of an array.[Curry Function]

Use `Array.prototype.slice()` to get an array containing the nth element at the first place.
If the index is out of bounds, return `undefined`.
Omit the second argument, `n`, to get the first element of the array.

```ts title="typescript"
const nthElement = curry(
  (n = 0, arr: any[]) => (n === -1 ? arr.slice(n) : arr.slice(n, n + 1))[0],
  2
);
```

```ts title="typescript"
nthElement(["a", "b", "c"], 1); // 'b'
nthElement(["a", "b", "b"], -3); // 'a'

nthElement(-1, [1, 2, 3, 4, 5]), 5;

// curry power
const third = nthElement(2);
const last = nthElement(-1);
third([1, 2, 3]); // 3
last([1, 2, 3, 4, 5]); // 5
```
