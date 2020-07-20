---
title: unescapeHTML
tags: string,browser,beginner
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
