---
title: toTitleCase
tags: string,regepx,intermediate
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "toTitleCase" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Converts a string to title case.

Break the string into words, using a regexp, and combine them capitalizing the first letter of each word and adding a whitespace between them.

```ts title="typescript"
const toTitleCase = (str: string) =>
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    ?.map((x) => x.charAt(0).toUpperCase() + x.slice(1))
    .join(" ");
```

```ts title="typescript"
toTitleCase("some_database_field_name"); // 'Some Database Field Name'
toTitleCase("Some label that needs to be title-cased"); // 'Some Label That Needs To Be Title Cased'
toTitleCase("some-package-name"); // 'Some Package Name'
toTitleCase("some-mixed_string with spaces_underscores-and-hyphens"); // 'Some Mixed String With Spaces Underscores And Hyphens'
```
