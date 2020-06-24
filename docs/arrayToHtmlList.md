---
id: arrayToHtmlList
sidebar_label: arrayToHtmlList
title: ArrayToHtmlList
tags: browser,array,intermediate
---

Converts the given array elements into `<li>` tags and appends them to the list of the given id.

Use `Array.prototype.map()`, `document.querySelector()`, and an anonymous inner closure to create a list of html tags.

```ts
const arrayToHtmlList = (arr: (string | number)[], listID: string) => {
  let el = document.querySelector("#" + listID);
  if (el) {
    el.innerHTML += arr.map((item) => `<li>${item}</li>`).join("");
  }
};
```

```ts
arrayToHtmlList(["item 1", "item 2"], "myListID"); // <li>item1</li><li>item2</li>
```
