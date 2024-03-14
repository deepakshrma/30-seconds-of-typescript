---
title: maxDate [最大日期]
tags: [date, math, beginner]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "maxDate" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

返回给定日期的最大值。

使用 `Math.max` 使用 ES6 扩展语法查找最大日期值，`new Date（）`将其转换为 `Date` 对象。

```ts title="typescript"
const maxDate = (dates: Date[]) => new Date(Math.max(...dates.map(Number)));
```

```ts title="typescript"
const array = [
  new Date(2017, 4, 13),
  new Date(2018, 2, 12),
  new Date(2016, 0, 10),
  new Date(2016, 0, 9),
];
maxDate(array); // 2018-03-11T22:00:00.000Z
```
