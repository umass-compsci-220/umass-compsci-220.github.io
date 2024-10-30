"use strict";(self.webpackChunkumass_compsci_220_github_io=self.webpackChunkumass_compsci_220_github_io||[]).push([[4717],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),d=s,h=c["".concat(l,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,a=new Array(i);a[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:s,a[1]=o;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4556:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(7462),s=(n(7294),n(3905));const i={sidebar_position:7},a="Discussion 7: Streams",o={unversionedId:"discussions/Week 7 - Streams",id:"discussions/Week 7 - Streams",title:"Discussion 7: Streams",description:"Welcome to the seventh discussion! This week you'll learn more about working with streams.",source:"@site/materials/discussions/Week 7 - Streams.md",sourceDirName:"discussions",slug:"/discussions/Week 7 - Streams",permalink:"/materials/discussions/Week 7 - Streams",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Discussion 6: Property Based Testing and OOP",permalink:"/materials/discussions/Week 6 - Property Based Testing and OOP"},next:{title:"Discussion 8: OOP and Streams",permalink:"/materials/discussions/Week 8 - Streams and OOP"}},l={},u=[{value:"Materials",id:"materials",level:2},{value:"Opening and working with the starter code",id:"opening-and-working-with-the-starter-code",level:2},{value:"Submitting",id:"submitting",level:2}],p={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,s.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"discussion-7-streams"},"Discussion 7: Streams"),(0,s.kt)("p",null,"Welcome to the seventh discussion! This week you'll learn more about working with streams."),(0,s.kt)("h2",{id:"materials"},"Materials"),(0,s.kt)("p",null,"Download the lab slides ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/umass-compsci-220/public-materials/raw/main/discussion/Lab%207%20-%20No%20Solutions.pdf"},"here"),"."),(0,s.kt)("p",null,"The slides with solutions will be posted ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/umass-compsci-220/public-materials/raw/main/discussion/Lab%207%20-%20Solutions.pdf"},"here")," after the last discussion of the day."),(0,s.kt)("p",null,"Download the starter code ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/umass-compsci-220/public-materials/raw/main/discussion/07-streams.zip"},"here"),". Make sure to submit this to gradescope, ask your lab leaders to help you if you are unsure of how. We'll also show the process in the first lab."),(0,s.kt)("p",null,"The solution file will be posted ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/umass-compsci-220/public-materials/raw/main/discussion/07-streams-solution.ts"},"here")," after lab."),(0,s.kt)("h2",{id:"opening-and-working-with-the-starter-code"},"Opening and working with the starter code"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"If you need help installing ",(0,s.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/"},"VSCode")," and ",(0,s.kt)("a",{parentName:"li",href:"https://nodejs.org/"},"Node.js")," (required for this course), read ",(0,s.kt)("a",{parentName:"li",href:"/materials/tutorials/assignments/environment"},"this page"),".",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"You will need a Node.js version starting from v16 and less than v20")))),(0,s.kt)("li",{parentName:"ul"},"If you need help opening the project, read ",(0,s.kt)("a",{parentName:"li",href:"/materials/tutorials/assignments/opening-an-assignment"},"this page"),"."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"After opening, run ",(0,s.kt)("inlineCode",{parentName:"strong"},"npm install")," in a VSCode terminal"))),(0,s.kt)("h2",{id:"submitting"},"Submitting"),(0,s.kt)("p",null,"Use the following command to build a ",(0,s.kt)("inlineCode",{parentName:"p"},".zip")," file:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"npm run build:submission\n")),(0,s.kt)("p",null,"This command will automatically format your submissions source code so it is easier to read then bundle your ",(0,s.kt)("inlineCode",{parentName:"p"},"./src/*")," files into a ",(0,s.kt)("inlineCode",{parentName:"p"},".zip"),". Please upload this file to the respective assignment on Gradescope."))}m.isMDXComponent=!0}}]);