(window.webpackJsonp=window.webpackJsonp||[]).push([[225],{325:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(6),o=(r(0),r(503)),c={title:"pull",tags:"array,intermediate"},l={id:"pull",isDocsHomePage:!1,title:"pull",description:"Mutates the original array to filter out the values specified.",source:"@site/docs/pull.md",permalink:"/docs/pull",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/pull.md"},p=[],i={rightToc:p};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Mutates the original array to filter out the values specified."),Object(o.b)("p",null,"Use ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.filter()")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.includes()")," to pull out the values that are not needed.\nUse ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.length = 0")," to mutate the passed in an array by resetting it's length to zero and ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.push()")," to re-populate it with only the pulled values."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const pull = (arr, ...args) => {\n  let argState = Array.isArray(args[0]) ? args[0] : args;\n  let pulled = arr.filter(v => !argState.includes(v));\n  arr.length = 0;\n  pulled.forEach(v => arr.push(v));\n};\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"let myArray = ['a', 'b', 'c', 'a', 'b', 'c'];\npull(myArray, 'a', 'c'); // myArray = [ 'b', 'b' ]\n")))}u.isMDXComponent=!0},503:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return y}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),u=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),s=u(r),f=n,y=s["".concat(c,".").concat(f)]||s[f]||b[f]||o;return r?a.a.createElement(y,l(l({ref:t},i),{},{components:r})):a.a.createElement(y,l({ref:t},i))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var i=2;i<o;i++)c[i]=r[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);