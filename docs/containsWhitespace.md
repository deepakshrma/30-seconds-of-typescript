---
id: containsWhitespace
sidebar_label: containsWhitespace
title: containsWhitespace
tags: string,regexp,beginner
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Returns `true` if the given string contains any whitespace characters, `false` otherwise.

Use `RegExp.prototype.test()` with an appropriate regular expression to check if the given string contains any whitespace characters.

```ts
const containsWhitespace = (str: string) => /\s/.test(str);
```

```ts
containsWhitespace("lorem"); // false
containsWhitespace("lorem ipsum"); // true
```
