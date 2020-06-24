(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{146:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return o})),n.d(r,"metadata",(function(){return u})),n.d(r,"rightToc",(function(){return i})),n.d(r,"default",(function(){return l}));var t=n(2),c=n(6),a=(n(0),n(503)),o={title:"toCurrency",tags:"math,string,intermediate"},u={id:"toCurrency",isDocsHomePage:!1,title:"toCurrency",description:"Take a number and return specified currency formatting.",source:"@site/docs/toCurrency.md",permalink:"/30-seconds-of-typescript/docs/toCurrency",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/toCurrency.md"},i=[],p={rightToc:i};function l(e){var r=e.components,n=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},p,n,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Take a number and return specified currency formatting."),Object(a.b)("p",null,"Use ",Object(a.b)("inlineCode",{parentName:"p"},"Intl.NumberFormat")," to enable country / currency sensitive formatting."),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"const toCurrency = (n, curr, LanguageFormat = undefined) =>\n  Intl.NumberFormat(LanguageFormat, { style: 'currency', currency: curr }).format(n);\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"toCurrency(123456.789, 'EUR'); // \u20ac123,456.79  | currency: Euro | currencyLangFormat: Local\ntoCurrency(123456.789, 'USD', 'en-us'); // $123,456.79  | currency: US Dollar | currencyLangFormat: English (United States)\ntoCurrency(123456.789, 'USD', 'fa'); // \u06f1\u06f2\u06f3\u066c\u06f4\u06f5\u06f6\u066b\u06f7\u06f9 \u061c$ | currency: US Dollar | currencyLangFormat: Farsi\ntoCurrency(322342436423.2435, 'JPY'); // \xa5322,342,436,423 | currency: Japanese Yen | currencyLangFormat: Local\ntoCurrency(322342436423.2435, 'JPY', 'fi'); // 322 342 436 423 \xa5 | currency: Japanese Yen | currencyLangFormat: Finnish\n")))}l.isMDXComponent=!0},503:function(e,r,n){"use strict";n.d(r,"a",(function(){return s})),n.d(r,"b",(function(){return f}));var t=n(0),c=n.n(t);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function u(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,c=function(e,r){if(null==e)return{};var n,t,c={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(c[n]=e[n]);return c}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var p=c.a.createContext({}),l=function(e){var r=c.a.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):u(u({},r),e)),n},s=function(e){var r=l(e.components);return c.a.createElement(p.Provider,{value:r},e.children)},y={inlineCode:"code",wrapper:function(e){var r=e.children;return c.a.createElement(c.a.Fragment,{},r)}},m=c.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=l(n),m=t,f=s["".concat(o,".").concat(m)]||s[m]||y[m]||a;return n?c.a.createElement(f,u(u({ref:r},p),{},{components:n})):c.a.createElement(f,u({ref:r},p))}));function f(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=n.length,o=new Array(a);o[0]=m;var u={};for(var i in r)hasOwnProperty.call(r,i)&&(u[i]=r[i]);u.originalType=e,u.mdxType="string"==typeof e?e:t,o[1]=u;for(var p=2;p<a;p++)o[p]=n[p];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);