---
id: approximatelyEqual
sidebar_label: approximatelyEqual
title: ApproximatelyEqual
tags: math,beginner
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Checks if two numbers are approximately equal to each other.

Use `Math.abs()` to compare the absolute difference of the two values to `epsilon`.
Omit the third parameter, `epsilon`, to use a default value of `0.001`.

```ts
export const approximatelyEqual = (
  v1: number,
  v2: number,
  epsilon: number = 0.001
) => Math.abs(v1 - v2) < epsilon;
```

```ts
approximatelyEqual(Math.PI / 2.0, 1.5708); // true
approximatelyEqual(Math.PI / 2.0, 1.5708, 0.000001); // false // 1.5707963267948966
```
