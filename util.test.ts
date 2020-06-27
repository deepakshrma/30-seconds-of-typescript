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
  bindAll,
  binomialCoefficient,
  both,
  capitalize,
  capitalizeEveryWord,
  castArray,
  celsiusToFahrenheit,
  chunk,
  compact,
  compactWhitespace,
  complement,
  compose,
  composeRight,
  containsWhitespace,
  countBy,
  countOccurrences,
  createEventHub,
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
Deno.test("binary #1", () => {
  const max = binary(Math.max)(1, 2, 3);
  assertEquals(max, 2);
  assertEquals(["2", "1", "0"].map(binary(Math.max)), [2, 1, 2]);
});

// bind
Deno.test("bind #1", () => {
  const freddy = { user: "fred" };
  function greet(this: typeof freddy, greeting: string, punctuation: string) {
    return greeting + " " + this.user + punctuation;
  }
  const freddyBound = bind(greet, freddy);
  assertEquals(freddyBound("hi", "!"), "hi fred!");
});

// bindAll
Deno.test("bindAll #1", () => {
  var user = {
    first: "deepak",
    last: "V",
    getName: function () {
      return `${this.first} ${this.last}`;
    },
    getSalute: function () {
      return `Mr. ${this.last}`;
    },
  };
  bindAll(user, "getName");
  assertEquals(user.getName(), "deepak V");
  assertEquals(user.getSalute(), "Mr. V");
});

// bindAll
Deno.test("bindAll #2", () => {
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
});

// binomialCoefficient
Deno.test("binomialCoefficient #1", () => {
  const result = binomialCoefficient(8, 2);
  assertEquals(result, 28);
  assertEquals(binomialCoefficient(5, 3), 10);
});

// both
Deno.test("both #1", () => {
  const isEven = (num: number) => num % 2 === 0;
  const isPositive = (num: number) => num > 0;
  const isPositiveEven = both(isEven, isPositive);
  assertEquals(isPositiveEven(4), true);
  assertEquals(isPositiveEven(-2), false);
});

// capitalize
Deno.test("capitalize #1", () => {
  assertEquals(capitalize("fooBar"), "FooBar");
  assertEquals(capitalize("fooBar", true), "Foobar");
});

// capitalizeEveryWord
Deno.test("capitalizeEveryWord #1", () => {
  assertEquals(capitalizeEveryWord("fooBar foo"), "FooBar Foo");
});

// castArray
Deno.test("castArray #1", () => {
  assertEquals(castArray("foo"), ["foo"]);
  assertEquals(castArray([1]), [1]);
});

// celsiusToFahrenheit
Deno.test("celsiusToFahrenheit #1", () => {
  assertEquals(celsiusToFahrenheit(33), 91.4);
});

// chunk
Deno.test("chunk #1", () => {
  assertEquals(chunk([1, 2, 3, 4, 5], 2), [[1, 2], [3, 4], [5]]);
});

// compact
Deno.test("compact #1", () => {
  assertEquals(
    compact([0, 1, false, 2, "", 3, "a", Number("e") * 23, NaN, "s", 34]),
    [1, 2, 3, "a", "s", 34]
  );
});

// compactWhitespace
Deno.test("compactWhitespace #1", () => {
  assertEquals(compactWhitespace("Lorem    Ipsum"), "Lorem Ipsum");
  assertEquals(compactWhitespace("Lorem \n Ipsum"), "Lorem Ipsum");
});

// complement
Deno.test("complement #1", () => {
  const isEven = (num: number) => num % 2 === 0;
  const isOdd = complement(isEven);
  assertEquals(isOdd(2), false);
  assertEquals(isOdd(3), true);
});
// compose
Deno.test("compose #1", () => {
  const add = (x: number, y: number) => x + y; // 13 + 3 = 16
  const add3 = (x: number) => [x + 3, 3]; // [10+3, 3] = [13, 3]
  const multiply = (x: number, y: number) => x * y; // 5* 2 = 10
  const multiplyAndAdd3 = compose(add, add3, multiply);
  assertEquals(multiplyAndAdd3(5, 2), 16);
});

// composeRight
Deno.test("composeRight #1", () => {
  const add = (x: number, y: number) => x + y; // 13 + 3 = 16
  const add3 = (x: number) => [x + 3, 3]; // [10+3, 3] = [13, 3]
  const multiply = (x: number, y: number) => x * y; // 5* 2 = 10
  const multiplyAndAdd3 = composeRight(multiply, add3, add);
  assertEquals(multiplyAndAdd3(5, 2), 16);
});

// containsWhitespace
Deno.test("containsWhitespace #1", () => {
  assertEquals(containsWhitespace("lorem"), false);
  assertEquals(containsWhitespace("lorem ipsum"), true);
});

// countBy
Deno.test("countBy #1", () => {
  assertEquals(countBy([6.1, 4.2, 6.3], Math.floor), { 4: 1, 6: 2 });
  assertEquals(countBy(["one", "two", "three"], "length"), { 3: 2, 5: 1 });
});

// countBy
Deno.test("countBy #2", () => {
  assertEquals(
    countBy(
      [{ name: "Deepak" }, { name: "Deepak2" }, { name: "Deepak" }],
      "name"
    ),
    { Deepak: 2, Deepak2: 1 }
  );
  assertEquals(
    countBy(
      [{ name: "Deepak" }, { name: "Deepak2" }, { name: "Deepak" }],
      (user: any) => user.name
    ),
    { Deepak: 2, Deepak2: 1 }
  );
});

// countOccurrences
Deno.test("countOccurrences #1", () => {
  assertEquals(countOccurrences([1, 1, 2, 1, 2, 3], 1), 3);
});

// createEventHub
Deno.test("createEventHub #1", () => {
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

  let increment = 0;
  const numEmitter = createEventHub<number>();
  const incrementHandler = () => increment++;
  numEmitter.on("increment", incrementHandler);
  numEmitter.emit("increment"); // `increment` variable is now 1
  numEmitter.emit("increment"); // `increment` variable is now 1
  numEmitter.off("increment", incrementHandler);
  numEmitter.emit("increment"); // `increment` variable is now 1
  assertEquals(increment, 2);

  let user: User | undefined;
  interface User {
    name: string;
  }
  const userEmitter = createEventHub<User>();
  const updateUser = (u: User) => (user = u);
  userEmitter.on("update", updateUser);
  userEmitter.emit("update", { name: "Deepak" });
  assertEquals(user, { name: "Deepak" });
});
