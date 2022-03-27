---
title: bifurcateBy
tags: [array, function, intermediate]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "bifurcateBy" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Splits values into two groups according to a predicate function, which specifies which group an element in the input collection belongs to. If the predicate function returns a truthy value, the collection element belongs to the first group; otherwise, it belongs to the second group.

Use `Array.prototype.reduce()` and `Array.prototype.push()` to add elements to groups, based on the value returned by `fn` for each element.

```ts title="typescript"
type Predicate<T> = (item: T) => boolean;

const bifurcateBy = <T = any>(arr: T[], filter: Predicate<T>) =>
  arr.reduce(
    (acc, val) => {
      acc[filter(val) ? 0 : 1].push(val);
      return acc;
    },
    [[] as T[], [] as T[]]
  );
```

```ts title="typescript"
bifurcateBy(["beep", "boop", "foo", "bar"], (x: string) => x[0] === "b"); // [ ['beep', 'boop', 'bar'], ['foo'] ]

// To Get Filtered(falsy) values

const [filtered] = bifurcateBy(["beep", "boop", undefined, null, 1], Boolean); // filtered == ["beep", "boop", 1]

assertEquals(
  bifurcate(["beep", "boop", "foo", "bar"], (item: string) =>
    item.startsWith("b")
  ),
  [["beep", "boop", "bar"], ["foo"]]
);
```
