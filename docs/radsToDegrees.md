---
title: radsToDegrees
tags: math,beginner
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Converts an angle from radians to degrees.

Use `Math.PI` and the radian to degree formula to convert the angle from radians to degrees.

```ts
const radsToDegrees = (rad) => (rad * 180.0) / Math.PI;
```

```ts
radsToDegrees(Math.PI / 2); // 90
```
