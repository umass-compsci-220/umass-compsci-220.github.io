"use strict";(self.webpackChunkumass_compsci_220_github_io=self.webpackChunkumass_compsci_220_github_io||[]).push([[440],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(r),d=i,h=c["".concat(l,".").concat(d)]||c[d]||m[d]||s;return r?n.createElement(h,a(a({ref:t},u),{},{components:r})):n.createElement(h,a({ref:t},u))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=r.length,a=new Array(s);a[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:i,a[1]=o;for(var p=2;p<s;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7131:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var n=r(7462),i=(r(7294),r(3905));const s={sidebar_position:12},a="Discussion 12: Interpreters",o={unversionedId:"discussions/Week 12 - Interpreters",id:"discussions/Week 12 - Interpreters",title:"Discussion 12: Interpreters",description:"Welcome to the twelfth discussion! This week you'll learn more about interpreters!",source:"@site/materials/discussions/Week 12 - Interpreters.md",sourceDirName:"discussions",slug:"/discussions/Week 12 - Interpreters",permalink:"/materials/discussions/Week 12 - Interpreters",draft:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Discussion 11: Program Correctness",permalink:"/materials/discussions/Week 11 - Program Correctness"},next:{title:"Guidelines",permalink:"/materials/category/guidelines"}},l={},p=[{value:"Materials",id:"materials",level:2},{value:"Opening and working with the starter code",id:"opening-and-working-with-the-starter-code",level:2},{value:"Submitting",id:"submitting",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"discussion-12-interpreters"},"Discussion 12: Interpreters"),(0,i.kt)("p",null,"Welcome to the twelfth discussion! This week you'll learn more about interpreters!"),(0,i.kt)("h2",{id:"materials"},"Materials"),(0,i.kt)("p",null,"Download the lab slides ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/umass-compsci-220/public-materials/raw/main/discussion/Lab%2012%20-%20No%20Solutions.pdf"},"here"),"."),(0,i.kt)("p",null,"The slides with solutions will be posted ",(0,i.kt)("a",{parentName:"p",href:"#"},"here")," after the last discussion of the day."),(0,i.kt)("p",null,"Download the starter code ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/umass-compsci-220/public-materials/raw/main/discussion/12-interpreters.zip"},"here"),". Make sure to submit this to gradescope, ask your lab leaders to help you if you are unsure of how. We'll also show the process in the first lab."),(0,i.kt)("p",null,"The solution file will be posted ",(0,i.kt)("a",{parentName:"p",href:"#"},"here")," after lab."),(0,i.kt)("h2",{id:"opening-and-working-with-the-starter-code"},"Opening and working with the starter code"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If you need help installing ",(0,i.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/"},"VSCode")," and ",(0,i.kt)("a",{parentName:"li",href:"https://nodejs.org/"},"Node.js")," (required for this course), read ",(0,i.kt)("a",{parentName:"li",href:"/materials/tutorials/assignments/environment"},"this page"),".",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"You will need a Node.js version starting from v16 and less than v20")))),(0,i.kt)("li",{parentName:"ul"},"If you need help opening the project, read ",(0,i.kt)("a",{parentName:"li",href:"/materials/tutorials/assignments/opening-an-assignment"},"this page"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"After opening, run ",(0,i.kt)("inlineCode",{parentName:"strong"},"npm install")," in a VSCode terminal"))),(0,i.kt)("h2",{id:"submitting"},"Submitting"),(0,i.kt)("p",null,"Use the following command to build a ",(0,i.kt)("inlineCode",{parentName:"p"},".zip")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm run build:submission\n")),(0,i.kt)("p",null,"This command will automatically format your submissions source code so it is easier to read then bundle your ",(0,i.kt)("inlineCode",{parentName:"p"},"./src/*")," files into a ",(0,i.kt)("inlineCode",{parentName:"p"},".zip"),". Please upload this file to the respective assignment on Gradescope."))}m.isMDXComponent=!0}}]);