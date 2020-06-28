declare global {
  let document: any;
}
export type StringOrNumber = string | number;
export type Predicate<T> = (item: T) => boolean;
export type Func<T = any> = (...args: T[]) => any;
/**
 * Guard Function to check string type
 *
 * @param str {string|T}
 */
export function isString<T extends any>(str: string | T): str is string {
  return typeof str === "string";
}
export function isValidDate(date: Date) {
  return date instanceof Date && !isNaN(date.getTime());
}
/**
 * Returns an array of partial sums.
 * Use `Array.prototype.reduce()`, `Array.prototype.slice(-1)` and the unary `+` operator to add each value to the unary array containing the previous sum.
 *
 * @param nums {number[]} array of numbers
 */
export const accumulate = (...nums: number[]): number[] =>
  nums.reduce((acc: number[], n) => [...acc, n + +acc.slice(-1)], []);

/**
 * Returns `true` if the provided predicate function returns `true` for all elements in a collection, `false` otherwise.
 *
 * @param arr:{T[]} <T extends any>
 * @param fn {function} {(t: T) => boolean } Predicate, default Boolean
 */
export const all = <T extends any>(arr: T[], fn: (t: T) => boolean = Boolean) =>
  arr.every(fn);

/**
 * Check if all elements in an array are equal.
 *
 * @param arr {T[]} <T extends any>
 */
export const allEqual = <T extends any>(arr: T[]) =>
  arr.every((val) => val === arr[0]);

/**
 * Returns `true` if both arguments are `true`, `false` otherwise.
 *
 * @param a {any}
 * @param b {any}
 */
export const and = <T extends any = boolean>(a: T, b: T) =>
  Boolean(a) && Boolean(b);

/**
 * Returns `true` if the provided predicate function returns `true` for at least one element in a collection, `false` otherwise.
 * Use `Array.prototype.some()` to test if any elements in the collection return `true` based on `fn`.
 * Omit the second argument, `fn`, to use `Boolean` as a default.
 *
 * @param arr:{T[]} <T extends any>
 * @param fn {function} {(t: T) => boolean } Predicate, default Boolean
 */
export const any = <T extends any>(arr: T[], fn: (t: T) => boolean = Boolean) =>
  arr.some(fn);

/**
 * Same as any
 *
 * @param arr:{T[]} <T extends any>
 * @param fn {function} {(t: T) => boolean } Predicate, default Boolean
 */
export const some = <T extends any>(
  arr: T[],
  fn: (t: T) => boolean = Boolean,
) => arr.some(fn);

/**
 * Returns an array of `n`-tuples of consecutive elements.
 *
 * Use `Array.prototype.slice()` and `Array.prototype.map()` to create an array of appropriate length and populate it with `n`-tuples of consecutive elements from `arr`.
 * If `n` is greater than the length of `arr`, return an empty array.
 *
 * @param n
 * @param arr
 */
export const aperture = <T extends any>(n: number, arr: T[]) =>
  n >= arr.length
    ? []
    : arr.slice(n - 1).map((v, i) => [...arr.slice(i, i + n - 1), v]);

/**
 * Checks if two numbers are approximately equal to each other.
 *
 * Use `Math.abs()` to compare the absolute difference of the two values to `epsilon`.
 * Omit the third parameter, `epsilon`, to use a default value of `0.001`.
 * @param v1 {number}
 * @param v2 {number}
 * @param epsilon {number} default 0.001
 */
export const approximatelyEqual = (
  v1: number,
  v2: number,
  epsilon: number = 0.001,
) => Math.abs(v1 - v2) < epsilon;

/**
 * Converts a 2D array to a comma-separated values (CSV) string.
 *
 * Use `Array.prototype.map()` and `Array.prototype.join(delimiter)` to combine individual 1D arrays (rows) into strings.
 * Use `Array.prototype.join('\n')` to combine all rows into a CSV string, separating each row with a newline.
 * Omit the second argument, `delimiter`, to use a default delimiter of `,`.
 *
 * @param arr {(string | number)[][]}
 * @param delimiter {string} default  ","
 */
export const arrayToCSV = (arr: (string | number)[][], delimiter = ",") =>
  arr
    .map((v) =>
      v
        .map((x) => (typeof x === "string" ? `"${x.replace(/"/g, '""')}"` : x))
        .join(delimiter)
    )
    .join("\n");

/**
 * Converts the given array elements into `<li>` tags and appends them to the list of the given id.
 * Use `Array.prototype.map()`, `document.querySelector()`, and an anonymous inner closure to create a list of html tags.
 *
 * @param arr {(string | number)[]}
 * @param listID {string}
 */
export const arrayToHtmlList = (arr: (string | number)[], listID: string) => {
  let el = document.querySelector("#" + listID);
  if (el) {
    el.innerHTML += arr.map((item) => `<li>${item}</li>`).join("");
  }
};

/**
 * Creates a function that accepts up to `n` arguments, ignoring any additional arguments.
 *
 * Call the provided function, `fn`, with up to `n` arguments, using `Array.prototype.slice(0, n)` and the spread operator (`...`).
 *
 * @param fn {function} {(...args: T[]) => any}
 * @param n {number}
 */
export const ary = <T extends any>(fn: (...args: T[]) => any, n: number) =>
  (
    ...args: T[]
  ) => fn(...args.slice(0, n));

// export const atob = (str: string) => Deno.Buffer.from(str, 'base64').toString('binary');

/**
 * Attempts to invoke a function with the provided arguments, returning either the result or the caught error object.
 *
 * Use a `try... catch` block to return either the result of the function or an appropriate error.
 *
 * @param fn {function} {(...args: any[]) => any}
 * @param args {any[]}
 */
export const attempt = (fn: (...args: any[]) => any, ...args: any[]) => {
  try {
    return fn(...args);
  } catch (e) {
    return e instanceof Error ? e : new Error(e);
  }
};

/**
 * Attempts to invoke a function with the provided arguments, returning either the result or the caught error object.
 *
 * Use a `try... catch` block to return tuple of value and Error
 *
 * @param fn {function} {(...args: any[]) => any}
 * @param args {any[]}
 *
 * @returns [any, Error]
 */
export const attempt2 = (fn: (...args: any[]) => any, ...args: any[]) => {
  try {
    return [fn(...args), null];
  } catch (e) {
    return [null, e instanceof Error ? e : new Error(e)];
  }
};

/**
 * Returns the average of two or more numbers.
 *
 * Use `Array.prototype.reduce()` to add each value to an accumulator, initialized with a value of `0`, divide by the `length` of the array.
 * @param nums
 */
export const average = <T extends number>(...nums: number[]) =>
  nums.reduce((acc, val) => acc + val, 0) / nums.length;

/**
 * Returns the average of an array, after mapping each element to a value using the provided function.
 *
 * Use `Array.prototype.map()` to map each element to the value returned by `fn`, `Array.prototype.reduce()` to add each value to an accumulator, initialized with a value of `0`, divide by the `length` of the array.
 *
 * type NumCollector<T> = (item: T) => number;
 * <T extends unknown>
 *
 * @param arr {T[]}
 * @param fn {NumCollector<T> | string}
 */
type NumCollector<T> = (item: T) => number;
export const averageBy = <T extends any>(
  arr: T[],
  fn: NumCollector<T> | string,
) => {
  const mapper = typeof fn === "function" ? fn : (val: any) => val[fn];
  return arr.reduce((acc, val) => acc + mapper(val), 0) / arr.length;
};

/**
 * Splits values into two groups. If an element in `filter` is truthy, the corresponding element in the collection belongs to the first group; otherwise, it belongs to the second group.
 *
 * Use `Array.prototype.reduce()` and `Array.prototype.push()` to add elements to groups, based on `filter`.
 *
 * @param arr {T[]} , <T extends any>
 * @param filter {boolean[]}
 */
export const bifurcate = <T extends any>(arr: T[], filter: boolean[]) =>
  arr.reduce(
    (acc, val, i) => {
      acc[filter[i] ? 0 : 1].push(val);
      return acc;
    },
    [[] as T[], [] as T[]],
  );

/**
 * Splits values into two groups according to a predicate function, which specifies which group an element in the input collection belongs to. If the predicate function returns a truthy value, the collection element belongs to the first group; otherwise, it belongs to the second group.
 *
 * Use `Array.prototype.reduce()` and `Array.prototype.push()` to add elements to groups, based on the value returned by `fn` for each element.
 *
 * @param arr {T[]}, <T extends any>
 * @param filter {Predicate<T>}
 */
export const bifurcateBy = <T extends any>(arr: T[], filter: Predicate<T>) =>
  arr.reduce(
    (acc, val) => {
      acc[filter(val) ? 0 : 1].push(val);
      return acc;
    },
    [[] as T[], [] as T[]],
  );

/**
 * Creates a function that accepts up to two arguments, ignoring any additional arguments.
 * Call the provided function, `fn`, with the first two arguments given.
 *
 * @param fn {function} {(...args: any[]) => any}
 * @returns {function} ([v1, v2]: any[]) => fn(v1, v2)
 */
export const binary = (fn: (...args: any[]) => any) =>
  (...[v1, v2]: any[]) => fn(v1, v2);

/**
 * Creates a function that invokes `fn` with a given context, optionally adding any additional supplied parameters to the beginning of the arguments.
 *
 * Return a `function` that uses `Function.prototype.apply()` to apply the given `context` to `fn`.
 * Use `Array.prototype.concat()` to prepend any additional supplied parameters to the arguments.
 * @param fn
 * @param context
 * @param boundArgs
 */
export const bind = <T extends any>(
  fn: (...args: any[]) => any,
  context: T,
  ...boundArgs: any[]
) => (...args: any[]) => fn.apply(context, [...boundArgs, ...args]);

/**
 * Binds methods of an object to the object itself, overwriting the existing method
 * Use `Array.prototype.forEach()` to return a `function` that uses `Function.prototype.apply()` to apply the given context (`obj`) to `fn` for each function specified.
 *
 * @param obj {any}
 * @param fns {string[]}
 */
export const bindAll = (obj: any, ...fns: string[]) =>
  fns.forEach((key: string) => {
    if (typeof obj[key] === "function") {
      const f = obj[key];
      obj[key] = function (...args: any[]) {
        return f.apply(obj, args);
      };
    }
  });

/**
 * Evaluates the binomial coefficient of two integers `n` and `k`.
 *
 * Use `Number.isNaN()` to check if any of the two values is `NaN`.
 * Check if `k` is less than `0`, greater than or equal to `n`, equal to `1` or `n - 1` and return the appropriate result.
 * Check if `n - k` is less than `k` and switch their values accordingly.
 * Loop from `2` through `k` and calculate the binomial coefficient.
 * Use `Math.round()` to account for rounding errors in the calculation.
 *
 * @param n {number}
 * @param k {number}
 */
export const binomialCoefficient = (n: number, k: number): number => {
  if (Number.isNaN(n) || Number.isNaN(k)) return NaN;
  if (k < 0 || k > n) return 0;
  if (k === 0 || k === n) return 1;
  if (k === 1 || k === n - 1) return n;
  if (n - k < k) k = n - k;
  let res = n;
  for (let j = 2; j <= k; j++) res *= (n - j + 1) / j;
  return Math.round(res);
};

/**
 * Returns `true` if both functions return `true` for a given set of arguments, `false` otherwise.
 * Use the logical and (`&&`) operator on the result of calling the two functions with the supplied `args`.
 *
 * @param f
 * @param g
 */
export const both = <T extends any>(f: Func<T>, g: Func<T>) =>
  (...args: T[]) => f(...args) && g(...args);

// TODO: need refactor types

/**
 * Given a key and a set of arguments, call them when given a context. Primarily useful in composition.
 *
 * Use a closure to call a stored key with stored arguments.
 *
 * @param key {string}
 * @param args {any[]}
 */
export const call = (key: string, ...args: any[]) =>
  (context: any) => context[key](...args);

/**
 *   Capitalizes the first letter of a string.
 *
 * Use array destructuring and `String.prototype.toUpperCase()` to capitalize first letter, `...rest` to get array of characters after first letter and then `Array.prototype.join('')` to make it a string again.
 * Omit the `lowerRest` parameter to keep the rest of the string intact, or set it to `true` to convert to lowercase.
 *
 *
 * @param str {string}
 * @param lowerRest {boolean}
 */
export const capitalize = (str: string = "", lowerRest = false): string =>
  str.slice(0, 1).toUpperCase() +
  (lowerRest ? str.slice(1).toLowerCase() : str.slice(1));

/**
 * Capitalizes the first letter of every word in a string.
 * Use `String.prototype.replace()` to match the first character of each word and `String.prototype.toUpperCase()` to capitalize it.
 *
 * @param str {string}
 */
export const capitalizeEveryWord = (str: string = "") =>
  str.replace(/\b[a-z]/g, (char) => char.toUpperCase());

/**
 * Casts the provided value as an array if it's not one.
 *
 * Use `Array.prototype.isArray()` to determine if `val` is an array and return it as-is or encapsulated in an array accordingly.
 * @param val
 */
export const castArray = (val: any): any[] => Array.isArray(val) ? val : [val];

/**
 * Converts Celsius to Fahrenheit.
 * Follows the conversion formula `F =  1.8C + 32`.
 * @param degrees
 */
export const celsiusToFahrenheit = (degrees: number) => 1.8 * degrees + 32;

/**
 * Chunks an array into smaller arrays of a specified size.
 *
 * Use `Array.from()` to create a new array, that fits the number of chunks that will be produced.
 * Use `Array.prototype.slice()` to map each element of the new array to a chunk the length of `size`.
 * If the original array can't be split evenly, the final chunk will contain the remaining elements.
 *
 * @param arr {any[]}
 * @param size {number}
 */
export const chunk = (arr: any[], size: number) =>
  Array.from(
    { length: Math.ceil(arr.length / size) },
    (_: any, i: number) => arr.slice(i * size, i * size + size),
  );

/**
 * Add special characters to text to print in color in the console (combined with `console.log()`).
 *
 * Use template literals and special characters to add the appropriate color code to the string output.
 * For background colors, add a special character that resets the background color at the end of the string.
 */
export const colorize = new (class {
  color = (code: number, ended = false, ...messages: any[]) =>
    `\x1b[${code}m${messages.join(" ")}${ended ? "\x1b[0m" : ""}`;
  black = this.color.bind(null, 30, false);
  red = this.color.bind(null, 31, false);
  green = this.color.bind(null, 32, false);
  yellow = this.color.bind(this, 33, false);
  blue = this.color.bind(this, 34, false);
  magenta = this.color.bind(this, 35, false);
  cyan = this.color.bind(this, 36, false);
  white = this.color.bind(this, 37, false);
  bgBlack = this.color.bind(this, 40, true);
  bgRed = this.color.bind(this, 41, true);
  bgGreen = this.color.bind(this, 42, true);
  bgYellow = this.color.bind(this, 43, true);
  bgBlue = this.color.bind(this, 44, true);
  bgMagenta = this.color.bind(this, 45, true);
  bgCyan = this.color.bind(this, 46, true);
  bgWhite = this.color.bind(this, 47, true);
})();

/**
 * Add special characters to text to print in color in the console (combined with `console.log()`).
 *
 * Use template literals and special characters to add the appropriate color code to the string output.
 * For background colors, add a special character that resets the background color at the end of the string.
 */
export const color = colorize;

// console.log(colorize.black("foo")); // 'foo' (red letters)
// console.log(colorize.bgBlue("foo", "bar")); // 'foo bar' (blue background)
// console.log(colorize.bgWhite(colorize.yellow("foo"), colorize.green("foo"))); // 'foo bar' (first

/**
 * Removes falsy values from an array.
 * Use `Array.prototype.filter()` to filter out falsy values (`false`, `null`, `0`, `""`, `undefined`, and `NaN`).
 *
 * @param arr {any[]}
 */
export const compact = (arr: any[]) => arr.filter(Boolean);

/**
 * Returns a string with whitespaces compacted.
 * Use `String.prototype.replace()` with a regular expression to replace all occurrences of 2 or more whitespace characters with a single space.
 *
 * @param str {string}
 */
export const compactWhitespace = (str: string) => str.replace(/\s{2,}/g, " ");

/**
 * Returns a function that is the logical complement of the given function, `fn`.
 *
 * Use the logical not (`!`) operator on the result of calling `fn` with any supplied `args`.
 *
 * @param fn {Func<any>}
 */
export const complement = (fn: Func) => (...args: any[]) => !fn(...args);

/**
 * Performs right-to-left function composition.
 *
 * Use `Array.prototype.reduce()` to perform right-to-left function composition.
 * The last (rightmost) function can accept one or more arguments; the remaining functions must be unary.
 *
 * @param fns {...fns: Func<any>[]}
 */

export const compose = (...fns: Func[]) =>
  fns.reduce((f, g) => (...args: any[]) => f(...castArray(g(...args))));

/**
 * Performs left-to-right function composition.
 *
 * Use `Array.prototype.reduce()` to perform left-to-right function composition.
 * The first (leftmost) function can accept one or more arguments; the remaining functions must be unary. *
 * @param fns {...fns: Func<any>[]}
 */

export const composeRight = (...fns: Func[]) =>
  fns.reduce((f, g) => (...args: any[]) => g(...castArray(f(...args))));

/**
 * Returns `true` if the given string contains any whitespace characters, `false` otherwise.
 *
 * Use `RegExp.prototype.test()` with an appropriate regular expression to check if the given string contains any whitespace characters.
 *
 * @param str {string}
 */
export const containsWhitespace = (str: string) => /\s/.test(str);

/**
 * Groups the elements of an array based on the given function and returns the count of elements in each group.
 *
 * Use `Array.prototype.map()` to map the values of an array to a function or property name.
 * Use `Array.prototype.reduce()` to create an object, where the keys are produced from the mapped results.
 *
 * @param arr {T[]} here <T extends any>
 * @param fn fn: Func<T> | string
 */
export const countBy = <T extends any>(arr: T[], fn: Func<T> | string) => {
  const mapper = typeof fn === "function" ? fn : (val: any) => val[fn];
  return arr.reduce((acc, val) => {
    const value = mapper(val);
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {} as any);
};

/**
 * Counts the occurrences of a value in an array.
 *
 * Use `Array.prototype.reduce()` to increment a counter each time you encounter the specific value inside the array.
 *
 * @param arr {T[]}
 * @param val {T}
 */
export const countOccurrences = <T extends any>(arr: T[], val: T) =>
  arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

/**
 * Creates an element from a string (without appending it to the document).
 * if the given string contains multiple elements, only the first one will be returned.
 *
 * Use `document.createElement()` to create a new element.
 * Set its `innerHTML` to the string supplied as the argument.
 * Use `ParentNode.firstElementChild` to return the element version of the string.
 *
 * @param str { string }
 */
export const createElement = (str: string) => {
  const el = document.createElement("div");
  el.innerHTML = str;
  return el.firstElementChild;
};

/**
 * Creates a pub/sub ([publish–subscribe](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern)) event hub with `emit`, `on`, and `off` methods.
 *
 * Use `Object.create(null)` to create an empty `hub` object that does not inherit properties from `Object.prototype`.
 * For `emit`, resolve the array of handlers based on the `event` argument and then run each one with `Array.prototype.forEach()` by passing in the data as an argument.
 * For `on`, create an array for the event if it does not yet exist, then use `Array.prototype.push()` to add the handler
 * to the array.
 * For `off`, use `Array.prototype.findIndex()` to find the index of the handler in the event array and remove it using `Array.prototype.splice()`.
 *
 */
export const createEventHub = <T extends any>() => ({
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

/**
 * Converts a comma-separated values (CSV) string to a 2D array.
 *
 * Use `Array.prototype.slice()` and `Array.prototype.indexOf('\n')` to remove the first row (title row) if `omitFirstRow` is `true`.
 * Use `String.prototype.split('\n')` to create a string for each row, then `String.prototype.split(delimiter)` to separate the values in each row.
 * Omit the second argument, `delimiter`, to use a default delimiter of `,`.
 * Omit the third argument, `omitFirstRow`, to include the first row (title row) of the CSV string.
 *
 * @param data {string}
 * @param delimiter {string} @default ","
 * @param omitFirstRow {boolean}  @default false
 */
export const CSVToArray = (
  data: string,
  delimiter = ",",
  omitFirstRow = false,
) =>
  data
    .slice(omitFirstRow ? data.indexOf("\n") + 1 : 0)
    .split("\n")
    .map((v) => v.split(delimiter));

/**
 * Converts a comma-separated values (CSV) string to a 2D array of objects.
 * The first row of the string is used as the title row.
 *
 * Use `Array.prototype.slice()` and `Array.prototype.indexOf('\n')` and `String.prototype.split(delimiter)` to separate the first row (title row) into values.
 * Use `String.prototype.split('\n')` to create a string for each row, then `Array.prototype.map()` and `String.prototype.split(delimiter)` to separate the values in each row.
 * Use `Array.prototype.reduce()` to create an object for each row's values, with the keys parsed from the title row.
 * Omit the second argument, `delimiter`, to use a default delimiter of `,`.
 * @param data {string}
 * @param delimiter {string} @default ","
 */

type StringMap<T extends any = string> = { [key: string]: T };

export const CSVToJSON = (data: string, delimiter = ",") => {
  const titles: string[] = data.slice(0, data.indexOf("\n")).split(delimiter);
  return data
    .slice(data.indexOf("\n") + 1)
    .split("\n")
    .map((v) => {
      const values = v.split(delimiter);
      return titles.reduce(
        (obj, title, index) => ((obj[title] = values[index]), obj),
        {} as StringMap,
      );
    });
};

/**
 * Curries a function.
 *
 * Use recursion.
 * If the number of provided arguments (`args`) is sufficient, call the passed function `fn`.
 * Otherwise, return a curried function `fn` that expects the rest of the arguments.
 * If you want to curry a function that accepts a variable number of arguments (a variadic function, e.g. `Math.min()`), you can optionally pass the number of arguments to the second parameter `arity`.
 *
 * @param fn {Func}
 * @param arity {number} number of argument `fn` can have
 * @param args {...any[]} var args, pass initial values
 */
export const curry = (fn: Func, arity = fn.length, ...args: any[]): any =>
  arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);

/**
 * dayOfYear: Gets the day of the year from a `Date` object.
 *
 * Use `new Date()` and `Date.prototype.getFullYear()` to get the first day of the year as a `Date` object, subtract it from the provided `date` and divide with the milliseconds in each day to get the result.
 * Use `Math.floor()` to appropriately round the resulting day count to an integer.
 *
 * @param date {Date| string}
 * */
export const dayOfYear = (date: Date | string): number => {
  if (isString<Date>(date)) {
    date = new Date(date);
  }
  if (!isValidDate(date)) throw new Error(`Invalid Date string`);
  return Math.floor(
    (date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) /
      1000 /
      60 /
      60 /
      24,
  );
};

/**
 * Creates a debounced function that delays invoking the provided function until at least `ms` milliseconds have elapsed since the last time it was invoked.
 *
 * Each time the debounced function is invoked, clear the current pending timeout with `clearTimeout()` and use `setTimeout()` to create a new timeout that delays invoking the function until at least `ms` milliseconds has elapsed. Use `Function.prototype.apply()` to apply the `this` context to the function and provide the necessary arguments.
 * Omit the second argument, `ms`, to set the timeout at a default of 0 ms.
 *
 * @param fn { Function }
 * @param ms {number} @default 300ms
 */
export const debounce = (fn: Function, ms = 300) => {
  let timeoutId: number;
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};

/**
 * Creates a deep clone of an object.
 *
 * Use recursion.
 * Check if the passed object is `null` and, if so, return `null`.
 * Use `Object.assign()` and an empty object (`{}`) to create a shallow clone of the original.
 * Use `Object.keys()` and `Array.prototype.forEach()` to determine which key-value pairs need to be deep cloned.
 *
 * @param obj {any}
 */
export const deepClone = (obj: any) => {
  if (obj === null) return null;
  let clone = { ...obj };
  Object.keys(clone).forEach(
    (
      key,
    ) => (clone[key] = typeof obj[key] === "object"
      ? deepClone(obj[key])
      : obj[key]),
  );
  return Array.isArray(obj) && obj.length
    ? (clone.length = obj.length) && Array.from(clone)
    : Array.isArray(obj)
    ? Array.from(obj)
    : clone;
};

/**
 * Deep flattens an array.
 *
 * Use recursion.[polyfill for `Array.prototype.flat`]
 * Use `Array.prototype.concat()` with an empty array (`[]`) and the spread operator (`...`) to flatten an array.
 * Recursively flatten each element that is an array.
 *
 * @param arr {any[]}
 */
export const deepFlatten = (arr: any[]): any[] => {
  if (typeof Array.prototype.flat !== "undefined") return arr.flat(Infinity);
  return [].concat(
    ...arr.map((v: any) => (Array.isArray(v) ? deepFlatten(v) : v)),
  );
};

/**
 * Deep freezes an object.
 *
 * Use `Object.keys()` to get all the properties of the passed object, `Array.prototype.forEach()` to iterate over them.
 * Call `Object.freeze(obj)` recursively on all properties, checking if each one is frozen using `Object.isFrozen()` and applying `deepFreeze()` as necessary.
 * Finally, use `Object.freeze()` to freeze the given object.
 *
 * @param obj
 */
export const deepFreeze = (obj: any) => {
  Object.keys(obj).forEach((prop) => {
    if (typeof obj[prop] === "object" && !Object.isFrozen(obj[prop])) {
      deepFreeze(obj[prop]);
    }
  });
  return Object.freeze(obj);
};

/**
 * Returns the target value in a nested JSON object, based on the `keys` array.
 *
 * Compare the keys you want in the nested JSON object as an `Array`.
 * Use `Array.prototype.reduce()` to get value from nested JSON object one by one.
 * If the key exists in object, return target value, otherwise, return `null`.
 *
 * @param obj {any}
 * @param keys {string | (string | number)[],}
 * @param defaultValue {null | undefined } @default undefined
 * @param delimiter {string} @default "."
 */
export const deepGet = (
  obj: any,
  keys: string | (string | number)[],
  defaultValue: null | undefined = undefined,
  delimiter = ".",
) => {
  if (isString(keys)) {
    keys = keys.split(delimiter);
  }
  return keys.reduce((xs, x) => (xs && xs[x] ? xs[x] : defaultValue), obj);
};

/**
 * Assigns default values for all properties in an object that are `undefined`.
 *
 * Use `Object.assign()` to create a new empty object and copy the original one to maintain key order, use spread operator `...` to combine the default values, finally use `obj` again to overwrite properties that originally had a value.
 *
 * @param obj {any}
 * @param defs {any[]}
 */
export const defaults = (obj: any, ...defs: any[]) =>
  Object.assign({}, obj, ...defs, obj);

/**
 * Invokes the provided function after `wait` milliseconds.
 *
 * Use `setTimeout()` to delay execution of `fn`.
 * Use the spread (`...`) operator to supply the function with an arbitrary number of arguments.
 *
 * @param fn {Func} any function
 * @param wait {number} in ms
 * @param args {any[]}, arguments for fn
 */
export const delay = (fn: Func, wait: number, ...args: any[]) =>
  setTimeout(fn, wait, ...args);

/**
 * Return a promise, Resolve after `wait` milliseconds.
 *
 * @param wait {number} in ms
 * @param args{any[]}, arguments for Promise
 */
export const delayedPromise = (wait: number = 300, ...args: any[]) =>
  new Promise((resolve) => {
    delay(resolve, wait, ...args);
  });
