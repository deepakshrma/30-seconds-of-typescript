---
title: ellipsis
tags: string,beginner
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
