---
title: isEmpty
tags: [type, array, object, string, beginner]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "isEmpty" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

[用中文] 如果A值是一个空对象，集合，则返回true。

检查提供的值是 `null` 或者如果它 `length` 等于 `0`.

```ts title="typescript"
const isEmpty = (val: any) => val == null || !(Object.keys(val) || val).length;

// If typescript compiler is yelling because of the type `any`
const isEmpty = (val: Record<string, unknown> | null | undefined) =>
  val == null || !(Object.keys(val) || val).length;
```

```ts title="typescript"
isEmpty([]); // true
isEmpty({}); // true
isEmpty(""); // true
isEmpty([1, 2]); // false
isEmpty({ a: 1, b: 2 }); // false
isEmpty("text"); // false
isEmpty(123); // true - type is not considered a collection
isEmpty(true); // true - type is not considered a collection
```
