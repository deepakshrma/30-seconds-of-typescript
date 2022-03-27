---
title: unique
tags: [array, beginner]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "unique" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Returns all unique values in an array.

Create a `Set` from the given array to discard duplicated values, then use the spread operator (`...`) to convert it back to an array.

```ts title="typescript"
const unique = (arr: any[]) => [...new Set(arr)];
```

```ts title="typescript"
unique([1, 2, 2, 3, 4, 4, 5]); // [1, 2, 3, 4, 5]
```
