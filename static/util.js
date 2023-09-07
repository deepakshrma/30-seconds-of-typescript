// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

var HTMLEscapeChars;
(function (HTMLEscapeChars) {
  HTMLEscapeChars["&"] = "&amp;";
  HTMLEscapeChars["<"] = "&lt;";
  HTMLEscapeChars[">"] = "&gt;";
  HTMLEscapeChars["'"] = "&#39;";
  HTMLEscapeChars['"'] = "&quot;";
})(HTMLEscapeChars || (HTMLEscapeChars = {}));
var HTMLUnEscapeChars;
(function (HTMLUnEscapeChars) {
  HTMLUnEscapeChars["&amp;"] = "&";
  HTMLUnEscapeChars["&lt;"] = "<";
  HTMLUnEscapeChars["&gt;"] = ">";
  HTMLUnEscapeChars["&#39;"] = "'";
  HTMLUnEscapeChars["&quot;"] = '"';
})(HTMLUnEscapeChars || (HTMLUnEscapeChars = {}));
const htmlEscapeReg = new RegExp(
  `[${Object.keys(HTMLEscapeChars).join("")}]`,
  "g"
);
const htmlUnEscapeReg = new RegExp(
  `${Object.keys(HTMLUnEscapeChars).join("|")}`,
  "g"
);
const accumulate = (...nums) =>
  nums.reduce((acc, n) => [...acc, n + +acc.slice(-1)], []);
const all = (arr, fn = Boolean) => arr.every(fn);
const allEqual = (arr) => arr.every((val) => val === arr[0]);
const and = (a, b) => Boolean(a) && Boolean(b);
const any = (arr, fn = Boolean) => arr.some(fn);
const some = (arr, fn = Boolean) => arr.some(fn);
const aperture = (n, arr) =>
  n >= arr.length
    ? []
    : arr.slice(n - 1).map((v, i) => [...arr.slice(i, i + n - 1), v]);
const approximatelyEqual = (v1, v2, epsilon = 0.001) =>
  Math.abs(v1 - v2) < epsilon;
const arrayToCSV = (arr, delimiter = ",") =>
  arr
    .map((v) =>
      v
        .map((x) => (typeof x === "string" ? `"${x.replace(/"/g, '""')}"` : x))
        .join(delimiter)
    )
    .join("\n");
const arrayToHtmlList = (arr, listID) => {
  let el = document.querySelector("#" + listID);
  if (el) {
    el.innerHTML += arr.map((item) => `<li>${item}</li>`).join("");
  }
};
const ary =
  (fn, n) =>
  (...args) =>
    fn(...args.slice(0, n));
const attempt = (fn, ...args) => {
  try {
    return fn(...args);
  } catch (e) {
    return e instanceof Error ? e : new Error(e);
  }
};
const attempt2 = (fn, ...args) => {
  try {
    return [fn(...args), null];
  } catch (e) {
    return [null, e instanceof Error ? e : new Error(e)];
  }
};
const average = (...nums) =>
  nums.reduce((acc, val) => acc + val, 0) / nums.length;
const averageBy = (arr, fn) => {
  const mapper = typeof fn === "function" ? fn : (val) => val[fn];
  return arr.reduce((acc, val) => acc + mapper(val), 0) / arr.length;
};
const bifurcate = (arr, filter) =>
  arr.reduce(
    (acc, val, i) => {
      acc[filter[i] ? 0 : 1].push(val);
      return acc;
    },
    [[], []]
  );
const bifurcateBy = (arr, filter) =>
  arr.reduce(
    (acc, val) => {
      acc[filter(val) ? 0 : 1].push(val);
      return acc;
    },
    [[], []]
  );
const binary =
  (fn) =>
  (...[v1, v2]) =>
    fn(v1, v2);
const bind =
  (fn, context, ...boundArgs) =>
  (...args) =>
    fn.apply(context, [...boundArgs, ...args]);
const bindAll = (obj, ...fns) =>
  fns.forEach((key) => {
    if (typeof obj[key] === "function") {
      const f = obj[key];
      obj[key] = function (...args) {
        return f.apply(obj, args);
      };
    }
  });
const binomialCoefficient = (n, k) => {
  if (Number.isNaN(n) || Number.isNaN(k)) return NaN;
  if (k < 0 || k > n) return 0;
  if (k === 0 || k === n) return 1;
  if (k === 1 || k === n - 1) return n;
  if (n - k < k) k = n - k;
  let res = n;
  for (let j = 2; j <= k; j++) res *= (n - j + 1) / j;
  return Math.round(res);
};
const both =
  (f, g) =>
  (...args) =>
    f(...args) && g(...args);
const call =
  (key, ...args) =>
  (context) =>
    context[key](...args);
const capitalize = (str = "", lowerRest = false) =>
  str.slice(0, 1).toUpperCase() +
  (lowerRest ? str.slice(1).toLowerCase() : str.slice(1));
const capitalizeEveryWord = (str = "") =>
  str.replace(/\b[a-z]/g, (__char) => __char.toUpperCase());
const castArray = (val) => (Array.isArray(val) ? val : [val]);
const celsiusToFahrenheit = (degrees) => 1.8 * degrees + 32;
const chunk = (arr, size) =>
  Array.from(
    {
      length: Math.ceil(arr.length / size),
    },
    (_, i) => arr.slice(i * size, i * size + size)
  );
const colorize = new (class {
  color = (code, ended = false, ...messages) =>
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
const colors = colorize;
const compact = (arr) => arr.filter(Boolean);
const compactWhitespace = (str) => str.replace(/\s{2,}/g, " ");
const complement =
  (fn) =>
  (...args) =>
    !fn(...args);
const compose = (...fns) =>
  fns.reduce(
    (f, g) =>
      (...args) =>
        f(...castArray(g(...args)))
  );
const composeRight = (...fns) =>
  fns.reduce(
    (f, g) =>
      (...args) =>
        g(...castArray(f(...args)))
  );
const contains = (s1, s2 = "") =>
  s1.toLowerCase().indexOf(s2.toLowerCase()) !== -1;
const containsWhitespace = (str) => /\s/.test(str);
const countBy = (arr, fn) => {
  const mapper = typeof fn === "function" ? fn : (val) => val[fn];
  return arr.reduce((acc, val) => {
    const value = mapper(val);
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});
};
const countOccurrences = (arr, val) =>
  arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
const createElement = (str) => {
  const el = document.createElement("div");
  el.innerHTML = str;
  return el.firstElementChild;
};
const createEventHub = () => ({
  hub: Object.create(null),
  emit(event, data) {
    (this.hub[event] || []).forEach((handler) => handler(data));
  },
  on(event, handler) {
    if (!this.hub[event]) this.hub[event] = [];
    this.hub[event].push(handler);
  },
  off(event, handler) {
    const i = (this.hub[event] || []).findIndex((h) => h === handler);
    if (i > -1) this.hub[event].splice(i, 1);
    if (this.hub[event]?.length === 0) delete this.hub[event];
  },
});
const CSVToArray = (data, delimiter = ",", omitFirstRow = false) =>
  data
    .slice(omitFirstRow ? data.indexOf("\n") + 1 : 0)
    .split("\n")
    .map((v) => v.split(delimiter));
const CSVToJSON = (data, delimiter = ",") => {
  const titles = data.slice(0, data.indexOf("\n")).split(delimiter);
  return data
    .slice(data.indexOf("\n") + 1)
    .split("\n")
    .map((v) => {
      const values = v.split(delimiter);
      return titles.reduce(
        (obj, title, index) => ((obj[title] = values[index]), obj),
        {}
      );
    });
};
const curry = (fn, arity = fn.length, ...args) =>
  arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
const dayOfYear = (date) => {
  if (isString(date)) {
    date = new Date(date);
  }
  if (!isValidDate(date)) throw new Error(`Invalid Date string`);
  return Math.floor(
    (date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) /
      1000 /
      60 /
      60 /
      24
  );
};
const debounce = (fn, ms = 300) => {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};
const deepClone = (obj) => {
  if (obj === null) return null;
  let clone = {
    ...obj,
  };
  Object.keys(clone).forEach(
    (key) =>
      (clone[key] =
        typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key])
  );
  return Array.isArray(obj) && obj.length
    ? (clone.length = obj.length) && Array.from(clone)
    : Array.isArray(obj)
    ? Array.from(obj)
    : clone;
};
const deepFlatten = (arr) => {
  if (typeof Array.prototype.flat !== "undefined") return arr.flat(Infinity);
  return [].concat(...arr.map((v) => (Array.isArray(v) ? deepFlatten(v) : v)));
};
const deepFreeze = (obj) => {
  Object.keys(obj).forEach((prop) => {
    if (typeof obj[prop] === "object" && !Object.isFrozen(obj[prop])) {
      deepFreeze(obj[prop]);
    }
  });
  return Object.freeze(obj);
};
const deepGet = (obj, keys, defaultValue = undefined, delimiter = ".") => {
  if (isString(keys)) {
    keys = keys.split(delimiter);
  }
  return keys.reduce((xs, x) => (xs && xs[x] ? xs[x] : defaultValue), obj);
};
const defaults = (obj, ...defs) => Object.assign({}, obj, ...defs, obj);
const delay = (fn, wait, ...args) => setTimeout(fn, wait, ...args);
const delayedPromise = (wait = 300, ...args) =>
  new Promise((resolve) => {
    delay(resolve, wait, ...args);
  });
const either =
  (f, g) =>
  (...args) =>
    f(...args) || g(...args);
const equals = (a, b) => {
  if (a === b) return true;
  if (a instanceof Date && b instanceof Date) {
    return a.getTime() === b.getTime();
  }
  if (!a || !b || (typeof a !== "object" && typeof b !== "object")) {
    return a === b;
  }
  const objA = a;
  const objB = b;
  if (objA.prototype !== objA.prototype) return false;
  let keys = Object.keys(objA);
  if (keys.length !== Object.keys(objB).length) return false;
  return keys.every((k) => equals(objA[k], objB[k]));
};
const deepEquals = (a, b) => {
  if (a === b) return true;
  if (a instanceof Date && b instanceof Date) {
    return a.getTime() === b.getTime();
  }
  if (!a || !b || (typeof a !== "object" && typeof b !== "object")) {
    return a === b;
  }
  const objA = a;
  const objB = b;
  if (objA.prototype !== objA.prototype) return false;
  let keys = Object.keys(objA);
  if (keys.length !== Object.keys(objB).length) return false;
  return keys.every((k) => equals(objA[k], objB[k]));
};
const downloadCSV = (csvContent, name = "download.csv") => {
  var encodedUri = encodeURI(csvContent);
  var link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", name);
  document.body.appendChild(link);
  link.click();
};
const escapeHTML = (str) =>
  str.replace(htmlEscapeReg, (tag) => HTMLEscapeChars[tag] || tag);
const unescapeHTML = (str) =>
  str.replace(htmlUnEscapeReg, (tag) => HTMLUnEscapeChars[tag] || tag);
const escapeRegExp = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));
const memoize = (fn) => {
  const cache = new Map();
  const cached = function (val) {
    return cache.has(val)
      ? cache.get(val)
      : cache.set(val, fn.call(this, val)) && cache.get(val);
  };
  cached.cache = cache;
  return cached;
};
const fahrenheitToCelsius = (degrees) => ((degrees - 32) * 5) / 9;
const filterNonUnique = (arr) =>
  arr.filter((i) => arr.indexOf(i) === arr.lastIndexOf(i));
const filterNonUniqueBy = (arr, fn) =>
  arr.filter((v, i) => arr.every((x, j) => (i === j) === fn(v, x, i, j)));
const findKey = (obj, fn) =>
  Object.keys(obj).find((key) => fn(obj[key], key, obj));
const flatten = (arr, depth = 1) => {
  if (typeof Array.prototype.flat !== "undefined") return arr.flat(depth);
  return arr.reduce(
    (a, v) =>
      a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v),
    []
  );
};
const forEachRight = (array = [], callback) => {
  for (let index = array.length - 1; index >= 0; index--) {
    const element = array[index];
    callback(element, index, array);
  }
};
const formatDuration = (ms) => {
  ms = Math.abs(ms);
  const time = {
    day: Math.floor(ms / 86400000),
    hour: Math.floor(ms / 3600000) % 24,
    minute: Math.floor(ms / 60000) % 60,
    second: Math.floor(ms / 1000) % 60,
    millisecond: Math.floor(ms) % 1000,
  };
  return Object.entries(time)
    .filter((val) => val[1] !== 0)
    .map(([key, val]) => `${val} ${key}${val !== 1 ? "s" : ""}`)
    .join(", ");
};
const padLeft = (str, num = 2, fill = "0") => String(str).padStart(num, fill);
const formatDate = (formatStr, date) => {
  const d = new Date(date);
  const time = {
    YY: padLeft(d.getFullYear()).substr(2, 4),
    YYYY: padLeft(d.getFullYear()),
    MM: padLeft(d.getMonth() + 1),
    DD: padLeft(d.getDate()),
    hh: padLeft(d.getHours()),
    mm: padLeft(d.getMinutes()),
    ss: padLeft(d.getSeconds()),
    M: padLeft(d.getMilliseconds(), 3),
  };
  return formatStr.replace(
    new RegExp(`${Object.keys(time).join("|")}`, "g"),
    (subStr) => {
      return time[subStr] || "";
    }
  );
};
const get = (from, selector, defaultValue = undefined) =>
  selector
    .replace(/\[([^\[\]]*)\]/g, ".$1.")
    .split(".")
    .filter((t) => t !== "")
    .reduce((prev, cur) => prev && prev[cur], from) || defaultValue;
const getAll = (from, ...selectors) => [...selectors].map((s) => get(from, s));
const getBaseURL = (url) =>
  url.indexOf("?") > 0 ? url.slice(0, url.indexOf("?")) : url;
const getType = (v) =>
  v === undefined
    ? "undefined"
    : v === null
    ? "null"
    : v.constructor.name.toLowerCase();
const getURLParameters = (url) => {
  return (
    url.match(/([^?=&]+)(=([^&]*))/g)?.reduce((a, v) => {
      const [key, value] = v.split("=");
      if (a[key]) {
        a[key] = (typeof a[key] === "string" ? [a[key]] : a[key]).concat(value);
      } else {
        a[key] = value;
      }
      return a;
    }, {}) ?? {}
  );
};
const mapToObject = (map) => {
  let result = {};
  for (let [key, value] of map.entries()) {
    result[key] = value;
  }
  return result;
};
const groupBy = (arr, fn) =>
  arr.map(isString(fn) ? (val) => val[fn] : fn).reduce((acc, val, i) => {
    acc[val] = (acc[val] || []).concat(arr[i]);
    return acc;
  }, {});
const hasFlags = (args, ...flags) =>
  flags.every((flag) =>
    args.includes(/^-{1,2}/.test(flag) ? flag : "--" + flag)
  );
const hexToRGB = (hex) => {
  hex = hex.startsWith("#") ? hex.slice(1) : hex;
  if (hex.length === 3) {
    hex = Array.from(hex).reduce((str, x) => str + x + x, "");
  }
  const values = hex
    .split(/([a-z0-9]{2,2})/)
    .filter(Boolean)
    .map((x) => parseInt(x, 16));
  return `rgb${values.length == 4 ? "a" : ""}(${values.join(", ")})`;
};
const hexToRGB2 = (hex) => {
  let hexChars = Array.from(hex.startsWith("#") ? hex.slice(1) : hex);
  if (hexChars.length === 3) {
    hexChars = hexChars.reduce((str, x) => [...str, x, x], []);
  }
  const values = chunk(hexChars, 2).map(([v1, v2]) => parseInt(v1 + v2, 16));
  return `rgb${values.length == 4 ? "a" : ""}(${values.join(", ")})`;
};
const hide = (...el) => [...el].forEach((e) => (e.style.display = "none"));
const httpsRedirect = () => {
  if (location.protocol !== "https:")
    location.replace("https://" + location.href.split("//")[1]);
};
const includesAll = (arr, values) => values.every((v) => arr.includes(v));
const indentString = (str, count, indent = " ") => {
  indent = indent.repeat(count);
  return str.replace(/^/gm, indent);
};
const isFunction = (str) => {
  return typeof str === "function";
};
const isArrayLike = (obj) => {
  return (
    obj[Symbol.iterator] instanceof Function && obj.entries instanceof Function
  );
};
const isString = (str) => {
  return typeof str === "string";
};
function isValidDate(date) {
  return date instanceof Date && !isNaN(date.getTime());
}
const fillArray = (n, val = 0) => Array(n).fill(val);
const initializeArray = (n, val = 0) => Array(n).fill(val);
const inRange = (n, start, end) => {
  if (end && start > end) [end, start] = [start, end];
  return end === undefined ? n >= 0 && n < start : n >= start && n < end;
};
const insertAt = (arr, i, ...v) => {
  arr.splice(i + 1, 0, ...v);
  return arr;
};
const insertAtImmutable = (arr, i, ...v) => {
  return [...arr.slice(0, i + 1), ...v, ...arr.slice(i + 1)];
};
const intersection = (a, b) => {
  const s = new Set(b);
  return [...new Set(a)].filter((x) => s.has(x));
};
const intersectionBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return [...new Set(a)].filter((x) => s.has(fn(x)));
};
const intersectionWith = (a, b, comp) =>
  a.filter((x) => b.findIndex((y) => comp(x, y)) !== -1);
const is = (type, val) =>
  ![, null].includes(val) &&
  (isString(type) ? val.constructor.name === type : val.constructor === type);
const isAfterDate = (dateA, dateB) => dateA > dateB;
const isBeforeDate = (dateA, dateB) => dateA < dateB;
const isBrowser = () => ![typeof window, typeof document].includes("undefined");
const isEmpty = (val) => val == null || !(Object.keys(val) || val).length;
const isLeapYear = (year) => new Date(year, 1, 29).getMonth() === 1;
const isLowerCase = (str) => str === str.toLowerCase();
const isNil = (val) => val === undefined || val === null;
const isNull = (val) => val === null;
const isNumber = (val) => typeof val === "number" && val === val;
const isObject = (obj) => obj === Object(obj);
const isPlainObject = (val) =>
  !!val && typeof val === "object" && val.constructor === Object;
const isPrimitive = (val) => Object(val) !== val;
const isSameDate = (dateA, dateB) =>
  dateA.toISOString() === dateB.toISOString();
const isSorted = (arr) => {
  let direction = -(arr[0] - arr[1]);
  for (let [i, val] of arr.entries()) {
    direction = !direction ? -(arr[i - 1] - arr[i]) : direction;
    if (i === arr.length - 1)
      return !direction ? 0 : direction / Math.abs(direction);
    else if ((val - arr[i + 1]) * direction > 0) return 0;
  }
};
const isUpperCase = (str) => str === str.toUpperCase();
const isValidJSON = (str) => {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
};
const JSONtoCSV = (arr, columns, delimiter = ",") =>
  [
    columns.join(delimiter),
    ...arr.map((obj) =>
      columns.reduce(
        (acc, key) =>
          `${acc}${!acc.length ? "" : delimiter}"${!obj[key] ? "" : obj[key]}"`,
        ""
      )
    ),
  ].join("\n");
const last = (arr = []) => arr[arr.length - 1];
const listenOnce = (el, evt, fn) => {
  let fired = false;
  el.addEventListener(evt, (e) => {
    if (!fired) fn(e);
    fired = true;
  });
};
const lowercaseKeys = (obj, deep = false) =>
  Object.keys(obj).reduce((acc, key) => {
    acc[key.toLowerCase()] =
      deep && typeof obj[key] === "object" ? lowercaseKeys(obj[key]) : obj[key];
    return acc;
  }, {});
const mapKeys = (obj, fn) =>
  Object.keys(obj).reduce((acc, k) => {
    acc[fn(obj[k], k, obj)] = obj[k];
    return acc;
  }, {});
const mapObject = (arr, fn) =>
  arr.reduce((acc, el, i) => {
    acc[el] = fn(el, i, arr);
    return acc;
  }, {});
const mapString = (str, fn) => {
  const chars = [...str];
  return chars.map((c, i) => fn(c, i, chars)).join("");
};
const map = (array, fn) => {
  const chars = Array.isArray(array) ? array : [...array];
  return chars.map((c, i) => fn(c, i, chars));
};
const mask = (cc, num = 4, mask = "*") =>
  String(cc).slice(-num).padStart(String(cc).length, mask);
const matches = (obj, source) =>
  Object.keys(source).every(
    (key) => obj.hasOwnProperty(key) && obj[key] === source[key]
  );
const matchesWith = (obj, source, fn) =>
  Object.keys(source).every((key) =>
    obj.hasOwnProperty(key) && fn
      ? fn(obj[key], source[key], key, obj, source)
      : obj[key] == source[key]
  );
const maxBy = (arr, fn) =>
  Math.max(...arr.map(isString(fn) ? (val) => val[fn] : fn));
const maxDate = (dates) => new Date(Math.max(...dates.map(Number)));
const maxN = (arr, n = 1, order = 1) =>
  [...arr].sort((a, b) => order * (b - a)).slice(0, n);
const merge = (...objs) =>
  [...objs].reduce(
    (acc, obj) =>
      Object.keys(obj).reduce((a, k) => {
        acc[k] = acc.hasOwnProperty(k)
          ? [].concat(acc[k]).concat(obj[k])
          : obj[k];
        return acc;
      }, {}),
    {}
  );
const midpoint = ([x1, y1], [x2, y2]) => [(x1 + x2) / 2, (y1 + y2) / 2];
const minBy = (arr, fn) =>
  Math.min(...arr.map(isString(fn) ? (val) => val[fn] : fn));
const sortBy = (
  arr,
  $fn = (s1, s2) => order * String(s1).localeCompare(String(s2)),
  order = SortByOrder.ASC
) => {
  let fn = $fn;
  return [...arr].sort(fn);
};
var SortByOrder;
(function (SortByOrder) {
  SortByOrder[(SortByOrder["ASC"] = 1)] = "ASC";
  SortByOrder[(SortByOrder["DESC"] = -1)] = "DESC";
})(SortByOrder || (SortByOrder = {}));
const sortByKey = (arr, key, order = SortByOrder.ASC) => {
  return [...arr].sort(
    (s1, s2) => order * String(s1[key]).localeCompare(String(s2[key]))
  );
};
const mostFrequent = (arr) =>
  Object.entries(
    arr.reduce((a, v) => {
      a[String(v)] = a[String(v)] ? a[String(v)] + 1 : 1;
      return a;
    }, {})
  ).reduce((a, v) => (v[1] >= a[1] ? v : a), [-1, 0])[0];
const mostPerformant = (fns, iterations = 10000) => {
  const times = fns.map((fn) => {
    const before = performance.now();
    for (let i = 0; i < iterations; i++) fn();
    return performance.now() - before;
  });
  return times.indexOf(Math.min(...times));
};
const negate =
  (func) =>
  (...args) =>
    !func(...args);
const nest = (items, id = null, link = "parent_id") =>
  items
    .filter((item) => item[link] === id)
    .map((item) => ({
      ...item,
      children: nest(items, item.id, link),
    }));
const nodeListToArray = (nodeList) => [...nodeList];
const toArray = (arrLike) => [...arrLike];
const none = (arr, fn = Boolean) => !arr.some(fn);
const not = (a) => !a;
const nthArg =
  (n) =>
  (...args) =>
    args.slice(n)[0];
const nthElement = curry(
  (n = 0, arr) => (n === -1 ? arr.slice(n) : arr.slice(n, n + 1))[0],
  2
);
const objectToQueryString = (queryParameters) => {
  return queryParameters
    ? Object.entries(queryParameters).reduce(
        (queryString, [key, val], index) => {
          const symbol = queryString.length === 0 ? "?" : "&";
          queryString += val ? `${symbol}${key}=${val}` : "";
          return queryString;
        },
        ""
      )
    : "";
};
const offset = (arr, offset) => [...arr.slice(offset), ...arr.slice(0, offset)];
const omit = (obj, arr) =>
  Object.keys(obj)
    .filter((k) => !arr.includes(k))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});
const omitBy = (obj, fn) =>
  Object.keys(obj)
    .filter((k) => !fn(obj[k], k))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});
const or = (a, b) => a || b;
const orderBy = (arr, props, orders) =>
  [...arr].sort((a, b) =>
    props.reduce((acc, prop, i) => {
      if (acc === 0) {
        const [p1, p2] =
          orders && orders[i] === "desc"
            ? [b[prop], a[prop]]
            : [a[prop], b[prop]];
        acc = p1 > p2 ? 1 : p1 < p2 ? -1 : 0;
      }
      return acc;
    }, 0)
  );
const orderByFunc = (arr, props, fn) =>
  [...arr].sort((a, b) =>
    props.reduce((acc, prop, i) => {
      if (acc === 0) {
        const [p1, p2] = [a[prop], b[prop]];
        acc = fn(p1, p2, prop);
      }
      return acc;
    }, 0)
  );
const pad = (str, length, __char = " ") => {
  const s = String(str);
  return s.padStart((s.length + length) / 2, __char).padEnd(length, __char);
};
const parseCookie = (str) =>
  str
    .split(";")
    .map((v) => v.split("="))
    .reduce((acc, v) => {
      acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
      return acc;
    }, {});
const partial =
  (fn, ...partials) =>
  (...args) =>
    fn(...partials, ...args);
const partialRight =
  (fn, ...partials) =>
  (...args) =>
    fn(...args, ...partials);
const partition = (arr, fn) =>
  arr.reduce(
    (acc, val, i, arr) => {
      acc[fn(val, i, arr) ? 0 : 1].push(val);
      return acc;
    },
    [[], []]
  );
const partitionBy = (arr, fn) =>
  arr.reduce(
    ({ res, last }, v, i, a) => {
      const next = fn(v, i, a);
      if (next !== last) res.push([v]);
      else res[res.length - 1].push(v);
      return {
        res,
        last: next,
      };
    },
    {
      res: [],
    }
  ).res;
const pick = (obj, arr) =>
  arr.reduce((acc, curr) => (curr in obj && (acc[curr] = obj[curr]), acc), {});
const pickBy = (obj, fn) =>
  Object.keys(obj)
    .filter((k) => fn(obj[k], k))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});
const pipeAsyncFunctions =
  (...fns) =>
  (arg) =>
    fns.reduce((p, f) => p.then(f), Promise.resolve(arg));
const pipeFunctions = (...fns) =>
  fns.reduce(
    (f, g) =>
      (...args) =>
        g(f(...args))
  );
const pluralize = (num, word, plural = word + "s") =>
  [1, -1].includes(Number(num)) ? word : plural;
const prefix = (prop) => {
  const capitalizedProp = prop.charAt(0).toUpperCase() + prop.slice(1);
  const prefixes = ["", "webkit", "moz", "ms", "o"];
  const i = prefixes.findIndex(
    (prefix) =>
      typeof document.body.style[prefix ? prefix + capitalizedProp : prop] !==
      "undefined"
  );
  return i !== -1 ? (i === 0 ? prop : prefixes[i] + capitalizedProp) : null;
};
const prettyBytes = (num, precision = 3, addSpace = " ") => {
  const UNITS = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  if (Math.abs(num) < 1) return num + addSpace + UNITS[0];
  const exponent = Math.min(
    Math.floor(Math.log10(num < 0 ? -num : num) / 3),
    UNITS.length - 1
  );
  const n = Number(
    ((num < 0 ? -num : num) / 1000 ** exponent).toPrecision(precision)
  );
  return (num < 0 ? "-" : "") + n + addSpace + UNITS[exponent];
};
const prettyBytesT = (strings, bytes, precision = 3) => {
  return prettyBytes(bytes, precision, strings.join(""));
};
const promisify =
  (func) =>
  (...args) =>
    new Promise((resolve, reject) =>
      func(...args, (err, result) => (err ? reject(err) : resolve(result)))
    );
const radsToDegrees = (rad) => (rad * 180.0) / Math.PI;
const randomHexColorCode = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return "#" + n.slice(0, 6);
};
const randomInt = (min = 0, max = 100) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const randomNumber = (min = 0.0, max = 100.0) =>
  Math.random() * (max - min + 1) + min;
const reduceWhich = (arr, comparator = (a, b) => a - b) =>
  arr.reduce((a, b) => (comparator(a, b) >= 0 ? b : a));
const removeNonASCII = (str) => str.replace(/[^\x20-\x7E]/g, "");
const renderElement = ({ type, props = {} }, container) => {
  const isTextElement = !type;
  const element = isTextElement
    ? document.createTextNode("")
    : document.createElement(type);
  const isListener = (p) => p.startsWith("on");
  const isAttribute = (p) => !isListener(p) && p !== "children";
  Object.keys(props).forEach((p) => {
    if (isAttribute(p)) element[p] = props[p];
    if (!isTextElement && isListener(p))
      element.addEventListener(p.toLowerCase().slice(2), props[p]);
  });
  if (!isTextElement && props.children && props.children.length)
    props.children.forEach((childElement) =>
      renderElement(childElement, element)
    );
  container.appendChild(element);
};
const reverseString = (str) => {
  let s = "";
  for (let __char of str) {
    s = __char + s;
  }
  return s;
};
const RGBToHex = (r, g, b, hash = "") =>
  hash + ((r << 16) + (g << 8) + b).toString(16).padStart(6, "0");
const round = (n, decimals = 0) =>
  Number(`${Math.round(Number(`${n}e${decimals}`))}e-${decimals}`);
const runPromisesInSeries = (ps) =>
  ps.reduce((p, next) => p.then(next), Promise.resolve());
const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};
const serializeCookie = (name, val) =>
  `${encodeURIComponent(name)}=${encodeURIComponent(val)}`;
const show = (...el) => [...el].forEach((e) => (e.style.display = ""));
const shuffle = ([...arr]) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
};
const size = (val) =>
  Array.isArray(val)
    ? val.length
    : val && typeof val === "object"
    ? val.size || val.length || Object.keys(val).length
    : typeof val === "string"
    ? new Blob([val]).size
    : 0;
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const splitLines = (str) => str.split(/\r?\n/);
const spreadOver = (fn) => (argsArr) => fn(...argsArr);
const stableSort = (arr, compare) =>
  arr
    .map((item, index) => ({
      item,
      index,
    }))
    .sort((a, b) => compare(a.item, b.item) || a.index - b.index)
    .map(({ item }) => item);
const stripHTMLTags = (str) => str.replace(/<[^>]*>/g, "");
const sum = (...arr) => [...arr].reduce((acc, val) => acc + val, 0);
const sumBy = (arr, fn) => {
  return arr
    .map(typeof fn === "function" ? fn : (val) => val[fn])
    .reduce((acc, val) => acc + val, 0);
};
const tail = (arr) => (arr.length > 1 ? arr.slice(1) : arr);
const take = (arr, n = 1) => arr.slice(0, n);
const takeRight = (arr, n = 1) => arr.slice(arr.length - n, arr.length);
const takeWhile = (arr, func) =>
  arr.reduce((acc, el) => (func(el) ? acc : acc.concat(el)), []);
const takeRightWhile = (arr, func) =>
  arr.reduceRight((acc, el) => (func(el) ? acc : [el].concat(acc)), []);
const throttle = (fn, wait = 300) => {
  let inThrottle, lastFn, lastTime;
  return function () {
    const context = this,
      args = arguments;
    if (!inThrottle) {
      fn.apply(context, args);
      lastTime = Date.now();
      inThrottle = true;
    } else {
      clearTimeout(lastFn);
      lastFn = setTimeout(() => {
        if (Date.now() - lastTime >= wait) {
          fn.apply(context, args);
          lastTime = Date.now();
        }
      }, Math.max(wait - (Date.now() - lastTime), 0));
    }
  };
};
const times = (n, fn, context = undefined) => {
  let i = 0;
  let result;
  do {
    result = fn.call(context, i);
  } while (result !== false && ++i < n);
  return result;
};
const timeTaken = (callback) => {
  const id = `timeTaken_${Date.now()}`;
  console.time(id);
  const r = callback();
  console.timeEnd(id);
  return r;
};
const toCamelCase = (str) => {
  let s = str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    ?.map((x) => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
    .join("");
  return s && s.slice(0, 1).toLowerCase() + s.slice(1);
};
const toDecimalMark = (num) => num.toLocaleString("en-US");
const toKebabCase = (str) =>
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    ?.map((x) => x.toLowerCase())
    .join("-");
const humanizeUrl = (str, preserveUndersore = false, preserveCase = false) => {
  const re = preserveUndersore ? /[\W]+/g : /[\W_]+/g;
  return preserveCase
    ? str.replace(re, "-")
    : str.replace(re, "-").toLowerCase();
};
const toOrdinalSuffix = (num) => {
  const __int = parseInt(String(num)),
    digits = [__int % 10, __int % 100],
    ordinals = ["st", "nd", "rd", "th"],
    oPattern = [1, 2, 3, 4],
    tPattern = [11, 12, 13, 14, 15, 16, 17, 18, 19];
  return oPattern.includes(digits[0]) && !tPattern.includes(digits[1])
    ? __int + ordinals[digits[0] - 1]
    : __int + ordinals[3];
};
const toPairs = (obj) =>
  !obj
    ? []
    : isArrayLike(obj)
    ? Array.from(obj.entries())
    : Object.entries(obj);
const toSnakeCase = (str) =>
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    ?.map((x) => x.toLowerCase())
    .join("_");
const toTitleCase = (str) =>
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    ?.map((x) => x.charAt(0).toUpperCase() + x.slice(1))
    .join(" ");
const transform = (obj, fn, acc = {}) =>
  Object.keys(obj).reduce((a, k) => fn(a, obj[k], k, obj), acc);
const triggerEvent = (el, eventType, detail) =>
  el.dispatchEvent &&
  el.dispatchEvent(
    new CustomEvent(eventType, {
      detail,
    })
  );
const truncateString = (str, num = str.length, ellipsisStr = "...") =>
  str.length >= num
    ? str.slice(0, num >= ellipsisStr.length ? num - ellipsisStr.length : num) +
      ellipsisStr
    : str;
const ellipsis = (str, num = str.length, ellipsisStr = "...") =>
  str.length >= num
    ? str.slice(0, num >= ellipsisStr.length ? num - ellipsisStr.length : num) +
      ellipsisStr
    : str;
const unary = (fn) => (val) => fn(val);
const uncurry =
  (fn, n = 1) =>
  (...args) => {
    const next = (acc) => (args) => args.reduce((x, y) => x(y), acc);
    if (n > args.length) throw new RangeError("Arguments too few!");
    return next(fn)(args.slice(0, n));
  };
const union = (a, b) => Array.from(new Set([...a, ...b]));
const unionBy = (a, b, fn) => {
  const s = new Set(a.map(fn));
  return Array.from(new Set([...a, ...b.filter((x) => !s.has(fn(x)))]));
};
const unionWith = (a, b, comp) =>
  Array.from(
    new Set([...a, ...b.filter((x) => a.findIndex((y) => comp(x, y)) === -1)])
  );
const unique = (arr) => [...new Set(arr)];
const uniqueBy = (arr, fn) =>
  arr.reduce((acc, v) => {
    if (!acc.some((x) => fn(v, x))) acc.push(v);
    return acc;
  }, []);
const uniqueByRight = (arr, fn) =>
  arr.reduceRight((acc, v) => {
    if (!acc.some((x) => fn(v, x))) acc.push(v);
    return acc;
  }, []);
const unzip = (arr, size = 0) => {
  return arr.reduce(
    (acc, val) => (val.forEach((v, i) => acc[i].push(v)), acc),
    Array.from({
      length: size || Math.max(...arr.map((x) => x.length)),
    }).map(() => [])
  );
};
const unzipWith = (arr, fn, size = 0) =>
  arr
    .reduce(
      (acc, val) => (val.forEach((v, i) => acc[i].push(v)), acc),
      Array.from({
        length: size || Math.max(...arr.map((x) => x.length)),
      }).map((x) => [])
    )
    .map((val) => fn(...val));
const URLJoin = (...args) =>
  args
    .join("/")
    .replace(/[\/]+/g, "/")
    .replace(/^(.+):\//, "$1://")
    .replace(/^file:/, "file:/")
    .replace(/\/(\?|&|#[^!])/g, "$1")
    .replace(/\?/g, "&")
    .replace("&", "?");
const URLJoinWithParams = (url, params) => {
  return URLJoin(url, objectToQueryString(params));
};
const UUIDGeneratorBrowser = () =>
  (String(1e7) + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      Number(c) ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (Number(c) / 4)))
    ).toString(16)
  );
const validateNumber = (n) =>
  !isNaN(parseFloat(String(n))) && isFinite(Number(n)) && Number(n) == n;
const yesNo = (val, def = false) =>
  /^(y|yes)$/i.test(val) ? true : /^(n|no)$/i.test(val) ? false : def;
export { HTMLEscapeChars as HTMLEscapeChars };
export { HTMLUnEscapeChars as HTMLUnEscapeChars };
export { accumulate as accumulate };
export { all as all };
export { allEqual as allEqual };
export { and as and };
export { any as any };
export { some as some };
export { aperture as aperture };
export { approximatelyEqual as approximatelyEqual };
export { arrayToCSV as arrayToCSV };
export { arrayToHtmlList as arrayToHtmlList };
export { ary as ary };
export { attempt as attempt };
export { attempt2 as attempt2 };
export { average as average };
export { averageBy as averageBy };
export { bifurcate as bifurcate };
export { bifurcateBy as bifurcateBy };
export { binary as binary };
export { bind as bind };
export { bindAll as bindAll };
export { binomialCoefficient as binomialCoefficient };
export { both as both };
export { call as call };
export { capitalize as capitalize };
export { capitalizeEveryWord as capitalizeEveryWord };
export { castArray as castArray };
export { celsiusToFahrenheit as celsiusToFahrenheit };
export { chunk as chunk };
export { colorize as colorize };
export { colors as colors };
export { compact as compact };
export { compactWhitespace as compactWhitespace };
export { complement as complement };
export { compose as compose };
export { composeRight as composeRight };
export { contains as contains };
export { containsWhitespace as containsWhitespace };
export { countBy as countBy };
export { countOccurrences as countOccurrences };
export { createElement as createElement };
export { createEventHub as createEventHub };
export { CSVToArray as CSVToArray };
export { CSVToJSON as CSVToJSON };
export { curry as curry };
export { dayOfYear as dayOfYear };
export { debounce as debounce };
export { deepClone as deepClone };
export { deepFlatten as deepFlatten };
export { deepFreeze as deepFreeze };
export { deepGet as deepGet };
export { defaults as defaults };
export { delay as delay };
export { delayedPromise as delayedPromise };
export { either as either };
export { equals as equals };
export { deepEquals as deepEquals };
export { downloadCSV as downloadCSV };
export { escapeHTML as escapeHTML };
export { unescapeHTML as unescapeHTML };
export { escapeRegExp as escapeRegExp };
export { factorial as factorial };
export { memoize as memoize };
export { fahrenheitToCelsius as fahrenheitToCelsius };
export { filterNonUnique as filterNonUnique };
export { filterNonUniqueBy as filterNonUniqueBy };
export { findKey as findKey };
export { flatten as flatten };
export { forEachRight as forEachRight };
export { formatDuration as formatDuration };
export { formatDate as formatDate };
export { get as get };
export { getAll as getAll };
export { getBaseURL as getBaseURL };
export { getType as getType };
export { getURLParameters as getURLParameters };
export { mapToObject as mapToObject };
export { groupBy as groupBy };
export { hasFlags as hasFlags };
export { hexToRGB as hexToRGB };
export { hexToRGB2 as hexToRGB2 };
export { hide as hide };
export { httpsRedirect as httpsRedirect };
export { includesAll as includesAll };
export { indentString as indentString };
export { isFunction as isFunction };
export { isArrayLike as isArrayLike };
export { isString as isString };
export { isValidDate as isValidDate };
export { fillArray as fillArray };
export { initializeArray as initializeArray };
export { inRange as inRange };
export { insertAt as insertAt };
export { insertAtImmutable as insertAtImmutable };
export { intersection as intersection };
export { intersectionBy as intersectionBy };
export { intersectionWith as intersectionWith };
export { is as is };
export { isAfterDate as isAfterDate };
export { isBeforeDate as isBeforeDate };
export { isBrowser as isBrowser };
export { isEmpty as isEmpty };
export { isLeapYear as isLeapYear };
export { isLowerCase as isLowerCase };
export { isNil as isNil };
export { isNull as isNull };
export { isNumber as isNumber };
export { isObject as isObject };
export { isPlainObject as isPlainObject };
export { isPrimitive as isPrimitive };
export { isSameDate as isSameDate };
export { isSorted as isSorted };
export { isUpperCase as isUpperCase };
export { isValidJSON as isValidJSON };
export { JSONtoCSV as JSONtoCSV };
export { last as last };
export { listenOnce as listenOnce };
export { lowercaseKeys as lowercaseKeys };
export { mapKeys as mapKeys };
export { mapObject as mapObject };
export { mapString as mapString };
export { map as map };
export { mask as mask };
export { matches as matches };
export { matchesWith as matchesWith };
export { maxBy as maxBy };
export { maxDate as maxDate };
export { maxN as maxN };
export { merge as merge };
export { midpoint as midpoint };
export { minBy as minBy };
export { sortBy as sortBy };
export { SortByOrder as SortByOrder };
export { sortByKey as sortByKey };
export { mostFrequent as mostFrequent };
export { mostPerformant as mostPerformant };
export { negate as negate };
export { nest as nest };
export { nodeListToArray as nodeListToArray };
export { toArray as toArray };
export { none as none };
export { not as not };
export { nthArg as nthArg };
export { nthElement as nthElement };
export { objectToQueryString as objectToQueryString };
export { offset as offset };
export { omit as omit };
export { omitBy as omitBy };
export { or as or };
export { orderBy as orderBy };
export { orderByFunc as orderByFunc };
export { pad as pad };
export { parseCookie as parseCookie };
export { partial as partial };
export { partialRight as partialRight };
export { partition as partition };
export { partitionBy as partitionBy };
export { pick as pick };
export { pickBy as pickBy };
export { pipeAsyncFunctions as pipeAsyncFunctions };
export { pipeFunctions as pipeFunctions };
export { pluralize as pluralize };
export { prefix as prefix };
export { prettyBytes as prettyBytes };
export { prettyBytesT as prettyBytesT };
export { promisify as promisify };
export { radsToDegrees as radsToDegrees };
export { randomHexColorCode as randomHexColorCode };
export { randomInt as randomInt };
export { randomNumber as randomNumber };
export { reduceWhich as reduceWhich };
export { removeNonASCII as removeNonASCII };
export { renderElement as renderElement };
export { reverseString as reverseString };
export { RGBToHex as RGBToHex };
export { round as round };
export { runPromisesInSeries as runPromisesInSeries };
export { scrollToTop as scrollToTop };
export { serializeCookie as serializeCookie };
export { show as show };
export { shuffle as shuffle };
export { size as size };
export { sleep as sleep };
export { splitLines as splitLines };
export { spreadOver as spreadOver };
export { stableSort as stableSort };
export { stripHTMLTags as stripHTMLTags };
export { sum as sum };
export { sumBy as sumBy };
export { tail as tail };
export { take as take };
export { takeRight as takeRight };
export { takeWhile as takeWhile };
export { takeRightWhile as takeRightWhile };
export { throttle as throttle };
export { times as times };
export { timeTaken as timeTaken };
export { toCamelCase as toCamelCase };
export { toDecimalMark as toDecimalMark };
export { toKebabCase as toKebabCase };
export { humanizeUrl as humanizeUrl };
export { toOrdinalSuffix as toOrdinalSuffix };
export { toPairs as toPairs };
export { toSnakeCase as toSnakeCase };
export { toTitleCase as toTitleCase };
export { transform as transform };
export { triggerEvent as triggerEvent };
export { truncateString as truncateString };
export { ellipsis as ellipsis };
export { unary as unary };
export { uncurry as uncurry };
export { union as union };
export { unionBy as unionBy };
export { unionWith as unionWith };
export { unique as unique };
export { uniqueBy as uniqueBy };
export { uniqueByRight as uniqueByRight };
export { unzip as unzip };
export { unzipWith as unzipWith };
export { URLJoin as URLJoin };
export { URLJoinWithParams as URLJoinWithParams };
export { UUIDGeneratorBrowser as UUIDGeneratorBrowser };
export { validateNumber as validateNumber };
export { yesNo as yesNo };
