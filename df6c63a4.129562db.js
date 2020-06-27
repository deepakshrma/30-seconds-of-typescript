(window.webpackJsonp=window.webpackJsonp||[]).push([[363],{462:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return s}));var n=r(2),o=(r(0),r(502));const a={title:"omit",tags:"object,array,intermediate"},c={id:"omit",isDocsHomePage:!1,title:"omit",description:"Omits the key-value pairs corresponding to the given keys from an object.",source:"@site/docs/omit.md",permalink:"/30-seconds-of-typescript/docs/omit",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/omit.md"},i=[],p={rightToc:i};function s({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Omits the key-value pairs corresponding to the given keys from an object."),Object(o.b)("p",null,"Use ",Object(o.b)("inlineCode",{parentName:"p"},"Object.keys(obj)"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.filter()")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.includes()")," to remove the provided keys.\nUse ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.reduce()")," to convert the filtered keys back to an object with the corresponding key-value pairs."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const omit = (obj, arr) =>\n  Object.keys(obj)\n    .filter(k => !arr.includes(k))\n    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"omit({ a: 1, b: '2', c: 3 }, ['b']); // { 'a': 1, 'c': 3 }\n")))}s.isMDXComponent=!0},502:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=u(r),m=n,f=l["".concat(c,".").concat(m)]||l[m]||b[m]||a;return r?o.a.createElement(f,i(i({ref:t},s),{},{components:r})):o.a.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);