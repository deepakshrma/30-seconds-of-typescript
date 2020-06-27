---
id: and
sidebar_label: and
title: And
tags: math,logic,beginner
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Returns `true` if both arguments are `true`, `false` otherwise.

Use the logical and (`&&`) operator on the two given values.

```ts
const and = <T extends any = boolean>(a: T, b: T) => Boolean(a) && Boolean(b);
```

```ts
and(true, true); // true
and(true, false); // false
and(false, false); // false
```
