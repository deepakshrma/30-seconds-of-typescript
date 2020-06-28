---
title: untildify
tags: node,string,beginner
---

![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![TODO](https://img.shields.io/badge///TODO-blue.svg?style=flat-square)

Converts a tilde path to an absolute path.

Use `String.prototype.replace()` with a regular expression and `OS.homedir()` to replace the `~` in the start of the path with the home directory.

```js
const untildify = (str) =>
  str.replace(/^~($|\/|\\)/, `${require("os").homedir()}$1`);
```

```js
untildify("~/node"); // '/Users/aUser/node'
```
