(window.webpackJsonp=window.webpackJsonp||[]).push([[364],{463:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(2),a=(n(0),n(502));const o={title:"juxt",tags:"array,function,advanced"},c={id:"juxt",isDocsHomePage:!1,title:"juxt",description:"Takes several functions as argument and returns a function that is the juxtaposition of those functions.",source:"@site/docs/juxt.md",permalink:"/30-seconds-of-typescript/docs/juxt",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/juxt.md"},i=[],s={rightToc:i};function u({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Takes several functions as argument and returns a function that is the juxtaposition of those functions."),Object(a.b)("p",null,"Use ",Object(a.b)("inlineCode",{parentName:"p"},"Array.prototype.map()")," to return a ",Object(a.b)("inlineCode",{parentName:"p"},"fn")," that can take a variable number of ",Object(a.b)("inlineCode",{parentName:"p"},"args"),".\nWhen ",Object(a.b)("inlineCode",{parentName:"p"},"fn")," is called, return an array containing the result of applying each ",Object(a.b)("inlineCode",{parentName:"p"},"fn")," to the ",Object(a.b)("inlineCode",{parentName:"p"},"args"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const juxt = (...fns) => (...args) => [...fns].map(fn => [...args].map(fn));\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'juxt(\n  x => x + 1,\n  x => x - 1,\n  x => x * 10\n)(1, 2, 3); // [[2,3,4],[0,1,2],[10,20,30]]\n\njuxt(\n  s => s.length,\n  s => s.split(" ").join("-")\n)("30 seconds of code"); // [[18],[\'30-seconds-of-code\']]\n')))}u.isMDXComponent=!0},502:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(n),b=r,d=l["".concat(c,".").concat(b)]||l[b]||f[b]||o;return n?a.a.createElement(d,i(i({ref:t},u),{},{components:n})):a.a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);