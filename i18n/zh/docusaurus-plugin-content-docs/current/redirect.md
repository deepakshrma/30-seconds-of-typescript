---
title: redirect
tags: [browser, url, beginner]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "redirect" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![TODO](https://img.shields.io/badge///TODO-blue.svg?style=flat-square)

[用中文] 重定向到指定的 URL。

Use `window.location.href` or `window.location.replace()` to redirect to `url`.
Pass a second argument to simulate a link click (`true` - default) or an HTTP redirect (`false`).

```js
const redirect = (url, asLink = true) =>
  asLink ? (window.location.href = url) : window.location.replace(url);
```

```js
redirect("https://google.com");
```
