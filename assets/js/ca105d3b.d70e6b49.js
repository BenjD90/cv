"use strict";(self.webpackChunkcv=self.webpackChunkcv||[]).push([[772],{4184:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=r(4848),s=r(8453),c=r(5828),o=r(1754);const i={},a="useCurrentSidebarCategory().label",l={id:"experiences/index",title:"{useCurrentSidebarCategory().label}",description:"",source:"@site/docs/experiences/index.mdx",sourceDirName:"experiences",slug:"/experiences/",permalink:"/cv/docs/experiences/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"cvSidebar",previous:{title:"Baccalaur\xe9at",permalink:"/cv/docs/formation/lycee"},next:{title:"Neo9",permalink:"/cv/docs/category/neo9"}},u={},d=[];function m(e){const t={h1:"h1",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"usecurrentsidebarcategorylabel",children:(0,o.$S)().label}),"\n",(0,n.jsx)(c.A,{})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},5828:(e,t,r)=>{r.d(t,{A:()=>w});var n=r(6540),s=r(4164),c=r(1754),o=r(8774),i=r(4586);const a=["zero","one","two","few","many","other"];function l(e){return a.filter((t=>e.includes(t)))}const u={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function d(){const{i18n:{currentLocale:e}}=(0,i.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),u}}),[e])}function m(){const e=d();return{selectMessage:(t,r)=>function(e,t,r){const n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const s=r.select(t),c=r.pluralForms.indexOf(s);return n[Math.min(c,n.length-1)]}(r,t,e)}}var p=r(1312),h=r(1107);const f={cardContainer:"cardContainer__Bu3",cardTitle:"cardTitle_Ppq0",cardDescription:"cardDescription_URJV",cardDates:"cardDates_f3B6"};var x=r(4848);function g(e){let{href:t,children:r}=e;return(0,x.jsx)(o.A,{href:t,className:(0,s.A)("card padding--lg",f.cardContainer),children:r})}function j(e){let{href:t,icon:r,title:n,description:c,image:o,dates:i}=e;return(0,x.jsxs)(g,{href:t,children:[o&&(0,x.jsx)("div",{children:(0,x.jsx)("img",{height:"60px",src:o})}),n&&(0,x.jsxs)(h.A,{as:"h2",className:(0,s.A)("text--truncate",f.cardTitle),title:n,children:[r," ",n]}),c&&(0,x.jsx)("p",{className:(0,s.A)("text--truncate",f.cardDescription),title:c,children:c}),i&&(0,x.jsx)("p",{className:(0,s.A)("text--truncate",f.cardDates),title:i,children:i})]})}function b(e){let{item:t}=e;const r=(0,c.Nr)(t),n=function(){const{selectMessage:e}=m();return t=>e(t,(0,p.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();if(!r)return null;const s=t.customProps?.hideTitle?"":t.label;return(0,x.jsx)(j,{href:r,icon:"\ud83d\uddc3\ufe0f",image:t.customProps?.image,title:s,description:t.description??n(t.items.length)})}function v(e){let{item:t}=e;const r=(0,c.cC)(t.docId??void 0),n=t.customProps?.hideTitle?"":t.label;return(0,x.jsx)(j,{href:t.href,image:t.customProps?.image,title:n,description:t.description??r?.description,dates:t.customProps?.dates})}function y(e){let{item:t}=e;switch(t.type){case"link":return(0,x.jsx)(v,{item:t});case"category":return(0,x.jsx)(b,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function C(e){let{className:t}=e;const r=(0,c.$S)();return(0,x.jsx)(w,{items:r.items,className:t})}function w(e){const{items:t,className:r}=e;if(!t)return(0,x.jsx)(C,{...e});const n=(0,c.d1)(t);return(0,x.jsx)("section",{className:(0,s.A)("row",r),children:n.map(((e,t)=>(0,x.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,x.jsx)(y,{item:e})},t)))})}},8453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>i});var n=r(6540);const s={},c=n.createContext(s);function o(e){const t=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);