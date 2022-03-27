---
title: bindAll
tags: [object, function, intermediate]
author_title: Deepak Vishwakarma
author_url: https://github.com/deepakshrma
author_image_url: https://avatars2.githubusercontent.com/u/7682731?s=400
description: Implementation of "bindAll" in typescript, javascript and deno.
image: https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![JS](https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)

Binds methods of an object to the object itself, overwriting the existing method.

Use `Array.prototype.forEach()` to return a `function` that uses `Function.prototype.apply()` to apply the given context (`obj`) to `fn` for each function specified.

```ts title="typescript"
export const bindAll = (obj: any, ...fns: string[]) =>
  fns.forEach((key: string) => {
    if (typeof obj[key] === "function") {
      const f = obj[key];
      obj[key] = function (...args: any[]) {
        return f.apply(obj, args);
      };
    }
  });
```

```ts title="typescript"
class User {
  #name = "Test";
  getName() {
    return this.#name;
  }
}
const user = new User();
bindAll(user, "getName");

const getName = user.getName;
assertEquals(getName(), "Test");

// JS
var view = {
  label: "docs",
  click: function () {
    console.log("clicked " + this.label);
  },
};
bindAll(view, "click");
jQuery(element).on("click", view.click); // Logs 'clicked docs' when clicked.
```

_React:_

```ts title="typescript"
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    bindAll(this, "handleClick", "handleMove");
  }

  handleClick() {
    // code
  }
  handleMove() {
    // code
  }
  render() {
    // code
  }
}
```
