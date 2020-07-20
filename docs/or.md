---
title: or
tags: math,logic,beginner
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Returns `true` if at least one of the arguments is `true`, `false` otherwise.

Use the logical or (`||`) operator on the two given values.

```ts title="typescript"
const or = (a, b) => a || b;
```

```ts title="typescript"
or(true, true); // true
or(true, false); // true
or(false, false); // false
```
