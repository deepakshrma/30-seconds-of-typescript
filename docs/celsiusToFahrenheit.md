---
title: celsiusToFahrenheit
tags: [math, beginner]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "celsiusToFahrenheit" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Converts Celsius to Fahrenheit.

Follows the conversion formula `F = 1.8C + 32`.

```ts title="typescript"
const celsiusToFahrenheit = (degrees: number) => 1.8 * degrees + 32;
```

```ts title="typescript"
celsiusToFahrenheit(33); // 91.4
```
