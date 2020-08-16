---
title: containsWhitespace
tags: string,regexp,beginner
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "containsWhitespace" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Returns `true` if the given string contains any whitespace characters, `false` otherwise.

Use `RegExp.prototype.test()` with an appropriate regular expression to check if the given string contains any whitespace characters.

```ts title="typescript"
const containsWhitespace = (str: string) => /\s/.test(str);
```

```ts title="typescript"
containsWhitespace("lorem"); // false
containsWhitespace("lorem ipsum"); // true
```
