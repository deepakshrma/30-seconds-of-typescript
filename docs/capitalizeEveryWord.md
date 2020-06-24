---
id: capitalizeEveryWord
sidebar_label: capitalizeEveryWord
title: capitalizeEveryWord
tags: string,regexp,intermediate
---

Capitalizes the first letter of every word in a string.

Use `String.prototype.replace()` to match the first character of each word and `String.prototype.toUpperCase()` to capitalize it.

```ts
const capitalizeEveryWord = (str: string = "") =>
  str.replace(/\b[a-z]/g, (char) => char.toUpperCase());
```

```ts
capitalizeEveryWord("hello world!"); // 'Hello World!'
```
