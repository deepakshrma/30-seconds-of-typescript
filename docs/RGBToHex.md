---
title: RGBToHex
tags: [string, math, intermediate]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "RGBToHex" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Converts the values of RGB components to a color code.

Convert given RGB parameters to hexadecimal string using bitwise left-shift operator (`<<`) and `toString(16)`, then `String.padStart(6,'0')` to get a 6-digit hexadecimal value.

```ts title="typescript"
const RGBToHex = (r: number, g: number, b: number, hash: "#" | "" = "") =>
  hash + ((r << 16) + (g << 8) + b).toString(16).padStart(6, "0");
```

```ts title="typescript"
RGBToHex(255, 165, 1); // 'ffa501'
RGBToHex(255, 165, 1, "#"); // '#ffa501'
```
