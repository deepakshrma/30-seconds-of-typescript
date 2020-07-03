---
title: indentString
tags: string,beginner
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Indents each line in the provided string.

Use `String.replace` and a regular expression to add the character specified by `indent` `count` times at the start of each line.
Omit the third parameter, `indent`, to use a default indentation character of `' '`.

```ts
const indentString = (str: string, count: number, indent = " ") => {
  indent = indent.repeat(count);
  return str.replace(/^/gm, indent);
};
```

```ts
indentString("Lorem\nIpsum", 2); // '  Lorem\n  Ipsum'
indentString("Lorem\nIpsum", 2, "_"); // '__Lorem\n__Ipsum'
```
