(window.webpackJsonp=window.webpackJsonp||[]).push([[307],{407:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(503)),c={title:"getDaysDiffBetweenDates",tags:"date,intermediate"},i={id:"getDaysDiffBetweenDates",isDocsHomePage:!1,title:"getDaysDiffBetweenDates",description:"Returns the difference (in days) between two dates.",source:"@site/docs/getDaysDiffBetweenDates.md",permalink:"/docs/getDaysDiffBetweenDates",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/getDaysDiffBetweenDates.md"},s=[],f={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},f,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Returns the difference (in days) between two dates."),Object(o.b)("p",null,"Calculate the difference (in days) between two ",Object(o.b)("inlineCode",{parentName:"p"},"Date")," objects."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const getDaysDiffBetweenDates = (dateInitial, dateFinal) =>\n  (dateFinal - dateInitial) / (1000 * 3600 * 24);\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"getDaysDiffBetweenDates(new Date('2017-12-13'), new Date('2017-12-22')); // 9\n")))}p.isMDXComponent=!0},503:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var f=a.a.createContext({}),p=function(e){var t=a.a.useContext(f),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(f.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,b=u["".concat(c,".").concat(d)]||u[d]||l[d]||o;return n?a.a.createElement(b,i(i({ref:t},f),{},{components:n})):a.a.createElement(b,i({ref:t},f))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var f=2;f<o;f++)c[f]=n[f];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);