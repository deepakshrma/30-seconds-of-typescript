---
title: or
tags: math,logic,beginner
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "or" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Returns `true` if at least one of the arguments is `true`, `false` otherwise.

Use the logical or (`||`) operator on the two given values.

```ts title="typescript"
const or = (a, b) => a || b;
```

```ts title="typescript"
or(true, true); // true
or(true, false); // true
or(false, false); // false
```
