---
title: randomInt [随机的 Int]
tags: [math, random, beginner]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "randomInt" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

返回指定范围内的随机整数。

使用 `Math.random()` 要生成一个随机数并将其映射到所需范围 `Math.floor()` 使其成为整数。

```ts title="typescript"
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
```

```ts title="typescript"
randomInt(0, 5); // 2
```
