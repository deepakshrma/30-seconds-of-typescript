---
title: fromCamelCase
tags: [string, intermediate]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "fromCamelCase" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![TODO](https://img.shields.io/badge///TODO-blue.svg?style=flat-square)

Converts a string from camelcase.

Use `String.prototype.replace()` to remove underscores, hyphens, and spaces and convert words to camelcase.
Omit the second argument to use a default `separator` of `_`.

```js
const fromCamelCase = (str, separator = "_") =>
  str
    .replace(/([a-z\d])([A-Z])/g, "$1" + separator + "$2")
    .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, "$1" + separator + "$2")
    .toLowerCase();
```

```js
fromCamelCase("someDatabaseFieldName", " "); // 'some database field name'
fromCamelCase("someLabelThatNeedsToBeCamelized", "-"); // 'some-label-that-needs-to-be-camelized'
fromCamelCase("someJavascriptProperty", "_"); // 'some_javascript_property'
```
