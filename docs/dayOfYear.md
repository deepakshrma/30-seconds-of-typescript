---
title: dayOfYear
tags: date,beginner
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "dayOfYear" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![TODO](https://img.shields.io/badge///TODO-blue.svg?style=flat-square)

Gets the day of the year from a `Date` object.

Use `new Date()` and `Date.prototype.getFullYear()` to get the first day of the year as a `Date` object, subtract it from the provided `date` and divide with the milliseconds in each day to get the result.
Use `Math.floor()` to appropriately round the resulting day count to an integer.

```ts title="typescript"
function isString<T = any>(str: string | T): str is string {
  return typeof str === "string";
}
function isValidDate(date: Date) {
  return date instanceof Date && !isNaN(date.getTime());
}
const dayOfYear = (date: Date | string): number => {
  if (isString<Date>(date)) {
    date = new Date(date);
  }
  if (!isValidDate(date)) throw new Error(`Invalid Date string`);
  return Math.floor(
    (date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) /
      1000 /
      60 /
      60 /
      24
  );
};
```

```ts title="typescript"
dayOfYear(new Date()); // 180
dayOfYear(new Date(2020, 5, 28)); //180
dayOfYear("2020-06-28T10:46:39.856Z"); // 180
dayOfYear("2020-06-28T1s"); // Error: Invalid Date string
// invalid date
assertThrows(
  () => {
    dayOfYear("2020-06-28T1s"); // Error: Invalid Date string
  },
  Error,
  "Invalid Date string"
);
```
