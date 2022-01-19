var HTMLEscapeChars1;
(function (HTMLEscapeChars1) {
  HTMLEscapeChars1["&"] = "&amp;";
  HTMLEscapeChars1["<"] = "&lt;";
  HTMLEscapeChars1[">"] = "&gt;";
  HTMLEscapeChars1["'"] = "&#39;";
  HTMLEscapeChars1['"'] = "&quot;";
})(HTMLEscapeChars1 || (HTMLEscapeChars1 = {}));
var HTMLUnEscapeChars1;
(function (HTMLUnEscapeChars1) {
  HTMLUnEscapeChars1["&amp;"] = "&";
  HTMLUnEscapeChars1["&lt;"] = "<";
  HTMLUnEscapeChars1["&gt;"] = ">";
  HTMLUnEscapeChars1["&#39;"] = "'";
  HTMLUnEscapeChars1["&quot;"] = '"';
})(HTMLUnEscapeChars1 || (HTMLUnEscapeChars1 = {}));
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
const all1 = (arr, fn = Boolean) => arr.every(fn);
const allEqual1 = (arr) => arr.every((val) => val === arr[0]);
const and1 = (a, b) => Boolean(a) && Boolean(b);
const any1 = (arr, fn = Boolean) => arr.some(fn);
const some1 = (arr, fn = Boolean) => arr.some(fn);
const aperture1 = (n, arr) =>
  n >= arr.length
    ? []
    : arr.slice(n - 1).map((v, i) => [...arr.slice(i, i + n - 1), v]);
const approximatelyEqual1 = (v1, v2, epsilon = 0.001) =>
  Math.abs(v1 - v2) < epsilon;
const arrayToCSV1 = (arr, delimiter = ",") =>
  arr
    .map((v) =>
      v
        .map((x) => (typeof x === "string" ? `"${x.replace(/"/g, '""')}"` : x))
        .join(delimiter)
    )
    .join("\n");
const arrayToHtmlList1 = (arr, listID) => {
  let el = document.querySelector("#" + listID);
  if (el) {
    el.innerHTML += arr.map((item) => `<li>${item}</li>`).join("");
  }
};
const ary1 = (fn, n) => (...args) => fn(...args.slice(0, n));
const attempt1 = (fn, ...args) => {
  try {
    return fn(...args);
  } catch (e) {
    return e instanceof Error ? e : new Error(e);
  }
};
const attempt21 = (fn, ...args) => {
  try {
    return [fn(...args), null];
  } catch (e) {
    return [null, e instanceof Error ? e : new Error(e)];
  }
};
const average1 = (...nums) =>
  nums.reduce((acc, val) => acc + val, 0) / nums.length;
const averageBy1 = (arr, fn) => {
  const mapper = typeof fn === "function" ? fn : (val) => val[fn];
  return arr.reduce((acc, val) => acc + mapper(val), 0) / arr.length;
};
const bifurcate1 = (arr, filter) =>
  arr.reduce(
    (acc, val, i) => {
      acc[filter[i] ? 0 : 1].push(val);
      return acc;
    },
    [[], []]
  );
const bifurcateBy1 = (arr, filter) =>
  arr.reduce(
    (acc, val) => {
      acc[filter(val) ? 0 : 1].push(val);
      return acc;
    },
    [[], []]
  );
const binary1 = (fn) => (...[v1, v2]) => fn(v1, v2);
const bind1 = (fn, context, ...boundArgs) => (...args) =>
  fn.apply(context, [...boundArgs, ...args]);
const bindAll1 = (obj, ...fns) =>
  fns.forEach((key) => {
    if (typeof obj[key] === "function") {
      const f = obj[key];
      obj[key] = function (...args) {
        return f.apply(obj, args);
      };
    }
  });
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
const both1 = (f, g) => (...args) => f(...args) && g(...args);
const call1 = (key, ...args) => (context) => context[key](...args);
const capitalize1 = (str = "", lowerRest = false) =>
  str.slice(0, 1).toUpperCase() +
  (lowerRest ? str.slice(1).toLowerCase() : str.slice(1));
const capitalizeEveryWord1 = (str = "") =>
  str.replace(/\b[a-z]/g, (__char) => __char.toUpperCase());
const castArray1 = (val) => (Array.isArray(val) ? val : [val]);
const celsiusToFahrenheit1 = (degrees) => 1.8 * degrees + 32;
const chunk1 = (arr, size) =>
  Array.from(
    {
      length: Math.ceil(arr.length / size),
    },
    (_, i) => arr.slice(i * size, i * size + size)
  );
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
const colors1 = colorize1;
const compact1 = (arr) => arr.filter(Boolean);
const compactWhitespace1 = (str) => str.replace(/\s{2,}/g, " ");
const complement1 = (fn) => (...args) => !fn(...args);
const compose1 = (...fns) =>
  fns.reduce((f, g) => (...args) => f(...castArray1(g(...args))));
const composeRight1 = (...fns) =>
  fns.reduce((f, g) => (...args) => g(...castArray1(f(...args))));
const contains1 = (s1, s2 = "") =>
  s1.toLowerCase().indexOf(s2.toLowerCase()) !== -1;
const containsWhitespace1 = (str) => /\s/.test(str);
const countBy1 = (arr, fn) => {
  const mapper = typeof fn === "function" ? fn : (val) => val[fn];
  return arr.reduce((acc, val) => {
    const value = mapper(val);
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});
};
const countOccurrences1 = (arr, val) =>
  arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
const createElement1 = (str) => {
  const el = document.createElement("div");
  el.innerHTML = str;
  return el.firstElementChild;
};
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
const CSVToArray1 = (data, delimiter = ",", omitFirstRow = false) =>
  data
    .slice(omitFirstRow ? data.indexOf("\n") + 1 : 0)
    .split("\n")
    .map((v) => v.split(delimiter));
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
const curry1 = (fn, arity = fn.length, ...args) =>
  arity <= args.length ? fn(...args) : curry1.bind(null, fn, arity, ...args);
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
const debounce1 = (fn, ms = 300) => {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};
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
const deepFlatten1 = (arr) => {
  if (typeof Array.prototype.flat !== "undefined") return arr.flat(Infinity);
  return [].concat(...arr.map((v) => (Array.isArray(v) ? deepFlatten1(v) : v)));
};
const deepFreeze1 = (obj) => {
  Object.keys(obj).forEach((prop) => {
    if (typeof obj[prop] === "object" && !Object.isFrozen(obj[prop])) {
      deepFreeze1(obj[prop]);
    }
  });
  return Object.freeze(obj);
};
const deepGet1 = (obj, keys, defaultValue = undefined, delimiter = ".") => {
  if (isString1(keys)) {
    keys = keys.split(delimiter);
  }
  return keys.reduce((xs, x) => (xs && xs[x] ? xs[x] : defaultValue), obj);
};
const defaults1 = (obj, ...defs) => Object.assign({}, obj, ...defs, obj);
const delay1 = (fn, wait, ...args) => setTimeout(fn, wait, ...args);
const delayedPromise1 = (wait = 300, ...args) =>
  new Promise((resolve) => {
    delay1(resolve, wait, ...args);
  });
const either1 = (f, g) => (...args) => f(...args) || g(...args);
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
const downloadCSV1 = (csvContent, name = "download.csv") => {
  var encodedUri = encodeURI(csvContent);
  var link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", name);
  document.body.appendChild(link);
  link.click();
};
const escapeHTML1 = (str) =>
  str.replace(htmlEscapeReg, (tag) => HTMLEscapeChars1[tag] || tag);
const unescapeHTML1 = (str) =>
  str.replace(htmlUnEscapeReg, (tag) => HTMLUnEscapeChars1[tag] || tag);
const escapeRegExp1 = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const factorial1 = (n) => (n <= 1 ? 1 : n * factorial1(n - 1));
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
const fahrenheitToCelsius1 = (degrees) => ((degrees - 32) * 5) / 9;
const filterNonUnique1 = (arr) =>
  arr.filter((i) => arr.indexOf(i) === arr.lastIndexOf(i));
const filterNonUniqueBy1 = (arr, fn) =>
  arr.filter((v, i) => arr.every((x, j) => (i === j) === fn(v, x, i, j)));
const findKey1 = (obj, fn) =>
  Object.keys(obj).find((key) => fn(obj[key], key, obj));
const flatten1 = (arr, depth = 1) => {
  if (typeof Array.prototype.flat !== "undefined") return arr.flat(depth);
  return arr.reduce(
    (a, v) =>
      a.concat(depth > 1 && Array.isArray(v) ? flatten1(v, depth - 1) : v),
    []
  );
};
const forEachRight1 = (array = [], callback) => {
  for (let index = array.length - 1; index >= 0; index--) {
    const element = array[index];
    callback(element, index, array);
  }
};
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
const get1 = (from, selector, defaultValue = undefined) =>
  selector
    .replace(/\[([^\[\]]*)\]/g, ".$1.")
    .split(".")
    .filter((t) => t !== "")
    .reduce((prev, cur) => prev && prev[cur], from) || defaultValue;
const getAll1 = (from, ...selectors) =>
  [...selectors].map((s) => get1(from, s));
const getBaseURL1 = (url) =>
  url.indexOf("?") > 0 ? url.slice(0, url.indexOf("?")) : url;
const getType1 = (v) =>
  v === undefined
    ? "undefined"
    : v === null
    ? "null"
    : v.constructor.name.toLowerCase();
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
const mapToObject1 = (map) => {
  let result = {};
  for (let [key, value] of map.entries()) {
    result[key] = value;
  }
  return result;
};
const groupBy1 = (arr, fn) =>
  arr.map(isString1(fn) ? (val) => val[fn] : fn).reduce((acc, val, i) => {
    acc[val] = (acc[val] || []).concat(arr[i]);
    return acc;
  }, {});
const hasFlags1 = (args, ...flags) =>
  flags.every((flag) =>
    args.includes(/^-{1,2}/.test(flag) ? flag : "--" + flag)
  );
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
const hexToRGB21 = (hex) => {
  let hexChars = Array.from(hex.startsWith("#") ? hex.slice(1) : hex);
  if (hexChars.length === 3) {
    hexChars = hexChars.reduce((str, x) => [...str, x, x], []);
  }
  const values = chunk1(hexChars, 2).map(([v1, v2]) => parseInt(v1 + v2, 16));
  return `rgb${values.length == 4 ? "a" : ""}(${values.join(", ")})`;
};
const hide1 = (...el) => [...el].forEach((e) => (e.style.display = "none"));
const httpsRedirect1 = () => {
  if (location.protocol !== "https:")
    location.replace("https://" + location.href.split("//")[1]);
};
const includesAll1 = (arr, values) => values.every((v) => arr.includes(v));
const indentString1 = (str, count, indent = " ") => {
  indent = indent.repeat(count);
  return str.replace(/^/gm, indent);
};
const isFunction1 = (str) => {
  return typeof str === "function";
};
const isArrayLike1 = (obj) => {
  return (
    obj[Symbol.iterator] instanceof Function && obj.entries instanceof Function
  );
};
const isString1 = (str) => {
  return typeof str === "string";
};
function isValidDate1(date) {
  return date instanceof Date && !isNaN(date.getTime());
}
const fillArray1 = (n, val = 0) => Array(n).fill(val);
const initializeArray1 = (n, val = 0) => Array(n).fill(val);
const inRange1 = (n, start, end) => {
  if (end && start > end) [end, start] = [start, end];
  return end === undefined ? n >= 0 && n < start : n >= start && n < end;
};
const insertAt1 = (arr, i, ...v) => {
  arr.splice(i + 1, 0, ...v);
  return arr;
};
const insertAtImmutable1 = (arr, i, ...v) => {
  return [...arr.slice(0, i + 1), ...v, ...arr.slice(i + 1)];
};
const intersection1 = (a, b) => {
  const s = new Set(b);
  return [...new Set(a)].filter((x) => s.has(x));
};
const intersectionBy1 = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return [...new Set(a)].filter((x) => s.has(fn(x)));
};
const intersectionWith1 = (a, b, comp) =>
  a.filter((x) => b.findIndex((y) => comp(x, y)) !== -1);
const is1 = (type, val) =>
  ![, null].includes(val) &&
  (isString1(type) ? val.constructor.name === type : val.constructor === type);
const isAfterDate1 = (dateA, dateB) => dateA > dateB;
const isBeforeDate1 = (dateA, dateB) => dateA < dateB;
const isBrowser1 = () =>
  ![typeof window, typeof document].includes("undefined");
const isEmpty1 = (val) => val == null || !(Object.keys(val) || val).length;
const isLeapYear1 = (year) => new Date(year, 1, 29).getMonth() === 1;
const isLowerCase1 = (str) => str === str.toLowerCase();
const isNil1 = (val) => val === undefined || val === null;
const isNull1 = (val) => val === null;
const isNumber1 = (val) => typeof val === "number" && val === val;
const isObject1 = (obj) => obj === Object(obj);
const isPlainObject1 = (val) =>
  !!val && typeof val === "object" && val.constructor === Object;
const isPrimitive1 = (val) => Object(val) !== val;
const isSameDate1 = (dateA, dateB) =>
  dateA.toISOString() === dateB.toISOString();
const isSorted1 = (arr) => {
  let direction = -(arr[0] - arr[1]);
  for (let [i, val] of arr.entries()) {
    direction = !direction ? -(arr[i - 1] - arr[i]) : direction;
    if (i === arr.length - 1)
      return !direction ? 0 : direction / Math.abs(direction);
    else if ((val - arr[i + 1]) * direction > 0) return 0;
  }
};
const isUpperCase1 = (str) => str === str.toUpperCase();
const isValidJSON1 = (str) => {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
};
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
const last1 = (arr = []) => arr[arr.length - 1];
const listenOnce1 = (el, evt, fn) => {
  let fired = false;
  el.addEventListener(evt, (e) => {
    if (!fired) fn(e);
    fired = true;
  });
};
const lowercaseKeys1 = (obj, deep = false) =>
  Object.keys(obj).reduce((acc, key) => {
    acc[key.toLowerCase()] =
      deep && typeof obj[key] === "object"
        ? lowercaseKeys1(obj[key])
        : obj[key];
    return acc;
  }, {});
const mapKeys1 = (obj, fn) =>
  Object.keys(obj).reduce((acc, k) => {
    acc[fn(obj[k], k, obj)] = obj[k];
    return acc;
  }, {});
const mapObject1 = (arr, fn) =>
  arr.reduce((acc, el, i) => {
    acc[el] = fn(el, i, arr);
    return acc;
  }, {});
const mapString1 = (str, fn) => {
  const chars = [...str];
  return chars.map((c, i) => fn(c, i, chars)).join("");
};
const map1 = (array, fn) => {
  const chars = Array.isArray(array) ? array : [...array];
  return chars.map((c, i) => fn(c, i, chars));
};
const mask1 = (cc, num = 4, mask1 = "*") =>
  String(cc).slice(-num).padStart(String(cc).length, mask1);
const matches1 = (obj, source) =>
  Object.keys(source).every(
    (key) => obj.hasOwnProperty(key) && obj[key] === source[key]
  );
const matchesWith1 = (obj, source, fn) =>
  Object.keys(source).every((key) =>
    obj.hasOwnProperty(key) && fn
      ? fn(obj[key], source[key], key, obj, source)
      : obj[key] == source[key]
  );
const maxBy1 = (arr, fn) =>
  Math.max(...arr.map(isString1(fn) ? (val) => val[fn] : fn));
const maxDate1 = (dates) => new Date(Math.max(...dates.map(Number)));
const maxN1 = (arr, n = 1, order = 1) =>
  [...arr].sort((a, b) => order * (b - a)).slice(0, n);
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
const midpoint1 = ([x1, y1], [x2, y2]) => [(x1 + x2) / 2, (y1 + y2) / 2];
const minBy1 = (arr, fn) =>
  Math.min(...arr.map(isString1(fn) ? (val) => val[fn] : fn));
const sortBy1 = (
  arr,
  $fn = (s1, s2) => order * String(s1).localeCompare(String(s2)),
  order = SortByOrder1.ASC
) => {
  let fn = $fn;
  return [...arr].sort(fn);
};
var SortByOrder1;
(function (SortByOrder1) {
  SortByOrder1[(SortByOrder1["ASC"] = 1)] = "ASC";
  SortByOrder1[(SortByOrder1["DESC"] = -1)] = "DESC";
})(SortByOrder1 || (SortByOrder1 = {}));
const sortByKey1 = (arr, key, order = SortByOrder1.ASC) => {
  return [...arr].sort(
    (s1, s2) => order * String(s1[key]).localeCompare(String(s2[key]))
  );
};
const mostFrequent1 = (arr) =>
  Object.entries(
    arr.reduce((a, v) => {
      a[String(v)] = a[String(v)] ? a[String(v)] + 1 : 1;
      return a;
    }, {})
  ).reduce((a, v) => (v[1] >= a[1] ? v : a), [-1, 0])[0];
const mostPerformant1 = (fns, iterations = 10000) => {
  const times = fns.map((fn) => {
    const before = performance.now();
    for (let i = 0; i < iterations; i++) fn();
    return performance.now() - before;
  });
  return times.indexOf(Math.min(...times));
};
const negate1 = (func) => (...args) => !func(...args);
const nest1 = (items, id = null, link = "parent_id") =>
  items
    .filter((item) => item[link] === id)
    .map((item) => ({
      ...item,
      children: nest1(items, item.id, link),
    }));
const nodeListToArray1 = (nodeList) => [...nodeList];
const toArray1 = (arrLike) => [...arrLike];
const none1 = (arr, fn = Boolean) => !arr.some(fn);
const not1 = (a) => !a;
const nthArg1 = (n) => (...args) => args.slice(n)[0];
const nthElement1 = curry1(
  (n = 0, arr) => (n === -1 ? arr.slice(n) : arr.slice(n, n + 1))[0],
  2
);
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
const offset1 = (arr, offset1) => [
  ...arr.slice(offset1),
  ...arr.slice(0, offset1),
];
const omit1 = (obj, arr) =>
  Object.keys(obj)
    .filter((k) => !arr.includes(k))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});
const omitBy1 = (obj, fn) =>
  Object.keys(obj)
    .filter((k) => !fn(obj[k], k))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});
const or1 = (a, b) => a || b;
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
const pad1 = (str, length, __char = " ") => {
  const s = String(str);
  return s.padStart((s.length + length) / 2, __char).padEnd(length, __char);
};
const parseCookie1 = (str) =>
  str
    .split(";")
    .map((v) => v.split("="))
    .reduce((acc, v) => {
      acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
      return acc;
    }, {});
const partial1 = (fn, ...partials) => (...args) => fn(...partials, ...args);
const partialRight1 = (fn, ...partials) => (...args) =>
  fn(...args, ...partials);
const partition1 = (arr, fn) =>
  arr.reduce(
    (acc, val, i, arr1) => {
      acc[fn(val, i, arr1) ? 0 : 1].push(val);
      return acc;
    },
    [[], []]
  );
const partitionBy1 = (arr, fn) =>
  arr.reduce(
    ({ res, last: last1 }, v, i, a) => {
      const next = fn(v, i, a);
      if (next !== last1) res.push([v]);
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
const pick1 = (obj, arr) =>
  arr.reduce((acc, curr) => (curr in obj && (acc[curr] = obj[curr]), acc), {});
const pickBy1 = (obj, fn) =>
  Object.keys(obj)
    .filter((k) => fn(obj[k], k))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});
const pipeAsyncFunctions1 = (...fns) => (arg) =>
  fns.reduce((p, f) => p.then(f), Promise.resolve(arg));
const pipeFunctions1 = (...fns) =>
  fns.reduce((f, g) => (...args) => g(f(...args)));
const pluralize1 = (num, word, plural = word + "s") =>
  [1, -1].includes(Number(num)) ? word : plural;
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
const prettyBytesT1 = (strings, bytes, precision = 3) => {
  return prettyBytes1(bytes, precision, strings.join(""));
};
const promisify1 = (func) => (...args) =>
  new Promise((resolve, reject) =>
    func(...args, (err, result) => (err ? reject(err) : resolve(result)))
  );
const radsToDegrees1 = (rad) => (rad * 180) / Math.PI;
const randomHexColorCode1 = () => {
  let n = (Math.random() * 1048575 * 1000000).toString(16);
  return "#" + n.slice(0, 6);
};
const randomInt1 = (min = 0, max = 100) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const randomNumber1 = (min = 0, max = 100) =>
  Math.random() * (max - min + 1) + min;
const reduceWhich1 = (arr, comparator = (a, b) => a - b) =>
  arr.reduce((a, b) => (comparator(a, b) >= 0 ? b : a));
const removeNonASCII1 = (str) => str.replace(/[^\x20-\x7E]/g, "");
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
const reverseString1 = (str) => {
  let s = "";
  for (let __char of str) {
    s = __char + s;
  }
  return s;
};
const RGBToHex1 = (r, g, b, hash = "") =>
  hash + ((r << 16) + (g << 8) + b).toString(16).padStart(6, "0");
const round1 = (n, decimals = 0) =>
  Number(`${Math.round(Number(`${n}e${decimals}`))}e-${decimals}`);
const runPromisesInSeries1 = (ps) =>
  ps.reduce((p, next) => p.then(next), Promise.resolve());
const scrollToTop1 = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop1);
    window.scrollTo(0, c - c / 8);
  }
};
const serializeCookie1 = (name, val) =>
  `${encodeURIComponent(name)}=${encodeURIComponent(val)}`;
const show1 = (...el) => [...el].forEach((e) => (e.style.display = ""));
const shuffle1 = ([...arr]) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
};
const size1 = (val) =>
  Array.isArray(val)
    ? val.length
    : val && typeof val === "object"
    ? val.size || val.length || Object.keys(val).length
    : typeof val === "string"
    ? new Blob([val]).size
    : 0;
const sleep1 = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const splitLines1 = (str) => str.split(/\r?\n/);
const spreadOver1 = (fn) => (argsArr) => fn(...argsArr);
const stableSort1 = (arr, compare) =>
  arr
    .map((item, index) => ({
      item,
      index,
    }))
    .sort((a, b) => compare(a.item, b.item) || a.index - b.index)
    .map(({ item }) => item);
const stripHTMLTags1 = (str) => str.replace(/<[^>]*>/g, "");
const sum1 = (...arr) => [...arr].reduce((acc, val) => acc + val, 0);
const sumBy1 = (arr, fn) => {
  return arr
    .map(typeof fn === "function" ? fn : (val) => val[fn])
    .reduce((acc, val) => acc + val, 0);
};
const tail1 = (arr) => (arr.length > 1 ? arr.slice(1) : arr);
const take1 = (arr, n = 1) => arr.slice(0, n);
const takeRight1 = (arr, n = 1) => arr.slice(arr.length - n, arr.length);
const takeWhile1 = (arr, func) =>
  arr.reduce((acc, el) => (func(el) ? acc : acc.concat(el)), []);
const takeRightWhile1 = (arr, func) =>
  arr.reduceRight((acc, el) => (func(el) ? acc : [el].concat(acc)), []);
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
const times1 = (n, fn, context = undefined) => {
  let i = 0;
  let result;
  do {
    result = fn.call(context, i);
  } while (result !== false && ++i < n);
  return result;
};
const timeTaken1 = (callback) => {
  const id = `timeTaken_${Date.now()}`;
  console.time(id);
  const r = callback();
  console.timeEnd(id);
  return r;
};
const toCamelCase1 = (str) => {
  let s = str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    ?.map((x) => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
    .join("");
  return s && s.slice(0, 1).toLowerCase() + s.slice(1);
};
const toDecimalMark1 = (num) => num.toLocaleString("en-US");
const toKebabCase1 = (str) =>
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    ?.map((x) => x.toLowerCase())
    .join("-");
const humanizeUrl1 = (str, preserveUndersore = false, preserveCase = false) => {
  const re = preserveUndersore ? /[\W]+/g : /[\W_]+/g;
  return preserveCase
    ? str.replace(re, "-")
    : str.replace(re, "-").toLowerCase();
};
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
const toPairs1 = (obj) =>
  !obj
    ? []
    : isArrayLike1(obj)
    ? Array.from(obj.entries())
    : Object.entries(obj);
const toSnakeCase1 = (str) =>
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    ?.map((x) => x.toLowerCase())
    .join("_");
const toTitleCase1 = (str) =>
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    ?.map((x) => x.charAt(0).toUpperCase() + x.slice(1))
    .join(" ");
const transform1 = (obj, fn, acc = {}) =>
  Object.keys(obj).reduce((a, k) => fn(a, obj[k], k, obj), acc);
const triggerEvent1 = (el, eventType, detail) =>
  el.dispatchEvent &&
  el.dispatchEvent(
    new CustomEvent(eventType, {
      detail,
    })
  );
const truncateString1 = (str, num = str.length, ellipsisStr = "...") =>
  str.length >= num
    ? str.slice(0, num >= ellipsisStr.length ? num - ellipsisStr.length : num) +
      ellipsisStr
    : str;
const ellipsis1 = (str, num = str.length, ellipsisStr = "...") =>
  str.length >= num
    ? str.slice(0, num >= ellipsisStr.length ? num - ellipsisStr.length : num) +
      ellipsisStr
    : str;
const unary1 = (fn) => (val) => fn(val);
const uncurry1 = (fn, n = 1) => (...args) => {
  const next = (acc) => (args1) => args1.reduce((x, y) => x(y), acc);
  if (n > args.length) throw new RangeError("Arguments too few!");
  return next(fn)(args.slice(0, n));
};
const union1 = (a, b) => Array.from(new Set([...a, ...b]));
const unionBy1 = (a, b, fn) => {
  const s = new Set(a.map(fn));
  return Array.from(new Set([...a, ...b.filter((x) => !s.has(fn(x)))]));
};
const unionWith1 = (a, b, comp) =>
  Array.from(
    new Set([...a, ...b.filter((x) => a.findIndex((y) => comp(x, y)) === -1)])
  );
const unique1 = (arr) => [...new Set(arr)];
const uniqueBy1 = (arr, fn) =>
  arr.reduce((acc, v) => {
    if (!acc.some((x) => fn(v, x))) acc.push(v);
    return acc;
  }, []);
const uniqueByRight1 = (arr, fn) =>
  arr.reduceRight((acc, v) => {
    if (!acc.some((x) => fn(v, x))) acc.push(v);
    return acc;
  }, []);
const unzip1 = (arr, size1 = 0) => {
  return arr.reduce(
    (acc, val) => (val.forEach((v, i) => acc[i].push(v)), acc),
    Array.from({
      length: size1 || Math.max(...arr.map((x) => x.length)),
    }).map(() => [])
  );
};
const unzipWith1 = (arr, fn, size1 = 0) =>
  arr
    .reduce(
      (acc, val) => (val.forEach((v, i) => acc[i].push(v)), acc),
      Array.from({
        length: size1 || Math.max(...arr.map((x) => x.length)),
      }).map((x) => [])
    )
    .map((val) => fn(...val));
const URLJoin1 = (...args) =>
  args
    .join("/")
    .replace(/[\/]+/g, "/")
    .replace(/^(.+):\//, "$1://")
    .replace(/^file:/, "file:/")
    .replace(/\/(\?|&|#[^!])/g, "$1")
    .replace(/\?/g, "&")
    .replace("&", "?");
const URLJoinWithParams1 = (url, params) => {
  return URLJoin1(url, objectToQueryString1(params));
};
const UUIDGeneratorBrowser1 = () =>
  (String(10000000) + -1000 + -4000 + -8000 + -100000000000).replace(
    /[018]/g,
    (c) =>
      (
        Number(c) ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (Number(c) / 4)))
      ).toString(16)
  );
const validateNumber1 = (n) =>
  !isNaN(parseFloat(String(n))) && isFinite(Number(n)) && Number(n) == n;
const yesNo1 = (val, def = false) =>
  /^(y|yes)$/i.test(val) ? true : /^(n|no)$/i.test(val) ? false : def;
export { HTMLEscapeChars1 as HTMLEscapeChars };
export { HTMLUnEscapeChars1 as HTMLUnEscapeChars };
export { accumulate1 as accumulate };
export { all1 as all };
export { allEqual1 as allEqual };
export { and1 as and };
export { any1 as any };
export { some1 as some };
export { aperture1 as aperture };
export { approximatelyEqual1 as approximatelyEqual };
export { arrayToCSV1 as arrayToCSV };
export { arrayToHtmlList1 as arrayToHtmlList };
export { ary1 as ary };
export { attempt1 as attempt };
export { attempt21 as attempt2 };
export { average1 as average };
export { averageBy1 as averageBy };
export { bifurcate1 as bifurcate };
export { bifurcateBy1 as bifurcateBy };
export { binary1 as binary };
export { bind1 as bind };
export { bindAll1 as bindAll };
export { binomialCoefficient1 as binomialCoefficient };
export { both1 as both };
export { call1 as call };
export { capitalize1 as capitalize };
export { capitalizeEveryWord1 as capitalizeEveryWord };
export { castArray1 as castArray };
export { celsiusToFahrenheit1 as celsiusToFahrenheit };
export { chunk1 as chunk };
export { colorize1 as colorize };
export { colors1 as colors };
export { compact1 as compact };
export { compactWhitespace1 as compactWhitespace };
export { complement1 as complement };
export { compose1 as compose };
export { composeRight1 as composeRight };
export { contains1 as contains };
export { containsWhitespace1 as containsWhitespace };
export { countBy1 as countBy };
export { countOccurrences1 as countOccurrences };
export { createElement1 as createElement };
export { createEventHub1 as createEventHub };
export { CSVToArray1 as CSVToArray };
export { CSVToJSON1 as CSVToJSON };
export { curry1 as curry };
export { dayOfYear1 as dayOfYear };
export { debounce1 as debounce };
export { deepClone1 as deepClone };
export { deepFlatten1 as deepFlatten };
export { deepFreeze1 as deepFreeze };
export { deepGet1 as deepGet };
export { defaults1 as defaults };
export { delay1 as delay };
export { delayedPromise1 as delayedPromise };
export { either1 as either };
export { equals1 as equals };
export { deepEquals1 as deepEquals };
export { downloadCSV1 as downloadCSV };
export { escapeHTML1 as escapeHTML };
export { unescapeHTML1 as unescapeHTML };
export { escapeRegExp1 as escapeRegExp };
export { factorial1 as factorial };
export { memoize1 as memoize };
export { fahrenheitToCelsius1 as fahrenheitToCelsius };
export { filterNonUnique1 as filterNonUnique };
export { filterNonUniqueBy1 as filterNonUniqueBy };
export { findKey1 as findKey };
export { flatten1 as flatten };
export { forEachRight1 as forEachRight };
export { formatDuration1 as formatDuration };
export { formatDate1 as formatDate };
export { get1 as get };
export { getAll1 as getAll };
export { getBaseURL1 as getBaseURL };
export { getType1 as getType };
export { getURLParameters1 as getURLParameters };
export { mapToObject1 as mapToObject };
export { groupBy1 as groupBy };
export { hasFlags1 as hasFlags };
export { hexToRGB1 as hexToRGB };
export { hexToRGB21 as hexToRGB2 };
export { hide1 as hide };
export { httpsRedirect1 as httpsRedirect };
export { includesAll1 as includesAll };
export { indentString1 as indentString };
export { isFunction1 as isFunction };
export { isArrayLike1 as isArrayLike };
export { isString1 as isString };
export { isValidDate1 as isValidDate };
export { fillArray1 as fillArray };
export { initializeArray1 as initializeArray };
export { inRange1 as inRange };
export { insertAt1 as insertAt };
export { insertAtImmutable1 as insertAtImmutable };
export { intersection1 as intersection };
export { intersectionBy1 as intersectionBy };
export { intersectionWith1 as intersectionWith };
export { is1 as is };
export { isAfterDate1 as isAfterDate };
export { isBeforeDate1 as isBeforeDate };
export { isBrowser1 as isBrowser };
export { isEmpty1 as isEmpty };
export { isLeapYear1 as isLeapYear };
export { isLowerCase1 as isLowerCase };
export { isNil1 as isNil };
export { isNull1 as isNull };
export { isNumber1 as isNumber };
export { isObject1 as isObject };
export { isPlainObject1 as isPlainObject };
export { isPrimitive1 as isPrimitive };
export { isSameDate1 as isSameDate };
export { isSorted1 as isSorted };
export { isUpperCase1 as isUpperCase };
export { isValidJSON1 as isValidJSON };
export { JSONtoCSV1 as JSONtoCSV };
export { last1 as last };
export { listenOnce1 as listenOnce };
export { lowercaseKeys1 as lowercaseKeys };
export { mapKeys1 as mapKeys };
export { mapObject1 as mapObject };
export { mapString1 as mapString };
export { map1 as map };
export { mask1 as mask };
export { matches1 as matches };
export { matchesWith1 as matchesWith };
export { maxBy1 as maxBy };
export { maxDate1 as maxDate };
export { maxN1 as maxN };
export { merge1 as merge };
export { midpoint1 as midpoint };
export { minBy1 as minBy };
export { sortBy1 as sortBy };
export { SortByOrder1 as SortByOrder };
export { sortByKey1 as sortByKey };
export { mostFrequent1 as mostFrequent };
export { mostPerformant1 as mostPerformant };
export { negate1 as negate };
export { nest1 as nest };
export { nodeListToArray1 as nodeListToArray };
export { toArray1 as toArray };
export { none1 as none };
export { not1 as not };
export { nthArg1 as nthArg };
export { nthElement1 as nthElement };
export { objectToQueryString1 as objectToQueryString };
export { offset1 as offset };
export { omit1 as omit };
export { omitBy1 as omitBy };
export { or1 as or };
export { orderBy1 as orderBy };
export { orderByFunc1 as orderByFunc };
export { pad1 as pad };
export { parseCookie1 as parseCookie };
export { partial1 as partial };
export { partialRight1 as partialRight };
export { partition1 as partition };
export { partitionBy1 as partitionBy };
export { pick1 as pick };
export { pickBy1 as pickBy };
export { pipeAsyncFunctions1 as pipeAsyncFunctions };
export { pipeFunctions1 as pipeFunctions };
export { pluralize1 as pluralize };
export { prefix1 as prefix };
export { prettyBytes1 as prettyBytes };
export { prettyBytesT1 as prettyBytesT };
export { promisify1 as promisify };
export { radsToDegrees1 as radsToDegrees };
export { randomHexColorCode1 as randomHexColorCode };
export { randomInt1 as randomInt };
export { randomNumber1 as randomNumber };
export { reduceWhich1 as reduceWhich };
export { removeNonASCII1 as removeNonASCII };
export { renderElement1 as renderElement };
export { reverseString1 as reverseString };
export { RGBToHex1 as RGBToHex };
export { round1 as round };
export { runPromisesInSeries1 as runPromisesInSeries };
export { scrollToTop1 as scrollToTop };
export { serializeCookie1 as serializeCookie };
export { show1 as show };
export { shuffle1 as shuffle };
export { size1 as size };
export { sleep1 as sleep };
export { splitLines1 as splitLines };
export { spreadOver1 as spreadOver };
export { stableSort1 as stableSort };
export { stripHTMLTags1 as stripHTMLTags };
export { sum1 as sum };
export { sumBy1 as sumBy };
export { tail1 as tail };
export { take1 as take };
export { takeRight1 as takeRight };
export { takeWhile1 as takeWhile };
export { takeRightWhile1 as takeRightWhile };
export { throttle1 as throttle };
export { times1 as times };
export { timeTaken1 as timeTaken };
export { toCamelCase1 as toCamelCase };
export { toDecimalMark1 as toDecimalMark };
export { toKebabCase1 as toKebabCase };
export { humanizeUrl1 as humanizeUrl };
export { toOrdinalSuffix1 as toOrdinalSuffix };
export { toPairs1 as toPairs };
export { toSnakeCase1 as toSnakeCase };
export { toTitleCase1 as toTitleCase };
export { transform1 as transform };
export { triggerEvent1 as triggerEvent };
export { truncateString1 as truncateString };
export { ellipsis1 as ellipsis };
export { unary1 as unary };
export { uncurry1 as uncurry };
export { union1 as union };
export { unionBy1 as unionBy };
export { unionWith1 as unionWith };
export { unique1 as unique };
export { uniqueBy1 as uniqueBy };
export { uniqueByRight1 as uniqueByRight };
export { unzip1 as unzip };
export { unzipWith1 as unzipWith };
export { URLJoin1 as URLJoin };
export { URLJoinWithParams1 as URLJoinWithParams };
export { UUIDGeneratorBrowser1 as UUIDGeneratorBrowser };
export { validateNumber1 as validateNumber };
export { yesNo1 as yesNo };
