---
id: and
sidebar_label: and
title: And
tags: math,logic,beginner
---

Returns `true` if both arguments are `true`, `false` otherwise.

Use the logical and (`&&`) operator on the two given values.

```ts
const and = <T extends any = boolean>(a: T, b: T) =>
  Boolean(a) && Boolean(b);
```

```ts
and(true, true); // true
and(true, false); // false
and(false, false); // false
```
