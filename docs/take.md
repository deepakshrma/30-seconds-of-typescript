---
title: take
tags: [array, beginner]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "take" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Returns an array with n elements removed from the beginning.

Use `Array.prototype.slice()` to create a slice of the array with `n` elements taken from the beginning.

```ts title="typescript"
const take = (arr: any[], n = 1) => arr.slice(0, n);
```

```ts title="typescript"
take([1, 2, 3], 5); // [1, 2, 3]
take([1, 2, 3], 0); // []
```
