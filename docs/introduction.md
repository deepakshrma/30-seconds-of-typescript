---
title: 30-seconds-of-typescript
tags: introduction, beginner
---

![TS](https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square)
![Deno](https://img.shields.io/badge/supports-deno-green.svg?style=flat-square)
![ECMAScript](https://img.shields.io/badge/supports-ECMAScript-yellow.svg?style=flat-square)
![GitHub](https://img.shields.io/github/license/deepakshrma/30-seconds-of-typescript)

This repo is collection of multiple utility function `Like lodash`, that can be used and anywhere with simply importing.

All the documents can be found on [30-seconds-of-typescript](https://deepakshrma.github.io/30-seconds-of-typescript/docs/)

**Note:** This repo is highly inspired by [30-seconds-of-code](https://github.com/30-seconds/30-seconds-of-code). I am converting all JS to Typescript so that it can be used for Typescript, Modern HTML|JS and Deno. [Github](https://github.com/deepakshrma/30-seconds-of-typescript/)

**_I am refactoring code and fixing bug along with conversion._**

## Install nodejs/npm

```bash
npm i @deepakvishwakarma/ts-util
```

### How to use Typescript

```ts
import { mask } from "@deepakvishwakarma/ts-util";

console.log(mask(1234567890)); // '******7890'
console.log(mask(1234567890, 3)); // '*******890'
console.log(mask(1234567890, -4, "$")); // '$$$$567890'
```

### How to use JS

```ts
const { mask } = require("@deepakvishwakarma/ts-util");

console.log(mask(1234567890)); // '******7890'
console.log(mask(1234567890, 3)); // '*******890'
console.log(mask(1234567890, -4, "$")); // '$$$$567890'
```

## Install Snippet Extension

You can find working plugin on `marketplace.visualstudio.com`. You can either search for `30-seconds-of-typescript` Or Install from here [imdeepak.30-seconds-of-typescript](https://marketplace.visualstudio.com/items?itemName=imdeepak.30-seconds-of-typescript)

### Search for snippet- Sample[typescript & typescriptreact]

```bash
30_delay
```

![assets/snippets.gif](https://github.com/deepakshrma/30-seconds-of-typescript/raw/master/assets/snippets.gif)

This repo has utility file, that can be imported to Deno and modern EcmaScript.

## How to use [Deno]

```ts
import { all } from "https://denopkg.com/deepakshrma/30-seconds-of-typescript/util.ts";
all([{ name: "D" }, { name: "D2" }], hasName); //true
```

## How to modern HTML|JS(Using Github CDN)

```html
<script type="module">
  // Use any Github CDN
  import * as util from "https://cdn.jsdelivr.net/gh/deepakshrma/30-seconds-of-typescript/util.js";
  const el = util.createElement(
    `<div class="container"><p>Hello! This is created using createElement!! </p></div>`
  );
  document.body.appendChild(el);
</script>
```

### Contribution

- Docs: [/docs](/docs)
- Util: [/util.ts](/util.ts)

#### Create New utility function

`export here` [util.ts](https://github.com/deepakshrma/30-seconds-of-typescript/blob/master/util.ts)

**How to bundle:** It will be auto using husky githook

### How to test using Deno

```bash
deno test util.test.ts
```

#### Commands | Scripts

**1. Generate Snippets:**

```bash
npm run code-gen
```

**2. Generate Extension:**

```bash
npm run extension
```

**3. Install Extension Locally:**

```bash
code --install-extension *.vsix
```

Note: This website is build using docusaurus.
