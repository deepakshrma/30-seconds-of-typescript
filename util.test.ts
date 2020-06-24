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
  arrayToHtmlList,
  ary,
  attempt,
  attempt2,
  average,
  averageBy,
  bifurcate,
  bifurcateBy,
  binary,
  bind,
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

// Mock document
const elm = { innerHTML: "" };
let document = {
  elm,
  querySelector: (id: string): any => {
    return elm;
  },
};

// TODO
// // arrayToHtmlList
// Deno.test("aperture #1", () => {
//   arrayToHtmlList([1, 2, 3, "test"], "fakeid");
//   assertEquals(
//     document.elm.innerHTML,
//     `<li>1</li><li>2</li><li>3</li><li>test</li>`
//   );
//   document.elm.innerHTML = "";
//   arrayToHtmlList(["item1", "item2"], "myListID");
//   assertEquals(document.elm.innerHTML, `<li>item1</li><li>item2</li>`);
// });

// ary
Deno.test("ary #1", () => {
  const firstTwoMax = ary(Math.max, 2);
  assertEquals(
    [[2, 6, 12], [6, 4, 8], [10]].map((x) => firstTwoMax(...x)),
    [6, 6, 10]
  );
});

// attempt
Deno.test("attempt #1", () => {
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
});

// attempt2
Deno.test("attempt2 #1", () => {
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
});

// average
Deno.test("average #1", () => {
  assertEquals(average(1, 2, 3, 4), 2.5);
  assertEquals(average(...[1, 2, 3]), 2);
});

// averageBy
Deno.test("averageBy #1", () => {
  assertEquals(
    averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], (o: any) => o.n),
    5
  );
  assertEquals(averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], "n"), 5);
});

// bifurcate
Deno.test("bifurcate #1", () => {
  assertEquals(
    bifurcate(["beep", "boop", "foo", "bar"], [true, true, false, true]),
    [["beep", "boop", "bar"], ["foo"]]
  );
});

// bifurcateBy
Deno.test("bifurcateBy #2", () => {
  const [filtered] = bifurcateBy(["beep", "boop", undefined, null, 1], Boolean);
  assertEquals(filtered, ["beep", "boop", 1]);
});
// binary
Deno.test("binary #2", () => {
  const max = binary(Math.max)(1, 2, 3);
  assertEquals(max, 2);
  assertEquals(["2", "1", "0"].map(binary(Math.max)), [2, 1, 2]);
});

// bind
Deno.test("bind #2", () => {
  const freddy = { user: "fred" };
  function greet(this: typeof freddy, greeting: string, punctuation: string) {
    return greeting + " " + this.user + punctuation;
  }
  const freddyBound = bind(greet, freddy);
  assertEquals(freddyBound("hi", "!"), "hi fred!");
});
