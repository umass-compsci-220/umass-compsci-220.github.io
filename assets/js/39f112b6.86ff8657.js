"use strict";(self.webpackChunkumass_compsci_220_github_io=self.webpackChunkumass_compsci_220_github_io||[]).push([[511],{3905:(e,a,t)=>{t.d(a,{Zo:()=>l,kt:()=>k});var n=t(7294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function m(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var o=n.createContext({}),p=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},l=function(e){var a=p(e.components);return n.createElement(o.Provider,{value:a},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),c=p(t),u=s,k=c["".concat(o,".").concat(u)]||c[u]||h[u]||r;return t?n.createElement(k,i(i({ref:a},l),{},{components:t})):n.createElement(k,i({ref:a},l))}));function k(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=t.length,i=new Array(r);i[0]=u;var m={};for(var o in a)hasOwnProperty.call(a,o)&&(m[o]=a[o]);m.originalType=e,m[c]="string"==typeof e?e:s,i[1]=m;for(var p=2;p<r;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4673:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>m,toc:()=>p});var n=t(7462),s=(t(7294),t(3905));const r={sidebar_position:3},i="More Image Processing with HOF",m={unversionedId:"homework/more-image-processing-with-hof",id:"homework/more-image-processing-with-hof",title:"More Image Processing with HOF",description:"- Please download the project here",source:"@site/materials/homework/more-image-processing-with-hof.md",sourceDirName:"homework",slug:"/homework/more-image-processing-with-hof",permalink:"/materials/homework/more-image-processing-with-hof",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Image Processing with HOF",permalink:"/materials/homework/image-processing-with-hof"},next:{title:"Oracles",permalink:"/materials/homework/oracles"}},o={},p=[{value:"Overview",id:"overview",level:2},{value:"Learning Objectives",id:"learning-objectives",level:3},{value:"Student Expectations",id:"student-expectations",level:3},{value:"Testing",id:"testing",level:2},{value:"Changing How We Compare Colors",id:"changing-how-we-compare-colors",level:3},{value:"Getting Started",id:"getting-started",level:2},{value:"Programming Tasks",id:"programming-tasks",level:2},{value:"<code>lineBlur3p</code>",id:"lineblur3p",level:3},{value:"<code>lineBlur5p</code>",id:"lineblur5p",level:3},{value:"<code>blurLines</code>",id:"blurlines",level:3},{value:"<code>pixelBlur</code>",id:"pixelblur",level:3},{value:"<code>imageBlur</code>",id:"imageblur",level:3},{value:"<code>composeFunctions</code>",id:"composefunctions",level:3},{value:"<code>combineThree</code>",id:"combinethree",level:3}],l={toc:p},c="wrapper";function h(e){let{components:a,...t}=e;return(0,s.kt)(c,(0,n.Z)({},l,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"more-image-processing-with-hof"},"More Image Processing with HOF"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Please download the project ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/umass-compsci-220/public-materials/raw/main/homework/03-more-image-processing-with-hof.zip"},"here")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"This homework is a step up from HW1 and HW2, do not start on the final day")),(0,s.kt)("li",{parentName:"ul"},"You may edit any file inside of ",(0,s.kt)("inlineCode",{parentName:"li"},"./src/"),", ",(0,s.kt)("strong",{parentName:"li"},"DO NOT make any edits to any file inside of ",(0,s.kt)("inlineCode",{parentName:"strong"},"./include/")))),(0,s.kt)("h2",{id:"overview"},"Overview"),(0,s.kt)("p",null,"Following up on ",(0,s.kt)("a",{parentName:"p",href:"/materials/homework/image-processing"},"Homework 1")," and ",(0,s.kt)("a",{parentName:"p",href:"/materials/homework/image-processing-with-hof"},"Homework 2"),", you will perform ",(0,s.kt)("em",{parentName:"p"},"even")," more image processing tasks with higher-order functions. These functions will have a set of similar conditions and operations, which might tempt you to repeat code. However, one of the requirements of this assignment is that your implementations are clean and do not duplicate code."),(0,s.kt)("h3",{id:"learning-objectives"},"Learning Objectives"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Master using and writing higher-order functions"),(0,s.kt)("li",{parentName:"ul"},"Practice avoiding code duplication"),(0,s.kt)("li",{parentName:"ul"},"Practice using and writing closures")),(0,s.kt)("h3",{id:"student-expectations"},"Student Expectations"),(0,s.kt)("p",null,"Students will be graded on their ability to:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Correctly implement the functions ",(0,s.kt)("a",{parentName:"li",href:"#programming-tasks"},"specified below"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Using private auto-grader tests"))),(0,s.kt)("li",{parentName:"ul"},"Resolve all linter warnings",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"There will be credited grading for this (2.5%)")),(0,s.kt)("li",{parentName:"ul"},"See the section on ",(0,s.kt)("a",{parentName:"li",href:"/materials/tutorials/assignments/linting-and-formatting"},"linting and formatting assignments")," for more details"))),(0,s.kt)("li",{parentName:"ul"},"Follow the ",(0,s.kt)("a",{parentName:"li",href:"/materials/homework/image-processing"},"coding"),", ",(0,s.kt)("a",{parentName:"li",href:"/materials/guidelines/bad-practices"},"bad practice")," and ",(0,s.kt)("a",{parentName:"li",href:"/materials/guidelines/testing"},"testing")," guidelines",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"There may be manual grading regarding this guidelines from this point forward")),(0,s.kt)("li",{parentName:"ul"},"Manual grading will be out of 10-15 points, resulting in a final HW score out of 110/115"),(0,s.kt)("li",{parentName:"ul"},"This assignment puts extra emphasis on ",(0,s.kt)("strong",{parentName:"li"},"avoiding ",(0,s.kt)("a",{parentName:"strong",href:"/materials/homework/image-processing#code-duplication"},"code duplication"))),(0,s.kt)("li",{parentName:"ul"},"We are not out to get you, these guidelines are here to help you avoid problematic code"),(0,s.kt)("li",{parentName:"ul"},"As long as you are making an attempt to follow the guidelines, you will be fine"))),(0,s.kt)("li",{parentName:"ul"},"Design full-coverage ",(0,s.kt)("a",{parentName:"li",href:"#testing"},"unit-tests")," for the functions they implemented",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"There will be credited grading for this (12.5%)")),(0,s.kt)("li",{parentName:"ul"},"See the ",(0,s.kt)("a",{parentName:"li",href:"/materials/guidelines/testing#coverage"},"testing guidelines")," on coverage for mor details")))),(0,s.kt)("h2",{id:"testing"},"Testing"),(0,s.kt)("p",null,"You must write tests for all your functions, following the principles used so far."),(0,s.kt)("h3",{id:"changing-how-we-compare-colors"},"Changing How We Compare Colors"),(0,s.kt)("p",null,"Arithmetic with the ",(0,s.kt)("inlineCode",{parentName:"p"},"number")," type produces some non-obvious results:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"console.log(0.1 + 0.2); // .30000000000000004 \ud83e\udd28\n")),(0,s.kt)("p",null,"This is a common issue in programming languages that use ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Floating-point_arithmetic"},"floating point numbers"),". ",(0,s.kt)("a",{parentName:"p",href:"https://floating-point-gui.de/"},"This website")," gives a great overview of how floating point numbers work and why this behavior exists."),(0,s.kt)("p",null,"Throughout this homework, you will be doing arithmetic with fractional values (finding the (weighted) mean). Depending on the order of the operations, you may get a different result:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-t"},"console.log((254 + 254 + 254) / 3); // 254\nconsole.log(((1 / 3) * 254) + ((1 / 3) * 254) + ((1 / 3) * 254)); // 253.99999999999997\n")),(0,s.kt)("p",null,'Hopefully it is clear to see that this can become a problem because we truncate any decimal remainder in our calculations. To reconcile this issue we need to change how we define "equality" between two ',(0,s.kt)("inlineCode",{parentName:"p"},"Color")," values. Instead of strictly checking that each channel is exactly what it should be:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"const actual = img.getPixel(0, 0);\nassert(actual[0] === 0);\nassert(actual[1] === 0);\nassert(actual[2] === 0);\n\n// or\n\nexpect(img.getPixel(0, 0)).toEqual([0, 0, 0]);\n")),(0,s.kt)("p",null,"We should accept a precision of error (in this case default to less than or equal to 1) between two values:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"function expectColorToBeCloseTo(actual: Color, expected: Color, error = 1) {\n  [0, 1, 2].forEach(i => expect(Math.abs(actual[i] - expected[i])).toBeLessThanOrEqual(error));\n}\n\nexpectColorToBeCloseTo([0, 0, 0], [1, 1, 1]); // Will not error\nexpectColorToBeCloseTo([0, 0, 0], [0, 0, 0]); // Will not error\nexpectColorToBeCloseTo([0, 0, 0], [0, 0, 2]); // Will error\n")),(0,s.kt)("p",null,"You may need to use the function above when writing your own tests."),(0,s.kt)("h2",{id:"getting-started"},"Getting Started"),(0,s.kt)("p",null,"All interfaces are the same as the previous assignments. Please review the ",(0,s.kt)("a",{parentName:"p",href:"/materials/homework/image-processing#getting-started"},'"Getting Started" section')," from Homework 1 if necessary."),(0,s.kt)("h2",{id:"programming-tasks"},"Programming Tasks"),(0,s.kt)("p",null,"If you are having trouble reading the specification, please go to office hours or ask a question on Campuswire."),(0,s.kt)("p",null,"This assignment puts extra emphasis on avoiding code duplication. Many of the following functions have similar operations and conditions. In ",(0,s.kt)("inlineCode",{parentName:"p"},"lineBlur3p"),", you are tasked with blurring a line by computing the weighted average between a pixel and its horizontal neighbors which are at most 1 away. In ",(0,s.kt)("inlineCode",{parentName:"p"},"lineBlur5p"),", you use horizontal neighbors which are up to 2 away. You should try writing helper functions to use across these two. Imagine if you were tasked with writing ",(0,s.kt)("inlineCode",{parentName:"p"},"lineBlur25p")," (you are not, just consider the scenario), which used neighbors up to 12 away. After properly abstracting ",(0,s.kt)("inlineCode",{parentName:"p"},"lineBlur3p")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"lineBlur5p"),", creating ",(0,s.kt)("inlineCode",{parentName:"p"},"lineBlur25p")," should not require much effort."),(0,s.kt)("p",null,"Similar story with ",(0,s.kt)("inlineCode",{parentName:"p"},"pixelBlur"),", it uses pixels whose coordinates differ by at most 1 in absolute value. Imagine if you were to write a function that used pixels whose coordinates differ by at most 50 in absolute value. Would your code be able to support that without much effort?"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Submissions that do not attempt to avoid code duplication may receive manual grading point deductions (~12%).")," If you have a series of if-statements with similar conditions or similar bodies, or separate functions with near-identical bodies, consider an alternative approach. If-statements are allowed, but do not abuse them."),(0,s.kt)("p",null,'Try to avoid repetition from the get-go, don\'t delay it to "after my code works". ',(0,s.kt)("strong",{parentName:"p"},"Read the descriptions of all the tasks before you start coding.")),(0,s.kt)("h3",{id:"lineblur3p"},(0,s.kt)("inlineCode",{parentName:"h3"},"lineBlur3p")),(0,s.kt)("p",null,"Write a function called ",(0,s.kt)("inlineCode",{parentName:"p"},"lineBlur3p"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"export function lineBlur3p(img: Image, lineNo: number): void {\n  // TODO\n}\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"The function should modify the image"),", only for any pixels having y-coordinate equal to ",(0,s.kt)("inlineCode",{parentName:"p"},"lineNo"),". The new value of each color channel is computed as a weighted sum of the original color value in the pixel and in its neighbor(s) on that line. The weight for any neighbor is ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"/"),(0,s.kt)("mn",{parentName:"mrow"},"3")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1/3")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1/3"))))),", and the weight for the original pixel is ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow"},"\u2212"),(0,s.kt)("mtext",{parentName:"mrow"},"sum\xa0of\xa0neighbor\xa0weights"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"(1 - \\text{sum of neighbor weights})")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord text"},(0,s.kt)("span",{parentName:"span",className:"mord"},"sum\xa0of\xa0neighbor\xa0weights")),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))),". Truncate the final sum to a whole number to get the final color channel. ",(0,s.kt)("strong",{parentName:"p"},"Avoid ",(0,s.kt)("a",{parentName:"strong",href:"/materials/homework/image-processing#code-duplication"},"code duplication"),".")),(0,s.kt)("p",null,"See ",(0,s.kt)("a",{parentName:"p",href:"https://simple.wikipedia.org/wiki/Weighted_average"},'"Weighted average"')," on Wikipedia for more details."),(0,s.kt)("h3",{id:"lineblur5p"},(0,s.kt)("inlineCode",{parentName:"h3"},"lineBlur5p")),(0,s.kt)("p",null,"Write a function called ",(0,s.kt)("inlineCode",{parentName:"p"},"lineBlur5p"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"export function lineBlur5p(img: Image, lineNo: number): void {\n  // TODO\n}\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"The function should modify the image"),", only for any pixels having y-coordinate equal to ",(0,s.kt)("inlineCode",{parentName:"p"},"lineNo"),". The new value of each color channel is computed as a weighted sum of the original color value in the pixel and in all other pixels on that line which are at distance up to 2. The weight for any such pixel is ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"/"),(0,s.kt)("mn",{parentName:"mrow"},"5")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1/5")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1/5"))))),", and the weight for the original pixel is ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow"},"\u2212"),(0,s.kt)("mtext",{parentName:"mrow"},"sum\xa0of\xa0other\xa0pixel\xa0weights"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"(1 - \\text{sum of other pixel weights})")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord text"},(0,s.kt)("span",{parentName:"span",className:"mord"},"sum\xa0of\xa0other\xa0pixel\xa0weights")),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))),". ",(0,s.kt)("strong",{parentName:"p"},"Avoid ",(0,s.kt)("a",{parentName:"strong",href:"/materials/homework/image-processing#code-duplication"},"code duplication")," (think about the commonalities between this and ",(0,s.kt)("inlineCode",{parentName:"strong"},"lineBlur3p"),"). Use the same truncating process as ",(0,s.kt)("inlineCode",{parentName:"strong"},"lineBlur3p"),".")),(0,s.kt)("h3",{id:"blurlines"},(0,s.kt)("inlineCode",{parentName:"h3"},"blurLines")),(0,s.kt)("p",null,"Write a function called ",(0,s.kt)("inlineCode",{parentName:"p"},"blurLines"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"export function blurLines(img: Image, blurLine: (img: Image, lineNo: number) => void): Image {\n  // TODO\n}\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"It returns a new image.")," In this image, each line has been blurred using the supplied ",(0,s.kt)("inlineCode",{parentName:"p"},"blurLine")," function."),(0,s.kt)("h3",{id:"pixelblur"},(0,s.kt)("inlineCode",{parentName:"h3"},"pixelBlur")),(0,s.kt)("p",null,"Write a function called ",(0,s.kt)("inlineCode",{parentName:"p"},"pixelBlur"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"export function pixelBlur(img: Image, x: number, y: number): Color {\n  // TODO\n}\n")),(0,s.kt)("p",null,"The result is the blurred value of the pixel at coordinates ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"x"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mi",{parentName:"mrow"},"y"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"(x, y)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))),", assumed to be valid for the image. Each color channel of the resulting pixel should be the truncated mean of the same channels of the ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"x"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mi",{parentName:"mrow"},"y"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"(x, y)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))," pixel itself and its neighbors in ",(0,s.kt)("inlineCode",{parentName:"p"},"img"),". Two distinct pixels are neighbors if both their x-coordinates and y-coordinates differ by at most 1 in absolute value. ",(0,s.kt)("strong",{parentName:"p"},"Avoid ",(0,s.kt)("a",{parentName:"strong",href:"/materials/homework/image-processing#code-duplication"},"code duplication"),".")),(0,s.kt)("h3",{id:"imageblur"},(0,s.kt)("inlineCode",{parentName:"h3"},"imageBlur")),(0,s.kt)("p",null,"Write a function called ",(0,s.kt)("inlineCode",{parentName:"p"},"imageBlur"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"export function imageBlur(img: Image): Image {\n  // TODO\n}\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"The result is a new image")," that is the blurred version of the argument, with pixels obtained by applying ",(0,s.kt)("inlineCode",{parentName:"p"},"pixelBlur")," to each pixel of the input image. You may not use loops within this function. Instead, use ",(0,s.kt)("inlineCode",{parentName:"p"},"imageMapCoord")," from Homework 2."),(0,s.kt)("h3",{id:"composefunctions"},(0,s.kt)("inlineCode",{parentName:"h3"},"composeFunctions")),(0,s.kt)("p",null,"Write a function ",(0,s.kt)("inlineCode",{parentName:"p"},"composeFunctions"),"::"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"export function composeFunctions(fa: ((p: Color) => Color)[]): (x: Color) => Color {\n  // TODO\n}\n")),(0,s.kt)("p",null,"It returns a single function (from ",(0,s.kt)("inlineCode",{parentName:"p"},"Color")," to ",(0,s.kt)("inlineCode",{parentName:"p"},"Color"),") that composes all functions in the argument array, with the function at index 0 applied to the color first. Use ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce"},(0,s.kt)("inlineCode",{parentName:"a"},"Array.prototype.reduce"))," to implement it."),(0,s.kt)("p",null,"A function composition, ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"h"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"x"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mi",{parentName:"mrow"},"g"),(0,s.kt)("mo",{parentName:"mrow"},"\u2218"),(0,s.kt)("mi",{parentName:"mrow"},"f")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"h(x) = g \\circ f")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"h"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6389em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2218"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"))))),", is defined as ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"h"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"x"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mi",{parentName:"mrow"},"g"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"f"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"x"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"h(x) = g(f(x))")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"h"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"))"))))),". You are tasked with composing up to ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"n")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," functions."),(0,s.kt)("h3",{id:"combinethree"},(0,s.kt)("inlineCode",{parentName:"h3"},"combineThree")),(0,s.kt)("p",null,"Write a function called ",(0,s.kt)("inlineCode",{parentName:"p"},"combineThree"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"export function combineThree(img: Image): Image {\n  // TODO\n}\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"The result is a new image")," where each pixel's color is transformed successively as done by ",(0,s.kt)("inlineCode",{parentName:"p"},"removeRed"),", and then twice by ",(0,s.kt)("inlineCode",{parentName:"p"},"flipColors"),", in this order. Use ",(0,s.kt)("inlineCode",{parentName:"p"},"imageMap")," (of HW1) and ",(0,s.kt)("inlineCode",{parentName:"p"},"composeFunctions"),"."))}h.isMDXComponent=!0}}]);