---
title: hasFlags
tags: node,intermediate
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
