---
title: binary
tags: function,beginner
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "binary" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Creates a function that accepts up to two arguments, ignoring any additional arguments.

Call the provided function, `fn`, with the first two arguments given.

```ts title="typescript"
export const binary = (fn: (...args: any[]) => any) => (...[v1, v2]: any[]) =>
  fn(v1, v2);
```

```ts title="typescript"
const max = binary(Math.max)(1, 2, 3);
assertEquals(max, 2);

["2", "1", "0"].map(binary(Math.max)); // [2, 1, 2]
```
