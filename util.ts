export type StringOrNumber = string | number;
export type Predicate<T> = (item: T) => boolean;

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
  fn: (t: T) => boolean = Boolean
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
  epsilon: number = 0.001
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
declare global {
  let document: any;
}
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
export const ary = <T extends any>(fn: (...args: T[]) => any, n: number) => (
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
  fn: NumCollector<T> | string
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
    [[] as T[], [] as T[]]
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
    [[] as T[], [] as T[]]
  );

/**
 * Creates a function that accepts up to two arguments, ignoring any additional arguments.
 * Call the provided function, `fn`, with the first two arguments given.
 *
 * @param fn {function} {(...args: any[]) => any}
 * @returns {function} ([v1, v2]: any[]) => fn(v1, v2)
 */
export const binary = (fn: (...args: any[]) => any) => (...[v1, v2]: any[]) =>
  fn(v1, v2);

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
type Func<T> = (...args: T[]) => any;
export const both = <T extends any>(f: Func<T>, g: Func<T>) => (...args: T[]) =>
  f(...args) && g(...args);

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
export const castArray = (val: any): any[] =>
  Array.isArray(val) ? val : [val];

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
  Array.from({ length: Math.ceil(arr.length / size) }, (_: any, i: number) =>
    arr.slice(i * size, i * size + size)
  );
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

// console.log(colorize.black("foo")); // 'foo' (red letters)
// console.log(colorize.bgBlue("foo", "bar")); // 'foo bar' (blue background)
// console.log(colorize.bgWhite(colorize.yellow("foo"), colorize.green("foo"))); // 'foo bar' (first
