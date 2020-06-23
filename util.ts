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
