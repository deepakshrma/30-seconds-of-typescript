var HTMLEscapeChars1;
(function (HTMLEscapeChars1) {
  HTMLEscapeChars1["&"] = "&amp;";
  HTMLEscapeChars1["<"] = "&lt;";
  HTMLEscapeChars1[">"] = "&gt;";
  HTMLEscapeChars1["'"] = "&#39;";
  HTMLEscapeChars1['"'] = "&quot;";
})(HTMLEscapeChars1 || (HTMLEscapeChars1 = {}));
export { HTMLEscapeChars1 as HTMLEscapeChars };
var HTMLUnEscapeChars1;
(function (HTMLUnEscapeChars1) {
  HTMLUnEscapeChars1["&amp;"] = "&";
  HTMLUnEscapeChars1["&lt;"] = "<";
  HTMLUnEscapeChars1["&gt;"] = ">";
  HTMLUnEscapeChars1["&#39;"] = "'";
  HTMLUnEscapeChars1["&quot;"] = '"';
})(HTMLUnEscapeChars1 || (HTMLUnEscapeChars1 = {}));
export { HTMLUnEscapeChars1 as HTMLUnEscapeChars };
const htmlEscapeReg = new RegExp(
  `[${Object.keys(HTMLEscapeChars1).join("")}]`,
  "g"
);
const htmlUnEscapeReg = new RegExp(
  `${Object.keys(HTMLUnEscapeChars1).join("|")}`,
  "g"
);
const accumulate1 = (...nums) =>
  nums.reduce((acc, n) => [...acc, n + +acc.slice(-1)], []);
export { accumulate1 as accumulate };
const all1 = (arr, fn = Boolean) => arr.every(fn);
export { all1 as all };
const allEqual1 = (arr) => arr.every((val) => val === arr[0]);
export { allEqual1 as allEqual };
const and1 = (a, b) => Boolean(a) && Boolean(b);
export { and1 as and };
const any1 = (arr, fn = Boolean) => arr.some(fn);
export { any1 as any };
const some1 = (arr, fn = Boolean) => arr.some(fn);
export { some1 as some };
const aperture1 = (n, arr) =>
  n >= arr.length
    ? []
    : arr.slice(n - 1).map((v, i) => [...arr.slice(i, i + n - 1), v]);
export { aperture1 as aperture };
const approximatelyEqual1 = (v1, v2, epsilon = 0.001) =>
  Math.abs(v1 - v2) < epsilon;
export { approximatelyEqual1 as approximatelyEqual };
const arrayToCSV1 = (arr, delimiter = ",") =>
  arr
    .map((v) =>
      v
        .map((x) => (typeof x === "string" ? `"${x.replace(/"/g, '""')}"` : x))
        .join(delimiter)
    )
    .join("\n");
export { arrayToCSV1 as arrayToCSV };
const arrayToHtmlList1 = (arr, listID) => {
  let el = document.querySelector("#" + listID);
  if (el) {
    el.innerHTML += arr.map((item) => `<li>${item}</li>`).join("");
  }
};
export { arrayToHtmlList1 as arrayToHtmlList };
const ary1 = (fn, n) => (...args) => fn(...args.slice(0, n));
export { ary1 as ary };
const attempt1 = (fn, ...args) => {
  try {
    return fn(...args);
  } catch (e) {
    return e instanceof Error ? e : new Error(e);
  }
};
export { attempt1 as attempt };
const attempt21 = (fn, ...args) => {
  try {
    return [fn(...args), null];
  } catch (e) {
    return [null, e instanceof Error ? e : new Error(e)];
  }
};
export { attempt21 as attempt2 };
const average1 = (...nums) =>
  nums.reduce((acc, val) => acc + val, 0) / nums.length;
export { average1 as average };
const averageBy1 = (arr, fn) => {
  const mapper = typeof fn === "function" ? fn : (val) => val[fn];
  return arr.reduce((acc, val) => acc + mapper(val), 0) / arr.length;
};
export { averageBy1 as averageBy };
const bifurcate1 = (arr, filter) =>
  arr.reduce(
    (acc, val, i) => {
      acc[filter[i] ? 0 : 1].push(val);
      return acc;
    },
    [[], []]
  );
export { bifurcate1 as bifurcate };
const bifurcateBy1 = (arr, filter) =>
  arr.reduce(
    (acc, val) => {
      acc[filter(val) ? 0 : 1].push(val);
      return acc;
    },
    [[], []]
  );
export { bifurcateBy1 as bifurcateBy };
const binary1 = (fn) => (...[v1, v2]) => fn(v1, v2);
export { binary1 as binary };
const bind1 = (fn, context, ...boundArgs) => (...args) =>
  fn.apply(context, [...boundArgs, ...args]);
export { bind1 as bind };
const bindAll1 = (obj, ...fns) =>
  fns.forEach((key) => {
    if (typeof obj[key] === "function") {
      const f = obj[key];
      obj[key] = function (...args) {
        return f.apply(obj, args);
      };
    }
  });
export { bindAll1 as bindAll };
const binomialCoefficient1 = (n, k) => {
  if (Number.isNaN(n) || Number.isNaN(k)) return NaN;
  if (k < 0 || k > n) return 0;
  if (k === 0 || k === n) return 1;
  if (k === 1 || k === n - 1) return n;
  if (n - k < k) k = n - k;
  let res = n;
  for (let j = 2; j <= k; j++) res *= (n - j + 1) / j;
  return Math.round(res);
};
export { binomialCoefficient1 as binomialCoefficient };
const both1 = (f, g) => (...args) => f(...args) && g(...args);
export { both1 as both };
const call1 = (key, ...args) => (context) => context[key](...args);
export { call1 as call };
const capitalize1 = (str = "", lowerRest = false) =>
  str.slice(0, 1).toUpperCase() +
  (lowerRest ? str.slice(1).toLowerCase() : str.slice(1));
export { capitalize1 as capitalize };
const capitalizeEveryWord1 = (str = "") =>
  str.replace(/\b[a-z]/g, (__char) => __char.toUpperCase());
export { capitalizeEveryWord1 as capitalizeEveryWord };
const castArray1 = (val) => (Array.isArray(val) ? val : [val]);
export { castArray1 as castArray };
const celsiusToFahrenheit1 = (degrees) => 1.8 * degrees + 32;
export { celsiusToFahrenheit1 as celsiusToFahrenheit };
const chunk1 = (arr, size) =>
  Array.from(
    {
      length: Math.ceil(arr.length / size),
    },
    (_, i) => arr.slice(i * size, i * size + size)
  );
export { chunk1 as chunk };
const colorize1 = new (class {
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
export { colorize1 as colorize };
const colors1 = colorize1;
export { colors1 as colors };
const compact1 = (arr) => arr.filter(Boolean);
export { compact1 as compact };
const compactWhitespace1 = (str) => str.replace(/\s{2,}/g, " ");
export { compactWhitespace1 as compactWhitespace };
const complement1 = (fn) => (...args) => !fn(...args);
export { complement1 as complement };
const compose1 = (...fns) =>
  fns.reduce((f, g) => (...args) => f(...castArray1(g(...args))));
export { compose1 as compose };
const composeRight1 = (...fns) =>
  fns.reduce((f, g) => (...args) => g(...castArray1(f(...args))));
export { composeRight1 as composeRight };
const contains1 = (s1, s2 = "") =>
  s1.toLowerCase().indexOf(s2.toLowerCase()) !== -1;
export { contains1 as contains };
const containsWhitespace1 = (str) => /\s/.test(str);
export { containsWhitespace1 as containsWhitespace };
const countBy1 = (arr, fn) => {
  const mapper = typeof fn === "function" ? fn : (val) => val[fn];
  return arr.reduce((acc, val) => {
    const value = mapper(val);
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});
};
export { countBy1 as countBy };
const countOccurrences1 = (arr, val) =>
  arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
export { countOccurrences1 as countOccurrences };
const createElement1 = (str) => {
  const el = document.createElement("div");
  el.innerHTML = str;
  return el.firstElementChild;
};
export { createElement1 as createElement };
const createEventHub1 = () => ({
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
export { createEventHub1 as createEventHub };
const CSVToArray1 = (data, delimiter = ",", omitFirstRow = false) =>
  data
    .slice(omitFirstRow ? data.indexOf("\n") + 1 : 0)
    .split("\n")
    .map((v) => v.split(delimiter));
export { CSVToArray1 as CSVToArray };
const CSVToJSON1 = (data, delimiter = ",") => {
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
export { CSVToJSON1 as CSVToJSON };
const curry1 = (fn, arity = fn.length, ...args) =>
  arity <= args.length ? fn(...args) : curry1.bind(null, fn, arity, ...args);
export { curry1 as curry };
const dayOfYear1 = (date) => {
  if (isString1(date)) {
    date = new Date(date);
  }
  if (!isValidDate1(date)) throw new Error(`Invalid Date string`);
  return Math.floor(
    (date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) /
      1000 /
      60 /
      60 /
      24
  );
};
export { dayOfYear1 as dayOfYear };
const debounce1 = (fn, ms = 300) => {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};
export { debounce1 as debounce };
const deepClone1 = (obj) => {
  if (obj === null) return null;
  let clone = {
    ...obj,
  };
  Object.keys(clone).forEach(
    (key) =>
      (clone[key] =
        typeof obj[key] === "object" ? deepClone1(obj[key]) : obj[key])
  );
  return Array.isArray(obj) && obj.length
    ? (clone.length = obj.length) && Array.from(clone)
    : Array.isArray(obj)
    ? Array.from(obj)
    : clone;
};
export { deepClone1 as deepClone };
const deepFlatten1 = (arr) => {
  if (typeof Array.prototype.flat !== "undefined") return arr.flat(Infinity);
  return [].concat(...arr.map((v) => (Array.isArray(v) ? deepFlatten1(v) : v)));
};
export { deepFlatten1 as deepFlatten };
const deepFreeze1 = (obj) => {
  Object.keys(obj).forEach((prop) => {
    if (typeof obj[prop] === "object" && !Object.isFrozen(obj[prop])) {
      deepFreeze1(obj[prop]);
    }
  });
  return Object.freeze(obj);
};
export { deepFreeze1 as deepFreeze };
const deepGet1 = (obj, keys, defaultValue = undefined, delimiter = ".") => {
  if (isString1(keys)) {
    keys = keys.split(delimiter);
  }
  return keys.reduce((xs, x) => (xs && xs[x] ? xs[x] : defaultValue), obj);
};
export { deepGet1 as deepGet };
const defaults1 = (obj, ...defs) => Object.assign({}, obj, ...defs, obj);
export { defaults1 as defaults };
const delay1 = (fn, wait, ...args) => setTimeout(fn, wait, ...args);
export { delay1 as delay };
const delayedPromise1 = (wait = 300, ...args) =>
  new Promise((resolve) => {
    delay1(resolve, wait, ...args);
  });
export { delayedPromise1 as delayedPromise };
const either1 = (f, g) => (...args) => f(...args) || g(...args);
export { either1 as either };
const equals1 = (a, b) => {
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
  return keys.every((k) => equals1(objA[k], objB[k]));
};
export { equals1 as equals };
const deepEquals1 = (a, b) => {
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
  return keys.every((k) => equals1(objA[k], objB[k]));
};
export { deepEquals1 as deepEquals };
const downloadCSV1 = (csvContent, name = "download.csv") => {
  var encodedUri = encodeURI(csvContent);
  var link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", name);
  document.body.appendChild(link);
  link.click();
};
export { downloadCSV1 as downloadCSV };
const escapeHTML1 = (str) =>
  str.replace(htmlEscapeReg, (tag) => HTMLEscapeChars1[tag] || tag);
export { escapeHTML1 as escapeHTML };
const unescapeHTML1 = (str) =>
  str.replace(htmlUnEscapeReg, (tag) => HTMLUnEscapeChars1[tag] || tag);
export { unescapeHTML1 as unescapeHTML };
const escapeRegExp1 = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
export { escapeRegExp1 as escapeRegExp };
const factorial1 = (n) => (n <= 1 ? 1 : n * factorial1(n - 1));
export { factorial1 as factorial };
const memoize1 = (fn) => {
  const cache = new Map();
  const cached = function (val) {
    return cache.has(val)
      ? cache.get(val)
      : cache.set(val, fn.call(this, val)) && cache.get(val);
  };
  cached.cache = cache;
  return cached;
};
export { memoize1 as memoize };
const fahrenheitToCelsius1 = (degrees) => ((degrees - 32) * 5) / 9;
export { fahrenheitToCelsius1 as fahrenheitToCelsius };
const filterNonUnique1 = (arr) =>
  arr.filter((i) => arr.indexOf(i) === arr.lastIndexOf(i));
export { filterNonUnique1 as filterNonUnique };
const filterNonUniqueBy1 = (arr, fn) =>
  arr.filter((v, i) => arr.every((x, j) => (i === j) === fn(v, x, i, j)));
export { filterNonUniqueBy1 as filterNonUniqueBy };
const findKey1 = (obj, fn) =>
  Object.keys(obj).find((key) => fn(obj[key], key, obj));
export { findKey1 as findKey };
const flatten1 = (arr, depth = 1) => {
  if (typeof Array.prototype.flat !== "undefined") return arr.flat(depth);
  return arr.reduce(
    (a, v) =>
      a.concat(depth > 1 && Array.isArray(v) ? flatten1(v, depth - 1) : v),
    []
  );
};
export { flatten1 as flatten };
const forEachRight1 = (array = [], callback) => {
  for (let index = array.length - 1; index >= 0; index--) {
    const element = array[index];
    callback(element, index, array);
  }
};
export { forEachRight1 as forEachRight };
const formatDuration1 = (ms) => {
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
export { formatDuration1 as formatDuration };
const padLeft = (str, num = 2, fill = "0") => String(str).padStart(num, fill);
const formatDate1 = (formatStr, date) => {
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
export { formatDate1 as formatDate };
const get1 = (from, selector, defaultValue = undefined) =>
  selector
    .replace(/\[([^\[\]]*)\]/g, ".$1.")
    .split(".")
    .filter((t) => t !== "")
    .reduce((prev, cur) => prev && prev[cur], from) || defaultValue;
export { get1 as get };
const getAll1 = (from, ...selectors) =>
  [...selectors].map((s) => get1(from, s));
export { getAll1 as getAll };
const getBaseURL1 = (url) =>
  url.indexOf("?") > 0 ? url.slice(0, url.indexOf("?")) : url;
export { getBaseURL1 as getBaseURL };
const getType1 = (v) =>
  v === undefined
    ? "undefined"
    : v === null
    ? "null"
    : v.constructor.name.toLowerCase();
export { getType1 as getType };
const getURLParameters1 = (url) => {
  return (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce((a, v) => {
    const [key, value] = v.split("=");
    if (a[key]) {
      a[key] = (typeof a[key] === "string" ? [a[key]] : a[key]).concat(value);
    } else {
      a[key] = value;
    }
    return a;
  }, {});
};
export { getURLParameters1 as getURLParameters };
const mapToObject1 = (map) => {
  let result = {};
  for (let [key, value] of map.entries()) {
    result[key] = value;
  }
  return result;
};
export { mapToObject1 as mapToObject };
const groupBy1 = (arr, fn) =>
  arr.map(isString1(fn) ? (val) => val[fn] : fn).reduce((acc, val, i) => {
    acc[val] = (acc[val] || []).concat(arr[i]);
    return acc;
  }, {});
export { groupBy1 as groupBy };
const hasFlags1 = (args, ...flags) =>
  flags.every((flag) =>
    args.includes(/^-{1,2}/.test(flag) ? flag : "--" + flag)
  );
export { hasFlags1 as hasFlags };
const hexToRGB1 = (hex) => {
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
export { hexToRGB1 as hexToRGB };
const hexToRGB21 = (hex) => {
  let hexChars = Array.from(hex.startsWith("#") ? hex.slice(1) : hex);
  if (hexChars.length === 3) {
    hexChars = hexChars.reduce((str, x) => [...str, x, x], []);
  }
  const values = chunk1(hexChars, 2).map(([v1, v2]) => parseInt(v1 + v2, 16));
  return `rgb${values.length == 4 ? "a" : ""}(${values.join(", ")})`;
};
export { hexToRGB21 as hexToRGB2 };
const hide1 = (...el) => [...el].forEach((e) => (e.style.display = "none"));
export { hide1 as hide };
const httpsRedirect1 = () => {
  if (location.protocol !== "https:")
    location.replace("https://" + location.href.split("//")[1]);
};
export { httpsRedirect1 as httpsRedirect };
const includesAll1 = (arr, values) => values.every((v) => arr.includes(v));
export { includesAll1 as includesAll };
const indentString1 = (str, count, indent = " ") => {
  indent = indent.repeat(count);
  return str.replace(/^/gm, indent);
};
export { indentString1 as indentString };
const isFunction1 = (str) => {
  return typeof str === "function";
};
export { isFunction1 as isFunction };
const isArrayLike1 = (obj) => {
  return (
    obj[Symbol.iterator] instanceof Function && obj.entries instanceof Function
  );
};
export { isArrayLike1 as isArrayLike };
const isString1 = (str) => {
  return typeof str === "string";
};
export { isString1 as isString };
function isValidDate1(date) {
  return date instanceof Date && !isNaN(date.getTime());
}
export { isValidDate1 as isValidDate };
const fillArray1 = (n, val = 0) => Array(n).fill(val);
export { fillArray1 as fillArray };
const initializeArray1 = (n, val = 0) => Array(n).fill(val);
export { initializeArray1 as initializeArray };
const inRange1 = (n, start, end) => {
  if (end && start > end) [end, start] = [start, end];
  return end === undefined ? n >= 0 && n < start : n >= start && n < end;
};
export { inRange1 as inRange };
const insertAt1 = (arr, i, ...v) => {
  arr.splice(i + 1, 0, ...v);
  return arr;
};
export { insertAt1 as insertAt };
const insertAtImmutable1 = (arr, i, ...v) => {
  return [...arr.slice(0, i + 1), ...v, ...arr.slice(i + 1)];
};
export { insertAtImmutable1 as insertAtImmutable };
const intersection1 = (a, b) => {
  const s = new Set(b);
  return [...new Set(a)].filter((x) => s.has(x));
};
export { intersection1 as intersection };
const intersectionBy1 = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return [...new Set(a)].filter((x) => s.has(fn(x)));
};
export { intersectionBy1 as intersectionBy };
const intersectionWith1 = (a, b, comp) =>
  a.filter((x) => b.findIndex((y) => comp(x, y)) !== -1);
export { intersectionWith1 as intersectionWith };
const is1 = (type, val) =>
  ![, null].includes(val) &&
  (isString1(type) ? val.constructor.name === type : val.constructor === type);
export { is1 as is };
const isAfterDate1 = (dateA, dateB) => dateA > dateB;
export { isAfterDate1 as isAfterDate };
const isBeforeDate1 = (dateA, dateB) => dateA < dateB;
export { isBeforeDate1 as isBeforeDate };
const isBrowser1 = () =>
  ![typeof window, typeof document].includes("undefined");
export { isBrowser1 as isBrowser };
const isEmpty1 = (val) => val == null || !(Object.keys(val) || val).length;
export { isEmpty1 as isEmpty };
const isLeapYear1 = (year) => new Date(year, 1, 29).getMonth() === 1;
export { isLeapYear1 as isLeapYear };
const isLowerCase1 = (str) => str === str.toLowerCase();
export { isLowerCase1 as isLowerCase };
const isNil1 = (val) => val === undefined || val === null;
export { isNil1 as isNil };
const isNull1 = (val) => val === null;
export { isNull1 as isNull };
const isNumber1 = (val) => typeof val === "number" && val === val;
export { isNumber1 as isNumber };
const isObject1 = (obj) => obj === Object(obj);
export { isObject1 as isObject };
const isPlainObject1 = (val) =>
  !!val && typeof val === "object" && val.constructor === Object;
export { isPlainObject1 as isPlainObject };
const isPrimitive1 = (val) => Object(val) !== val;
export { isPrimitive1 as isPrimitive };
const isSameDate1 = (dateA, dateB) =>
  dateA.toISOString() === dateB.toISOString();
export { isSameDate1 as isSameDate };
const isSorted1 = (arr) => {
  let direction = -(arr[0] - arr[1]);
  for (let [i, val] of arr.entries()) {
    direction = !direction ? -(arr[i - 1] - arr[i]) : direction;
    if (i === arr.length - 1)
      return !direction ? 0 : direction / Math.abs(direction);
    else if ((val - arr[i + 1]) * direction > 0) return 0;
  }
};
export { isSorted1 as isSorted };
const isUpperCase1 = (str) => str === str.toUpperCase();
export { isUpperCase1 as isUpperCase };
const isValidJSON1 = (str) => {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
};
export { isValidJSON1 as isValidJSON };
const JSONtoCSV1 = (arr, columns, delimiter = ",") =>
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
export { JSONtoCSV1 as JSONtoCSV };
const last1 = (arr = []) => arr[arr.length - 1];
export { last1 as last };
const listenOnce1 = (el, evt, fn) => {
  let fired = false;
  el.addEventListener(evt, (e) => {
    if (!fired) fn(e);
    fired = true;
  });
};
export { listenOnce1 as listenOnce };
const lowercaseKeys1 = (obj, deep = false) =>
  Object.keys(obj).reduce((acc, key) => {
    acc[key.toLowerCase()] =
      deep && typeof obj[key] === "object"
        ? lowercaseKeys1(obj[key])
        : obj[key];
    return acc;
  }, {});
export { lowercaseKeys1 as lowercaseKeys };
const mapKeys1 = (obj, fn) =>
  Object.keys(obj).reduce((acc, k) => {
    acc[fn(obj[k], k, obj)] = obj[k];
    return acc;
  }, {});
export { mapKeys1 as mapKeys };
const mapObject1 = (arr, fn) =>
  arr.reduce((acc, el, i) => {
    acc[el] = fn(el, i, arr);
    return acc;
  }, {});
export { mapObject1 as mapObject };
const mapString1 = (str, fn) => {
  const chars = [...str];
  return chars.map((c, i) => fn(c, i, chars)).join("");
};
export { mapString1 as mapString };
const map1 = (array, fn) => {
  const chars = Array.isArray(array) ? array : [...array];
  return chars.map((c, i) => fn(c, i, chars));
};
export { map1 as map };
const mask1 = (cc, num = 4, mask1 = "*") =>
  String(cc).slice(-num).padStart(String(cc).length, mask1);
export { mask1 as mask };
const matches1 = (obj, source) =>
  Object.keys(source).every(
    (key) => obj.hasOwnProperty(key) && obj[key] === source[key]
  );
export { matches1 as matches };
const matchesWith1 = (obj, source, fn) =>
  Object.keys(source).every((key) =>
    obj.hasOwnProperty(key) && fn
      ? fn(obj[key], source[key], key, obj, source)
      : obj[key] == source[key]
  );
export { matchesWith1 as matchesWith };
const maxBy1 = (arr, fn) =>
  Math.max(...arr.map(isString1(fn) ? (val) => val[fn] : fn));
export { maxBy1 as maxBy };
const maxDate1 = (dates) => new Date(Math.max(...dates.map(Number)));
export { maxDate1 as maxDate };
const maxN1 = (arr, n = 1, order = 1) =>
  [...arr].sort((a, b) => order * (b - a)).slice(0, n);
export { maxN1 as maxN };
const merge1 = (...objs) =>
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
export { merge1 as merge };
const midpoint1 = ([x1, y1], [x2, y2]) => [(x1 + x2) / 2, (y1 + y2) / 2];
export { midpoint1 as midpoint };
const minBy1 = (arr, fn) =>
  Math.min(...arr.map(isString1(fn) ? (val) => val[fn] : fn));
export { minBy1 as minBy };
const sortBy1 = (
  arr,
  $fn = (s1, s2) => order * String(s1).localeCompare(String(s2)),
  order = SortByOrder1.ASC
) => {
  let fn = $fn;
  return [...arr].sort(fn);
};
export { sortBy1 as sortBy };
var SortByOrder1;
(function (SortByOrder1) {
  SortByOrder1[(SortByOrder1["ASC"] = 1)] = "ASC";
  SortByOrder1[(SortByOrder1["DESC"] = -1)] = "DESC";
})(SortByOrder1 || (SortByOrder1 = {}));
export { SortByOrder1 as SortByOrder };
const sortByKey1 = (arr, key, order = SortByOrder1.ASC) => {
  return [...arr].sort(
    (s1, s2) => order * String(s1[key]).localeCompare(String(s2[key]))
  );
};
export { sortByKey1 as sortByKey };
const mostFrequent1 = (arr) =>
  Object.entries(
    arr.reduce((a, v) => {
      a[String(v)] = a[String(v)] ? a[String(v)] + 1 : 1;
      return a;
    }, {})
  ).reduce((a, v) => (v[1] >= a[1] ? v : a), [-1, 0])[0];
export { mostFrequent1 as mostFrequent };
const mostPerformant1 = (fns, iterations = 10000) => {
  const times = fns.map((fn) => {
    const before = performance.now();
    for (let i = 0; i < iterations; i++) fn();
    return performance.now() - before;
  });
  return times.indexOf(Math.min(...times));
};
export { mostPerformant1 as mostPerformant };
const negate1 = (func) => (...args) => !func(...args);
export { negate1 as negate };
const nest1 = (items, id = null, link = "parent_id") =>
  items
    .filter((item) => item[link] === id)
    .map((item) => ({
      ...item,
      children: nest1(items, item.id, link),
    }));
export { nest1 as nest };
const nodeListToArray1 = (nodeList) => [...nodeList];
export { nodeListToArray1 as nodeListToArray };
const toArray1 = (arrLike) => [...arrLike];
export { toArray1 as toArray };
const none1 = (arr, fn = Boolean) => !arr.some(fn);
export { none1 as none };
const not1 = (a) => !a;
export { not1 as not };
const nthArg1 = (n) => (...args) => args.slice(n)[0];
export { nthArg1 as nthArg };
const nthElement1 = curry1(
  (n = 0, arr) => (n === -1 ? arr.slice(n) : arr.slice(n, n + 1))[0],
  2
);
export { nthElement1 as nthElement };
const objectToQueryString1 = (queryParameters) => {
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
export { objectToQueryString1 as objectToQueryString };
const offset1 = (arr, offset1) => [
  ...arr.slice(offset1),
  ...arr.slice(0, offset1),
];
export { offset1 as offset };
const omit1 = (obj, arr) =>
  Object.keys(obj)
    .filter((k) => !arr.includes(k))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});
export { omit1 as omit };
const omitBy1 = (obj, fn) =>
  Object.keys(obj)
    .filter((k) => !fn(obj[k], k))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});
export { omitBy1 as omitBy };
const or1 = (a, b) => a || b;
export { or1 as or };
const orderBy1 = (arr, props, orders) =>
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
export { orderBy1 as orderBy };
const orderByFunc1 = (arr, props, fn) =>
  [...arr].sort((a, b) =>
    props.reduce((acc, prop, i) => {
      if (acc === 0) {
        const [p1, p2] = [a[prop], b[prop]];
        acc = fn(p1, p2, prop);
      }
      return acc;
    }, 0)
  );
export { orderByFunc1 as orderByFunc };
const pad1 = (str, length, __char = " ") => {
  const s = String(str);
  return s.padStart((s.length + length) / 2, __char).padEnd(length, __char);
};
export { pad1 as pad };
const parseCookie1 = (str) =>
  str
    .split(";")
    .map((v) => v.split("="))
    .reduce((acc, v) => {
      acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
      return acc;
    }, {});
export { parseCookie1 as parseCookie };
const partial1 = (fn, ...partials) => (...args) => fn(...partials, ...args);
export { partial1 as partial };
const partialRight1 = (fn, ...partials) => (...args) =>
  fn(...args, ...partials);
export { partialRight1 as partialRight };
const partition1 = (arr, fn) =>
  arr.reduce(
    (acc, val, i, arr1) => {
      acc[fn(val, i, arr1) ? 0 : 1].push(val);
      return acc;
    },
    [[], []]
  );
export { partition1 as partition };
const partitionBy1 = (arr, fn) =>
  arr.reduce(
    ({ res, last: last2 }, v, i, a) => {
      const next = fn(v, i, a);
      if (next !== last2) res.push([v]);
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
export { partitionBy1 as partitionBy };
const pick1 = (obj, arr) =>
  arr.reduce((acc, curr) => (curr in obj && (acc[curr] = obj[curr]), acc), {});
export { pick1 as pick };
const pickBy1 = (obj, fn) =>
  Object.keys(obj)
    .filter((k) => fn(obj[k], k))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});
export { pickBy1 as pickBy };
const pipeAsyncFunctions1 = (...fns) => (arg) =>
  fns.reduce((p, f) => p.then(f), Promise.resolve(arg));
export { pipeAsyncFunctions1 as pipeAsyncFunctions };
const pipeFunctions1 = (...fns) =>
  fns.reduce((f, g) => (...args) => g(f(...args)));
export { pipeFunctions1 as pipeFunctions };
const pluralize1 = (num, word, plural = word + "s") =>
  [1, -1].includes(Number(num)) ? word : plural;
export { pluralize1 as pluralize };
const prefix1 = (prop) => {
  const capitalizedProp = prop.charAt(0).toUpperCase() + prop.slice(1);
  const prefixes = ["", "webkit", "moz", "ms", "o"];
  const i = prefixes.findIndex(
    (prefix1) =>
      typeof document.body.style[prefix1 ? prefix1 + capitalizedProp : prop] !==
      "undefined"
  );
  return i !== -1 ? (i === 0 ? prop : prefixes[i] + capitalizedProp) : null;
};
export { prefix1 as prefix };
const prettyBytes1 = (num, precision = 3, addSpace = " ") => {
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
export { prettyBytes1 as prettyBytes };
const prettyBytesT1 = (strings, bytes, precision = 3) => {
  return prettyBytes1(bytes, precision, strings.join(""));
};
export { prettyBytesT1 as prettyBytesT };
const promisify1 = (func) => (...args) =>
  new Promise((resolve, reject) =>
    func(...args, (err, result) => (err ? reject(err) : resolve(result)))
  );
export { promisify1 as promisify };
const radsToDegrees1 = (rad) => (rad * 180) / Math.PI;
export { radsToDegrees1 as radsToDegrees };
const randomHexColorCode1 = () => {
  let n = (Math.random() * 1048575 * 1000000).toString(16);
  return "#" + n.slice(0, 6);
};
export { randomHexColorCode1 as randomHexColorCode };
const randomInt1 = (min = 0, max = 100) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
export { randomInt1 as randomInt };
const randomNumber1 = (min = 0, max = 100) =>
  Math.random() * (max - min + 1) + min;
export { randomNumber1 as randomNumber };
const reduceWhich1 = (arr, comparator = (a, b) => a - b) =>
  arr.reduce((a, b) => (comparator(a, b) >= 0 ? b : a));
export { reduceWhich1 as reduceWhich };
const removeNonASCII1 = (str) => str.replace(/[^\x20-\x7E]/g, "");
export { removeNonASCII1 as removeNonASCII };
const renderElement1 = ({ type, props = {} }, container) => {
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
      renderElement1(childElement, element)
    );
  container.appendChild(element);
};
export { renderElement1 as renderElement };
const reverseString1 = (str) => {
  let s = "";
  for (let __char of str) {
    s = __char + s;
  }
  return s;
};
export { reverseString1 as reverseString };
const RGBToHex1 = (r, g, b, hash = "") =>
  hash + ((r << 16) + (g << 8) + b).toString(16).padStart(6, "0");
export { RGBToHex1 as RGBToHex };
const round1 = (n, decimals = 0) =>
  Number(`${Math.round(Number(`${n}e${decimals}`))}e-${decimals}`);
export { round1 as round };
const runPromisesInSeries1 = (ps) =>
  ps.reduce((p, next) => p.then(next), Promise.resolve());
export { runPromisesInSeries1 as runPromisesInSeries };
const scrollToTop1 = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop1);
    window.scrollTo(0, c - c / 8);
  }
};
export { scrollToTop1 as scrollToTop };
const serializeCookie1 = (name, val) =>
  `${encodeURIComponent(name)}=${encodeURIComponent(val)}`;
export { serializeCookie1 as serializeCookie };
const show1 = (...el) => [...el].forEach((e) => (e.style.display = ""));
export { show1 as show };
const shuffle1 = ([...arr]) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
};
export { shuffle1 as shuffle };
const size1 = (val) =>
  Array.isArray(val)
    ? val.length
    : val && typeof val === "object"
    ? val.size || val.length || Object.keys(val).length
    : typeof val === "string"
    ? new Blob([val]).size
    : 0;
export { size1 as size };
const sleep1 = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
export { sleep1 as sleep };
const splitLines1 = (str) => str.split(/\r?\n/);
export { splitLines1 as splitLines };
const spreadOver1 = (fn) => (argsArr) => fn(...argsArr);
export { spreadOver1 as spreadOver };
const stableSort1 = (arr, compare) =>
  arr
    .map((item, index) => ({
      item,
      index,
    }))
    .sort((a, b) => compare(a.item, b.item) || a.index - b.index)
    .map(({ item }) => item);
export { stableSort1 as stableSort };
const stripHTMLTags1 = (str) => str.replace(/<[^>]*>/g, "");
export { stripHTMLTags1 as stripHTMLTags };
const sum1 = (...arr) => [...arr].reduce((acc, val) => acc + val, 0);
export { sum1 as sum };
const sumBy1 = (arr, fn) => {
  return arr
    .map(typeof fn === "function" ? fn : (val) => val[fn])
    .reduce((acc, val) => acc + val, 0);
};
export { sumBy1 as sumBy };
const tail1 = (arr) => (arr.length > 1 ? arr.slice(1) : arr);
export { tail1 as tail };
const take1 = (arr, n = 1) => arr.slice(0, n);
export { take1 as take };
const takeRight1 = (arr, n = 1) => arr.slice(arr.length - n, arr.length);
export { takeRight1 as takeRight };
const takeWhile1 = (arr, func) =>
  arr.reduce((acc, el) => (func(el) ? acc : acc.concat(el)), []);
export { takeWhile1 as takeWhile };
const takeRightWhile1 = (arr, func) =>
  arr.reduceRight((acc, el) => (func(el) ? acc : [el].concat(acc)), []);
export { takeRightWhile1 as takeRightWhile };
const throttle1 = (fn, wait = 300) => {
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
export { throttle1 as throttle };
const times1 = (n, fn, context = undefined) => {
  let i = 0;
  let result;
  do {
    result = fn.call(context, i);
  } while (result !== false && ++i < n);
  return result;
};
export { times1 as times };
const timeTaken1 = (callback) => {
  const id = `timeTaken_${Date.now()}`;
  console.time(id);
  const r = callback();
  console.timeEnd(id);
  return r;
};
export { timeTaken1 as timeTaken };
const toCamelCase1 = (str) => {
  let s = str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    ?.map((x) => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
    .join("");
  return s && s.slice(0, 1).toLowerCase() + s.slice(1);
};
export { toCamelCase1 as toCamelCase };
const toDecimalMark1 = (num) => num.toLocaleString("en-US");
export { toDecimalMark1 as toDecimalMark };
const toKebabCase1 = (str) =>
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    ?.map((x) => x.toLowerCase())
    .join("-");
export { toKebabCase1 as toKebabCase };
const humanizeUrl1 = (str, preserveUndersore = false, preserveCase = false) => {
  const re = preserveUndersore ? /[\W]+/g : /[\W_]+/g;
  return preserveCase
    ? str.replace(re, "-")
    : str.replace(re, "-").toLowerCase();
};
export { humanizeUrl1 as humanizeUrl };
const toOrdinalSuffix1 = (num) => {
  const __int = parseInt(String(num)),
    digits = [__int % 10, __int % 100],
    ordinals = ["st", "nd", "rd", "th"],
    oPattern = [1, 2, 3, 4],
    tPattern = [11, 12, 13, 14, 15, 16, 17, 18, 19];
  return oPattern.includes(digits[0]) && !tPattern.includes(digits[1])
    ? __int + ordinals[digits[0] - 1]
    : __int + ordinals[3];
};
export { toOrdinalSuffix1 as toOrdinalSuffix };
const toPairs1 = (obj) =>
  !obj
    ? []
    : isArrayLike1(obj)
    ? Array.from(obj.entries())
    : Object.entries(obj);
export { toPairs1 as toPairs };
const toSnakeCase1 = (str) =>
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    ?.map((x) => x.toLowerCase())
    .join("_");
export { toSnakeCase1 as toSnakeCase };
const toTitleCase1 = (str) =>
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    ?.map((x) => x.charAt(0).toUpperCase() + x.slice(1))
    .join(" ");
export { toTitleCase1 as toTitleCase };
const transform1 = (obj, fn, acc = {}) =>
  Object.keys(obj).reduce((a, k) => fn(a, obj[k], k, obj), acc);
export { transform1 as transform };
const triggerEvent1 = (el, eventType, detail) =>
  el.dispatchEvent &&
  el.dispatchEvent(
    new CustomEvent(eventType, {
      detail,
    })
  );
export { triggerEvent1 as triggerEvent };
const truncateString1 = (str, num = str.length, ellipsisStr = "...") =>
  str.length >= num
    ? str.slice(0, num >= ellipsisStr.length ? num - ellipsisStr.length : num) +
      ellipsisStr
    : str;
export { truncateString1 as truncateString };
const ellipsis1 = (str, num = str.length, ellipsisStr = "...") =>
  str.length >= num
    ? str.slice(0, num >= ellipsisStr.length ? num - ellipsisStr.length : num) +
      ellipsisStr
    : str;
export { ellipsis1 as ellipsis };
const unary1 = (fn) => (val) => fn(val);
export { unary1 as unary };
const uncurry1 = (fn, n = 1) => (...args) => {
  const next = (acc) => (args1) => args1.reduce((x, y) => x(y), acc);
  if (n > args.length) throw new RangeError("Arguments too few!");
  return next(fn)(args.slice(0, n));
};
export { uncurry1 as uncurry };
const union1 = (a, b) => Array.from(new Set([...a, ...b]));
export { union1 as union };
const unionBy1 = (a, b, fn) => {
  const s = new Set(a.map(fn));
  return Array.from(new Set([...a, ...b.filter((x) => !s.has(fn(x)))]));
};
export { unionBy1 as unionBy };
const unionWith1 = (a, b, comp) =>
  Array.from(
    new Set([...a, ...b.filter((x) => a.findIndex((y) => comp(x, y)) === -1)])
  );
export { unionWith1 as unionWith };
const unique1 = (arr) => [...new Set(arr)];
export { unique1 as unique };
const uniqueBy1 = (arr, fn) =>
  arr.reduce((acc, v) => {
    if (!acc.some((x) => fn(v, x))) acc.push(v);
    return acc;
  }, []);
export { uniqueBy1 as uniqueBy };
const uniqueByRight1 = (arr, fn) =>
  arr.reduceRight((acc, v) => {
    if (!acc.some((x) => fn(v, x))) acc.push(v);
    return acc;
  }, []);
export { uniqueByRight1 as uniqueByRight };
const unzip1 = (arr, size2 = 0) => {
  return arr.reduce(
    (acc, val) => (val.forEach((v, i) => acc[i].push(v)), acc),
    Array.from({
      length: size2 || Math.max(...arr.map((x) => x.length)),
    }).map(() => [])
  );
};
export { unzip1 as unzip };
const unzipWith1 = (arr, fn, size2 = 0) =>
  arr
    .reduce(
      (acc, val) => (val.forEach((v, i) => acc[i].push(v)), acc),
      Array.from({
        length: size2 || Math.max(...arr.map((x) => x.length)),
      }).map((x) => [])
    )
    .map((val) => fn(...val));
export { unzipWith1 as unzipWith };
const URLJoin1 = (...args) =>
  args
    .join("/")
    .replace(/[\/]+/g, "/")
    .replace(/^(.+):\//, "$1://")
    .replace(/^file:/, "file:/")
    .replace(/\/(\?|&|#[^!])/g, "$1")
    .replace(/\?/g, "&")
    .replace("&", "?");
export { URLJoin1 as URLJoin };
const URLJoinWithParams1 = (url, params) => {
  return URLJoin1(url, objectToQueryString1(params));
};
export { URLJoinWithParams1 as URLJoinWithParams };
const UUIDGeneratorBrowser1 = () =>
  (String(10000000) + -1000 + -4000 + -8000 + -100000000000).replace(
    /[018]/g,
    (c) =>
      (
        Number(c) ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (Number(c) / 4)))
      ).toString(16)
  );
export { UUIDGeneratorBrowser1 as UUIDGeneratorBrowser };
const validateNumber1 = (n) =>
  !isNaN(parseFloat(String(n))) && isFinite(Number(n)) && Number(n) == n;
export { validateNumber1 as validateNumber };
const yesNo1 = (val, def = false) =>
  /^(y|yes)$/i.test(val) ? true : /^(n|no)$/i.test(val) ? false : def;
export { yesNo1 as yesNo };
