---
title: createDirIfNotExistsSync
tags: node,beginner
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
