---
title: createElement
tags: [browser, beginner]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "createElement" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)

Creates an element from a string (without appending it to the document).
If the given string contains multiple elements, only the first one will be returned.

Use `document.createElement()` to create a new element.
Set its `innerHTML` to the string supplied as the argument.
Use `ParentNode.firstElementChild` to return the element version of the string.

```ts title="typescript"
const createElement = (str: string) => {
  const el = document.createElement("div");
  el.innerHTML = str;
  return el.firstElementChild;
};
```

```js
const createElement = (str) => {
  const el = document.createElement("div");
  el.innerHTML = str;
  return el.firstElementChild;
};
```

```ts title="typescript"
const el = createElement(
  `<div class="container">
    <p>Hello!</p>
  </div>`
);
console.log(el.className); // 'container'
```
