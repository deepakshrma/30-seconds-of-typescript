---
title: randomNumber
tags: math,random,beginner
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Returns a random number in the specified range.

Use `Math.random()` to generate a random value, map it to the desired range using multiplication.

```ts title="typescript"
const randomNumber = (min, max) => Math.random() * (max - min) + min;
```

```ts title="typescript"
randomNumberInRange(2, 10); // 6.0211363285087005
```
