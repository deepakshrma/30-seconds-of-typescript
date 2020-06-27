(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{204:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return l}));var r=n(2),a=(n(0),n(501));const o={title:"JSONtoCSV",tags:"array,string,object,advanced"},c={id:"JSONtoCSV",isDocsHomePage:!1,title:"JSONtoCSV",description:"Converts an array of objects to a comma-separated values (CSV) string that contains only the columns specified.",source:"@site/docs/JSONtoCSV.md",permalink:"/30-seconds-of-typescript/docs/JSONtoCSV",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/JSONtoCSV.md"},i=[],p={rightToc:i};function l({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Converts an array of objects to a comma-separated values (CSV) string that contains only the ",Object(a.b)("inlineCode",{parentName:"p"},"columns")," specified."),Object(a.b)("p",null,"Use ",Object(a.b)("inlineCode",{parentName:"p"},"Array.prototype.join(delimiter)")," to combine all the names in ",Object(a.b)("inlineCode",{parentName:"p"},"columns")," to create the first row.\nUse ",Object(a.b)("inlineCode",{parentName:"p"},"Array.prototype.map()")," and ",Object(a.b)("inlineCode",{parentName:"p"},"Array.prototype.reduce()")," to create a row for each object, substituting non-existent values with empty strings and only mapping values in ",Object(a.b)("inlineCode",{parentName:"p"},"columns"),".\nUse ",Object(a.b)("inlineCode",{parentName:"p"},"Array.prototype.join('\\n')")," to combine all rows into a string.\nOmit the third argument, ",Object(a.b)("inlineCode",{parentName:"p"},"delimiter"),", to use a default delimiter of ",Object(a.b)("inlineCode",{parentName:"p"},","),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const JSONtoCSV = (arr, columns, delimiter = ',') =>\n  [\n    columns.join(delimiter),\n    ...arr.map(obj =>\n      columns.reduce(\n        (acc, key) => `${acc}${!acc.length ? '' : delimiter}\"${!obj[key] ? '' : obj[key]}\"`,\n        ''\n      )\n    )\n  ].join('\\n');\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'JSONtoCSV([{ a: 1, b: 2 }, { a: 3, b: 4, c: 5 }, { a: 6 }, { b: 7 }], [\'a\', \'b\']); // \'a,b\\n"1","2"\\n"3","4"\\n"6",""\\n"","7"\'\nJSONtoCSV([{ a: 1, b: 2 }, { a: 3, b: 4, c: 5 }, { a: 6 }, { b: 7 }], [\'a\', \'b\'], \';\'); // \'a;b\\n"1";"2"\\n"3";"4"\\n"6";""\\n"";"7"\'\n')))}l.isMDXComponent=!0},501:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,d=u["".concat(c,".").concat(m)]||u[m]||b[m]||o;return n?a.a.createElement(d,i(i({ref:t},l),{},{components:n})):a.a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);