---
title: negate
tags: function,beginner
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "negate" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Negates a predicate function.

Take a predicate function and apply the not operator (`!`) to it with its arguments.

```ts title="typescript"
export const negate = (func: Function) => (...args: any[]) => !func(...args);
```

```ts title="typescript"
[1, 2, 3, 4, 5, 6].filter(negate((n) => n % 2 === 0)); // [ 1, 3, 5 ]
```
