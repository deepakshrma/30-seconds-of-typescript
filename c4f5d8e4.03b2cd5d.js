(window.webpackJsonp=window.webpackJsonp||[]).push([[312,57],{448:function(e,a,t){"use strict";t.r(a);var n=t(547),r=t(0),c=t.n(r),s=t(546),l=t(554),i=t(548),o=t(544),u=t(550),m=t(449),d=t.n(m);const h=[{title:c.a.createElement(c.a.Fragment,null,"Supports"),imageUrl:"img/undraw_docusaurus_mountain.svg",description:c.a.createElement(c.a.Fragment,null,"Code has written mainly in typescript. Which is supper set of JavaScript. It also supports Deno.")},{title:c.a.createElement(c.a.Fragment,null,"Focus on Simplicity"),imageUrl:"img/undraw_docusaurus_tree.svg",description:c.a.createElement(c.a.Fragment,null,"There is always libary like lodash can be used. However, It is good to learn some concept by own.")},{title:c.a.createElement(c.a.Fragment,null,"Powered by Docusaurus"),imageUrl:"img/undraw_docusaurus_react.svg",description:c.a.createElement(c.a.Fragment,null,"Extend or customize your website layout by reusing Docusaurus. Docusaurus can be extended while reusing the same header and footer.")}];function b({imageUrl:e,title:a,description:t}){const n=Object(u.a)(e);return c.a.createElement("div",{className:Object(s.a)("col col--4",d.a.feature)},n&&c.a.createElement("div",{className:"text--center"},c.a.createElement("img",{className:d.a.featureImage,src:n,alt:a})),c.a.createElement("h3",null,a),c.a.createElement("p",null,t))}a.default=function(){const e=Object(o.a)(),{siteConfig:a={}}=e;return c.a.createElement(l.a,{title:a.title,description:"Description will go into a meta tag in <head />"},c.a.createElement("header",{className:Object(s.a)("hero hero--primary",d.a.heroBanner)},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"hero__title"},a.title),c.a.createElement("p",{className:"hero__subtitle"},a.tagline),c.a.createElement("div",{className:d.a.buttons},c.a.createElement(i.a,{className:Object(s.a)("button button--outline button--secondary button--lg",d.a.getStarted),to:Object(u.a)("docs/")},"Get Started")))),c.a.createElement("main",null,h&&h.length>0&&c.a.createElement("section",{className:d.a.features},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},h.map((e,a)=>c.a.createElement(b,Object(n.a)({key:a},e))))))))}},555:function(e,a,t){"use strict";t(24);var n=t(0),r=t.n(n),c=t(553),s=t.n(c),l=t(551),i=t(544);a.a=e=>{const a=Object(n.useRef)(!1),c=Object(n.useRef)(null),o=Object(l.b)(),{siteConfig:u={}}=Object(i.a)(),{baseUrl:m}=u,d=()=>{a.current||(Promise.all([fetch(m+"search-doc.json").then(e=>e.json()),fetch(m+"lunr-index.json").then(e=>e.json()),Promise.all([t.e(406),t.e(409)]).then(t.bind(null,561)),t.e(288).then(t.t.bind(null,560,7))]).then(([e,a,{default:t}])=>{((e,a,t)=>{new t({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:(e,a,t)=>{const n=m+t.url;document.createElement("a").href=n,o.push(n)}})})(e,a,t)}),a.current=!0)},h=Object(n.useCallback)(a=>{c.current.contains(a.target)||c.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)},[e.isSearchBarExpanded]);return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:s()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:h,onKeyDown:h,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:s()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:d,onMouseOver:d,onFocus:h,onBlur:h,ref:c}))}}}]);