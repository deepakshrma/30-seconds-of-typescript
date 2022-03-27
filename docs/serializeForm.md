---
title: serializeForm
tags: [browser, string, intermediate]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "serializeForm" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![TODO](https://img.shields.io/badge///TODO-blue.svg?style=flat-square)

Encode a set of form elements as a query string.

Use the `FormData` constructor to convert the HTML `form` to `FormData`, `Array.from()` to convert to an array, passing a map function as the second argument.
Use `Array.prototype.map()` and `window.encodeURIComponent()` to encode each field's value.
Use `Array.prototype.join()` with appropriate arguments to produce an appropriate query string.

```js
const serializeForm = (form) =>
  Array.from(new FormData(form), (field) =>
    field.map(encodeURIComponent).join("=")
  ).join("&");
```

```js
serializeForm(document.querySelector("#form")); // email=test%40email.com&name=Test%20Name
```
