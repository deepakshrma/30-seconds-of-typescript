---
title: renderElement
tags: [browser, recursion, advanced]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "renderElement" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![TODO](https://img.shields.io/badge///TODO-blue.svg?style=flat-square)

Renders the given DOM tree in the specified DOM element.

Destructure the first argument into `type` and `props`, use `type` to determine if the given element is a text element.
Based on the element's `type`, use either `Document.createTextNode()` or `Document.createElement()` to create the DOM element.
Use `Object.keys(props`, adding attributes to the DOM element and setting event listeners, as necessary.
Use recursion to render `props.children`, if any.
Finally, use `Node.appendChild()` to append the DOM element to the specified `container`.

```ts title="typescript"
const renderElement = ({ type, props = {} }, container) => {
  const isTextElement = !type;
  const element = isTextElement
    ? document.createTextNode("")
    : document.createElement(type);

  const isListener = (p) => p.startsWith("on");
  const isAttribute = (p) => !isListener(p) && p !== "children";

  Object.keys(props).forEach((p) => {
    if (isAttribute(p)) element[p] = props[p];
    if (!isTextElement && isListener(p))
      element.addEventListener(p.toLowerCase().slice(2), props[p]);
  });

  if (!isTextElement && props.children && props.children.length)
    props.children.forEach((childElement) =>
      renderElement(childElement, element)
    );

  container.appendChild(element);
};
```

```ts title="typescript"
const myElement = {
  type: "button",
  props: {
    type: "button",
    className: "btn",
    onClick: () => alert("Clicked"),
    children: [{ props: { nodeValue: "Click me" } }],
  },
};

renderElement(myElement, document.body);
```
