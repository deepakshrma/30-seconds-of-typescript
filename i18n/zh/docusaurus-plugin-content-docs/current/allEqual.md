---
title: AllEqual
tags: [array, function, beginner]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "AllEqual" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

[用中文] 检查数组中的所有元素是否相等。

使用 `Array.prototype.every()` 以检查数组的所有元素是否与第一个元素相同。
使用严格的比较操作员比较阵列中的元素，该操作员无法解释“ NAN”的自我质量。

```ts title="typescript"
const allEqual = <T = any>(arr: T[]) => arr.every((val) => val === arr[0]);
```

```ts title="typescript"
allEqual([1, 2, 3, 4, 5, 6]); // false
allEqual([1, 1, 1, 1]); // true
```
