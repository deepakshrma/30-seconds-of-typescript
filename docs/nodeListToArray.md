---
title: nodeListToArray
tags: browser,array,beginner
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![TODO](https://img.shields.io/badge///TODO-blue.svg?style=flat-square)

Converts a `NodeList` to an array.

Use spread operator inside new array to convert a `NodeList` to an array.

```js
const nodeListToArray = (nodeList) => [...nodeList];
```

```js
nodeListToArray(document.childNodes); // [ <!DOCTYPE html>, html ]
```
