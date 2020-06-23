# 30-seconds-of-typescript

This repo is fully inspired by [30-seconds-of-code](https://github.com/30-seconds/30-seconds-of-code). I am converting all JS to Typescript so that this can be used fro both Typescript and deno.

## How to use[Deno]

```ts
import { all } from "https://denopkg.com/deepakshrma/30-seconds-of-coden/util.ts";
all([{ name: "D" }, { name: "D2" }], hasName); //true
```

## How to test using Deno

```bash
deno test util.test.ts
```

### Contribute

Docs: [/docs](/docs)
Util: [/util.ts](/util.ts)
