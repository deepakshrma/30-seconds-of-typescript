---
title: JSONToFile
tags: [node, json, intermediate]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "JSONToFile" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![TODO](https://img.shields.io/badge///TODO-blue.svg?style=flat-square)

Writes a JSON object to a file.

Use `fs.writeFileSync()`, template literals and `JSON.stringify()` to write a `json` object to a `.json` file.

```js
const fs = require("fs");
const JSONToFile = (obj, filename, spaces = 2) =>
  fs.writeFileSync(`${filename}.json`, JSON.stringify(obj, null, spaces));
```

```js
JSONToFile({ test: "is passed" }, "testJsonFile"); // writes the object to 'testJsonFile.json'
```
