"use strict";(self.webpackChunkumass_compsci_220_github_io=self.webpackChunkumass_compsci_220_github_io||[]).push([[318],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,g=p["".concat(l,".").concat(d)]||p[d]||c[d]||a;return n?i.createElement(g,o(o({ref:t},m),{},{components:n})):i.createElement(g,o({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8686:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var i=n(7462),r=(n(7294),n(3905));const a={sidebar_position:5},o="Editing",s={unversionedId:"tutorials/assignments/editing",id:"tutorials/assignments/editing",title:"Editing",description:"Linting and Formatting Assignments",source:"@site/materials/tutorials/assignments/editing.md",sourceDirName:"tutorials/assignments",slug:"/tutorials/assignments/editing",permalink:"/materials/tutorials/assignments/editing",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Testing",permalink:"/materials/tutorials/assignments/testing"},next:{title:"Lab Work",permalink:"/materials/tutorials/lab-work"}},l={},u=[{value:"Linting and Formatting Assignments",id:"linting-and-formatting-assignments",level:2},{value:"Linting",id:"linting",level:3},{value:"Formatting",id:"formatting",level:3}],m={toc:u},p="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"editing"},"Editing"),(0,r.kt)("h2",{id:"linting-and-formatting-assignments"},"Linting and Formatting Assignments"),(0,r.kt)("p",null,"Assignments come configured with linting and formatting. Provided for you are the ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run lint"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run lint:fix"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run format")," commands."),(0,r.kt)("h3",{id:"linting"},"Linting"),(0,r.kt)("p",null,"From ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Lint_(software)"},"Wikipedia on Lint"),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Lint, or a linter, is a static code analysis tool used to flag programming errors, bugs, stylistic errors and suspicious constructs. The term originates from a Unix utility that examined C language source code.")),(0,r.kt)("p",null,"Homework assignments may require that you do not have any linter warnings. To check your linter warnings, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run lint")," command in a terminal. It will produce output detailing where and how your code could improve."),(0,r.kt)("p",null,'If you do not understand what the warning means, Googling its name may help ("@typescript-eslint/no-unused-vars").'),(0,r.kt)("p",null,"Using the ",(0,r.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint"},"VSCode ESlint")," extension will bring these warnings into the editor visually. Allowing you to hover your cursor over them and interact with them."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run lint:fix")," command will attempt to fix all the automatically fixable warnings. Such as using ",(0,r.kt)("inlineCode",{parentName:"p"},"let")," for a variable that is never reassigned."),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"/img/eslint-output.png"})),(0,r.kt)("p",null,"Above is some example output from running ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run lint"),". As you can see, on line 46, column 7, we are getting a warning because we define a variable ",(0,r.kt)("inlineCode",{parentName:"p"},"x"),", but never use it."),(0,r.kt)("h3",{id:"formatting"},"Formatting"),(0,r.kt)("p",null,"Formatting, i.e. the spacing and visual structure of your code, is handled before you build your final submission using the ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run format")," command. If you'd like, you can run this command periodically to format your code. Alternatively, you could configure VSCode to automatically format your code whenever you save your file."),(0,r.kt)("p",null,"Installing the ",(0,r.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"},"Prettier extension")," in VSCode and adding the following to your ",(0,r.kt)("inlineCode",{parentName:"p"},"settings.json")," (",(0,r.kt)("inlineCode",{parentName:"p"},"File -> Preferences -> Settings -> Open JSON (top right)"),") should configure it for you:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"[typescript]": {\n  "editor.defaultFormatter": "esbenp.prettier-vscode"\n},\n"editor.formatOnSave": true\n')),(0,r.kt)("p",null,"Your code is formatted before you build your submission so it can be more easily read by course staff."))}c.isMDXComponent=!0}}]);