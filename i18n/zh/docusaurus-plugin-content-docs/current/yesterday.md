---
title: yesterday [日期 昨天]
tags: [date, intermediate]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "yesterday" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![TODO](https://img.shields.io/badge///TODO-blue.svg?style=flat-square)

导致昨天日期的字符串表示。

使用 `new Date()` 要获得当前日期，请使用 `Date.getDate()`并使用 `Date.setDate()`.
使用 `Date.prototype.toISOString()` 返回字符串 `yyyy-mm-dd` 格式.

```js
const yesterday = () => {
  let t = new Date();
  t.setDate(t.getDate() - 1);
  return t.toISOString().split("T")[0];
};
```

```js
yesterday(); // 2018-10-17 (if current date is 2018-10-18)
```
