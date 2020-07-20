---
title: createDirIfNotExists
tags: node,beginner
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![NODE](https://img.shields.io/badge/supports-nodejs-green.svg?style=flat-square)

Creates a directory, if it does not exist.

Use `fs.exists()` to check if the directory exists, `fs.mkdir()` to create it. Checkout `createDirIfNotExistsSync` for synchronous API.

```ts title="typescript"
const { mkdir, exists } = require("fs");
const { promisify } = require("util");
const mkdirP = promisify(mkdir);
const existsP = promisify(exists);

const createDirIfNotExists = async (dir: string) =>
  !(await existsP(dir)) ? await mkdirP(dir) : undefined;
```

```ts title="typescript"
(async function () {
  console.log(await createDirIfNotExists("test")); // creates the directory 'test', if it doesn't exist
})();
```
