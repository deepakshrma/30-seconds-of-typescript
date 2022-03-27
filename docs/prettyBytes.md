---
title: prettyBytes|prettyBytesT
tags: [string, math, advanced]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "prettyBytes|prettyBytesT" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Converts a number in bytes to a human-readable string.

Use an array dictionary of units to be accessed based on the exponent.
Use `Number.toPrecision()` to truncate the number to a certain number of digits.
Return the prettified string by building it up, taking into account the supplied options and whether it is negative or not.
Omit the second argument, `precision`, to use a default precision of `3` digits.
Omit the third argument, `addSpace`, to add space between the number and unit by default.

```ts title="typescript"
const prettyBytes = (num: number, precision = 3, addSpace = " ") => {
  const UNITS = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  if (Math.abs(num) < 1) return num + addSpace + UNITS[0];
  const exponent = Math.min(
    Math.floor(Math.log10(num < 0 ? -num : num) / 3),
    UNITS.length - 1
  );
  const n = Number(
    ((num < 0 ? -num : num) / 1000 ** exponent).toPrecision(precision)
  );
  return (num < 0 ? "-" : "") + n + addSpace + UNITS[exponent];
};

const prettyBytesT = (
  strings: TemplateStringsArray,
  bytes: number,
  precision: number = 3
) => {
  return prettyBytes(bytes, precision, strings.join(""));
};
```

```ts title="typescript"
prettyBytes(1000); // "1 KB"
prettyBytes(-27145424323.5821, 5); // "-27.145 GB"
prettyBytes(123456789, 3, ""); // "123MB"
prettyBytes(123456789, 3, "_"), "123_MB")

//No sapce
prettyBytesT`${-27145424323.5821}${5}`; //"-27.145GB"

//With sapce
prettyBytesT`${123456789} ${3}`; //"123 MB"

//With _
prettyBytesT`${123456789}_${3}`; //"123_MB"
```
