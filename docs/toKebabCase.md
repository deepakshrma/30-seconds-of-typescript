---
title: toKebabCase
tags: string,regexp,intermediate
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Converts a string to kebab case.

Break the string into words and combine them adding `-` as a separator, using a regexp.

```ts title="typescript"
const toKebabCase = (str: string) =>
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    ?.map((x) => x.toLowerCase())
    .join("-");
```

```ts title="typescript"
toKebabCase("camelCase"); // 'camel-case'
toKebabCase("some text"); // 'some-text'
toKebabCase("some-mixed_string With spaces_underscores-and-hyphens"); // 'some-mixed-string-with-spaces-underscores-and-hyphens'
toKebabCase("AllThe-small Things"); // "all-the-small-things"
toKebabCase(
  "IAmListeningToFMWhileLoadingDifferentURLOnMyBrowserAndAlsoEditingSomeXMLAndHTML"
); // "i-am-listening-to-fm-while-loading-different-url-on-my-browser-and-also-editing-xml-and-html"
```
