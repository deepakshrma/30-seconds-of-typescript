# 30-seconds-of-typescript

This repo is highly inspired by [30-seconds-of-code](https://github.com/30-seconds/30-seconds-of-code). I am converting all JS to Typescript so that it can be used for both Typescript and deno. It has utility function like lodash can be used and anywhere with simplicity.

**Note:** I am refactoring code and fixing bug along with conversion.

## How to use[Deno]

```ts
import { all } from "https://denopkg.com/deepakshrma/30-seconds-of-typescript/index.ts";
all([{ name: "D" }, { name: "D2" }], hasName); //true
```

## How to test using Deno

```bash
deno test util.test.ts
```

### Contribution

- Docs: [/docs](/docs)
- Util: [/util.ts](/util.ts)

The working website can be found at [https://deepakshrma.github.io/30-seconds-of-typescript/docs/all](https://deepakshrma.github.io/30-seconds-of-typescript/docs/all)

This website is build using docusaurus.
