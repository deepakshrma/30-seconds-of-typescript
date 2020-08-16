---
title: reject
tags: array,beginner
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "reject" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![TODO](https://img.shields.io/badge///TODO-blue.svg?style=flat-square)

Filters an array's values based on a predicate function, returning only values for which the predicate function returns `false`.

Use `Array.prototype.filter()` in combination with the predicate function, `pred`, to return only the values for which `pred()` returns `false`.

```js
const reject = (pred, array) => array.filter((...args) => !pred(...args));
```

```js
reject((x) => x % 2 === 0, [1, 2, 3, 4, 5]); // [1, 3, 5]
reject((word) => word.length > 4, ["Apple", "Pear", "Kiwi", "Banana"]); // ['Pear', 'Kiwi']
```
