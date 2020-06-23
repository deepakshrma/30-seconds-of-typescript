type StringOrNumber = string | number;

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
 * @param fn {(t: T) => boolean } Predicate, default Boolean
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
 * @param fn {(t: T) => boolean } Predicate, default Boolean
 */
export const any = <T extends any>(arr: T[], fn: (t: T) => boolean = Boolean) =>
  arr.some(fn);

/**
 * Same as any
 *
 * @param arr:{T[]} <T extends any>
 * @param fn {(t: T) => boolean } Predicate, default Boolean
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
 * @param arr
 * @param delimiter
 */
export const arrayToCSV = (arr: StringOrNumber[][], delimiter = ",") =>
  arr
    .map((v) =>
      v
        .map((x) => (typeof x === "string" ? `"${x.replace(/"/g, '""')}"` : x))
        .join(delimiter)
    )
    .join("\n");
