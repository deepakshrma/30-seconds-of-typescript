---
title: insertAtImmutable
tags: array,intermediate
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "insertAtImmutable" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Insert(Immutable) the given values at the specified index.

Use `Array.prototype.slice()` with an appropriate index and a delete count of `0`, spreading the given values to be inserted.

```ts title="typescript"
const insertAtImmutable = (arr: any[], i: number, ...v: any[]) => {
  arr.splice(i + 1, 0, ...v);
  return arr;
};
```

```ts title="typescript"
insertAtImmutable([1, 2, 3, 4], 2, 5); // [1, 2, 3, 5, 4]
insertAtImmutable([2, 10], 0, 4, 6, 8); // [2, 4, 6, 8, 10]

// Insert from behind
insertAtImmutable([4, 5], -1, 1, 2, 3); // [1, 2, 3, 4, 5]
```
