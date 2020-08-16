---
title: contains
tags: function,intermediate
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "contains" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Returns `true` if given string s1 contains s2. Compare is case insensitive.

```ts
const contains = (s1: string, s2: string = "") =>
  s1.toLowerCase().indexOf(s2.toLowerCase()) !== -1;
```

```ts
contains("Text1", "Ext"); // true
contains("Text1", "et"); // false
```
