---
title: randomHexColorCode
tags: math,random,beginner
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Generates a random hexadecimal color code.

Use `Math.random` to generate a random 24-bit(6x4bits) hexadecimal number.
Use bit shifting and then convert it to an hexadecimal String using `toString(16)`.

```ts title="typescript"
const randomHexColorCode = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return "#" + n.slice(0, 6);
};
```

```ts title="typescript"
randomHexColorCode(); // "#e34155"
```
