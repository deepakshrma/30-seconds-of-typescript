(window.webpackJsonp=window.webpackJsonp||[]).push([[254],{354:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(6),o=(n(0),n(503)),i={title:"equals",tags:"object,array,type,advanced"},c={id:"equals",isDocsHomePage:!1,title:"equals",description:"Performs a deep comparison between two values to determine if they are equivalent.",source:"@site/docs/equals.md",permalink:"/docs/equals",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/equals.md"},u=[],l={rightToc:u};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Performs a deep comparison between two values to determine if they are equivalent."),Object(o.b)("p",null,"Check if the two values are identical, if they are both ",Object(o.b)("inlineCode",{parentName:"p"},"Date")," objects with the same time, using ",Object(o.b)("inlineCode",{parentName:"p"},"Date.getTime()")," or if they are both non-object values with an equivalent value (strict comparison).\nCheck if only one value is ",Object(o.b)("inlineCode",{parentName:"p"},"null")," or ",Object(o.b)("inlineCode",{parentName:"p"},"undefined")," or if their prototypes differ.\nIf none of the above conditions are met, use ",Object(o.b)("inlineCode",{parentName:"p"},"Object.keys()")," to check if both values have the same number of keys, then use ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.every()")," to check if every key in the first value exists in the second one and if they are equivalent by calling this method recursively."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const equals = (a, b) => {\n  if (a === b) return true;\n  if (a instanceof Date && b instanceof Date) return a.getTime() === b.getTime();\n  if (!a || !b || (typeof a !== 'object' && typeof b !== 'object')) return a === b;\n  if (a.prototype !== b.prototype) return false;\n  let keys = Object.keys(a);\n  if (keys.length !== Object.keys(b).length) return false;\n  return keys.every(k => equals(a[k], b[k]));\n};\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"equals({ a: [2, { e: 3 }], b: [4], c: 'foo' }, { a: [2, { e: 3 }], b: [4], c: 'foo' }); // true\nequals([1, 2, 3], { 0: 1, 1: 2, 2: 3 }); // true\n")))}s.isMDXComponent=!0},503:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(n),f=r,m=p["".concat(i,".").concat(f)]||p[f]||b[f]||o;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);