"use strict";(self.webpackChunkumass_compsci_220_github_io=self.webpackChunkumass_compsci_220_github_io||[]).push([[5388],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=u(n),d=i,h=p["".concat(l,".").concat(d)]||p[d]||m[d]||s;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,o=new Array(s);o[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:i,o[1]=a;for(var u=2;u<s;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9240:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const s={sidebar_position:11},o="Discussion 11: Asynchronous Programming",a={unversionedId:"discussions/Week 11 - Asynchronous Programming",id:"discussions/Week 11 - Asynchronous Programming",title:"Discussion 11: Asynchronous Programming",description:"Welcome to the tenth discussion! This week you'll learn more about programming asynchronously.",source:"@site/materials/discussions/Week 11 - Asynchronous Programming.md",sourceDirName:"discussions",slug:"/discussions/Week 11 - Asynchronous Programming",permalink:"/materials/discussions/Week 11 - Asynchronous Programming",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Discussion 10: Midterm 2 Review",permalink:"/materials/discussions/Week 10 - Review"},next:{title:"Guidelines",permalink:"/materials/category/guidelines"}},l={},u=[{value:"Materials",id:"materials",level:2},{value:"Opening and working with the starter code",id:"opening-and-working-with-the-starter-code",level:2},{value:"Submitting",id:"submitting",level:2}],c={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"discussion-11-asynchronous-programming"},"Discussion 11: Asynchronous Programming"),(0,i.kt)("p",null,"Welcome to the tenth discussion! This week you'll learn more about programming asynchronously."),(0,i.kt)("h2",{id:"materials"},"Materials"),(0,i.kt)("p",null,"Download the lab slides ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/umass-compsci-220/public-materials/raw/main/discussion/Lab%2011%20-%20No%20Solutions.pdf"},"here"),"."),(0,i.kt)("p",null,"The slides with solutions will be posted ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/umass-compsci-220/public-materials/raw/main/discussion/Lab%2011%20-%20Solutions.pdf"},"here")," after the last discussion of the day."),(0,i.kt)("p",null,"Download the starter code ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/umass-compsci-220/public-materials/raw/main/discussion/11-asynchronous-programming.zip"},"here"),". Make sure to submit this to gradescope, ask your lab leaders to help you if you are unsure of how. We'll also show the process in the first lab."),(0,i.kt)("p",null,"The solution file will be posted ",(0,i.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/umass-compsci-220/public-materials/main/discussion/11-asynchronous-programming-solution.js"},"here")," after lab."),(0,i.kt)("h2",{id:"opening-and-working-with-the-starter-code"},"Opening and working with the starter code"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If you need help installing ",(0,i.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/"},"VSCode")," and ",(0,i.kt)("a",{parentName:"li",href:"https://nodejs.org/"},"Node.js")," (required for this course), read ",(0,i.kt)("a",{parentName:"li",href:"/materials/tutorials/assignments/environment"},"this page"),".",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"You will need a Node.js version starting from v16 and less than v20")))),(0,i.kt)("li",{parentName:"ul"},"If you need help opening the project, read ",(0,i.kt)("a",{parentName:"li",href:"/materials/tutorials/assignments/opening-an-assignment"},"this page"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"After opening, run ",(0,i.kt)("inlineCode",{parentName:"strong"},"npm install")," in a VSCode terminal"))),(0,i.kt)("h2",{id:"submitting"},"Submitting"),(0,i.kt)("p",null,"Use the following command to build a ",(0,i.kt)("inlineCode",{parentName:"p"},".zip")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm run build:submission\n")),(0,i.kt)("p",null,"This command will automatically format your submissions source code so it is easier to read then bundle your ",(0,i.kt)("inlineCode",{parentName:"p"},"./src/*")," files into a ",(0,i.kt)("inlineCode",{parentName:"p"},".zip"),". Please upload this file to the respective assignment on Gradescope."))}m.isMDXComponent=!0}}]);