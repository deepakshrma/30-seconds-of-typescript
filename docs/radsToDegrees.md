---
title: radsToDegrees
tags: [math, beginner]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "radsToDegrees" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Converts an angle from radians to degrees.

Use `Math.PI` and the radian to degree formula to convert the angle from radians to degrees.

```ts title="typescript"
const radsToDegrees = (rad) => (rad * 180.0) / Math.PI;
```

```ts title="typescript"
radsToDegrees(Math.PI / 2); // 90
```
