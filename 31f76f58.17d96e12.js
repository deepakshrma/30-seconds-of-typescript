(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{181:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return s}));var r=n(2),a=(n(0),n(501));const c={title:"gcd",tags:"math,recursion,beginner"},o={id:"gcd",isDocsHomePage:!1,title:"gcd",description:"Calculates the greatest common divisor between two or more numbers/arrays.",source:"@site/docs/gcd.md",permalink:"/30-seconds-of-typescript/docs/gcd",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/gcd.md"},i=[],p={rightToc:i};function s({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Calculates the greatest common divisor between two or more numbers/arrays."),Object(a.b)("p",null,"The inner ",Object(a.b)("inlineCode",{parentName:"p"},"_gcd")," function uses recursion.\nBase case is when ",Object(a.b)("inlineCode",{parentName:"p"},"y")," equals ",Object(a.b)("inlineCode",{parentName:"p"},"0"),". In this case, return ",Object(a.b)("inlineCode",{parentName:"p"},"x"),".\nOtherwise, return the GCD of ",Object(a.b)("inlineCode",{parentName:"p"},"y")," and the remainder of the division ",Object(a.b)("inlineCode",{parentName:"p"},"x/y"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const gcd = (...arr) => {\n  const _gcd = (x, y) => (!y ? x : gcd(y, x % y));\n  return [...arr].reduce((a, b) => _gcd(a, b));\n};\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"gcd(8, 36); // 4\ngcd(...[12, 8, 32]); // 4\n")))}s.isMDXComponent=!0},501:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=u(n),b=r,m=l["".concat(o,".").concat(b)]||l[b]||d[b]||c;return n?a.a.createElement(m,i(i({ref:t},s),{},{components:n})):a.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<c;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);