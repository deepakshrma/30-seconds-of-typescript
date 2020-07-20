---
title: capitalizeEveryWord
tags: string,regexp,intermediate
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Capitalizes the first letter of every word in a string.

Use `String.prototype.replace()` to match the first character of each word and `String.prototype.toUpperCase()` to capitalize it.

```ts title="typescript"
const capitalizeEveryWord = (str: string = "") =>
  str.replace(/\b[a-z]/g, (char) => char.toUpperCase());
```

```ts title="typescript"
capitalizeEveryWord("hello world!"); // 'Hello World!'
```
