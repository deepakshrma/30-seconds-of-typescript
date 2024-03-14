---
title: chunk [大块]
tags: [array, intermediate]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "chunk" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

块将一个数组分成指定尺寸的较小阵列。

使用 `Array.from()` 来创建一个新数组，适合将要生成的块数量。
使用 `Array.prototype.slice()` 将新数组的每个元素映射到尺寸的长度。
如果原始数组无法均匀拆分，则最终块将包含其余元素。

```ts title="typescript"
export const chunk = (arr: any[], size: number) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_: any, i: number) =>
    arr.slice(i * size, i * size + size)
  );
```

```ts title="typescript"
chunk([1, 2, 3, 4, 5], 2); // [[1,2],[3,4],[5]]
```
