---
title: copyToClipboard
tags: [browser, string, advanced]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "copyToClipboard" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)

[用中文] 将字符串复制到剪贴板。

仅由于用户操作而起作用（即在“单击事件侦听器”内部）。

⚠️**注意：** 通过使用新的异步剪贴板 API 可以轻松实现相同的功能，该剪贴板 API 仍然是实验性的，但应在将来使用而不是此片段。了解更多有关 [这里]https://github.com/w3c/clipboard-apis/blob/master/master/explainer.adoc#writing-to-the-clipboard）。

创建一个新的 `<textarea>` 元素，用提供的数据填充它，然后将其添加到 HTML 文档中。
使用 `Selection.getRangeAt()` 以存储所选范围（如果有）。
使用 `document.execCommand('copy')` 以复制到剪贴板。
从 HTML 文档中删除 `<textarea>` 元素。
最后，使用 `Selection().addRange()` 恢复原始的选定范围（如果有）。

```js
const copyToClipboard = (str) => {
  const el = document.createElement("textarea");
  el.value = str;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  const selected =
    document.getSelection().rangeCount > 0
      ? document.getSelection().getRangeAt(0)
      : false;
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
};
```

```js
copyToClipboard("Lorem ipsum"); // 'Lorem ipsum' copied to clipboard.
```
