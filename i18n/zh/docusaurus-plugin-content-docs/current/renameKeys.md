---
title: renameKeys [重命名键]
tags: [object, intermediate]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "renameKeys" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![TODO](https://img.shields.io/badge///TODO-blue.svg?style=flat-square)

用提供的值替换多个对象键的名称。

使用 `Object.keys()` 结合 `Array.prototype.reduce()` 和传播操作员 (`...`) 获取对象的钥匙并根据 `keysMap`.

```js
const renameKeys = (keysMap, obj) =>
  Object.keys(obj).reduce(
    (acc, key) => ({
      ...acc,
      ...{ [keysMap[key] || key]: obj[key] },
    }),
    {}
  );
```

```js
const obj = { name: "Bobo", job: "Front-End Master", shoeSize: 100 };
renameKeys({ name: "firstName", job: "passion" }, obj); // { firstName: 'Bobo', passion: 'Front-End Master', shoeSize: 100 }
```
