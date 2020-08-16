---
title: coalesceFactory
tags: type,intermediate
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "coalesceFactory" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)

Returns a customized coalesce function that returns the first argument that returns `true` from the provided argument validation function.

Use `Array.prototype.find()` to return the first argument that returns `true` from the provided argument validation function.

```js
const coalesceFactory = (valid) => (...args) => args.find(valid);
```

```js
const customCoalesce = coalesceFactory(
  (_) => ![null, undefined, "", NaN].includes(_)
);
customCoalesce(undefined, null, NaN, "", "Waldo"); // "Waldo"
```
