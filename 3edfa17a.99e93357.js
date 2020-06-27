(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{205:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return i})),t.d(r,"rightToc",(function(){return l})),t.d(r,"default",(function(){return u}));var n=t(2),a=(t(0),t(501));const o={title:"pluralize",tags:"string,intermediate"},i={id:"pluralize",isDocsHomePage:!1,title:"pluralize",description:"Returns the singular or plural form of the word based on the input number. If the first argument is an object, it will use a closure by returning a function that can auto-pluralize words that don't simply end in s if the supplied dictionary contains the word.",source:"@site/docs/pluralize.md",permalink:"/30-seconds-of-typescript/docs/pluralize",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/pluralize.md"},l=[],p={rightToc:l};function u({components:e,...r}){return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Returns the singular or plural form of the word based on the input number. If the first argument is an ",Object(a.b)("inlineCode",{parentName:"p"},"object"),", it will use a closure by returning a function that can auto-pluralize words that don't simply end in ",Object(a.b)("inlineCode",{parentName:"p"},"s")," if the supplied dictionary contains the word."),Object(a.b)("p",null,"If ",Object(a.b)("inlineCode",{parentName:"p"},"num")," is either ",Object(a.b)("inlineCode",{parentName:"p"},"-1")," or ",Object(a.b)("inlineCode",{parentName:"p"},"1"),", return the singular form of the word. If ",Object(a.b)("inlineCode",{parentName:"p"},"num")," is any other number, return the plural form. Omit the third argument to use the default of the singular word + ",Object(a.b)("inlineCode",{parentName:"p"},"s"),", or supply a custom pluralized word when necessary. If the first argument is an ",Object(a.b)("inlineCode",{parentName:"p"},"object"),", utilize a closure by returning a function which can use the supplied dictionary to resolve the correct plural form of the word."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const pluralize = (val, word, plural = word + 's') => {\n  const _pluralize = (num, word, plural = word + 's') =>\n    [1, -1].includes(Number(num)) ? word : plural;\n  if (typeof val === 'object') return (num, word) => _pluralize(num, word, val[word]);\n  return _pluralize(val, word, plural);\n};\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"pluralize(0, 'apple'); // 'apples'\npluralize(1, 'apple'); // 'apple'\npluralize(2, 'apple'); // 'apples'\npluralize(2, 'person', 'people'); // 'people'\n\nconst PLURALS = {\n  person: 'people',\n  radius: 'radii'\n};\nconst autoPluralize = pluralize(PLURALS);\nautoPluralize(2, 'person'); // 'people'\n")))}u.isMDXComponent=!0},501:function(e,r,t){"use strict";t.d(r,"a",(function(){return s})),t.d(r,"b",(function(){return b}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),c=function(e){var r=a.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},s=function(e){var r=c(e.components);return a.a.createElement(u.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},f=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(t),f=n,b=s["".concat(i,".").concat(f)]||s[f]||d[f]||o;return t?a.a.createElement(b,l(l({ref:r},u),{},{components:t})):a.a.createElement(b,l({ref:r},u))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=f;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);