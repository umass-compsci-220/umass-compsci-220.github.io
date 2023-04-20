"use strict";(self.webpackChunkumass_compsci_220_github_io=self.webpackChunkumass_compsci_220_github_io||[]).push([[189],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(g,o(o({ref:t},c),{},{components:r})):n.createElement(g,o({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5065:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:3},o="Testing",s={unversionedId:"guidelines/testing",id:"guidelines/testing",title:"Testing",description:"During this course, you are expected, and graded on your ability, to write quality and full coverage unit tests using the testing principles covered in class.",source:"@site/materials/guidelines/testing.md",sourceDirName:"guidelines",slug:"/guidelines/testing",permalink:"/materials/guidelines/testing",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Syntax and Code",permalink:"/materials/guidelines/syntax-and-code"},next:{title:"Regrade Requests",permalink:"/materials/guidelines/regrade-requests"}},l={},u=[{value:"Coverage",id:"coverage",level:2},{value:"Design",id:"design",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"testing"},"Testing"),(0,a.kt)("p",null,"During this course, you are expected, and graded on your ability, to write quality and ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"#coverage"},"full coverage"))," unit tests using the testing principles covered in class."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Your grade will be directly and indirectly affected by how you approach and complete your tests.")," Directly, in the sense that your tests will be reviewed for coverage and design. And of course, your grade will be indirectly affected, as students who write more quality tests will likely catch more errors in their program."),(0,a.kt)("p",null,"Each relevant homework has a set of provided tests for you to work off of; ",(0,a.kt)("strong",{parentName:"p"},"that is not to say that if you pass all these tests your program is correct.")," When you submit your assignment, you will not see a grade. As tests used to evaluate your submission are private. However, the autograder will tell you approximately how many tests you are passing. You will be able to see the results of these tests after the deadline."),(0,a.kt)("h2",{id:"coverage"},"Coverage"),(0,a.kt)("p",null,"From ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Fault_coverage"},"Wikipedia on Fault Coverage")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The term ",(0,a.kt)("strong",{parentName:"p"},"test coverage")," used in the context of programming/software engineering, refers to measuring how much a software program has been exercised by tests. Coverage is a means of determining the rigor with which the question underlying the test has been answered.")),(0,a.kt)("p",null,"For relevant homeworks, the auto-grader will calculate how many source lines of code (SLOC) ",(0,a.kt)("strong",{parentName:"p"},"your tests")," reach (more specifically which functions, statements, and branches are covered). There will be an test worth 12% of the overall grade that verifies you meet the requirements below:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"At least")," 50% branch coverage"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"At least")," 80% statement coverage"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"At least")," 100% function coverage")),(0,a.kt)("p",null,"Achieving these thresholds should not be too difficult. However, partial credit will be awarded in a linear fashion. These thresholds are subject to change as we test this new system."),(0,a.kt)("p",null,"To calculate your coverage see the ",(0,a.kt)("a",{parentName:"p",href:"/materials/tutorials/assignments/testing"},"homework testing page")," (",(0,a.kt)("inlineCode",{parentName:"p"},"npm run test:coverage"),"). Please use this as a general guide for where your tests stand; achieving these thresholds should not be too difficult. Focus on writing quality tests, and greater coverage will naturally follow."),(0,a.kt)("h2",{id:"design"},"Design"),(0,a.kt)("p",null,"The design of your tests should follow the patterns demonstrated in the first homework's provided tests. Your tests may be manually graded on your ability to follow these practices, and others, as listed below:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Using ",(0,a.kt)("inlineCode",{parentName:"li"},"describe")," blocks for group-related tests"),(0,a.kt)("li",{parentName:"ul"},"Using descriptive and insightful names for ",(0,a.kt)("inlineCode",{parentName:"li"},"describe"),",",(0,a.kt)("inlineCode",{parentName:"li"},"it"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"test")," blocks"),(0,a.kt)("li",{parentName:"ul"},'Providing context to assertions ("Expected X, but got Y"; unnecessary if using ',(0,a.kt)("inlineCode",{parentName:"li"},"expect"),"). This can be done by:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Providing a message to assert: ",(0,a.kt)("inlineCode",{parentName:"li"},'assert(negate(10) === -10, "Given 10, -10 should be returned");')),(0,a.kt)("li",{parentName:"ul"},"Writing some comments to describe what a tests is trying to accomplish"))),(0,a.kt)("li",{parentName:"ul"},"Writing reusable testing functions for cleaner code",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Tests should not contain significant amounts of code duplication"),(0,a.kt)("li",{parentName:"ul"},"If you need to make an array of random elements for numerous tests, then make a function called ",(0,a.kt)("inlineCode",{parentName:"li"},"constructRandomArray")))),(0,a.kt)("li",{parentName:"ul"},"Writing atomic tests",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Tests should not cause any side effects on shared data (each test should isolate the data it works with)"),(0,a.kt)("li",{parentName:"ul"},"Tests should not depend on each other (they do not execute in any specific order)"))),(0,a.kt)("li",{parentName:"ul"},"Writing tests that cover a variety of cases",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Weird (but valid) sized/shaped input, input close to a bound, input on a bound, input in the middle"),(0,a.kt)("li",{parentName:"ul"},"Writing some comments to describe what a tests is trying to accomplish")))))}p.isMDXComponent=!0}}]);