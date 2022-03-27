---
title: unescapeHTML
tags: [string, browser, beginner]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "unescapeHTML" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Unescapes escaped HTML characters.

Use `String.prototype.replace()` with a regex that matches the characters that need to be unescaped, using a callback function to replace each escaped character instance with its associated unescaped character using a dictionary (object).

```ts title="typescript"
const unescapeHTML = (str: string) =>
  str.replace(
    htmlUnEscapeReg,
    (tag: string) => (HTMLUnEscapeChars as StringMap<string>)[tag] || tag
  );
```

```ts title="typescript"
unescapeHTML("&lt;a href=&quot;#&quot;&gt;Me &amp; you&lt;/a&gt;"); // '<a href="#">Me & you</a>'
```
