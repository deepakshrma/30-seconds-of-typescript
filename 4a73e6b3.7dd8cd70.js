(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{225:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return d}));var n=r(2),o=(r(0),r(501));const a={title:"sortedLastIndex",tags:"array,math,intermediate"},i={id:"sortedLastIndex",isDocsHomePage:!1,title:"sortedLastIndex",description:"Returns the highest index at which value should be inserted into array in order to maintain its sort order.",source:"@site/docs/sortedLastIndex.md",permalink:"/30-seconds-of-typescript/docs/sortedLastIndex",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/sortedLastIndex.md"},c=[],s={rightToc:c};function d({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Returns the highest index at which value should be inserted into array in order to maintain its sort order."),Object(o.b)("p",null,"Check if the array is sorted in descending order (loosely).\nUse ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.reverse()")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.findIndex()")," to find the appropriate last index where the element should be inserted."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const sortedLastIndex = (arr, n) => {\n  const isDescending = arr[0] > arr[arr.length - 1];\n  const index = arr.reverse().findIndex(el => (isDescending ? n <= el : n >= el));\n  return index === -1 ? 0 : arr.length - index;\n};\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"sortedLastIndex([10, 20, 30, 30, 40], 30); // 4\n")))}d.isMDXComponent=!0},501:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=o.a.createContext({}),p=function(e){var t=o.a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return o.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=p(r),f=n,b=l["".concat(i,".").concat(f)]||l[f]||u[f]||a;return r?o.a.createElement(b,c(c({ref:t},d),{},{components:r})):o.a.createElement(b,c({ref:t},d))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var d=2;d<a;d++)i[d]=r[d];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);