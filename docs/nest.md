---
title: nest
tags: [object, intermediate]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "nest" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Given a flat array of objects linked to one another, it will nest them recursively.
Useful for nesting comments, such as the ones on reddit.com.

Use recursion.
Use `Array.prototype.filter()` to filter the items where the `id` matches the `link`, then `Array.prototype.map()` to map each one to a new object that has a `children` property which recursively nests the items based on which ones are children of the current item.
Omit the second argument, `id`, to default to `null` which indicates the object is not linked to another one (i.e. it is a top level object).
Omit the third argument, `link`, to use `'parent_id'` as the default property which links the object to another one by its `id`.

```ts title="typescript"
const nest = (
  items: AnyObject[],
  id: number | null = null,
  link = "parent_id"
): AnyObject =>
  items
    .filter((item) => item[link] === id)
    .map((item) => ({ ...item, children: nest(items, item.id, link) }));
```

```ts title="typescript"
// One top level comment
const comments = [
  { id: 1, parent_id: null },
  { id: 2, parent_id: 1 },
  { id: 3, parent_id: 1 },
  { id: 4, parent_id: 2 },
  { id: 5, parent_id: 4 },
];
const nestedComments = nest(comments); // [{ id: 1, parent_id: null, children: [...] }]
```
