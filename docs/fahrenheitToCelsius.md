---
title: fahrenheitToCelsius
tags: math,beginner
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Converts Fahrenheit to Celsius.

Follows the conversion formula `C = (F - 32) * 5/9`.

```ts
const fahrenheitToCelsius = (degrees: number) => ((degrees - 32) * 5) / 9;
```

```ts
fahrenheitToCelsius(32); // 0
```
