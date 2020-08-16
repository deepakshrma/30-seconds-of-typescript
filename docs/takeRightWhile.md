---
title: takeRightWhile
tags: array,function,intermediate
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "takeRightWhile" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Removes elements from the end of an array until the passed function returns `true`. Returns the removed elements.

Loop through the array, using a `Array.prototype.reduceRight()` and accumulating elements while the function returns falsy value.

```ts title="typescript"
const takeRightWhile = (arr: any[], func: Predicate) =>
  arr.reduceRight((acc, el) => (func(el) ? acc : [el].concat(acc)), []);
```

```ts title="typescript"
takeRightWhile([1, 2, 3, 4], (n) => n < 3); // [3, 4]
```
