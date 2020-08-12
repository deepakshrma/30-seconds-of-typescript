// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.

// This is a specialised implementation of a System module loader.

"use strict";

// @ts-nocheck
/* eslint-disable */
let System, __instantiate;
(() => {
  const r = new Map();

  System = {
    register(id, d, f) {
      r.set(id, { d, f, exp: {} });
    },
  };
  async function dI(mid, src) {
    let id = mid.replace(/\.\w+$/i, "");
    if (id.includes("./")) {
      const [o, ...ia] = id.split("/").reverse(),
        [, ...sa] = src.split("/").reverse(),
        oa = [o];
      let s = 0,
        i;
      while ((i = ia.shift())) {
        if (i === "..") s++;
        else if (i === ".") break;
        else oa.push(i);
      }
      if (s < sa.length) oa.push(...sa.slice(s));
      id = oa.reverse().join("/");
    }
    return r.has(id) ? gExpA(id) : import(mid);
  }

  function gC(id, main) {
    return {
      id,
      import: (m) => dI(m, id),
      meta: { url: id, main },
    };
  }

  function gE(exp) {
    return (id, v) => {
      v = typeof id === "string" ? { [id]: v } : id;
      for (const [id, value] of Object.entries(v)) {
        Object.defineProperty(exp, id, {
          value,
          writable: true,
          enumerable: true,
        });
      }
    };
  }

  function rF(main) {
    for (const [id, m] of r.entries()) {
      const { f, exp } = m;
      const { execute: e, setters: s } = f(gE(exp), gC(id, id === main));
      delete m.f;
      m.e = e;
      m.s = s;
    }
  }

  async function gExpA(id) {
    if (!r.has(id)) return;
    const m = r.get(id);
    if (m.s) {
      const { d, e, s } = m;
      delete m.s;
      delete m.e;
      for (let i = 0; i < s.length; i++) s[i](await gExpA(d[i]));
      const r = e();
      if (r) await r;
    }
    return m.exp;
  }

  function gExp(id) {
    if (!r.has(id)) return;
    const m = r.get(id);
    if (m.s) {
      const { d, e, s } = m;
      delete m.s;
      delete m.e;
      for (let i = 0; i < s.length; i++) s[i](gExp(d[i]));
      e();
    }
    return m.exp;
  }
  __instantiate = (m, a) => {
    System = __instantiate = undefined;
    rF(m);
    return a ? gExpA(m) : gExp(m);
  };
})();

System.register("util", [], function (exports_1, context_1) {
  "use strict";
  var HTMLEscapeChars,
    HTMLUnEscapeChars,
    htmlEscapeReg,
    htmlUnEscapeReg,
    accumulate,
    all,
    allEqual,
    and,
    any,
    some,
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
    call,
    capitalize,
    capitalizeEveryWord,
    castArray,
    celsiusToFahrenheit,
    chunk,
    colorize,
    colors,
    compact,
    compactWhitespace,
    complement,
    compose,
    composeRight,
    contains,
    containsWhitespace,
    countBy,
    countOccurrences,
    createElement,
    createEventHub,
    CSVToArray,
    CSVToJSON,
    curry,
    dayOfYear,
    debounce,
    deepClone,
    deepFlatten,
    deepFreeze,
    deepGet,
    defaults,
    delay,
    delayedPromise,
    either,
    equals,
    deepEquals,
    downloadCSV,
    escapeHTML,
    unescapeHTML,
    escapeRegExp,
    factorial,
    memoize,
    fahrenheitToCelsius,
    filterNonUnique,
    filterNonUniqueBy,
    findKey,
    flatten,
    forEachRight,
    formatDuration,
    padLeft,
    formatDate,
    get,
    getAll,
    getBaseURL,
    getType,
    getURLParameters,
    mapToObject,
    groupBy,
    hasFlags,
    hexToRGB,
    hexToRGB2,
    hide,
    httpsRedirect,
    includesAll,
    indentString,
    isFunction,
    isArrayLike,
    isString,
    fillArray,
    initializeArray,
    inRange,
    insertAt,
    insertAtImmutable,
    intersection,
    intersectionBy,
    intersectionWith,
    is,
    isAfterDate,
    isBeforeDate,
    isBrowser,
    isEmpty,
    isLeapYear,
    isLowerCase,
    isNil,
    isNull,
    isNumber,
    isObject,
    isPlainObject,
    isPrimitive,
    isSameDate,
    isSorted,
    isUpperCase,
    isValidJSON,
    JSONtoCSV,
    last,
    listenOnce,
    lowercaseKeys,
    mapKeys,
    mapObject,
    mapString,
    map,
    mask,
    matches,
    matchesWith,
    maxBy,
    maxDate,
    maxN,
    merge,
    midpoint,
    minBy,
    sortBy,
    SortByOrder,
    sortByKey,
    mostFrequent,
    mostPerformant,
    negate,
    nest,
    nodeListToArray,
    toArray,
    none,
    not,
    nthArg,
    nthElement,
    objectToQueryString,
    offset,
    omit,
    omitBy,
    or,
    orderBy,
    orderByFunc,
    pad,
    parseCookie,
    partial,
    partialRight,
    partition,
    partitionBy,
    pick,
    pickBy,
    pipeAsyncFunctions,
    pipeFunctions,
    pluralize,
    prefix,
    prettyBytes,
    prettyBytesT,
    promisify,
    radsToDegrees,
    randomHexColorCode,
    randomInt,
    randomNumber,
    reduceWhich,
    removeNonASCII,
    renderElement,
    reverseString,
    RGBToHex,
    round,
    runPromisesInSeries,
    scrollToTop,
    serializeCookie,
    show,
    shuffle,
    size,
    sleep,
    splitLines,
    spreadOver,
    stableSort,
    stripHTMLTags,
    sum,
    sumBy,
    tail,
    take,
    takeRight,
    takeWhile,
    takeRightWhile,
    throttle,
    times,
    timeTaken,
    toCamelCase,
    toDecimalMark,
    toKebabCase,
    humanizeUrl,
    toOrdinalSuffix,
    toPairs,
    toSnakeCase,
    toTitleCase,
    transform,
    triggerEvent,
    truncateString,
    ellipsis,
    unary,
    uncurry,
    union,
    unionBy,
    unionWith,
    unique,
    uniqueBy,
    uniqueByRight,
    unzip,
    unzipWith,
    URLJoin,
    URLJoinWithParams,
    UUIDGeneratorBrowser,
    validateNumber,
    yesNo;
  var __moduleName = context_1 && context_1.id;
  function isValidDate(date) {
    return date instanceof Date && !isNaN(date.getTime());
  }
  exports_1("isValidDate", isValidDate);
  return {
    setters: [],
    execute: function () {
      (function (HTMLEscapeChars) {
        HTMLEscapeChars["&"] = "&amp;";
        HTMLEscapeChars["<"] = "&lt;";
        HTMLEscapeChars[">"] = "&gt;";
        HTMLEscapeChars["'"] = "&#39;";
        HTMLEscapeChars['"'] = "&quot;";
      })(HTMLEscapeChars || (HTMLEscapeChars = {}));
      exports_1("HTMLEscapeChars", HTMLEscapeChars);
      (function (HTMLUnEscapeChars) {
        HTMLUnEscapeChars["&amp;"] = "&";
        HTMLUnEscapeChars["&lt;"] = "<";
        HTMLUnEscapeChars["&gt;"] = ">";
        HTMLUnEscapeChars["&#39;"] = "'";
        HTMLUnEscapeChars["&quot;"] = '"';
      })(HTMLUnEscapeChars || (HTMLUnEscapeChars = {}));
      exports_1("HTMLUnEscapeChars", HTMLUnEscapeChars);
      htmlEscapeReg = new RegExp(
        `[${Object.keys(HTMLEscapeChars).join("")}]`,
        "g"
      );
      htmlUnEscapeReg = new RegExp(
        `${Object.keys(HTMLUnEscapeChars).join("|")}`,
        "g"
      );
      exports_1(
        "accumulate",
        (accumulate = (...nums) =>
          nums.reduce((acc, n) => [...acc, n + +acc.slice(-1)], []))
      );
      exports_1("all", (all = (arr, fn = Boolean) => arr.every(fn)));
      exports_1(
        "allEqual",
        (allEqual = (arr) => arr.every((val) => val === arr[0]))
      );
      exports_1("and", (and = (a, b) => Boolean(a) && Boolean(b)));
      exports_1("any", (any = (arr, fn = Boolean) => arr.some(fn)));
      exports_1("some", (some = (arr, fn = Boolean) => arr.some(fn)));
      exports_1(
        "aperture",
        (aperture = (n, arr) =>
          n >= arr.length
            ? []
            : arr.slice(n - 1).map((v, i) => [...arr.slice(i, i + n - 1), v]))
      );
      exports_1(
        "approximatelyEqual",
        (approximatelyEqual = (v1, v2, epsilon = 0.001) =>
          Math.abs(v1 - v2) < epsilon)
      );
      exports_1(
        "arrayToCSV",
        (arrayToCSV = (arr, delimiter = ",") =>
          arr
            .map((v) =>
              v
                .map((x) =>
                  typeof x === "string" ? `"${x.replace(/"/g, '""')}"` : x
                )
                .join(delimiter)
            )
            .join("\n"))
      );
      exports_1(
        "arrayToHtmlList",
        (arrayToHtmlList = (arr, listID) => {
          let el = document.querySelector("#" + listID);
          if (el) {
            el.innerHTML += arr.map((item) => `<li>${item}</li>`).join("");
          }
        })
      );
      exports_1("ary", (ary = (fn, n) => (...args) => fn(...args.slice(0, n))));
      exports_1(
        "attempt",
        (attempt = (fn, ...args) => {
          try {
            return fn(...args);
          } catch (e) {
            return e instanceof Error ? e : new Error(e);
          }
        })
      );
      exports_1(
        "attempt2",
        (attempt2 = (fn, ...args) => {
          try {
            return [fn(...args), null];
          } catch (e) {
            return [null, e instanceof Error ? e : new Error(e)];
          }
        })
      );
      exports_1(
        "average",
        (average = (...nums) =>
          nums.reduce((acc, val) => acc + val, 0) / nums.length)
      );
      exports_1(
        "averageBy",
        (averageBy = (arr, fn) => {
          const mapper = typeof fn === "function" ? fn : (val) => val[fn];
          return arr.reduce((acc, val) => acc + mapper(val), 0) / arr.length;
        })
      );
      exports_1(
        "bifurcate",
        (bifurcate = (arr, filter) =>
          arr.reduce(
            (acc, val, i) => {
              acc[filter[i] ? 0 : 1].push(val);
              return acc;
            },
            [[], []]
          ))
      );
      exports_1(
        "bifurcateBy",
        (bifurcateBy = (arr, filter) =>
          arr.reduce(
            (acc, val) => {
              acc[filter(val) ? 0 : 1].push(val);
              return acc;
            },
            [[], []]
          ))
      );
      exports_1("binary", (binary = (fn) => (...[v1, v2]) => fn(v1, v2)));
      exports_1(
        "bind",
        (bind = (fn, context, ...boundArgs) => (...args) =>
          fn.apply(context, [...boundArgs, ...args]))
      );
      exports_1(
        "bindAll",
        (bindAll = (obj, ...fns) =>
          fns.forEach((key) => {
            if (typeof obj[key] === "function") {
              const f = obj[key];
              obj[key] = function (...args) {
                return f.apply(obj, args);
              };
            }
          }))
      );
      exports_1(
        "binomialCoefficient",
        (binomialCoefficient = (n, k) => {
          if (Number.isNaN(n) || Number.isNaN(k)) return NaN;
          if (k < 0 || k > n) return 0;
          if (k === 0 || k === n) return 1;
          if (k === 1 || k === n - 1) return n;
          if (n - k < k) k = n - k;
          let res = n;
          for (let j = 2; j <= k; j++) res *= (n - j + 1) / j;
          return Math.round(res);
        })
      );
      exports_1(
        "both",
        (both = (f, g) => (...args) => f(...args) && g(...args))
      );
      exports_1(
        "call",
        (call = (key, ...args) => (context) => context[key](...args))
      );
      exports_1(
        "capitalize",
        (capitalize = (str = "", lowerRest = false) =>
          str.slice(0, 1).toUpperCase() +
          (lowerRest ? str.slice(1).toLowerCase() : str.slice(1)))
      );
      exports_1(
        "capitalizeEveryWord",
        (capitalizeEveryWord = (str = "") =>
          str.replace(/\b[a-z]/g, (char) => char.toUpperCase()))
      );
      exports_1(
        "castArray",
        (castArray = (val) => (Array.isArray(val) ? val : [val]))
      );
      exports_1(
        "celsiusToFahrenheit",
        (celsiusToFahrenheit = (degrees) => 1.8 * degrees + 32)
      );
      exports_1(
        "chunk",
        (chunk = (arr, size) =>
          Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
            arr.slice(i * size, i * size + size)
          ))
      );
      exports_1(
        "colorize",
        (colorize = new (class {
          constructor() {
            this.color = (code, ended = false, ...messages) =>
              `\x1b[${code}m${messages.join(" ")}${ended ? "\x1b[0m" : ""}`;
            this.black = this.color.bind(null, 30, false);
            this.red = this.color.bind(null, 31, false);
            this.green = this.color.bind(null, 32, false);
            this.yellow = this.color.bind(this, 33, false);
            this.blue = this.color.bind(this, 34, false);
            this.magenta = this.color.bind(this, 35, false);
            this.cyan = this.color.bind(this, 36, false);
            this.white = this.color.bind(this, 37, false);
            this.bgBlack = this.color.bind(this, 40, true);
            this.bgRed = this.color.bind(this, 41, true);
            this.bgGreen = this.color.bind(this, 42, true);
            this.bgYellow = this.color.bind(this, 43, true);
            this.bgBlue = this.color.bind(this, 44, true);
            this.bgMagenta = this.color.bind(this, 45, true);
            this.bgCyan = this.color.bind(this, 46, true);
            this.bgWhite = this.color.bind(this, 47, true);
          }
        })())
      );
      exports_1("colors", (colors = colorize));
      exports_1("compact", (compact = (arr) => arr.filter(Boolean)));
      exports_1(
        "compactWhitespace",
        (compactWhitespace = (str) => str.replace(/\s{2,}/g, " "))
      );
      exports_1("complement", (complement = (fn) => (...args) => !fn(...args)));
      exports_1(
        "compose",
        (compose = (...fns) =>
          fns.reduce((f, g) => (...args) => f(...castArray(g(...args)))))
      );
      exports_1(
        "composeRight",
        (composeRight = (...fns) =>
          fns.reduce((f, g) => (...args) => g(...castArray(f(...args)))))
      );
      exports_1(
        "contains",
        (contains = (s1, s2 = "") =>
          s1.toLowerCase().indexOf(s2.toLowerCase()) !== -1)
      );
      exports_1(
        "containsWhitespace",
        (containsWhitespace = (str) => /\s/.test(str))
      );
      exports_1(
        "countBy",
        (countBy = (arr, fn) => {
          const mapper = typeof fn === "function" ? fn : (val) => val[fn];
          return arr.reduce((acc, val) => {
            const value = mapper(val);
            acc[value] = (acc[value] || 0) + 1;
            return acc;
          }, {});
        })
      );
      exports_1(
        "countOccurrences",
        (countOccurrences = (arr, val) =>
          arr.reduce((a, v) => (v === val ? a + 1 : a), 0))
      );
      exports_1(
        "createElement",
        (createElement = (str) => {
          const el = document.createElement("div");
          el.innerHTML = str;
          return el.firstElementChild;
        })
      );
      exports_1(
        "createEventHub",
        (createEventHub = () => ({
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
        }))
      );
      exports_1(
        "CSVToArray",
        (CSVToArray = (data, delimiter = ",", omitFirstRow = false) =>
          data
            .slice(omitFirstRow ? data.indexOf("\n") + 1 : 0)
            .split("\n")
            .map((v) => v.split(delimiter)))
      );
      exports_1(
        "CSVToJSON",
        (CSVToJSON = (data, delimiter = ",") => {
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
        })
      );
      exports_1(
        "curry",
        (curry = (fn, arity = fn.length, ...args) =>
          arity <= args.length
            ? fn(...args)
            : curry.bind(null, fn, arity, ...args))
      );
      exports_1(
        "dayOfYear",
        (dayOfYear = (date) => {
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
        })
      );
      exports_1(
        "debounce",
        (debounce = (fn, ms = 300) => {
          let timeoutId;
          return function (...args) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => fn.apply(this, args), ms);
          };
        })
      );
      exports_1(
        "deepClone",
        (deepClone = (obj) => {
          if (obj === null) return null;
          let clone = { ...obj };
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
        })
      );
      exports_1(
        "deepFlatten",
        (deepFlatten = (arr) => {
          if (typeof Array.prototype.flat !== "undefined")
            return arr.flat(Infinity);
          return [].concat(
            ...arr.map((v) => (Array.isArray(v) ? deepFlatten(v) : v))
          );
        })
      );
      exports_1(
        "deepFreeze",
        (deepFreeze = (obj) => {
          Object.keys(obj).forEach((prop) => {
            if (typeof obj[prop] === "object" && !Object.isFrozen(obj[prop])) {
              deepFreeze(obj[prop]);
            }
          });
          return Object.freeze(obj);
        })
      );
      exports_1(
        "deepGet",
        (deepGet = (obj, keys, defaultValue = undefined, delimiter = ".") => {
          if (isString(keys)) {
            keys = keys.split(delimiter);
          }
          return keys.reduce(
            (xs, x) => (xs && xs[x] ? xs[x] : defaultValue),
            obj
          );
        })
      );
      exports_1(
        "defaults",
        (defaults = (obj, ...defs) => Object.assign({}, obj, ...defs, obj))
      );
      exports_1(
        "delay",
        (delay = (fn, wait, ...args) => setTimeout(fn, wait, ...args))
      );
      exports_1(
        "delayedPromise",
        (delayedPromise = (wait = 300, ...args) =>
          new Promise((resolve) => {
            delay(resolve, wait, ...args);
          }))
      );
      exports_1(
        "either",
        (either = (f, g) => (...args) => f(...args) || g(...args))
      );
      exports_1(
        "equals",
        (equals = (a, b) => {
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
        })
      );
      exports_1(
        "deepEquals",
        (deepEquals = (a, b) => {
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
        })
      );
      exports_1(
        "downloadCSV",
        (downloadCSV = (csvContent, name = "download.csv") => {
          var encodedUri = encodeURI(csvContent);
          var link = document.createElement("a");
          link.setAttribute("href", encodedUri);
          link.setAttribute("download", name);
          document.body.appendChild(link);
          link.click();
        })
      );
      exports_1(
        "escapeHTML",
        (escapeHTML = (str) =>
          str.replace(htmlEscapeReg, (tag) => HTMLEscapeChars[tag] || tag))
      );
      exports_1(
        "unescapeHTML",
        (unescapeHTML = (str) =>
          str.replace(htmlUnEscapeReg, (tag) => HTMLUnEscapeChars[tag] || tag))
      );
      exports_1(
        "escapeRegExp",
        (escapeRegExp = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
      );
      exports_1(
        "factorial",
        (factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1)))
      );
      exports_1(
        "memoize",
        (memoize = (fn) => {
          const cache = new Map();
          const cached = function (val) {
            return cache.has(val)
              ? cache.get(val)
              : cache.set(val, fn.call(this, val)) && cache.get(val);
          };
          cached.cache = cache;
          return cached;
        })
      );
      exports_1(
        "fahrenheitToCelsius",
        (fahrenheitToCelsius = (degrees) => ((degrees - 32) * 5) / 9)
      );
      exports_1(
        "filterNonUnique",
        (filterNonUnique = (arr) =>
          arr.filter((i) => arr.indexOf(i) === arr.lastIndexOf(i)))
      );
      exports_1(
        "filterNonUniqueBy",
        (filterNonUniqueBy = (arr, fn) =>
          arr.filter((v, i) =>
            arr.every((x, j) => (i === j) === fn(v, x, i, j))
          ))
      );
      exports_1(
        "findKey",
        (findKey = (obj, fn) =>
          Object.keys(obj).find((key) => fn(obj[key], key, obj)))
      );
      exports_1(
        "flatten",
        (flatten = (arr, depth = 1) => {
          if (typeof Array.prototype.flat !== "undefined")
            return arr.flat(depth);
          return arr.reduce(
            (a, v) =>
              a.concat(
                depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v
              ),
            []
          );
        })
      );
      exports_1(
        "forEachRight",
        (forEachRight = (array = [], callback) => {
          for (let index = array.length - 1; index >= 0; index--) {
            const element = array[index];
            callback(element, index, array);
          }
        })
      );
      exports_1(
        "formatDuration",
        (formatDuration = (ms) => {
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
        })
      );
      padLeft = (str, num = 2, fill = "0") => String(str).padStart(num, fill);
      exports_1(
        "formatDate",
        (formatDate = (formatStr, date) => {
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
        })
      );
      exports_1(
        "get",
        (get = (from, selector, defaultValue = undefined) =>
          selector
            .replace(/\[([^\[\]]*)\]/g, ".$1.")
            .split(".")
            .filter((t) => t !== "")
            .reduce((prev, cur) => prev && prev[cur], from) || defaultValue)
      );
      exports_1(
        "getAll",
        (getAll = (from, ...selectors) =>
          [...selectors].map((s) => get(from, s)))
      );
      exports_1(
        "getBaseURL",
        (getBaseURL = (url) =>
          url.indexOf("?") > 0 ? url.slice(0, url.indexOf("?")) : url)
      );
      exports_1(
        "getType",
        (getType = (v) =>
          v === undefined
            ? "undefined"
            : v === null
            ? "null"
            : v.constructor.name.toLowerCase())
      );
      exports_1(
        "getURLParameters",
        (getURLParameters = (url) => {
          return (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce((a, v) => {
            const [key, value] = v.split("=");
            if (a[key]) {
              a[key] = (typeof a[key] === "string" ? [a[key]] : a[key]).concat(
                value
              );
            } else {
              a[key] = value;
            }
            return a;
          }, {});
        })
      );
      exports_1(
        "mapToObject",
        (mapToObject = (map) => {
          let result = {};
          for (let [key, value] of map.entries()) {
            result[key] = value;
          }
          return result;
        })
      );
      exports_1(
        "groupBy",
        (groupBy = (arr, fn) =>
          arr
            .map(isString(fn) ? (val) => val[fn] : fn)
            .reduce((acc, val, i) => {
              acc[val] = (acc[val] || []).concat(arr[i]);
              return acc;
            }, {}))
      );
      exports_1(
        "hasFlags",
        (hasFlags = (args, ...flags) =>
          flags.every((flag) =>
            args.includes(/^-{1,2}/.test(flag) ? flag : "--" + flag)
          ))
      );
      exports_1(
        "hexToRGB",
        (hexToRGB = (hex) => {
          hex = hex.startsWith("#") ? hex.slice(1) : hex;
          if (hex.length === 3) {
            hex = Array.from(hex).reduce((str, x) => str + x + x, "");
          }
          const values = hex
            .split(/([a-z0-9]{2,2})/)
            .filter(Boolean)
            .map((x) => parseInt(x, 16));
          return `rgb${values.length == 4 ? "a" : ""}(${values.join(", ")})`;
        })
      );
      exports_1(
        "hexToRGB2",
        (hexToRGB2 = (hex) => {
          let hexChars = Array.from(hex.startsWith("#") ? hex.slice(1) : hex);
          if (hexChars.length === 3) {
            hexChars = hexChars.reduce((str, x) => [...str, x, x], []);
          }
          const values = chunk(hexChars, 2).map(([v1, v2]) =>
            parseInt(v1 + v2, 16)
          );
          return `rgb${values.length == 4 ? "a" : ""}(${values.join(", ")})`;
        })
      );
      exports_1(
        "hide",
        (hide = (...el) => [...el].forEach((e) => (e.style.display = "none")))
      );
      exports_1(
        "httpsRedirect",
        (httpsRedirect = () => {
          if (location.protocol !== "https:")
            location.replace("https://" + location.href.split("//")[1]);
        })
      );
      exports_1(
        "includesAll",
        (includesAll = (arr, values) => values.every((v) => arr.includes(v)))
      );
      exports_1(
        "indentString",
        (indentString = (str, count, indent = " ") => {
          indent = indent.repeat(count);
          return str.replace(/^/gm, indent);
        })
      );
      exports_1(
        "isFunction",
        (isFunction = (str) => {
          return typeof str === "function";
        })
      );
      exports_1(
        "isArrayLike",
        (isArrayLike = (obj) => {
          return (
            obj[Symbol.iterator] instanceof Function &&
            obj.entries instanceof Function
          );
        })
      );
      exports_1(
        "isString",
        (isString = (str) => {
          return typeof str === "string";
        })
      );
      exports_1("fillArray", (fillArray = (n, val = 0) => Array(n).fill(val)));
      exports_1(
        "initializeArray",
        (initializeArray = (n, val = 0) => Array(n).fill(val))
      );
      exports_1(
        "inRange",
        (inRange = (n, start, end) => {
          if (end && start > end) [end, start] = [start, end];
          return end === undefined
            ? n >= 0 && n < start
            : n >= start && n < end;
        })
      );
      exports_1(
        "insertAt",
        (insertAt = (arr, i, ...v) => {
          arr.splice(i + 1, 0, ...v);
          return arr;
        })
      );
      exports_1(
        "insertAtImmutable",
        (insertAtImmutable = (arr, i, ...v) => {
          return [...arr.slice(0, i + 1), ...v, ...arr.slice(i + 1)];
        })
      );
      exports_1(
        "intersection",
        (intersection = (a, b) => {
          const s = new Set(b);
          return [...new Set(a)].filter((x) => s.has(x));
        })
      );
      exports_1(
        "intersectionBy",
        (intersectionBy = (a, b, fn) => {
          const s = new Set(b.map(fn));
          return [...new Set(a)].filter((x) => s.has(fn(x)));
        })
      );
      exports_1(
        "intersectionWith",
        (intersectionWith = (a, b, comp) =>
          a.filter((x) => b.findIndex((y) => comp(x, y)) !== -1))
      );
      exports_1(
        "is",
        (is = (type, val) =>
          ![, null].includes(val) &&
          (isString(type)
            ? val.constructor.name === type
            : val.constructor === type))
      );
      exports_1("isAfterDate", (isAfterDate = (dateA, dateB) => dateA > dateB));
      exports_1(
        "isBeforeDate",
        (isBeforeDate = (dateA, dateB) => dateA < dateB)
      );
      exports_1(
        "isBrowser",
        (isBrowser = () =>
          ![typeof window, typeof document].includes("undefined"))
      );
      exports_1(
        "isEmpty",
        (isEmpty = (val) => val == null || !(Object.keys(val) || val).length)
      );
      exports_1(
        "isLeapYear",
        (isLeapYear = (year) => new Date(year, 1, 29).getMonth() === 1)
      );
      exports_1(
        "isLowerCase",
        (isLowerCase = (str) => str === str.toLowerCase())
      );
      exports_1("isNil", (isNil = (val) => val === undefined || val === null));
      exports_1("isNull", (isNull = (val) => val === null));
      exports_1(
        "isNumber",
        (isNumber = (val) => typeof val === "number" && val === val)
      );
      exports_1("isObject", (isObject = (obj) => obj === Object(obj)));
      exports_1(
        "isPlainObject",
        (isPlainObject = (val) =>
          !!val && typeof val === "object" && val.constructor === Object)
      );
      exports_1("isPrimitive", (isPrimitive = (val) => Object(val) !== val));
      exports_1(
        "isSameDate",
        (isSameDate = (dateA, dateB) =>
          dateA.toISOString() === dateB.toISOString())
      );
      exports_1(
        "isSorted",
        (isSorted = (arr) => {
          let direction = -(arr[0] - arr[1]);
          for (let [i, val] of arr.entries()) {
            direction = !direction ? -(arr[i - 1] - arr[i]) : direction;
            if (i === arr.length - 1)
              return !direction ? 0 : direction / Math.abs(direction);
            else if ((val - arr[i + 1]) * direction > 0) return 0;
          }
        })
      );
      exports_1(
        "isUpperCase",
        (isUpperCase = (str) => str === str.toUpperCase())
      );
      exports_1(
        "isValidJSON",
        (isValidJSON = (str) => {
          try {
            JSON.parse(str);
            return true;
          } catch (e) {
            return false;
          }
        })
      );
      exports_1(
        "JSONtoCSV",
        (JSONtoCSV = (arr, columns, delimiter = ",") =>
          [
            columns.join(delimiter),
            ...arr.map((obj) =>
              columns.reduce(
                (acc, key) =>
                  `${acc}${!acc.length ? "" : delimiter}"${
                    !obj[key] ? "" : obj[key]
                  }"`,
                ""
              )
            ),
          ].join("\n"))
      );
      exports_1("last", (last = (arr = []) => arr[arr.length - 1]));
      exports_1(
        "listenOnce",
        (listenOnce = (el, evt, fn) => {
          let fired = false;
          el.addEventListener(evt, (e) => {
            if (!fired) fn(e);
            fired = true;
          });
        })
      );
      exports_1(
        "lowercaseKeys",
        (lowercaseKeys = (obj, deep = false) =>
          Object.keys(obj).reduce((acc, key) => {
            acc[key.toLowerCase()] =
              deep && typeof obj[key] === "object"
                ? lowercaseKeys(obj[key])
                : obj[key];
            return acc;
          }, {}))
      );
      exports_1(
        "mapKeys",
        (mapKeys = (obj, fn) =>
          Object.keys(obj).reduce((acc, k) => {
            acc[fn(obj[k], k, obj)] = obj[k];
            return acc;
          }, {}))
      );
      exports_1(
        "mapObject",
        (mapObject = (arr, fn) =>
          arr.reduce((acc, el, i) => {
            acc[el] = fn(el, i, arr);
            return acc;
          }, {}))
      );
      exports_1(
        "mapString",
        (mapString = (str, fn) => {
          const chars = [...str];
          return chars.map((c, i) => fn(c, i, chars)).join("");
        })
      );
      exports_1(
        "map",
        (map = (array, fn) => {
          const chars = Array.isArray(array) ? array : [...array];
          return chars.map((c, i) => fn(c, i, chars));
        })
      );
      exports_1(
        "mask",
        (mask = (cc, num = 4, mask = "*") =>
          String(cc).slice(-num).padStart(String(cc).length, mask))
      );
      exports_1(
        "matches",
        (matches = (obj, source) =>
          Object.keys(source).every(
            (key) => obj.hasOwnProperty(key) && obj[key] === source[key]
          ))
      );
      exports_1(
        "matchesWith",
        (matchesWith = (obj, source, fn) =>
          Object.keys(source).every((key) =>
            obj.hasOwnProperty(key) && fn
              ? fn(obj[key], source[key], key, obj, source)
              : obj[key] == source[key]
          ))
      );
      exports_1(
        "maxBy",
        (maxBy = (arr, fn) =>
          Math.max(...arr.map(isString(fn) ? (val) => val[fn] : fn)))
      );
      exports_1(
        "maxDate",
        (maxDate = (dates) => new Date(Math.max(...dates.map(Number))))
      );
      exports_1(
        "maxN",
        (maxN = (arr, n = 1, order = 1) =>
          [...arr].sort((a, b) => order * (b - a)).slice(0, n))
      );
      exports_1(
        "merge",
        (merge = (...objs) =>
          [...objs].reduce(
            (acc, obj) =>
              Object.keys(obj).reduce((a, k) => {
                acc[k] = acc.hasOwnProperty(k)
                  ? [].concat(acc[k]).concat(obj[k])
                  : obj[k];
                return acc;
              }, {}),
            {}
          ))
      );
      exports_1(
        "midpoint",
        (midpoint = ([x1, y1], [x2, y2]) => [(x1 + x2) / 2, (y1 + y2) / 2])
      );
      exports_1(
        "minBy",
        (minBy = (arr, fn) =>
          Math.min(...arr.map(isString(fn) ? (val) => val[fn] : fn)))
      );
      exports_1(
        "sortBy",
        (sortBy = (
          arr,
          $fn = (s1, s2) => order * String(s1).localeCompare(String(s2)),
          order = SortByOrder.ASC
        ) => {
          let fn = $fn;
          return [...arr].sort(fn);
        })
      );
      (function (SortByOrder) {
        SortByOrder[(SortByOrder["ASC"] = 1)] = "ASC";
        SortByOrder[(SortByOrder["DESC"] = -1)] = "DESC";
      })(SortByOrder || (SortByOrder = {}));
      exports_1("SortByOrder", SortByOrder);
      exports_1(
        "sortByKey",
        (sortByKey = (arr, key, order = SortByOrder.ASC) => {
          return [...arr].sort(
            (s1, s2) => order * String(s1[key]).localeCompare(String(s2[key]))
          );
        })
      );
      exports_1(
        "mostFrequent",
        (mostFrequent = (arr) =>
          Object.entries(
            arr.reduce((a, v) => {
              a[String(v)] = a[String(v)] ? a[String(v)] + 1 : 1;
              return a;
            }, {})
          ).reduce((a, v) => (v[1] >= a[1] ? v : a), [-1, 0])[0])
      );
      exports_1(
        "mostPerformant",
        (mostPerformant = (fns, iterations = 10000) => {
          const times = fns.map((fn) => {
            const before = performance.now();
            for (let i = 0; i < iterations; i++) fn();
            return performance.now() - before;
          });
          return times.indexOf(Math.min(...times));
        })
      );
      exports_1("negate", (negate = (func) => (...args) => !func(...args)));
      exports_1(
        "nest",
        (nest = (items, id = null, link = "parent_id") =>
          items
            .filter((item) => item[link] === id)
            .map((item) => ({ ...item, children: nest(items, item.id, link) })))
      );
      exports_1(
        "nodeListToArray",
        (nodeListToArray = (nodeList) => [...nodeList])
      );
      exports_1("toArray", (toArray = (arrLike) => [...arrLike]));
      exports_1("none", (none = (arr, fn = Boolean) => !arr.some(fn)));
      exports_1("not", (not = (a) => !a));
      exports_1("nthArg", (nthArg = (n) => (...args) => args.slice(n)[0]));
      exports_1(
        "nthElement",
        (nthElement = curry(
          (n = 0, arr) => (n === -1 ? arr.slice(n) : arr.slice(n, n + 1))[0],
          2
        ))
      );
      exports_1(
        "objectToQueryString",
        (objectToQueryString = (queryParameters) => {
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
        })
      );
      exports_1(
        "offset",
        (offset = (arr, offset) => [
          ...arr.slice(offset),
          ...arr.slice(0, offset),
        ])
      );
      exports_1(
        "omit",
        (omit = (obj, arr) =>
          Object.keys(obj)
            .filter((k) => !arr.includes(k))
            .reduce((acc, key) => ((acc[key] = obj[key]), acc), {}))
      );
      exports_1(
        "omitBy",
        (omitBy = (obj, fn) =>
          Object.keys(obj)
            .filter((k) => !fn(obj[k], k))
            .reduce((acc, key) => ((acc[key] = obj[key]), acc), {}))
      );
      exports_1("or", (or = (a, b) => a || b));
      exports_1(
        "orderBy",
        (orderBy = (arr, props, orders) =>
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
          ))
      );
      exports_1(
        "orderByFunc",
        (orderByFunc = (arr, props, fn) =>
          [...arr].sort((a, b) =>
            props.reduce((acc, prop, i) => {
              if (acc === 0) {
                const [p1, p2] = [a[prop], b[prop]];
                acc = fn(p1, p2, prop);
              }
              return acc;
            }, 0)
          ))
      );
      exports_1(
        "pad",
        (pad = (str, length, char = " ") => {
          const s = String(str);
          return s.padStart((s.length + length) / 2, char).padEnd(length, char);
        })
      );
      exports_1(
        "parseCookie",
        (parseCookie = (str) =>
          str
            .split(";")
            .map((v) => v.split("="))
            .reduce((acc, v) => {
              acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(
                v[1].trim()
              );
              return acc;
            }, {}))
      );
      exports_1(
        "partial",
        (partial = (fn, ...partials) => (...args) => fn(...partials, ...args))
      );
      exports_1(
        "partialRight",
        (partialRight = (fn, ...partials) => (...args) =>
          fn(...args, ...partials))
      );
      exports_1(
        "partition",
        (partition = (arr, fn) =>
          arr.reduce(
            (acc, val, i, arr) => {
              acc[fn(val, i, arr) ? 0 : 1].push(val);
              return acc;
            },
            [[], []]
          ))
      );
      exports_1(
        "partitionBy",
        (partitionBy = (arr, fn) =>
          arr.reduce(
            ({ res, last }, v, i, a) => {
              const next = fn(v, i, a);
              if (next !== last) res.push([v]);
              else res[res.length - 1].push(v);
              return { res, last: next };
            },
            { res: [] }
          ).res)
      );
      exports_1(
        "pick",
        (pick = (obj, arr) =>
          arr.reduce(
            (acc, curr) => (curr in obj && (acc[curr] = obj[curr]), acc),
            {}
          ))
      );
      exports_1(
        "pickBy",
        (pickBy = (obj, fn) =>
          Object.keys(obj)
            .filter((k) => fn(obj[k], k))
            .reduce((acc, key) => ((acc[key] = obj[key]), acc), {}))
      );
      exports_1(
        "pipeAsyncFunctions",
        (pipeAsyncFunctions = (...fns) => (arg) =>
          fns.reduce((p, f) => p.then(f), Promise.resolve(arg)))
      );
      exports_1(
        "pipeFunctions",
        (pipeFunctions = (...fns) =>
          fns.reduce((f, g) => (...args) => g(f(...args))))
      );
      exports_1(
        "pluralize",
        (pluralize = (num, word, plural = word + "s") =>
          [1, -1].includes(Number(num)) ? word : plural)
      );
      exports_1(
        "prefix",
        (prefix = (prop) => {
          const capitalizedProp = prop.charAt(0).toUpperCase() + prop.slice(1);
          const prefixes = ["", "webkit", "moz", "ms", "o"];
          const i = prefixes.findIndex(
            (prefix) =>
              typeof document.body.style[
                prefix ? prefix + capitalizedProp : prop
              ] !== "undefined"
          );
          return i !== -1
            ? i === 0
              ? prop
              : prefixes[i] + capitalizedProp
            : null;
        })
      );
      exports_1(
        "prettyBytes",
        (prettyBytes = (num, precision = 3, addSpace = " ") => {
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
        })
      );
      exports_1(
        "prettyBytesT",
        (prettyBytesT = (strings, bytes, precision = 3) => {
          return prettyBytes(bytes, precision, strings.join(""));
        })
      );
      exports_1(
        "promisify",
        (promisify = (func) => (...args) =>
          new Promise((resolve, reject) =>
            func(...args, (err, result) =>
              err ? reject(err) : resolve(result)
            )
          ))
      );
      exports_1(
        "radsToDegrees",
        (radsToDegrees = (rad) => (rad * 180.0) / Math.PI)
      );
      exports_1(
        "randomHexColorCode",
        (randomHexColorCode = () => {
          let n = (Math.random() * 0xfffff * 1000000).toString(16);
          return "#" + n.slice(0, 6);
        })
      );
      exports_1(
        "randomInt",
        (randomInt = (min = 0, max = 100) =>
          Math.floor(Math.random() * (max - min + 1)) + min)
      );
      exports_1(
        "randomNumber",
        (randomNumber = (min = 0.0, max = 100.0) =>
          Math.random() * (max - min + 1) + min)
      );
      exports_1(
        "reduceWhich",
        (reduceWhich = (arr, comparator = (a, b) => a - b) =>
          arr.reduce((a, b) => (comparator(a, b) >= 0 ? b : a)))
      );
      exports_1(
        "removeNonASCII",
        (removeNonASCII = (str) => str.replace(/[^\x20-\x7E]/g, ""))
      );
      exports_1(
        "renderElement",
        (renderElement = ({ type, props = {} }, container) => {
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
        })
      );
      exports_1(
        "reverseString",
        (reverseString = (str) => {
          let s = "";
          for (let char of str) {
            s = char + s;
          }
          return s;
        })
      );
      exports_1(
        "RGBToHex",
        (RGBToHex = (r, g, b, hash = "") =>
          hash + ((r << 16) + (g << 8) + b).toString(16).padStart(6, "0"))
      );
      exports_1(
        "round",
        (round = (n, decimals = 0) =>
          Number(`${Math.round(Number(`${n}e${decimals}`))}e-${decimals}`))
      );
      exports_1(
        "runPromisesInSeries",
        (runPromisesInSeries = (ps) =>
          ps.reduce((p, next) => p.then(next), Promise.resolve()))
      );
      exports_1(
        "scrollToTop",
        (scrollToTop = () => {
          const c =
            document.documentElement.scrollTop || document.body.scrollTop;
          if (c > 0) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, c - c / 8);
          }
        })
      );
      exports_1(
        "serializeCookie",
        (serializeCookie = (name, val) =>
          `${encodeURIComponent(name)}=${encodeURIComponent(val)}`)
      );
      exports_1(
        "show",
        (show = (...el) => [...el].forEach((e) => (e.style.display = "")))
      );
      exports_1(
        "shuffle",
        (shuffle = ([...arr]) => {
          let m = arr.length;
          while (m) {
            const i = Math.floor(Math.random() * m--);
            [arr[m], arr[i]] = [arr[i], arr[m]];
          }
          return arr;
        })
      );
      exports_1(
        "size",
        (size = (val) =>
          Array.isArray(val)
            ? val.length
            : val && typeof val === "object"
            ? val.size || val.length || Object.keys(val).length
            : typeof val === "string"
            ? new Blob([val]).size
            : 0)
      );
      exports_1(
        "sleep",
        (sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms)))
      );
      exports_1("splitLines", (splitLines = (str) => str.split(/\r?\n/)));
      exports_1(
        "spreadOver",
        (spreadOver = (fn) => (argsArr) => fn(...argsArr))
      );
      exports_1(
        "stableSort",
        (stableSort = (arr, compare) =>
          arr
            .map((item, index) => ({ item, index }))
            .sort((a, b) => compare(a.item, b.item) || a.index - b.index)
            .map(({ item }) => item))
      );
      exports_1(
        "stripHTMLTags",
        (stripHTMLTags = (str) => str.replace(/<[^>]*>/g, ""))
      );
      exports_1(
        "sum",
        (sum = (...arr) => [...arr].reduce((acc, val) => acc + val, 0))
      );
      exports_1(
        "sumBy",
        (sumBy = (arr, fn) => {
          return arr
            .map(typeof fn === "function" ? fn : (val) => val[fn])
            .reduce((acc, val) => acc + val, 0);
        })
      );
      exports_1(
        "tail",
        (tail = (arr) => (arr.length > 1 ? arr.slice(1) : arr))
      );
      exports_1("take", (take = (arr, n = 1) => arr.slice(0, n)));
      exports_1(
        "takeRight",
        (takeRight = (arr, n = 1) => arr.slice(arr.length - n, arr.length))
      );
      exports_1(
        "takeWhile",
        (takeWhile = (arr, func) =>
          arr.reduce((acc, el) => (func(el) ? acc : acc.concat(el)), []))
      );
      exports_1(
        "takeRightWhile",
        (takeRightWhile = (arr, func) =>
          arr.reduceRight((acc, el) => (func(el) ? acc : [el].concat(acc)), []))
      );
      exports_1(
        "throttle",
        (throttle = (fn, wait = 300) => {
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
        })
      );
      exports_1(
        "times",
        (times = (n, fn, context = undefined) => {
          let i = 0;
          let result;
          do {
            result = fn.call(context, i);
          } while (result !== false && ++i < n);
          return result;
        })
      );
      exports_1(
        "timeTaken",
        (timeTaken = (callback) => {
          const id = `timeTaken_${Date.now()}`;
          console.time(id);
          const r = callback();
          console.timeEnd(id);
          return r;
        })
      );
      exports_1(
        "toCamelCase",
        (toCamelCase = (str) => {
          let s = str
            .match(
              /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
            )
            ?.map((x) => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
            .join("");
          return s && s.slice(0, 1).toLowerCase() + s.slice(1);
        })
      );
      exports_1(
        "toDecimalMark",
        (toDecimalMark = (num) => num.toLocaleString("en-US"))
      );
      exports_1(
        "toKebabCase",
        (toKebabCase = (str) =>
          str
            .match(
              /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
            )
            ?.map((x) => x.toLowerCase())
            .join("-"))
      );
      exports_1(
        "humanizeUrl",
        (humanizeUrl = (
          str,
          preserveUndersore = false,
          preserveCase = false
        ) => {
          const re = preserveUndersore ? /[\W]+/g : /[\W_]+/g;
          return preserveCase
            ? str.replace(re, "-")
            : str.replace(re, "-").toLowerCase();
        })
      );
      exports_1(
        "toOrdinalSuffix",
        (toOrdinalSuffix = (num) => {
          const int = parseInt(String(num)),
            digits = [int % 10, int % 100],
            ordinals = ["st", "nd", "rd", "th"],
            oPattern = [1, 2, 3, 4],
            tPattern = [11, 12, 13, 14, 15, 16, 17, 18, 19];
          return oPattern.includes(digits[0]) && !tPattern.includes(digits[1])
            ? int + ordinals[digits[0] - 1]
            : int + ordinals[3];
        })
      );
      exports_1(
        "toPairs",
        (toPairs = (obj) =>
          !obj
            ? []
            : isArrayLike(obj)
            ? Array.from(obj.entries())
            : Object.entries(obj))
      );
      exports_1(
        "toSnakeCase",
        (toSnakeCase = (str) =>
          str
            .match(
              /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
            )
            ?.map((x) => x.toLowerCase())
            .join("_"))
      );
      exports_1(
        "toTitleCase",
        (toTitleCase = (str) =>
          str
            .match(
              /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
            )
            ?.map((x) => x.charAt(0).toUpperCase() + x.slice(1))
            .join(" "))
      );
      exports_1(
        "transform",
        (transform = (obj, fn, acc = {}) =>
          Object.keys(obj).reduce((a, k) => fn(a, obj[k], k, obj), acc))
      );
      exports_1(
        "triggerEvent",
        (triggerEvent = (el, eventType, detail) =>
          el.dispatchEvent &&
          el.dispatchEvent(new CustomEvent(eventType, { detail })))
      );
      exports_1(
        "truncateString",
        (truncateString = (str, num = str.length, ellipsisStr = "...") =>
          str.length >= num
            ? str.slice(
                0,
                num >= ellipsisStr.length ? num - ellipsisStr.length : num
              ) + ellipsisStr
            : str)
      );
      exports_1(
        "ellipsis",
        (ellipsis = (str, num = str.length, ellipsisStr = "...") =>
          str.length >= num
            ? str.slice(
                0,
                num >= ellipsisStr.length ? num - ellipsisStr.length : num
              ) + ellipsisStr
            : str)
      );
      exports_1("unary", (unary = (fn) => (val) => fn(val)));
      exports_1(
        "uncurry",
        (uncurry = (fn, n = 1) => (...args) => {
          const next = (acc) => (args) => args.reduce((x, y) => x(y), acc);
          if (n > args.length) throw new RangeError("Arguments too few!");
          return next(fn)(args.slice(0, n));
        })
      );
      exports_1("union", (union = (a, b) => Array.from(new Set([...a, ...b]))));
      exports_1(
        "unionBy",
        (unionBy = (a, b, fn) => {
          const s = new Set(a.map(fn));
          return Array.from(new Set([...a, ...b.filter((x) => !s.has(fn(x)))]));
        })
      );
      exports_1(
        "unionWith",
        (unionWith = (a, b, comp) =>
          Array.from(
            new Set([
              ...a,
              ...b.filter((x) => a.findIndex((y) => comp(x, y)) === -1),
            ])
          ))
      );
      exports_1("unique", (unique = (arr) => [...new Set(arr)]));
      exports_1(
        "uniqueBy",
        (uniqueBy = (arr, fn) =>
          arr.reduce((acc, v) => {
            if (!acc.some((x) => fn(v, x))) acc.push(v);
            return acc;
          }, []))
      );
      exports_1(
        "uniqueByRight",
        (uniqueByRight = (arr, fn) =>
          arr.reduceRight((acc, v) => {
            if (!acc.some((x) => fn(v, x))) acc.push(v);
            return acc;
          }, []))
      );
      exports_1(
        "unzip",
        (unzip = (arr, size = 0) => {
          return arr.reduce(
            (acc, val) => (val.forEach((v, i) => acc[i].push(v)), acc),
            Array.from({
              length: size || Math.max(...arr.map((x) => x.length)),
            }).map(() => [])
          );
        })
      );
      exports_1(
        "unzipWith",
        (unzipWith = (arr, fn, size = 0) =>
          arr
            .reduce(
              (acc, val) => (val.forEach((v, i) => acc[i].push(v)), acc),
              Array.from({
                length: size || Math.max(...arr.map((x) => x.length)),
              }).map((x) => [])
            )
            .map((val) => fn(...val)))
      );
      exports_1(
        "URLJoin",
        (URLJoin = (...args) =>
          args
            .join("/")
            .replace(/[\/]+/g, "/")
            .replace(/^(.+):\//, "$1://")
            .replace(/^file:/, "file:/")
            .replace(/\/(\?|&|#[^!])/g, "$1")
            .replace(/\?/g, "&")
            .replace("&", "?"))
      );
      exports_1(
        "URLJoinWithParams",
        (URLJoinWithParams = (url, params) => {
          return URLJoin(url, objectToQueryString(params));
        })
      );
      exports_1(
        "UUIDGeneratorBrowser",
        (UUIDGeneratorBrowser = () =>
          (String(1e7) + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
            (
              Number(c) ^
              (crypto.getRandomValues(new Uint8Array(1))[0] &
                (15 >> (Number(c) / 4)))
            ).toString(16)
          ))
      );
      exports_1(
        "validateNumber",
        (validateNumber = (n) =>
          !isNaN(parseFloat(String(n))) &&
          isFinite(Number(n)) &&
          Number(n) == n)
      );
      exports_1(
        "yesNo",
        (yesNo = (val, def = false) =>
          /^(y|yes)$/i.test(val) ? true : /^(n|no)$/i.test(val) ? false : def)
      );
    },
  };
});

const __exp = __instantiate("util", false);
export const isValidDate = __exp["isValidDate"];
export const accumulate = __exp["accumulate"];
export const all = __exp["all"];
export const allEqual = __exp["allEqual"];
export const and = __exp["and"];
export const any = __exp["any"];
export const some = __exp["some"];
export const aperture = __exp["aperture"];
export const approximatelyEqual = __exp["approximatelyEqual"];
export const arrayToCSV = __exp["arrayToCSV"];
export const arrayToHtmlList = __exp["arrayToHtmlList"];
export const ary = __exp["ary"];
export const attempt = __exp["attempt"];
export const attempt2 = __exp["attempt2"];
export const average = __exp["average"];
export const averageBy = __exp["averageBy"];
export const bifurcate = __exp["bifurcate"];
export const bifurcateBy = __exp["bifurcateBy"];
export const binary = __exp["binary"];
export const bind = __exp["bind"];
export const bindAll = __exp["bindAll"];
export const binomialCoefficient = __exp["binomialCoefficient"];
export const both = __exp["both"];
export const call = __exp["call"];
export const capitalize = __exp["capitalize"];
export const capitalizeEveryWord = __exp["capitalizeEveryWord"];
export const castArray = __exp["castArray"];
export const celsiusToFahrenheit = __exp["celsiusToFahrenheit"];
export const chunk = __exp["chunk"];
export const colorize = __exp["colorize"];
export const colors = __exp["colors"];
export const compact = __exp["compact"];
export const compactWhitespace = __exp["compactWhitespace"];
export const complement = __exp["complement"];
export const compose = __exp["compose"];
export const composeRight = __exp["composeRight"];
export const contains = __exp["contains"];
export const containsWhitespace = __exp["containsWhitespace"];
export const countBy = __exp["countBy"];
export const countOccurrences = __exp["countOccurrences"];
export const createElement = __exp["createElement"];
export const createEventHub = __exp["createEventHub"];
export const CSVToArray = __exp["CSVToArray"];
export const CSVToJSON = __exp["CSVToJSON"];
export const curry = __exp["curry"];
export const dayOfYear = __exp["dayOfYear"];
export const debounce = __exp["debounce"];
export const deepClone = __exp["deepClone"];
export const deepFlatten = __exp["deepFlatten"];
export const deepFreeze = __exp["deepFreeze"];
export const deepGet = __exp["deepGet"];
export const defaults = __exp["defaults"];
export const delay = __exp["delay"];
export const delayedPromise = __exp["delayedPromise"];
export const either = __exp["either"];
export const equals = __exp["equals"];
export const deepEquals = __exp["deepEquals"];
export const downloadCSV = __exp["downloadCSV"];
export const escapeHTML = __exp["escapeHTML"];
export const unescapeHTML = __exp["unescapeHTML"];
export const escapeRegExp = __exp["escapeRegExp"];
export const factorial = __exp["factorial"];
export const memoize = __exp["memoize"];
export const fahrenheitToCelsius = __exp["fahrenheitToCelsius"];
export const filterNonUnique = __exp["filterNonUnique"];
export const filterNonUniqueBy = __exp["filterNonUniqueBy"];
export const findKey = __exp["findKey"];
export const flatten = __exp["flatten"];
export const forEachRight = __exp["forEachRight"];
export const formatDuration = __exp["formatDuration"];
export const formatDate = __exp["formatDate"];
export const get = __exp["get"];
export const getAll = __exp["getAll"];
export const getBaseURL = __exp["getBaseURL"];
export const getType = __exp["getType"];
export const getURLParameters = __exp["getURLParameters"];
export const mapToObject = __exp["mapToObject"];
export const groupBy = __exp["groupBy"];
export const hasFlags = __exp["hasFlags"];
export const hexToRGB = __exp["hexToRGB"];
export const hexToRGB2 = __exp["hexToRGB2"];
export const hide = __exp["hide"];
export const httpsRedirect = __exp["httpsRedirect"];
export const includesAll = __exp["includesAll"];
export const indentString = __exp["indentString"];
export const isFunction = __exp["isFunction"];
export const isArrayLike = __exp["isArrayLike"];
export const isString = __exp["isString"];
export const fillArray = __exp["fillArray"];
export const initializeArray = __exp["initializeArray"];
export const inRange = __exp["inRange"];
export const insertAt = __exp["insertAt"];
export const insertAtImmutable = __exp["insertAtImmutable"];
export const intersection = __exp["intersection"];
export const intersectionBy = __exp["intersectionBy"];
export const intersectionWith = __exp["intersectionWith"];
export const is = __exp["is"];
export const isAfterDate = __exp["isAfterDate"];
export const isBeforeDate = __exp["isBeforeDate"];
export const isBrowser = __exp["isBrowser"];
export const isEmpty = __exp["isEmpty"];
export const isLeapYear = __exp["isLeapYear"];
export const isLowerCase = __exp["isLowerCase"];
export const isNil = __exp["isNil"];
export const isNull = __exp["isNull"];
export const isNumber = __exp["isNumber"];
export const isObject = __exp["isObject"];
export const isPlainObject = __exp["isPlainObject"];
export const isPrimitive = __exp["isPrimitive"];
export const isSameDate = __exp["isSameDate"];
export const isSorted = __exp["isSorted"];
export const isUpperCase = __exp["isUpperCase"];
export const isValidJSON = __exp["isValidJSON"];
export const JSONtoCSV = __exp["JSONtoCSV"];
export const last = __exp["last"];
export const listenOnce = __exp["listenOnce"];
export const lowercaseKeys = __exp["lowercaseKeys"];
export const mapKeys = __exp["mapKeys"];
export const mapObject = __exp["mapObject"];
export const mapString = __exp["mapString"];
export const map = __exp["map"];
export const mask = __exp["mask"];
export const matches = __exp["matches"];
export const matchesWith = __exp["matchesWith"];
export const maxBy = __exp["maxBy"];
export const maxDate = __exp["maxDate"];
export const maxN = __exp["maxN"];
export const merge = __exp["merge"];
export const midpoint = __exp["midpoint"];
export const minBy = __exp["minBy"];
export const sortBy = __exp["sortBy"];
export const sortByKey = __exp["sortByKey"];
export const mostFrequent = __exp["mostFrequent"];
export const mostPerformant = __exp["mostPerformant"];
export const negate = __exp["negate"];
export const nest = __exp["nest"];
export const nodeListToArray = __exp["nodeListToArray"];
export const toArray = __exp["toArray"];
export const none = __exp["none"];
export const not = __exp["not"];
export const nthArg = __exp["nthArg"];
export const nthElement = __exp["nthElement"];
export const objectToQueryString = __exp["objectToQueryString"];
export const offset = __exp["offset"];
export const omit = __exp["omit"];
export const omitBy = __exp["omitBy"];
export const or = __exp["or"];
export const orderBy = __exp["orderBy"];
export const orderByFunc = __exp["orderByFunc"];
export const pad = __exp["pad"];
export const parseCookie = __exp["parseCookie"];
export const partial = __exp["partial"];
export const partialRight = __exp["partialRight"];
export const partition = __exp["partition"];
export const partitionBy = __exp["partitionBy"];
export const pick = __exp["pick"];
export const pickBy = __exp["pickBy"];
export const pipeAsyncFunctions = __exp["pipeAsyncFunctions"];
export const pipeFunctions = __exp["pipeFunctions"];
export const pluralize = __exp["pluralize"];
export const prefix = __exp["prefix"];
export const prettyBytes = __exp["prettyBytes"];
export const prettyBytesT = __exp["prettyBytesT"];
export const promisify = __exp["promisify"];
export const radsToDegrees = __exp["radsToDegrees"];
export const randomHexColorCode = __exp["randomHexColorCode"];
export const randomInt = __exp["randomInt"];
export const randomNumber = __exp["randomNumber"];
export const reduceWhich = __exp["reduceWhich"];
export const removeNonASCII = __exp["removeNonASCII"];
export const renderElement = __exp["renderElement"];
export const reverseString = __exp["reverseString"];
export const RGBToHex = __exp["RGBToHex"];
export const round = __exp["round"];
export const runPromisesInSeries = __exp["runPromisesInSeries"];
export const scrollToTop = __exp["scrollToTop"];
export const serializeCookie = __exp["serializeCookie"];
export const show = __exp["show"];
export const shuffle = __exp["shuffle"];
export const size = __exp["size"];
export const sleep = __exp["sleep"];
export const splitLines = __exp["splitLines"];
export const spreadOver = __exp["spreadOver"];
export const stableSort = __exp["stableSort"];
export const stripHTMLTags = __exp["stripHTMLTags"];
export const sum = __exp["sum"];
export const sumBy = __exp["sumBy"];
export const tail = __exp["tail"];
export const take = __exp["take"];
export const takeRight = __exp["takeRight"];
export const takeWhile = __exp["takeWhile"];
export const takeRightWhile = __exp["takeRightWhile"];
export const throttle = __exp["throttle"];
export const times = __exp["times"];
export const timeTaken = __exp["timeTaken"];
export const toCamelCase = __exp["toCamelCase"];
export const toDecimalMark = __exp["toDecimalMark"];
export const toKebabCase = __exp["toKebabCase"];
export const humanizeUrl = __exp["humanizeUrl"];
export const toOrdinalSuffix = __exp["toOrdinalSuffix"];
export const toPairs = __exp["toPairs"];
export const toSnakeCase = __exp["toSnakeCase"];
export const toTitleCase = __exp["toTitleCase"];
export const transform = __exp["transform"];
export const triggerEvent = __exp["triggerEvent"];
export const truncateString = __exp["truncateString"];
export const ellipsis = __exp["ellipsis"];
export const unary = __exp["unary"];
export const uncurry = __exp["uncurry"];
export const union = __exp["union"];
export const unionBy = __exp["unionBy"];
export const unionWith = __exp["unionWith"];
export const unique = __exp["unique"];
export const uniqueBy = __exp["uniqueBy"];
export const uniqueByRight = __exp["uniqueByRight"];
export const unzip = __exp["unzip"];
export const unzipWith = __exp["unzipWith"];
export const URLJoin = __exp["URLJoin"];
export const URLJoinWithParams = __exp["URLJoinWithParams"];
export const UUIDGeneratorBrowser = __exp["UUIDGeneratorBrowser"];
export const validateNumber = __exp["validateNumber"];
export const yesNo = __exp["yesNo"];
