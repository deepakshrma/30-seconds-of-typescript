---
title: toDecimalMark
tags: math,beginner
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Converts a number to a decimal mark formatted string.

Use `Number.prototype.toLocaleString()` to convert the numbre to decimal mark format.

```ts title="typescript"
const toDecimalMark = (num: number) => num.toLocaleString("en-US");
```

```ts title="typescript"
toDecimalMark(12305030388.9087); // "12,305,030,388.909"
```
