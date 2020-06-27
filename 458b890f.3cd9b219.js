(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{216:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(2),a=(n(0),n(501));const o={title:"shank",tags:"array,intermediate"},c={id:"shank",isDocsHomePage:!1,title:"shank",description:"Has the same functionality as Array.prototype.splice(), but returning a new array instead of mutating the original array.",source:"@site/docs/shank.md",permalink:"/30-seconds-of-typescript/docs/shank",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/shank.md"},i=[],l={rightToc:i};function p({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Has the same functionality as ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice"}),Object(a.b)("inlineCode",{parentName:"a"},"Array.prototype.splice()")),", but returning a new array instead of mutating the original array."),Object(a.b)("p",null,"Use ",Object(a.b)("inlineCode",{parentName:"p"},"Array.prototype.slice()")," and ",Object(a.b)("inlineCode",{parentName:"p"},"Array.prototype.concat()")," to get a new array with the new contents after removing existing elements and/or adding new elements.\nOmit the second argument, ",Object(a.b)("inlineCode",{parentName:"p"},"index"),", to start at ",Object(a.b)("inlineCode",{parentName:"p"},"0"),".\nOmit the third argument, ",Object(a.b)("inlineCode",{parentName:"p"},"delCount"),", to remove ",Object(a.b)("inlineCode",{parentName:"p"},"0")," elements.\nOmit the fourth argument, ",Object(a.b)("inlineCode",{parentName:"p"},"elements"),", in order to not add any new elements."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const shank = (arr, index = 0, delCount = 0, ...elements) =>\n  arr\n    .slice(0, index)\n    .concat(elements)\n    .concat(arr.slice(index + delCount));\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const names = ['alpha', 'bravo', 'charlie'];\nconst namesAndDelta = shank(names, 1, 0, 'delta'); // [ 'alpha', 'delta', 'bravo', 'charlie' ]\nconst namesNoBravo = shank(names, 1, 1); // [ 'alpha', 'charlie' ]\nconsole.log(names); // ['alpha', 'bravo', 'charlie']\n")))}p.isMDXComponent=!0},501:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),b=r,d=u["".concat(c,".").concat(b)]||u[b]||m[b]||o;return n?a.a.createElement(d,i(i({ref:t},p),{},{components:n})):a.a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);