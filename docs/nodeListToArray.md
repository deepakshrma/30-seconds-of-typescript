---
title: nodeListToArray
tags: browser,array,beginner
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "nodeListToArray" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Converts a `NodeList` to an array.

Use spread operator inside new array to convert a `NodeList` to an array.

```ts title="typescript"
const nodeListToArray = <T = any>(nodeList: Iterable<T>) => [...nodeList];
```

```ts title="typescript"
nodeListToArray(document.childNodes); // [ <!DOCTYPE html>, html ]

// array like string

const caps = (x: string) => x.toUpperCase();
nodeListToArray("caps").map(caps); // ["C", "A", "P", "S"]
```
