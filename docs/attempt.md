---
id: attempt
sidebar_label: attempt
title: Attempt
tags: function,intermediate
---

Attempts to invoke a function with the provided arguments, returning either the result or the caught error object.

Use a `try... catch` block to return either the result of the function or an appropriate error.

```ts
const attempt = (fn, ...args) => {
  try {
    return fn(...args);
  } catch (e) {
    return e instanceof Error ? e : new Error(e);
  }
};
```

```ts
let elements = attempt(function (selector) {
  return document.querySelectorAll(selector);
}, ">_>");
if (elements instanceof Error) elements = []; // elements = []

const isValidNumber = (num: number) => {
  if (num >= 0) {
    return num;
  }
  throw new Error("Invalid number");
};
const ten = attempt(isValidNumber, 10);
assertEquals(ten, 10);

const error = attempt(isValidNumber, -1);
assertEquals(error instanceof Error, true);
assertEquals(error.message, "Invalid number");
```

### attempt2

Same as attempt but it return tuple of result and error.

```ts
const attempt2 = (fn: (...args: any[]) => any, ...args: any[]) => {
  try {
    return [fn(...args), null];
  } catch (e) {
    return [null, e instanceof Error ? e : new Error(e)];
  }
};
```

```ts
let [elements, error] = attempt2(function (selector) {
  return document.querySelectorAll(selector);
}, ">_>");
if (error instanceof Error) elements = []; // elements = []

const isValidNumber = (num: number) => {
  if (num >= 0) {
    return num;
  }
  throw new Error("Invalid number");
};
const [ten] = attempt2(isValidNumber, 10);
assertEquals(ten, 10);

const [res, error] = attempt2(isValidNumber, -1);
assertEquals(res, null);
assertEquals(error instanceof Error, true);
assertEquals(error.message, "Invalid number");
```
