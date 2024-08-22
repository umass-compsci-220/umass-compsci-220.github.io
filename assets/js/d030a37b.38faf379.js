"use strict";(self.webpackChunkumass_compsci_220_github_io=self.webpackChunkumass_compsci_220_github_io||[]).push([[460],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),c=r,b=d["".concat(s,".").concat(c)]||d[c]||m[c]||i;return n?a.createElement(b,o(o({ref:t},u),{},{components:n})):a.createElement(b,o({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6960:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1},o="Extra Credit - Observables",l={unversionedId:"practice-and-extra-credit/observables",id:"practice-and-extra-credit/observables",title:"Extra Credit - Observables",description:"Please download the homework here.",source:"@site/materials/practice-and-extra-credit/observables.md",sourceDirName:"practice-and-extra-credit",slug:"/practice-and-extra-credit/observables",permalink:"/materials/practice-and-extra-credit/observables",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Practice and Extra Credit",permalink:"/materials/category/practice-and-extra-credit"},next:{title:"Resources",permalink:"/materials/category/resources"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Learning Objectives",id:"learning-objectives",level:3},{value:"Student Expectations",id:"student-expectations",level:3},{value:"Programming Tasks",id:"programming-tasks",level:2},{value:"Optional Programming Tasks",id:"optional-programming-tasks",level:2}],u={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"extra-credit---observables"},"Extra Credit - Observables"),(0,r.kt)("p",null,"Please download the homework ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/umass-compsci-220/public-materials/raw/main/homework/ec-observables.zip"},"here"),"."),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"In this assignment, you will work with observables."),(0,r.kt)("h3",{id:"learning-objectives"},"Learning Objectives"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Practice writing and reasoning about observables and observers")),(0,r.kt)("h3",{id:"student-expectations"},"Student Expectations"),(0,r.kt)("p",null,"Students will be graded on their ability to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Correctly implement the functions ",(0,r.kt)("a",{parentName:"li",href:"#programming-tasks"},"specified below")),(0,r.kt)("li",{parentName:"ul"},"Follow the ",(0,r.kt)("a",{parentName:"li",href:"/materials/guidelines/syntax-and-code"},"coding"),", ",(0,r.kt)("a",{parentName:"li",href:"/materials/guidelines/bad-practices"},"bad practice"),", and ",(0,r.kt)("a",{parentName:"li",href:"/materials/tutorials/assignments/testing"},"testing")," guidelines"),(0,r.kt)("li",{parentName:"ul"},"Design full-coverage ",(0,r.kt)("a",{parentName:"li",href:"/materials/guidelines/testing"},"unit tests")," for the functions they implemented",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Note that you can delete the uncredited functions should you choose not to implement them to avoid writing tests for them.")))),(0,r.kt)("h2",{id:"programming-tasks"},"Programming Tasks"),(0,r.kt)("p",null,"For all functions below, use the provided Observable class."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Write a function ",(0,r.kt)("inlineCode",{parentName:"p"},"classifyObservables")," that takes in an array ",(0,r.kt)("inlineCode",{parentName:"p"},"obsArr")," of Observables where each Observable updates with a type ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),". Return an object with three observables, one for each named type. Each of the three observables updates anytime an Observable of that type in the input array updates.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Write a function ",(0,r.kt)("inlineCode",{parentName:"p"},"obsStrCond")," that takes a nonempty array ",(0,r.kt)("inlineCode",{parentName:"p"},"funcArr")," of functions with type ",(0,r.kt)("inlineCode",{parentName:"p"},"string => string"),", a function f with type ",(0,r.kt)("inlineCode",{parentName:"p"},"string => boolean"),", and an Observable ",(0,r.kt)("inlineCode",{parentName:"p"},"o")," with type ",(0,r.kt)("inlineCode",{parentName:"p"},"Observable<string>"),". It returns an ",(0,r.kt)("inlineCode",{parentName:"p"},"Observable<string>")," that updates when ",(0,r.kt)("inlineCode",{parentName:"p"},"o")," updates, in the following way. If ",(0,r.kt)("inlineCode",{parentName:"p"},"f")," returns true for the string obtained by applying the composition of the functions in ",(0,r.kt)("inlineCode",{parentName:"p"},"funcArr")," (with the function at index 0 being applied first) to the update value of ",(0,r.kt)("inlineCode",{parentName:"p"},"o"),", then the returned observable should update with that string. If ",(0,r.kt)("inlineCode",{parentName:"p"},"f")," returns false, update the returned observable with the unchanged update value of ",(0,r.kt)("inlineCode",{parentName:"p"},"o"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Write a function ",(0,r.kt)("inlineCode",{parentName:"p"},"statefulObserver")," that takes an ",(0,r.kt)("inlineCode",{parentName:"p"},"Observable<number>")," ",(0,r.kt)("inlineCode",{parentName:"p"},"o")," as input and returns a new ",(0,r.kt)("inlineCode",{parentName:"p"},"Observable<number>")," which only updates if the current update value from ",(0,r.kt)("inlineCode",{parentName:"p"},"o")," is divisible by the previous update value from ",(0,r.kt)("inlineCode",{parentName:"p"},"o"),"."))),(0,r.kt)("h2",{id:"optional-programming-tasks"},"Optional Programming Tasks"),(0,r.kt)("p",null,"The following questions were taken directly from past exams and do not count for credit. They are provided for additional practice only. You can see the autograder tests for these on gradescope, but they are uncredited. Solutions are on Canvas under Exams and Solutions."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"[FALL 2022 MIDTERM 2]"," Write a function ",(0,r.kt)("inlineCode",{parentName:"p"},"mergeMax")," that takes two Observables ",(0,r.kt)("inlineCode",{parentName:"p"},"o1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"o2")," with type ",(0,r.kt)("inlineCode",{parentName:"p"},"Observable<number>"),", subscribes functions to each, and returns a new Observable which updates its subscribers whenever it receives a value which is no smaller than any value received so far from o1 or o2. Subscribers should be sent objects of the type { obs: number, v: number }, where v is the value received, and obs is either 1 or 2, indicating the source of the value.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"[SPRING 2022 FINAL EXAM]"," Write a function ",(0,r.kt)("inlineCode",{parentName:"p"},"merge(o1: Observable<string>, o2: Observable<string>): Observable<string>")," returning a new ",(0,r.kt)("inlineCode",{parentName:"p"},"Observable<string>")," which, whenever either o1 or o2 are updated, will be updated with the same value.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"[SPRING 2022 MIDTERM 2]"," Consider the Observable class from lecture, receiving updates with positive values. Implement a method ",(0,r.kt)("inlineCode",{parentName:"p"},"greaterAvg")," returning a new ",(0,r.kt)("inlineCode",{parentName:"p"},"Observable<number>")," that is updated with every number that is at least 50% larger than the average of the previous two numbers. Hint: use ",(0,r.kt)("inlineCode",{parentName:"p"},"this"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"[FALL 2021 FINAL EXAM]"," Consider the Observable class provided in observable.ts, receiving updates with numeric values. In observables.ts implement a method ",(0,r.kt)("inlineCode",{parentName:"p"},"signChange()")," that returns a new ",(0,r.kt)("inlineCode",{parentName:"p"},"Observable<number>")," which will be updated with every nonzero value v that is not preceded by a nonzero value of the same sign. Hint: use ",(0,r.kt)("inlineCode",{parentName:"p"},"this"),"."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Write a function ",(0,r.kt)("inlineCode",{parentName:"li"},"usingSignChange")," that takes an array of numbers ",(0,r.kt)("inlineCode",{parentName:"li"},"numArr")," and an observer function ",(0,r.kt)("inlineCode",{parentName:"li"},"f"),". You should subscribe ",(0,r.kt)("inlineCode",{parentName:"li"},"f")," to the observer returned by the ",(0,r.kt)("inlineCode",{parentName:"li"},"signChange")," method and then update the observer returned by ",(0,r.kt)("inlineCode",{parentName:"li"},"SignChangeObservable")," with every number in ",(0,r.kt)("inlineCode",{parentName:"li"},"numArr")," starting at index 0. The function should return nothing.")))))}m.isMDXComponent=!0}}]);