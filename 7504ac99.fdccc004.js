(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{285:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(2),a=(r(0),r(501));const o={title:"stringPermutations",tags:"string,recursion,advanced"},i={id:"stringPermutations",isDocsHomePage:!1,title:"stringPermutations",description:"Generates all permutations of a string (contains duplicates).",source:"@site/docs/stringPermutations.md",permalink:"/30-seconds-of-typescript/docs/stringPermutations",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/stringPermutations.md"},c=[],s={rightToc:c};function l({components:e,...t}){return Object(a.b)("wrapper",Object(n.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Generates all permutations of a string (contains duplicates)."),Object(a.b)("p",null,"\u26a0\ufe0f ",Object(a.b)("strong",{parentName:"p"},"WARNING"),": This function's execution time increases exponentially with each character. Anything more than 8 to 10 characters will cause your browser to hang as it tries to solve all the different combinations."),Object(a.b)("p",null,"Use recursion.\nFor each letter in the given string, create all the partial permutations for the rest of its letters.\nUse ",Object(a.b)("inlineCode",{parentName:"p"},"Array.prototype.map()")," to combine the letter with each partial permutation, then ",Object(a.b)("inlineCode",{parentName:"p"},"Array.prototype.reduce()")," to combine all permutations in one array.\nBase cases are for string ",Object(a.b)("inlineCode",{parentName:"p"},"length")," equal to ",Object(a.b)("inlineCode",{parentName:"p"},"2")," or ",Object(a.b)("inlineCode",{parentName:"p"},"1"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const stringPermutations = str => {\n  if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];\n  return str\n    .split('')\n    .reduce(\n      (acc, letter, i) =>\n        acc.concat(stringPermutations(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)),\n      []\n    );\n};\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"stringPermutations('abc'); // ['abc','acb','bac','bca','cab','cba']\n")))}l.isMDXComponent=!0},501:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,f=u["".concat(i,".").concat(m)]||u[m]||b[m]||o;return r?a.a.createElement(f,c(c({ref:t},l),{},{components:r})):a.a.createElement(f,c({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);