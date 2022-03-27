---
title: hide
tags: [browser, css, beginner]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "hide" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)

Hides all the elements specified.

Use `NodeList.prototype.forEach()` to apply `display: none` to each element specified.

```ts title="typescript"
const hide = <T extends HTMLElement>(...el: T[]) =>
  [...el].forEach((e) => (e.style.display = "none"));
```

```ts title="typescript"
hide(document.querySelectorAll("img")); // Hides all <img> elements on the page
```
