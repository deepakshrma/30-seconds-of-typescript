---
title: triggerEvent
tags: [browser, event, intermediate]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "triggerEvent" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Triggers a specific event on a given element, optionally passing custom data.

Use `new CustomEvent()` to create an event from the specified `eventType` and details.
Use `el.dispatchEvent()` to trigger the newly created event on the given element.
Omit the third argument, `detail`, if you do not want to pass custom data to the triggered event.

```ts title="typescript"
const triggerEvent = (el: HTMLElementLike, eventType: string, detail: any) =>
  el.dispatchEvent && el.dispatchEvent(new CustomEvent(eventType, { detail }));
```

```ts title="typescript"
triggerEvent(document.getElementById("myId"), "click");
triggerEvent(document.getElementById("myId"), "click", { username: "bob" });
```
