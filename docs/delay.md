---
title: delay
tags: function,intermediate
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Invokes the provided function after `wait` milliseconds.

Use `setTimeout()` to delay execution of `fn`.
Use the spread (`...`) operator to supply the function with an arbitrary number of arguments.

```ts
const delay = (fn: Func, wait: number, ...args: any[]) =>
  setTimeout(fn, wait, ...args);

// Return a promise, Resolve after `wait` milliseconds.
const delayedPromise = (wait: number = 300, ...args: any[]) =>
  new Promise((resolve) => {
    delay(resolve, wait, ...args);
  });
```

```ts
delay(
  function (text) {
    console.log(text);
  },
  1000,
  "later"
); // Logs 'later' after one second.

// delayedPromise
let counter = 0;
const updateState = () => {
  counter++;
};
const debouncedUpdate = debounce(updateState);
debouncedUpdate(); // counter == 1
debouncedUpdate(); // counter == 1
await delayedPromise(); // counter == 1
assertEquals(counter, 1);
```
