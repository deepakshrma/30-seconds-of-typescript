---
title: CSVToJSON
tags: [string, array, object, advanced]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "CSVToJSON" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Converts a comma-separated values (CSV) string to a 2D array of objects.
The first row of the string is used as the title row.

Use `Array.prototype.slice()` and `Array.prototype.indexOf('\n')` and `String.prototype.split(delimiter)` to separate the first row (title row) into values.
Use `String.prototype.split('\n')` to create a string for each row, then `Array.prototype.map()` and `String.prototype.split(delimiter)` to separate the values in each row.
Use `Array.prototype.reduce()` to create an object for each row's values, with the keys parsed from the title row.
Omit the second argument, `delimiter`, to use a default delimiter of `,`.

```ts title="typescript"
type StringMap<T = string> = { [key: string]: T };

const CSVToJSON = (data: string, delimiter = ",") => {
  const titles: string[] = data.slice(0, data.indexOf("\n")).split(delimiter);
  return data
    .slice(data.indexOf("\n") + 1)
    .split("\n")
    .map((v) => {
      const values = v.split(delimiter);
      return titles.reduce(
        (obj, title, index) => ((obj[title] = values[index]), obj),
        {} as StringMap
      );
    });
};
```

```ts title="typescript"
CSVToJSON("col1,col2\na,b\nc,d"); // [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];
CSVToJSON("col1;col2\na;b\nc;d", ";"); // [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];
```
