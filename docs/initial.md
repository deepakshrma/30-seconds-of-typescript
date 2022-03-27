---
title: initial
tags: [array, beginner]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "initial" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![TODO](https://img.shields.io/badge///TODO-blue.svg?style=flat-square)

Returns all the elements of an array except the last one.

Use `arr.slice(0,-1)` to return all but the last element of the array.

```js
const initial = (arr) => arr.slice(0, -1);
```

```js
initial([1, 2, 3]); // [1,2]
```
