---
title: and
tags: [math, logic, beginner]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "and" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Returns `true` if both arguments are `true`, `false` otherwise.

Use the logical and (`&&`) operator on the two given values.

```ts title="typescript"
const and = <T = any = boolean>(a: T, b: T) => Boolean(a) && Boolean(b);
```

```ts title="typescript"
and(true, true); // true
and(true, false); // false
and(false, false); // false
```
