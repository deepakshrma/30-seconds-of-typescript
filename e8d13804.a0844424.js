(window.webpackJsonp=window.webpackJsonp||[]).push([[381],{480:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),o=(n(0),n(503)),c={id:"ary",sidebar_label:"Ary",title:"ary",tags:"function,intermediate"},i={id:"ary",isDocsHomePage:!1,title:"ary",description:"Creates a function that accepts up to n arguments, ignoring any additional arguments.",source:"@site/docs/ary.md",permalink:"/30-seconds-of-typescript/docs/ary",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/ary.md",sidebar_label:"Ary",sidebar:"someSidebar",previous:{title:"arrayToCSV",permalink:"/30-seconds-of-typescript/docs/arrayToCSV"},next:{title:"attempt",permalink:"/30-seconds-of-typescript/docs/attempt"}},p=[],s={rightToc:p};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Creates a function that accepts up to ",Object(o.b)("inlineCode",{parentName:"p"},"n")," arguments, ignoring any additional arguments."),Object(o.b)("p",null,"Call the provided function, ",Object(o.b)("inlineCode",{parentName:"p"},"fn"),", with up to ",Object(o.b)("inlineCode",{parentName:"p"},"n")," arguments, using ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.slice(0, n)")," and the spread operator (",Object(o.b)("inlineCode",{parentName:"p"},"..."),")."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"const ary = <T extends any>(fn: (...args: T[]) => any, n: number) => (\n  ...args: T[]\n) => fn(...args.slice(0, n));\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"const firstTwoMax = ary(Math.max, 2);\n[[2, 6, 12], [6, 4, 8], [10]].map((x) => firstTwoMax(...x)); // [6, 6, 10]\n")))}u.isMDXComponent=!0},503:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=u(n),b=r,f=l["".concat(c,".").concat(b)]||l[b]||d[b]||o;return n?a.a.createElement(f,i(i({ref:t},s),{},{components:n})):a.a.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);