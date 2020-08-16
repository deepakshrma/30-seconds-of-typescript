---
title: defaults
tags: object,intermediate
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "defaults" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Assigns default values for all properties in an object that are `undefined`.

Use `Object.assign()` to create a new empty object and copy the original one to maintain key order, use spread operator `...` to combine the default values, finally use `obj` again to overwrite properties that originally had a value.

```ts title="typescript"
const defaults = (obj: any, ...defs: any[]) =>
  Object.assign({}, obj, ...defs, obj);
```

```ts title="typescript"
defaults({ a: 1 }, { b: 2 }, { a: 3 }); // { a: 1, b: 2 }

// React Components
const props = {
  style: {
    width: 100,
    color: "black",
  },
};
let style = defaults(props.style, { height: 200, backgroundColor: "grey" });
assertEquals(style, {
  width: 100,
  color: "black",
  height: 200,
  backgroundColor: "grey",
});
```
