(window.webpackJsonp=window.webpackJsonp||[]).push([[332],{469:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(9),o=(r(0),r(546)),s={title:"attempt",tags:"function,intermediate"},c={id:"attempt",isDocsHomePage:!1,title:"attempt",description:"TS",source:"@site/docs/attempt.md",permalink:"/30-seconds-of-typescript/docs/attempt",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/attempt.md",sidebar:"someSidebar",previous:{title:"atob",permalink:"/30-seconds-of-typescript/docs/atob"},next:{title:"average",permalink:"/30-seconds-of-typescript/docs/average"}},i=[{value:"attempt2",id:"attempt2",children:[]}],l={rightToc:i};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square",alt:"TS"})),"\n",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"})),"\n",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-deno-green.svg?style=flat-square",alt:"JS"}))),Object(o.b)("p",null,"Attempts to invoke a function with the provided arguments, returning either the result or the caught error object."),Object(o.b)("p",null,"Use a ",Object(o.b)("inlineCode",{parentName:"p"},"try... catch")," block to return either the result of the function or an appropriate error."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts",metastring:'title="typescript"',title:'"typescript"'}),"const attempt = (fn: (...args: any[]) => any, ...args: any[]) => {\n  try {\n    return fn(...args);\n  } catch (e) {\n    return e instanceof Error ? e : new Error(e);\n  }\n};\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts",metastring:'title="typescript"',title:'"typescript"'}),'let elements = attempt(function (selector) {\n  return document.querySelectorAll(selector);\n}, ">_>");\nif (elements instanceof Error) elements = []; // elements = []\n\nconst isValidNumber = (num: number) => {\n  if (num >= 0) {\n    return num;\n  }\n  throw new Error("Invalid number");\n};\nconst ten = attempt(isValidNumber, 10);\nassertEquals(ten, 10);\n\nconst error = attempt(isValidNumber, -1);\nassertEquals(error instanceof Error, true);\nassertEquals(error.message, "Invalid number");\n')),Object(o.b)("h3",{id:"attempt2"},"attempt2"),Object(o.b)("p",null,"Same as attempt but it return tuple of result and error."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts",metastring:'title="typescript"',title:'"typescript"'}),"const attempt2 = (fn: (...args: any[]) => any, ...args: any[]) => {\n  try {\n    return [fn(...args), null];\n  } catch (e) {\n    return [null, e instanceof Error ? e : new Error(e)];\n  }\n};\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts",metastring:'title="typescript"',title:'"typescript"'}),'let [elements, error] = attempt2(function (selector) {\n  return document.querySelectorAll(selector);\n}, ">_>");\nif (error instanceof Error) elements = []; // elements = []\n\nconst isValidNumber = (num: number) => {\n  if (num >= 0) {\n    return num;\n  }\n  throw new Error("Invalid number");\n};\nconst [ten] = attempt2(isValidNumber, 10);\nassertEquals(ten, 10);\n\nconst [res, error] = attempt2(isValidNumber, -1);\nassertEquals(res, null);\nassertEquals(error instanceof Error, true);\nassertEquals(error.message, "Invalid number");\n')))}p.isMDXComponent=!0},546:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(r),b=n,f=u["".concat(s,".").concat(b)]||u[b]||m[b]||o;return r?a.a.createElement(f,c(c({ref:t},l),{},{components:r})):a.a.createElement(f,c({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var l=2;l<o;l++)s[l]=r[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);