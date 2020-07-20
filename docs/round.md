---
title: round
tags: math,intermediate
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Rounds a number to a specified amount of digits.

Use `Math.round()` and template literals to round the number to the specified number of digits.
Omit the second argument, `decimals` to round to an integer.

```ts title="typescript"
const round = (n: number, decimals = 0) =>
  Number(`${Math.round(Number(`${n}e${decimals}`))}e-${decimals}`);
```

```ts title="typescript"
round(1.005, 2); // 1.01
```
