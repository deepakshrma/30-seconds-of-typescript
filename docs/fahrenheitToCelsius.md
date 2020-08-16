---
title: fahrenheitToCelsius
tags: math,beginner
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "fahrenheitToCelsius" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Converts Fahrenheit to Celsius.

Follows the conversion formula `C = (F - 32) * 5/9`.

```ts title="typescript"
const fahrenheitToCelsius = (degrees: number) => ((degrees - 32) * 5) / 9;
```

```ts title="typescript"
fahrenheitToCelsius(32); // 0
```
