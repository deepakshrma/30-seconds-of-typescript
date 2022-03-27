---
title: normalizeLineEndings
tags: [array, intermediate]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "normalizeLineEndings" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![TODO](https://img.shields.io/badge///TODO-blue.svg?style=flat-square)

Normalizes line endings in a string.

Use `String.prototype.replace()` and a regular expression to match and replace line endings with the `normalized` version.
Omit the seconds argument, `normalized`, to use the default value of `'\r\n'`.

```js
const normalizeLineEndings = (str, normalized = "\r\n") =>
  str.replace(/\r?\n/g, normalized);
```

```js
splitLines("This\r\nis a\nmultiline\nstring.\r\n"); // 'This\r\nis a\r\nmultiline\r\nstring.\r\n'
splitLines("This\r\nis a\nmultiline\nstring.\r\n", "\n"); // 'This\nis a\nmultiline\nstring.\n'
```
