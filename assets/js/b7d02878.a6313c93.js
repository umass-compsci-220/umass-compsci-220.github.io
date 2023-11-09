"use strict";(self.webpackChunkumass_compsci_220_github_io=self.webpackChunkumass_compsci_220_github_io||[]).push([[8144],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3042:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={},i="Workflow One-pager",l={unversionedId:"tutorials/workflow-one-pager",id:"tutorials/workflow-one-pager",title:"Workflow One-pager",description:"This document summarizes the Assignments section. We highly recommend you read the detailed guide and use this page as a quick reference.",source:"@site/materials/tutorials/workflow-one-pager.md",sourceDirName:"tutorials",slug:"/tutorials/workflow-one-pager",permalink:"/materials/tutorials/workflow-one-pager",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Editing",permalink:"/materials/tutorials/assignments/linting-and-formatting"}},s={},u=[{value:"Download, Run, and Submit Assignment and Discussion Exercise",id:"download-run-and-submit-assignment-and-discussion-exercise",level:2},{value:"Test Your Solution and Check Coverage",id:"test-your-solution-and-check-coverage",level:2},{value:"Linting",id:"linting",level:2},{value:"Format Your Code",id:"format-your-code",level:2}],c={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"workflow-one-pager"},"Workflow One-pager"),(0,o.kt)("p",null,"This document summarizes the ",(0,o.kt)("a",{parentName:"p",href:"/materials/tutorials/assignments/environment"},"Assignments")," section. We highly recommend you read the detailed guide and use this page as a quick reference."),(0,o.kt)("h2",{id:"download-run-and-submit-assignment-and-discussion-exercise"},"Download, Run, and Submit Assignment and Discussion Exercise"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download the starter ZIP file"),(0,o.kt)("li",{parentName:"ol"},'Extract 1) to an empty folder of your choice (e.g., "220_HW1")'),(0,o.kt)("li",{parentName:"ol"},"Open 2) on Visual Studio Code"),(0,o.kt)("li",{parentName:"ol"},"Open terminal in Visual Studio Code"),(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"npm install")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"npm i")," to install required packages for the project"),(0,o.kt)("li",{parentName:"ol"},"Write awesome code \ud83d\ude0e"),(0,o.kt)("li",{parentName:"ol"},"To run ",(0,o.kt)("inlineCode",{parentName:"li"},"src/main.ts")," file, run ",(0,o.kt)("inlineCode",{parentName:"li"},"npm run start")),(0,o.kt)("li",{parentName:"ol"},"To make a ZIP file that you will submit to Gradescope, run ",(0,o.kt)("inlineCode",{parentName:"li"},"npm run build:submission"))),(0,o.kt)("h2",{id:"test-your-solution-and-check-coverage"},"Test Your Solution and Check Coverage"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"To run tests, run ",(0,o.kt)("inlineCode",{parentName:"li"},"npm run test")),(0,o.kt)("li",{parentName:"ol"},"To get coverage report, run ",(0,o.kt)("inlineCode",{parentName:"li"},"npm run test:coverage"))),(0,o.kt)("h2",{id:"linting"},"Linting"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"To check linter warnings, run ",(0,o.kt)("inlineCode",{parentName:"li"},"npm run lint"),". It gives output detailing where/how your code can improve."),(0,o.kt)("li",{parentName:"ol"},"To apply all automatically fixable warnings, run ",(0,o.kt)("inlineCode",{parentName:"li"},"npm run lint:fix"))),(0,o.kt)("h2",{id:"format-your-code"},"Format Your Code"),(0,o.kt)("p",null,"You can either (a) install Prettier extension to format your files automatically when you save them, or (b) run ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run format"),"."))}m.isMDXComponent=!0}}]);