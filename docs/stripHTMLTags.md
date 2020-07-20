---
title: stripHTMLTags
tags: string,regexp,beginner
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Removes HTML/XML tags from string.

Use a regular expression to remove HTML/XML tags from a string.

```ts title="typescript"
const stripHTMLTags = (str) => str.replace(/<[^>]*>/g, "");
```

```ts title="typescript"
stripHTMLTags("<p><em>lorem</em> <strong>ipsum</strong></p>"); // 'lorem ipsum'
```
