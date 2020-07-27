---
title: contains
tags: function,intermediate
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Returns `true` if given string s1 contains s2. Compare is case insensitive.

```ts
const contains = (s1: string, s2: string) =>
  s1.toLowerCase().indexOf(s2.toLowerCase());
```

```ts
contains("Text1", "ext"); // true
```
