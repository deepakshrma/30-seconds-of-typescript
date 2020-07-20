---
title: escapeRegExp
tags: string,regexp,intermediate
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Escapes a string to use in a regular expression.

Use `String.prototype.replace()` to escape special characters.

```ts title="typescript"
const escapeRegExp = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
```

```ts title="typescript"
escapeRegExp("(test)"); // \\(test\\)
```
