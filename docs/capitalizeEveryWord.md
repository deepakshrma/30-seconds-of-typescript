---
title: capitalizeEveryWord
tags: [string, regexp, intermediate]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "capitalizeEveryWord" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Capitalizes the first letter of every word in a string.

Use `String.prototype.replace()` to match the first character of each word and `String.prototype.toUpperCase()` to capitalize it.

```ts title="typescript"
const capitalizeEveryWord = (str: string = "") =>
  str.replace(/\b[a-z]/g, (char) => char.toUpperCase());
```

```ts title="typescript"
capitalizeEveryWord("hello world!"); // 'Hello World!'
```
