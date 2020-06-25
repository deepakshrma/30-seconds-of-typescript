---
id: compactWhitespace
sidebar_label: compactWhitespace
title: compactWhitespace
tags: string,regexp,beginner
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Returns a string with whitespaces compacted.

Use `String.prototype.replace()` with a regular expression to replace all occurrences of 2 or more whitespace characters with a single space.

```ts
const compactWhitespace = (str: string) => str.replace(/\s{2,}/g, " ");
```

```ts
compactWhitespace("Lorem    Ipsum"); // 'Lorem Ipsum'
compactWhitespace("Lorem \n Ipsum"); // 'Lorem Ipsum'
```
