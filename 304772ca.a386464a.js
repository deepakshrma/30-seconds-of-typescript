(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{214:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(2),a=r(9),p=(r(0),r(546)),o={title:"aperture",tags:"array,intermediate"},i={id:"aperture",isDocsHomePage:!1,title:"aperture",description:"TS",source:"@site/docs/aperture.md",permalink:"/30-seconds-of-typescript/docs/aperture",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/aperture.md",sidebar:"someSidebar",previous:{title:"any",permalink:"/30-seconds-of-typescript/docs/any"},next:{title:"approximatelyEqual",permalink:"/30-seconds-of-typescript/docs/approximatelyEqual"}},c=[],s={rightToc:c};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(p.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,Object(p.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square",alt:"TS"})),"\n",Object(p.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"})),"\n",Object(p.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-deno-green.svg?style=flat-square",alt:"JS"}))),Object(p.b)("p",null,"Returns an array of ",Object(p.b)("inlineCode",{parentName:"p"},"n"),"-tuples of consecutive elements."),Object(p.b)("p",null,"Use ",Object(p.b)("inlineCode",{parentName:"p"},"Array.prototype.slice()")," and ",Object(p.b)("inlineCode",{parentName:"p"},"Array.prototype.map()")," to create an array of appropriate length and populate it with ",Object(p.b)("inlineCode",{parentName:"p"},"n"),"-tuples of consecutive elements from ",Object(p.b)("inlineCode",{parentName:"p"},"arr"),".\nIf ",Object(p.b)("inlineCode",{parentName:"p"},"n")," is greater than the length of ",Object(p.b)("inlineCode",{parentName:"p"},"arr"),", return an empty array."),Object(p.b)("pre",null,Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts",metastring:'title="typescript"',title:'"typescript"'}),"const aperture = <T = any>(n: number, arr: T[]) =>\n  n >= arr.length\n    ? []\n    : arr.slice(n - 1).map((v, i) => [...arr.slice(i, i + n - 1), v]);\n")),Object(p.b)("pre",null,Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts",metastring:'title="typescript"',title:'"typescript"'}),"aperture(2, [1, 2, 3, 4]); // [[1, 2], [2, 3], [3, 4]]\naperture(3, [1, 2, 3, 4]); // [[1, 2, 3], [2, 3, 4]]\naperture(5, [1, 2, 3, 4]); // [1, 2, 3, 4]\n")))}l.isMDXComponent=!0},546:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,f=u["".concat(o,".").concat(m)]||u[m]||b[m]||p;return r?a.a.createElement(f,i(i({ref:t},s),{},{components:r})):a.a.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,o=new Array(p);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<p;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);