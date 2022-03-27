---
title: toDecimalMark
tags: [math, beginner]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "toDecimalMark" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Converts a number to a decimal mark formatted string.

Use `Number.prototype.toLocaleString()` to convert the number to decimal mark format.

```ts title="typescript"
const toDecimalMark = (num: number) => num.toLocaleString("en-US");
```

```ts title="typescript"
toDecimalMark(12305030388.9087); // "12,305,030,388.909"
```
