(window.webpackJsonp=window.webpackJsonp||[]).push([[217],{316:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(2),o=(n(0),n(502));const i={title:"either",tags:"function,logic,beginner"},a={id:"either",isDocsHomePage:!1,title:"either",description:"Returns true if at least one function returns true for a given set of arguments, false otherwise.",source:"@site/docs/either.md",permalink:"/30-seconds-of-typescript/docs/either",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/either.md"},c=[],s={rightToc:c};function u({components:e,...t}){return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Returns ",Object(o.b)("inlineCode",{parentName:"p"},"true")," if at least one function returns ",Object(o.b)("inlineCode",{parentName:"p"},"true")," for a given set of arguments, ",Object(o.b)("inlineCode",{parentName:"p"},"false")," otherwise."),Object(o.b)("p",null,"Use the logical or (",Object(o.b)("inlineCode",{parentName:"p"},"||"),") operator on the result of calling the two functions with the supplied ",Object(o.b)("inlineCode",{parentName:"p"},"args"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const either = (f, g) => (...args) => f(...args) || g(...args);\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const isEven = num => num % 2 === 0;\nconst isPositive = num => num > 0;\nconst isPositiveOrEven = either(isPositive, isEven);\nisPositiveOrEven(4); // true\nisPositiveOrEven(3); // true\n")))}u.isMDXComponent=!0},502:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(n),b=r,m=l["".concat(a,".").concat(b)]||l[b]||f[b]||i;return n?o.a.createElement(m,c(c({ref:t},u),{},{components:n})):o.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);