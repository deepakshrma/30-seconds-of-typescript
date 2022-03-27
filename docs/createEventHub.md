---
title: createEventHub
tags: [browser, event, advanced]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "createEventHub" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Creates a pub/sub ([publish–subscribe](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern)) event hub with `emit`, `on`, and `off` methods.

Use `Object.create(null)` to create an empty `hub` object that does not inherit properties from `Object.prototype`.
For `emit`, resolve the array of handlers based on the `event` argument and then run each one with `Array.prototype.forEach()` by passing in the data as an argument.
For `on`, create an array for the event if it does not yet exist, then use `Array.prototype.push()` to add the handler
to the array.
For `off`, use `Array.prototype.findIndex()` to find the index of the handler in the event array and remove it using `Array.prototype.splice()`.

```ts title="typescript"
const createEventHub = <T = any>() => ({
  hub: Object.create(null),
  emit(event: string, data?: T) {
    (this.hub[event] || []).forEach((handler: Func<T | undefined>) =>
      handler(data)
    );
  },
  on(event: string, handler: Func<T>) {
    if (!this.hub[event]) this.hub[event] = [];
    this.hub[event].push(handler);
  },
  off(event: string, handler: Func<T>) {
    const i = (this.hub[event] || []).findIndex((h: Func<T>) => h === handler);
    if (i > -1) this.hub[event].splice(i, 1);
    if (this.hub[event]?.length === 0) delete this.hub[event];
  },
});
```

**Basic String emitter:**

```ts title="typescript"
const handler = (data: string) => console.log(data);
const hub = createEventHub<string>();

// Subscribe: listen for different types of events
hub.on("message", handler);
hub.on("message", () => console.log("Message event fired"));

// Publish: emit events to invoke all handlers subscribed to them, passing the data to them as an argument
hub.emit("message", "hello world"); // logs 'hello world' and 'Message event fired'

// Unsubscribe: stop a specific handler from listening to the 'message' event
hub.off("message", handler);
hub.emit("message", "hello world");
```

**Number Incremental:**

```ts title="typescript"
let increment = 0;
const numEmitter = createEventHub<number>();
const incrementHandler = () => increment++;
numEmitter.on("increment", incrementHandler);
numEmitter.emit("increment"); // `increment` variable is now 1
numEmitter.emit("increment"); // `increment` variable is now 1
numEmitter.off("increment", incrementHandler);
numEmitter.emit("increment"); // `increment` variable is now 1
assertEquals(increment, 2);
```

**User Emitter:**

```ts title="typescript"
interface User {
  name: string;
}
let user: User | undefined;
const userEmitter = createEventHub<User>();
const updateUser = (u: User) => (user = u);
userEmitter.on("update", updateUser);
userEmitter.emit("update", { name: "Deepak" });

assertEquals(user, { name: "Deepak" });
```
