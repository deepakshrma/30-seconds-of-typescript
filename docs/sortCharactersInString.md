---
title: sortCharactersInString
tags: [string, beginner]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "sortCharactersInString" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![TODO](https://img.shields.io/badge///TODO-blue.svg?style=flat-square)

Alphabetically sorts the characters in a string.

Use the spread operator (`...`), `Array.prototype.sort()` and `String.localeCompare()` to sort the characters in `str`, recombine using `String.prototype.join('')`.

```js
const sortCharactersInString = (str) =>
  [...str].sort((a, b) => a.localeCompare(b)).join("");
```

```js
sortCharactersInString("cabbage"); // 'aabbceg'
```
