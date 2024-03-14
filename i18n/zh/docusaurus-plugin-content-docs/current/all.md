---
title: all [全部]
tags: [array, function, beginner]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "all" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

全部

如果提供的谓词函数对集合中的所有元素返回 `true`，则返回 `true`，否则返回 `false`。

使用 `Array.prototype.every()` 测试集合中的所有元素是否根据 `fn` 返回 `true`。 省略第二个参数 `fn` 以使用“Boolean”作为默认值。

```ts title="typescript"
const all = <T = any>(arr: T[], fn: (t: T) => boolean = Boolean) =>
  arr.every(fn);
```

```ts title="typescript"
assertEquals(all([1, 2, 3, 4]), true);
assertEquals(all([2, null, 1]), false);

const hasName = (user: any) => Boolean(user.name);
assertEquals(all([{ name: "D" }, { name: "D2" }], hasName), true);
assertEquals(all([{ name: "D" }, { name: "" }], hasName), false);
```
