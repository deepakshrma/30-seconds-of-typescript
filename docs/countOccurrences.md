---
title: countOccurrences
tags: array,intermediate
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "countOccurrences" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Counts the occurrences of a value in an array.

Use `Array.prototype.reduce()` to increment a counter each time you encounter the specific value inside the array.

```ts title="typescript"
const countOccurrences = <T = any>(arr: T[], val: T) =>
  arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
```

```ts title="typescript"
countOccurrences([1, 1, 2, 1, 2, 3], 1); // 3
```
