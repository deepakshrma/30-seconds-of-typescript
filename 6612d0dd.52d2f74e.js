(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{256:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),o=(r(0),r(503)),i={title:"takeWhile",tags:"array,function,intermediate"},c={id:"takeWhile",isDocsHomePage:!1,title:"takeWhile",description:"Removes elements in an array until the passed function returns true. Returns the removed elements.",source:"@site/docs/takeWhile.md",permalink:"/docs/takeWhile",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/takeWhile.md"},u=[],l={rightToc:u};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Removes elements in an array until the passed function returns ",Object(o.b)("inlineCode",{parentName:"p"},"true"),". Returns the removed elements."),Object(o.b)("p",null,"Loop through the array, using a ",Object(o.b)("inlineCode",{parentName:"p"},"for...of")," loop over ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.entries()")," until the returned value from the function is ",Object(o.b)("inlineCode",{parentName:"p"},"true"),".\nReturn the removed elements, using ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.slice()"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const takeWhile = (arr, func) => {\n  for (const [i, val] of arr.entries()) if (func(val)) return arr.slice(0, i);\n  return arr;\n};\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"takeWhile([1, 2, 3, 4], n => n >= 3); // [1, 2]\n")))}p.isMDXComponent=!0},503:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=p(r),m=n,b=s["".concat(i,".").concat(m)]||s[m]||f[m]||o;return r?a.a.createElement(b,c(c({ref:t},l),{},{components:r})):a.a.createElement(b,c({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);