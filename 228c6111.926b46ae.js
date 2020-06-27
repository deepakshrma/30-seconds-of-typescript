(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{163:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(2),a=(n(0),n(502));const o={title:"dig",tags:"object,recursion,intermediate"},c={id:"dig",isDocsHomePage:!1,title:"dig",description:"Returns the target value in a nested JSON object, based on the given key.",source:"@site/docs/dig.md",permalink:"/30-seconds-of-typescript/docs/dig",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/dig.md"},i=[],l={rightToc:i};function p({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Returns the target value in a nested JSON object, based on the given key."),Object(a.b)("p",null,"Use the ",Object(a.b)("inlineCode",{parentName:"p"},"in")," operator to check if ",Object(a.b)("inlineCode",{parentName:"p"},"target")," exists in ",Object(a.b)("inlineCode",{parentName:"p"},"obj"),".\nIf found, return the value of ",Object(a.b)("inlineCode",{parentName:"p"},"obj[target]"),", otherwise use ",Object(a.b)("inlineCode",{parentName:"p"},"Object.values(obj)")," and ",Object(a.b)("inlineCode",{parentName:"p"},"Array.prototype.reduce()")," to recursively call ",Object(a.b)("inlineCode",{parentName:"p"},"dig")," on each nested object until the first matching key/value pair is found."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const dig = (obj, target) =>\n  target in obj\n    ? obj[target]\n    : Object.values(obj).reduce((acc, val) => {\n        if (acc !== undefined) return acc;\n        if (typeof val === 'object') return dig(val, target);\n      }, undefined);\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const data = {\n  level1: {\n    level2: {\n      level3: 'some data'\n    }\n  }\n};\ndig(data, 'level3'); // 'some data'\ndig(data, 'level4'); // undefined\n")))}p.isMDXComponent=!0},502:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,f=d["".concat(c,".").concat(b)]||d[b]||s[b]||o;return n?a.a.createElement(f,i(i({ref:t},p),{},{components:n})):a.a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);