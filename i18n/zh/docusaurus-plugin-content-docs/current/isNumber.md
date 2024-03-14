---
title: isNumber [is 数字]
tags: [type, math, beginner]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "isNumber" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

检查给定的参数是否是数字。

Use `typeof` 检查值是否分类为数字原始。
保护反对 `NaN`, 检查是否 `val === val` (as `NaN` has a `typeof`等于 `number` 并且是唯一不等于自身的值）。

```ts title="typescript"
const isNumber = (val: any) => typeof val === "number" && val === val;
```

```ts title="typescript"
isNumber(1); // true
isNumber("1"); // false
isNumber(NaN); // false
```
