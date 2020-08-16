---
title: insertAt
tags: array,intermediate
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "insertAt" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Mutates the original array to insert the given values at the specified index.

Use `Array.prototype.splice()` with an appropriate index and a delete count of `0`, spreading the given values to be inserted.

Note: For immutable array see `insertAtImmutable`

```ts title="typescript"
const insertAt = (arr: any[], i: number, ...v: any[]) => {
  return [...arr.slice(0, i + 1), ...v, ...arr.slice(i + 1)];
};
```

```ts title="typescript"
insertAt([1, 2, 3, 4], 2, 5); // [1, 2, 3, 5, 4]
insertAt([2, 10], 0, 4, 6, 8); // [2, 4, 6, 8, 10]

// Insert from behind
insertAt([4, 5], -1, 1, 2, 3); // [1, 2, 3, 4, 5]
```
