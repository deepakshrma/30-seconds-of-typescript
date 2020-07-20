(window.webpackJsonp=window.webpackJsonp||[]).push([[396],{533:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(2),o=r(9),a=(r(0),r(543)),c={title:"merge",tags:"object,array,intermediate"},i={id:"merge",isDocsHomePage:!1,title:"merge",description:"TS",source:"@site/docs/merge.md",permalink:"/30-seconds-of-typescript/docs/merge",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/merge.md",sidebar:"someSidebar",previous:{title:"memoize",permalink:"/30-seconds-of-typescript/docs/memoize"},next:{title:"midpoint",permalink:"/30-seconds-of-typescript/docs/midpoint"}},p=[],s={rightToc:p};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square",alt:"TS"})),"\n",Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"})),"\n",Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-deno-green.svg?style=flat-square",alt:"Deno"}))),Object(a.b)("p",null,"Creates a new object from the combination of two or more objects."),Object(a.b)("p",null,"Use ",Object(a.b)("inlineCode",{parentName:"p"},"Array.prototype.reduce()")," combined with ",Object(a.b)("inlineCode",{parentName:"p"},"Object.keys(obj)")," to iterate over all objects and keys.\nUse ",Object(a.b)("inlineCode",{parentName:"p"},"hasOwnProperty()")," and ",Object(a.b)("inlineCode",{parentName:"p"},"Array.prototype.concat()")," to append values for keys existing in multiple objects."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts",metastring:'title="typescript"',title:'"typescript"'}),"const merge = (...objs: AnyObject[]) =>\n  [...objs].reduce(\n    (acc, obj) =>\n      Object.keys(obj).reduce((a, k) => {\n        acc[k] = acc.hasOwnProperty(k)\n          ? [].concat(acc[k]).concat(obj[k])\n          : obj[k];\n        return acc;\n      }, {}),\n    {}\n  );\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts",metastring:'title="typescript"',title:'"typescript"'}),"const object = {\n  a: [{ x: 2 }, { y: 4 }],\n  b: 1,\n};\nconst other = {\n  a: { z: 3 },\n  b: [2, 3],\n  c: \"foo\",\n};\nmerge(object, other); // { a: [ { x: 2 }, { y: 4 }, { z: 3 } ], b: [ 1, 2, 3 ], c: 'foo' }\n")))}l.isMDXComponent=!0},543:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=l(r),m=n,d=b["".concat(c,".").concat(m)]||b[m]||u[m]||a;return r?o.a.createElement(d,i(i({ref:t},s),{},{components:r})):o.a.createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);