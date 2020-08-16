---
title: hasFlags
tags: node,intermediate
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "hasFlags" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Check if the current process's arguments contain the specified flags.

Use `Array.prototype.every()` and `Array.prototype.includes()` to check if `process.argv` contains all the specified flags.
Use a regular expression to test if the specified flags are prefixed with `-` or `--` and prefix them accordingly.

```ts title="typescript"
const hasFlags = (args: string[], ...flags: string[]) =>
  flags.every((flag) =>
    args.includes(/^-{1,2}/.test(flag) ? flag : "--" + flag)
  );
```

```ts title="typescript"
// node myScript.js -s --test --cool=true
hasFlags(process.argv, "-s"); // true
hasFlags(process.argv, "--test", "cool=true", "-s"); // true
hasFlags(process.argv, "special"); // false

// Another use case

const processHasFlags = curry(hasFlags, 2)(process.argv);
assertEquals(processHasFlags("-s"), true);
assertEquals(processHasFlags("--tests"), false);
```
