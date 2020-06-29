---
title: escapeHTML
tags: string,browser,regexp,intermediate
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Escapes a string for use in HTML.

Use `String.prototype.replace()` with a regexp that matches the characters that need to be escaped, using a callback function to replace each character instance with its associated escaped character using a dictionary (object).

```ts
export enum HTMLEscapeChars {
  "&" = "&amp;",
  "<" = "&lt;",
  ">" = "&gt;",
  "'" = "&#39;",
  '"' = "&quot;",
}
const htmlEscapeReg = new RegExp(`[${Object.keys(HTMLEscapeChars)}]`, "g");

const escapeHTML = (str: string) =>
  str.replace(
    htmlEscapeReg,
    (tag: string) => (HTMLEscapeChars as StringMap<string>)[tag] || tag
  );
```

```ts
escapeHTML('<a href="#">Me & you</a>'); // '&lt;a href=&quot;#&quot;&gt;Me &amp; you&lt;/a&gt;'
```
