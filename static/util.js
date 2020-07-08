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
    htmlEscapeReg,
    isString,
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
    color,
    compact,
    compactWhitespace,
    complement,
    compose,
    composeRight,
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
    escapeHTML,
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
    maxDate;
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
      htmlEscapeReg = new RegExp(`[${Object.keys(HTMLEscapeChars)}]`, "g");
      exports_1(
        "isString",
        (isString = (str) => {
          return typeof str === "string";
        })
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
      exports_1("color", (color = colorize));
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
        "escapeHTML",
        (escapeHTML = (str) =>
          str.replace(htmlEscapeReg, (tag) => HTMLEscapeChars[tag] || tag))
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
          Math.max(
            ...arr.map(typeof fn === "function" ? fn : (val) => val[fn])
          ))
      );
      exports_1(
        "maxDate",
        (maxDate = (dates) => new Date(Math.max(...dates.map(Number))))
      );
    },
  };
});

const __exp = __instantiate("util", false);
export const isValidDate = __exp["isValidDate"];
export const isString = __exp["isString"];
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
export const color = __exp["color"];
export const compact = __exp["compact"];
export const compactWhitespace = __exp["compactWhitespace"];
export const complement = __exp["complement"];
export const compose = __exp["compose"];
export const composeRight = __exp["composeRight"];
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
export const escapeHTML = __exp["escapeHTML"];
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
