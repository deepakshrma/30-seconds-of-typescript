---
title: colorize
tags: node,string,intermediate
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-nodejs-yellow.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Add special characters to text to print in color in the console (combined with `console.log()`).

Use template literals and special characters to add the appropriate color code to the string output.
For background colors, add a special character that resets the background color at the end of the string.

```ts
export const colorize = new (class {
  color = (code: number, ended = false, ...messages: any[]) =>
    `\x1b[${code}m${messages.join(" ")}${ended ? "\x1b[0m" : ""}`;
  black = this.color.bind(null, 30, false);
  red = this.color.bind(null, 31, false);
  green = this.color.bind(null, 32, false);
  yellow = this.color.bind(this, 33, false);
  blue = this.color.bind(this, 34, false);
  magenta = this.color.bind(this, 35, false);
  cyan = this.color.bind(this, 36, false);
  white = this.color.bind(this, 37, false);
  bgBlack = this.color.bind(this, 40, true);
  bgRed = this.color.bind(this, 41, true);
  bgGreen = this.color.bind(this, 42, true);
  bgYellow = this.color.bind(this, 43, true);
  bgBlue = this.color.bind(this, 44, true);
  bgMagenta = this.color.bind(this, 45, true);
  bgCyan = this.color.bind(this, 46, true);
  bgWhite = this.color.bind(this, 47, true);
})();

const color = colorize;
```

```ts
console.log(color.red("foo")); // 'foo' (red letters)
console.log(color.bgBlue("foo", "bar")); // 'foo bar' (blue background)
console.log(color.bgWhite(color.yellow("foo"), color.green("foo"))); // 'foo bar' (first
//word in yellow letters, second word in green letters, white background for both)

console.log(colorize.red("foo")); // 'foo' (red letters)
console.log(colorize.bgBlue("foo", "bar")); // 'foo bar' (blue background)
console.log(colorize.bgWhite(colorize.yellow("foo"), colorize.green("foo"))); // 'foo bar' (first
//word in yellow letters, second word in green letters, white background for both)
```
