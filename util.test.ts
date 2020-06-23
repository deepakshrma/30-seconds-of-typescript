import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import {
  accumulate,
  all,
  allEqual,
  and,
  any,
  aperture,
  approximatelyEqual,
  arrayToCSV,
} from "./util.ts";

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

// and
Deno.test("and #1", () => {
  assertEquals(and(true, true), true);
  assertEquals(and(true, false), false);
  assertEquals(and(1, 2), true);
  assertEquals(and("1", "2"), true);
  assertEquals(and(1, 0), false);
});

// any
Deno.test("any #2", () => {
  assertEquals(
    any([1, 2, 3, 4], (x: number) => x >= 2),
    true
  );
  assertEquals(any([0, 0, 1, 0]), true);
});

// aperture
Deno.test("aperture #1", () => {
  assertEquals(aperture(2, [1, 2, 3, 4]), [
    [1, 2],
    [2, 3],
    [3, 4],
  ]);
  assertEquals(aperture(3, [1, 2, 3, 4]), [
    [1, 2, 3],
    [2, 3, 4],
  ]);
  assertEquals(aperture(5, [1, 2, 3, 4]), []);
});

// approximatelyEqual
Deno.test("approximatelyEqual #1", () => {
  assertEquals(approximatelyEqual(Math.PI / 2.0, 1.5708), true);
  assertEquals(approximatelyEqual(Math.PI / 2.0, 1.5708, 0.000001), false); // 1.5707963267948966
});

// arrayToCSV
Deno.test("approximatelyEqual #1", () => {
  assertEquals(
    arrayToCSV([
      ["a", "b"],
      ["c", "d"],
    ]),
    `"a","b"\n"c","d"`
  );
  assertEquals(
    arrayToCSV(
      [
        ["a", "b"],
        ["c", "d"],
      ],
      ";"
    ),
    `"a";"b"\n"c";"d"`
  );
  assertEquals(
    arrayToCSV([
      ["a", '"b" great'],
      ["c", 3.1415],
    ]),
    `"a","""b"" great"\n"c",3.1415`
  );
});
