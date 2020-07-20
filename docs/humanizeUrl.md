---
title: humanizeUrl
tags: string,regexp,intermediate
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Converts a string to humanize string url

The \w metacharacter is used to find a word character.
Replace all non character with -.
Note: A word character is a character from a-z, A-Z, 0-9, including the \_ (underscore) character.

```ts title="typescript"
const humanizeUrl = (
  str: string,
  preserveUndersore = false,
  preserveCase = false
) => {
  const re = preserveUndersore ? /[\W]+/g : /[\W_]+/g;
  return preserveCase
    ? str.replace(re, "-")
    : str.replace(re, "-").toLowerCase();
};
```

```ts title="typescript"
humanizeUrl("Some label URL"); // "some-label-url"
humanizeUrl("Some 1label 2URL"); // "some-1label-2url"
humanizeUrl("Some 1_label 2_URL"); // "some-1-label-2-url"
humanizeUrl("Some$1_label$ $2URL"); // "some-1-label-2url"
humanizeUrl("Some 1_label 2_URL", true); // "some-1_label-2_url"
humanizeUrl("Some$1_label$ $2URL", false, true); // "Some-1-label-2URL"

const word = "IAmListening To FMWhileLoading";
const humanizeUrlWordBreak = (str: string) =>
  humanizeUrl(toSnakeCase(str) || "");
humanizeUrlWordBreak(word); //"i-am-listening-to-fm-while-loading");
```
