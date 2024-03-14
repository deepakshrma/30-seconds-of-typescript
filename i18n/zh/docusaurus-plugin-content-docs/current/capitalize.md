---
title: capitalize [大写]
tags: [string, array, intermediate]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "capitalize" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

大写字符串的首字母。

使用阵列破坏性和 `String.prototype.toUpperCase()` 要大写第一字母，`...rest` rest”在第一个字母之后获得字符数组，然后 `Array.prototype.join('')` 将其变成字符串再次。
省略 `LowerRest` 参数以保持其余的字符串完整，或将其设置为“ True”以转换为小写。

```ts title="typescript"
const capitalize = (str: string = "", lowerRest = false): string =>
  str.slice(0, 1).toUpperCase() +
  (lowerRest ? str.slice(1).toLowerCase() : str.slice(1));
```

```ts title="typescript"
capitalize("fooBar"); // 'FooBar'
capitalize("fooBar", true); // 'Foobar'
```
