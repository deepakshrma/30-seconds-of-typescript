---
title: isStream
tags: node,type,intermediate
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![TODO](https://img.shields.io/badge///TODO-blue.svg?style=flat-square)

Checks if the given argument is a stream.

Check if the value is different from `null`, use `typeof` to check if the value is of type `object` and the `pipe` property is of type `function`.

```js
const isStream = (val) =>
  val !== null && typeof val === "object" && typeof val.pipe === "function";
```

```js
const fs = require("fs");
isStream(fs.createReadStream("test.txt")); // true
```
