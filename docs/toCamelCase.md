---
title: toCamelCase
tags: string,regexp,intermediate
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "toCamelCase" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Converts a string to camelcase.

Break the string into words and combine them capitalizing the first letter of each word, using a regexp.

```ts title="typescript"
const toCamelCase = (str: string) => {
  let s = str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    ?.map((x: string) => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
    .join("");
  return s && s.slice(0, 1).toLowerCase() + s.slice(1);
};
```

```ts title="typescript"
toCamelCase("some_database_field_name"); // 'someDatabaseFieldName'
toCamelCase("Some label that needs to be camelized"); // 'someLabelThatNeedsToBeCamelized'
toCamelCase("some-javascript-property"); // 'someJavascriptProperty'
toCamelCase("some-mixed_string with spaces_underscores-and-hyphens"); // 'someMixedStringWithSpacesUnderscoresAndHyphens'
```
