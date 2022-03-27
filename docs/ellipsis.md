---
title: ellipsis
tags: [string, beginner]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "ellipsis" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![TODO](https://img.shields.io/badge///TODO-blue.svg?style=flat-square)

Truncates a string up to a specified length.

Determine if the string's `length` is greater than `num`.
Return the string truncated to the desired length, with `'...'` appended to the end or the original string.

```ts title="typescript"
const truncateString = (
  str: string,
  num: number = str.length,
  ellipsisStr = "..."
) =>
  str.length >= num
    ? str.slice(0, num >= ellipsisStr.length ? num - ellipsisStr.length : num) +
      ellipsisStr
    : str;

const ellipsis = (str: string, num: number = str.length, ellipsisStr = "...") =>
  str.length >= num
    ? str.slice(0, num >= ellipsisStr.length ? num - ellipsisStr.length : num) +
      ellipsisStr
    : str;
```

```ts title="typescript"
truncateString("boomerang", 7); // 'boom...'

ellipsis("boomerang", 5, ".."); // "boo.."

ellipsis("boomerang"); // "boomer..."

ellipsis("boomerang", undefined, "♦♦♦"); // "boomer♦♦♦"
```
