import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { accumulate, all, allEqual } from "./util.ts";

// accumulate
Deno.test("accumulate #1", () => {
  assertEquals(accumulate(1, 2, 3, 4), [1, 3, 6, 10]);
  assertEquals(accumulate(...[1, 2, 3, 4]), [1, 3, 6, 10]);
});

// all
Deno.test("all #1", () => {
  assertEquals(all([1, 2, 3, 4]), true);
  assertEquals(all([2, null, 1]), false);
});

// all
Deno.test("all #2", () => {
  const hasName = (user: any) => Boolean(user.name);
  assertEquals(all([{ name: "D" }, { name: "D2" }], hasName), true);
  assertEquals(all([{ name: "D" }, { name: "" }], hasName), false);
});

// allEqual
Deno.test("allEqual #1", () => {
  assertEquals(allEqual([1, 2, 3]), false);
  assertEquals(allEqual([1, 1, 1]), true);
});
