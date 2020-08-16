---
title: isAfterDate
tags: date,beginner
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "isAfterDate" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Check if a date is after another date.

Use the greater than operator (`>`) to check if the first date comes after the second one.

```ts title="typescript"
const isAfterDate = (dateA: Date, dateB: Date) => dateA > dateB;
```

```ts title="typescript"
isAfterDate(new Date(2010, 10, 21), new Date(2010, 10, 20)); // true
```
