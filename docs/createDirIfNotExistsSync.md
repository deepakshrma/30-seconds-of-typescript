---
title: createDirIfNotExistsSync
tags: node,beginner
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "createDirIfNotExistsSync" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![NODE](https://img.shields.io/badge/supports-nodejs-green.svg?style=flat-square)

Creates a directory, if it does not exist.

Use `fs.existsSync()` to check if the directory exists, `fs.mkdirSync()` to create it.

```ts title="typescript"
const { mkdirSync, existsSync } = require("fs");

const createDirIfNotExistsSync = (dir: string) =>
  !existsSync(dir) ? mkdirSync(dir) : undefined;
```

```ts title="typescript"
createDirIfNotExistsSync("test"); // creates the directory 'test', if it doesn't exist
```
