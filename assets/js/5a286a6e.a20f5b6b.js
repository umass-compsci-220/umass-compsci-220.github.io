"use strict";(self.webpackChunkumass_compsci_220_github_io=self.webpackChunkumass_compsci_220_github_io||[]).push([[354],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),c=a,h=p["".concat(s,".").concat(c)]||p[c]||m[c]||o;return n?i.createElement(h,r(r({ref:t},d),{},{components:n})):i.createElement(h,r({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3809:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var i=n(7462),a=(n(7294),n(3905));const o={sidebar_position:3},r="Lists and Closures",l={unversionedId:"homework/lists-and-closures",id:"homework/lists-and-closures",title:"Lists and Closures",description:"- Please download the project here.",source:"@site/materials/homework/lists-and-closures.md",sourceDirName:"homework",slug:"/homework/lists-and-closures",permalink:"/materials/homework/lists-and-closures",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Image Processing with HOF",permalink:"/materials/homework/image-processing-with-hof"},next:{title:"Discussion",permalink:"/materials/category/discussion"}},s={},u=[{value:"Overview",id:"overview",level:2},{value:"Learning Objectives",id:"learning-objectives",level:3},{value:"Student Expectations",id:"student-expectations",level:3},{value:"Testing",id:"testing",level:2},{value:"Programming Tasks",id:"programming-tasks",level:2},{value:"<code>keepTrendMiddles</code>",id:"keeptrendmiddles",level:3},{value:"<code>keepLocalMaxima</code>",id:"keeplocalmaxima",level:3},{value:"<code>keepLocalMinima</code>",id:"keeplocalminima",level:3},{value:"<code>keepLocalMinimaAndMaxima</code>",id:"keeplocalminimaandmaxima",level:3},{value:"Note: For the above three functions you must use <code>keepTrendMiddles</code>. Reduce code duplication among them.",id:"note-for-the-above-three-functions-you-must-use-keeptrendmiddles-reduce-code-duplication-among-them",level:4},{value:"<code>everyNList</code>",id:"everynlist",level:3},{value:"<code>everyNRev</code>",id:"everynrev",level:3},{value:"<code>everyNCond</code>",id:"everyncond",level:3},{value:"<code>nonNegativeProducts</code>",id:"nonnegativeproducts",level:3},{value:"<code>negativeProducts</code>",id:"negativeproducts",level:3},{value:"You should write a helper function to reduce the code duplication between the functions <code>nonNegativeProducts</code> and <code>negativeProducts</code>.",id:"you-should-write-a-helper-function-to-reduce-the-code-duplication-between-the-functions-nonnegativeproducts-and-negativeproducts",level:4},{value:"<code>squashList</code>",id:"squashlist",level:3},{value:"<code>composeList</code>",id:"composelist",level:3},{value:"<code>composeFunctions</code>",id:"composefunctions",level:3},{value:"Submitting",id:"submitting",level:2}],d={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"lists-and-closures"},"Lists and Closures"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Please download the project ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/umass-compsci-220/public-materials/raw/main/homework/03-lists-and-closures.zip"},"here"),"."),(0,a.kt)("li",{parentName:"ul"},"You may edit any file inside of ",(0,a.kt)("inlineCode",{parentName:"li"},"./src/"),", ",(0,a.kt)("strong",{parentName:"li"},"DO NOT make any edits to any file inside of ",(0,a.kt)("inlineCode",{parentName:"strong"},"./include/")))),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"In this assignment, you will work with lists and closures."),(0,a.kt)("h3",{id:"learning-objectives"},"Learning Objectives"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Practice writing and reasoning about lists"),(0,a.kt)("li",{parentName:"ul"},"Practice writing and reasoning about closures"),(0,a.kt)("li",{parentName:"ul"},"Practice writing and reasoning with recursion")),(0,a.kt)("h3",{id:"student-expectations"},"Student Expectations"),(0,a.kt)("p",null,"Students will be graded on their ability to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Correctly implement the functions ",(0,a.kt)("a",{parentName:"li",href:"#programming-tasks"},"specified below")),(0,a.kt)("li",{parentName:"ul"},"Resolve all linter warnings"),(0,a.kt)("li",{parentName:"ul"},"Follow the ",(0,a.kt)("a",{parentName:"li",href:"/materials/guidelines/syntax-and-code"},"coding"),", ",(0,a.kt)("a",{parentName:"li",href:"/materials/guidelines/bad-practices"},"bad practice")," and ",(0,a.kt)("a",{parentName:"li",href:"/materials/guidelines/testing"},"testing")," guidelines"),(0,a.kt)("li",{parentName:"ul"},"Design full-coverage ",(0,a.kt)("a",{parentName:"li",href:"#testing"},"unit-tests")," for the functions they implemented",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"See the ",(0,a.kt)("a",{parentName:"li",href:"/materials/guidelines/testing#coverage"},"testing guidelines")," on coverage for more details"),(0,a.kt)("li",{parentName:"ul"},"Make sure you are calling all functions, including functions returned by functions you write.")))),(0,a.kt)("h2",{id:"testing"},"Testing"),(0,a.kt)("p",null,"You must write tests for all your functions, following the principles used so far."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/materials/tutorials/assignments/testing"},"Project testing page")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/materials/guidelines/testing"},"Testing guidelines"))),(0,a.kt)("p",null,"It may not be obvious how to implement some of the functions. Try writing some tests first."),(0,a.kt)("h2",{id:"programming-tasks"},"Programming Tasks"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Note:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"In all problems involving lists you are ",(0,a.kt)("strong",{parentName:"li"},"not")," allowed to use arrays in your solution."),(0,a.kt)("li",{parentName:"ul"},"You must reduce code duplication whenever applicable."),(0,a.kt)("li",{parentName:"ul"},"For reference: Our sample solutions are less than 100 lines of code. Testing systematically can lead to half a dozen tests per function or more."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Important")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"You may ",(0,a.kt)("strong",{parentName:"li"},"not")," use ",(0,a.kt)("inlineCode",{parentName:"li"},"listToArray")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"arrayToList")," in ",(0,a.kt)("strong",{parentName:"li"},"any")," of your functions. Your score will be 0 for any function using these."),(0,a.kt)("li",{parentName:"ul"},"You are allowed to use them in your tests."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Some of the functions you are asked to write are related. Avoid code duplication by identifying the common elements."))),(0,a.kt)("h3",{id:"keeptrendmiddles"},(0,a.kt)("inlineCode",{parentName:"h3"},"keepTrendMiddles")),(0,a.kt)("p",null,"Takes in a list of numbers and a function ",(0,a.kt)("inlineCode",{parentName:"p"},"allSatisfy: (prev: number, curr: number, next: number) => boolean"),". Returns a list of numbers, keeping only those numbers ",(0,a.kt)("inlineCode",{parentName:"p"},"curr")," from the original list that have adjacent values ",(0,a.kt)("inlineCode",{parentName:"p"},"prev")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"next")," so that ",(0,a.kt)("inlineCode",{parentName:"p"},"allSatisfy")," returns true when applied to the numbers in the given order."),(0,a.kt)("h3",{id:"keeplocalmaxima"},(0,a.kt)("inlineCode",{parentName:"h3"},"keepLocalMaxima")),(0,a.kt)("p",null,"Take a list of numbers and returns a list of numbers where only the local maxima from the original list are included in the same order. A local maximum is a number that is preceded and followed in the list by smaller numbers."),(0,a.kt)("h3",{id:"keeplocalminima"},(0,a.kt)("inlineCode",{parentName:"h3"},"keepLocalMinima")),(0,a.kt)("p",null,"Take a list of numbers and returns a list of numbers where only the local minima from the original list are included in the same order. A local minimum is a number that is preceded and followed in the list by larger numbers."),(0,a.kt)("h3",{id:"keeplocalminimaandmaxima"},(0,a.kt)("inlineCode",{parentName:"h3"},"keepLocalMinimaAndMaxima")),(0,a.kt)("p",null,"Take a list of numbers and returns a list of numbers that includes only the local minima and maxima from the original list, in the same order."),(0,a.kt)("h4",{id:"note-for-the-above-three-functions-you-must-use-keeptrendmiddles-reduce-code-duplication-among-them"},"Note: For the above three functions you must use ",(0,a.kt)("inlineCode",{parentName:"h4"},"keepTrendMiddles"),". Reduce code duplication among them."),(0,a.kt)("h3",{id:"everynlist"},(0,a.kt)("inlineCode",{parentName:"h3"},"everyNList")),(0,a.kt)("p",null,"Write a function that takes a list of some type ",(0,a.kt)("inlineCode",{parentName:"p"},"T")," and a number ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," (assumed to be a positive natural). It should return a list containing every nth element from the input list (the nth, 2nth, 3nth, ...), in the original order."),(0,a.kt)("h3",{id:"everynrev"},(0,a.kt)("inlineCode",{parentName:"h3"},"everyNRev")),(0,a.kt)("p",null,"Write a function that takes a list of some type ",(0,a.kt)("inlineCode",{parentName:"p"},"T")," and a number ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," (assumed to be a positive natural). It should return a list containing every nth element from the input list, in reverse order (the nth element appears last, the 2nth before it, ...). Use ",(0,a.kt)("inlineCode",{parentName:"p"},"listReduce"),". Do not use ",(0,a.kt)("inlineCode",{parentName:"p"},"everyNList"),", though you may use this function to implement ",(0,a.kt)("inlineCode",{parentName:"p"},"everyNList"),"."),(0,a.kt)("h3",{id:"everyncond"},(0,a.kt)("inlineCode",{parentName:"h3"},"everyNCond")),(0,a.kt)("p",null,"Write a function that takes a list of some type ",(0,a.kt)("inlineCode",{parentName:"p"},"T"),", a number ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," (assumed to be a positive integer), and a function ",(0,a.kt)("inlineCode",{parentName:"p"},"cond: (e: T) => boolean"),". It should return a list containing every ",(0,a.kt)("inlineCode",{parentName:"p"},"n"),"th element of those that satisfy ",(0,a.kt)("inlineCode",{parentName:"p"},"cond"),", in the original order."),(0,a.kt)("h3",{id:"nonnegativeproducts"},(0,a.kt)("inlineCode",{parentName:"h3"},"nonNegativeProducts")),(0,a.kt)("p",null,"Write a function that takes as input a list of numbers and returns a list of numbers. For each nonnegative number ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," in the input list, the result list contains the product of the longest contiguous subsequence of nonnegative list elements ending at ",(0,a.kt)("inlineCode",{parentName:"p"},"n"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Example:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"input: 2 -> 3 -> -1 -> 0.5 -> 2 -> empty"),(0,a.kt)("li",{parentName:"ul"},"output: 2 -> 6 -> 0.5 -> 1 -> empty")))),(0,a.kt)("h3",{id:"negativeproducts"},(0,a.kt)("inlineCode",{parentName:"h3"},"negativeProducts")),(0,a.kt)("p",null,"Write a function that takes as input a list of numbers and returns a list of numbers. For each negative number ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," in the input list, the result list contains the product of the longest contiguous subsequence of negative list elements ending at ",(0,a.kt)("inlineCode",{parentName:"p"},"n"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Example:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"input: -3 -> -6 -> 2-> -2-> -1 -> -2 -> empty"),(0,a.kt)("li",{parentName:"ul"},"output: -3 -> 18 -> -2 -> 2 -> -4 -> empty")))),(0,a.kt)("h4",{id:"you-should-write-a-helper-function-to-reduce-the-code-duplication-between-the-functions-nonnegativeproducts-and-negativeproducts"},"You should write a helper function to reduce the code duplication between the functions ",(0,a.kt)("inlineCode",{parentName:"h4"},"nonNegativeProducts")," and ",(0,a.kt)("inlineCode",{parentName:"h4"},"negativeProducts"),"."),(0,a.kt)("h3",{id:"squashlist"},(0,a.kt)("inlineCode",{parentName:"h3"},"squashList")),(0,a.kt)("p",null,"Write a function that takes as input a list where each element is either a ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," or a ",(0,a.kt)("inlineCode",{parentName:"p"},"List<number>"),". Return a list of numbers where each element that is a list is replaced by the sum of its elements."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Hint: The ",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof"},"typeof")," operator may be useful.")),(0,a.kt)("h3",{id:"composelist"},(0,a.kt)("inlineCode",{parentName:"h3"},"composeList")),(0,a.kt)("p",null,"Write a function that takes as input a list of functions, potentially empty. Each function has the signature ",(0,a.kt)("inlineCode",{parentName:"p"},"T => T"),". Return a function with the signature ",(0,a.kt)("inlineCode",{parentName:"p"},"T => T")," that when called on a value of type ",(0,a.kt)("inlineCode",{parentName:"p"},"T")," will return the value obtained by successively applying all functions in the list, in order. Do not use loops."),(0,a.kt)("h3",{id:"composefunctions"},(0,a.kt)("inlineCode",{parentName:"h3"},"composeFunctions")),(0,a.kt)("p",null,"Write a function that takes as input an array of functions of type ",(0,a.kt)("inlineCode",{parentName:"p"},"(x: T) => T"),", potentially empty, and returns a closure that takes a value ",(0,a.kt)("inlineCode",{parentName:"p"},"v: T")," and returns an array of the values obtained by starting with ",(0,a.kt)("inlineCode",{parentName:"p"},"v")," and successively applying zero, one, two, ..., all functions of the array. That is, the array returned by the closure is ",(0,a.kt)("inlineCode",{parentName:"p"},"[v, f0(v), f1(f0(v)), ...]")," if the array of functions is ",(0,a.kt)("inlineCode",{parentName:"p"},"[f0, f1, ...]"),"."),(0,a.kt)("h2",{id:"submitting"},"Submitting"),(0,a.kt)("p",null,"Use the following command to build a ",(0,a.kt)("inlineCode",{parentName:"p"},".zip")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm run build:submission\n")),(0,a.kt)("p",null,"This command will automatically format your submissions source code so it is easier to read then bundle your ",(0,a.kt)("inlineCode",{parentName:"p"},"./src/*")," files into a ",(0,a.kt)("inlineCode",{parentName:"p"},".zip"),". Please upload this file to the respective assignment on Gradescope."))}m.isMDXComponent=!0}}]);