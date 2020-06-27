(window.webpackJsonp=window.webpackJsonp||[]).push([[234],{333:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return i})),t.d(r,"default",(function(){return l}));var n=t(2),a=(t(0),t(501));const o={title:"reject",tags:"array,beginner"},c={id:"reject",isDocsHomePage:!1,title:"reject",description:"Filters an array's values based on a predicate function, returning only values for which the predicate function returns false.",source:"@site/docs/reject.md",permalink:"/30-seconds-of-typescript/docs/reject",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/reject.md"},i=[],p={rightToc:i};function l({components:e,...r}){return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Filters an array's values based on a predicate function, returning only values for which the predicate function returns ",Object(a.b)("inlineCode",{parentName:"p"},"false"),"."),Object(a.b)("p",null,"Use ",Object(a.b)("inlineCode",{parentName:"p"},"Array.prototype.filter()")," in combination with the predicate function, ",Object(a.b)("inlineCode",{parentName:"p"},"pred"),", to return only the values for which ",Object(a.b)("inlineCode",{parentName:"p"},"pred()")," returns ",Object(a.b)("inlineCode",{parentName:"p"},"false"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const reject = (pred, array) => array.filter((...args) => !pred(...args));\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"reject(x => x % 2 === 0, [1, 2, 3, 4, 5]); // [1, 3, 5]\nreject(word => word.length > 4, ['Apple', 'Pear', 'Kiwi', 'Banana']); // ['Pear', 'Kiwi']\n")))}l.isMDXComponent=!0},501:function(e,r,t){"use strict";t.d(r,"a",(function(){return s})),t.d(r,"b",(function(){return d}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var r=a.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=u(e.components);return a.a.createElement(l.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},b=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(t),b=n,d=s["".concat(c,".").concat(b)]||s[b]||f[b]||o;return t?a.a.createElement(d,i(i({ref:r},l),{},{components:t})):a.a.createElement(d,i({ref:r},l))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=b;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);