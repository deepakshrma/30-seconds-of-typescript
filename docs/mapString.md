---
title: mapString
tags: [string, array, function, beginner]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "mapString" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Creates a new string with the results of calling a provided function on every character in the calling string.

Use `String.prototype.split('')` and `Array.prototype.map()` to call the provided function, `fn`, for each character in `str`.
Use `Array.prototype.join('')` to recombine the array of characters into a string.
The callback function, `fn`, takes three arguments (the current character, the index of the current character and the string `mapString` was called upon).

```ts title="typescript"
const mapString = (str: string, fn: MapFunc<string>) => {
  const chars = [...str];
  return chars.map((c, i) => fn(c, i, chars)).join("");
};
```

```ts title="typescript"
mapString("lorem ipsum", (c) => c.toUpperCase()); // 'LOREM IPSUM'
```
