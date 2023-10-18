"use strict";(self.webpackChunkumass_compsci_220_github_io=self.webpackChunkumass_compsci_220_github_io||[]).push([[402],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),g=s,m=p["".concat(l,".").concat(g)]||p[g]||d[g]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,i=new Array(a);i[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:s,i[1]=o;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1162:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(7462),s=(n(7294),n(3905));const a={sidebar_position:3},i="Testing",o={unversionedId:"tutorials/assignments/testing",id:"tutorials/assignments/testing",title:"Testing",description:"How to run unit tests using the jest testing suite.",source:"@site/materials/tutorials/assignments/testing.md",sourceDirName:"tutorials/assignments",slug:"/tutorials/assignments/testing",permalink:"/materials/tutorials/assignments/testing",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Running and Debugging",permalink:"/materials/tutorials/assignments/running-and-debugging"},next:{title:"Editing",permalink:"/materials/tutorials/assignments/linting-and-formatting"}},l={},c=[{value:"Writing Tests",id:"writing-tests",level:2},{value:"Assertions",id:"assertions",level:3},{value:"jest",id:"jest",level:3},{value:"(Optional) Advanced Testing Interface: Using <code>expect</code> and Beyond",id:"optional-advanced-testing-interface-using-expect-and-beyond",level:4},{value:"Running and Debugging Tests",id:"running-and-debugging-tests",level:2},{value:"Coverage",id:"coverage",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,s.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"testing"},"Testing"),(0,s.kt)("p",null,"How to run unit tests using the jest testing suite."),(0,s.kt)("h2",{id:"writing-tests"},"Writing Tests"),(0,s.kt)("h3",{id:"assertions"},"Assertions"),(0,s.kt)("p",null,'Anywhere in your code, you can write statements called "assertions" using the ',(0,s.kt)("inlineCode",{parentName:"p"},"assert")," function. You can import the ",(0,s.kt)("inlineCode",{parentName:"p"},"assert")," statement from the Node.js standard library like so:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'import assert from "assert";\n')),(0,s.kt)("p",null,"An assertion is a logical statement that you are verifying (asserting) to be true at execution, if that statement is false, assert will throw an error with an optional message. If the statement is true, then ",(0,s.kt)("inlineCode",{parentName:"p"},"assert")," will do nothing. This is useful for writing preconditions for various functions:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'function sqrt(x: number): number {\n  assert(x >= 0, "sqrt is only defined for positive numbers");\n\n  // code to calculate the square root\n}\n')),(0,s.kt)("p",null,"Inside your tests, you can use assertions to verify function results (actual results) to results you expect (expected results)."),(0,s.kt)("h3",{id:"jest"},"jest"),(0,s.kt)("p",null,"To test your homework code, we will be using the ",(0,s.kt)("a",{parentName:"p",href:"https://jestjs.io/"},"jest testing framework"),", which will provide an interface to describe tests, manage their execution, and give a detailed report when they fail. Jest has a series of global functions that you will use to mock up your tests. The two functions we care about are ",(0,s.kt)("inlineCode",{parentName:"p"},"describe")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"test")," (alternatively called ",(0,s.kt)("inlineCode",{parentName:"p"},"it"),")."),(0,s.kt)("p",null,"We use ",(0,s.kt)("inlineCode",{parentName:"p"},"describe(name: string, fn: () => void)")," to create a block that groups together several related tests. We use ",(0,s.kt)("inlineCode",{parentName:"p"},"it(name: string, fn: () => void)")," (same as ",(0,s.kt)("inlineCode",{parentName:"p"},"test"),") to wrap specific assertions about the results of the item we are testing."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'// Describe a series of tests related to the "sqrt" function\ndescribe("sqrt", () => {\n  it("correctly calculates root 0", () => {\n    // it (sqrt) correctly calculates root 0\n    // A logical expression that will do nothing (pass) if we get our expected result,\n    // and fail if we do not get our expected result.\n    // The provided message will print out if we fail.\n    const result = sqrt(0);\n    assert(result === 0, `Expected sqrt(0) to be 0, got: ${result}`);\n  });\n\n  it("correctly calculates root 1", () => {\n    const result = sqrt(1);\n    assert(result === 1, `Expected sqrt(1) to be 1, got: ${result}`);\n  });\n});\n')),(0,s.kt)("h4",{id:"optional-advanced-testing-interface-using-expect-and-beyond"},"(Optional) Advanced Testing Interface: Using ",(0,s.kt)("inlineCode",{parentName:"h4"},"expect")," and Beyond"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Warning: Please do not use the advanced testing interface if you are uncomfortable. Prioritize writing tests that are correct.")),(0,s.kt)("p",null,"Jest also includes ",(0,s.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/expect"},"a function called ",(0,s.kt)("inlineCode",{parentName:"a"},"expect")),". Which is super powerful for describing more complicated scenarios. Such as checking if two numbers are close to each other, rather than strictly equal (",(0,s.kt)("inlineCode",{parentName:"p"},"==="),"):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},'it("correctly calculates root 2", () => {\n  // asserts that sqrt is less than 0.005 from 1.4142\n  expect(sqrt(2)).toBeCloseTo(1.4142);\n\n  // as opposed to\n\n  assert(Math.abs(sqrt(2) - 1.4142) < 0.005);\n});\n')),(0,s.kt)("p",null,"You are welcome to use either interface for writing your tests (we recommenced assertions). Here are jest's ",(0,s.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/getting-started"},"documentation")," and ",(0,s.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/api"},"API")," if you are interested."),(0,s.kt)("h2",{id:"running-and-debugging-tests"},"Running and Debugging Tests"),(0,s.kt)("p",null,"You can run the provided test script by opening a VSCode terminal (",(0,s.kt)("inlineCode",{parentName:"p"},"Terminal -> New Terminal"),") and running the ",(0,s.kt)("inlineCode",{parentName:"p"},"npm run test")," command. Use ",(0,s.kt)("inlineCode",{parentName:"p"},"npm run test:coverage")," to get coverage results."),(0,s.kt)("p",{align:"center"},(0,s.kt)("img",{src:"/img/jest-output.png"})),(0,s.kt)("p",null,"Above, is an example output of the ",(0,s.kt)("inlineCode",{parentName:"p"},"npm run test:coverage")," command. There was only one test written (removeRed removes red), so the homework coverage requirements were not met."),(0,s.kt)("h2",{id:"coverage"},"Coverage"),(0,s.kt)("p",null,"See ",(0,s.kt)("a",{parentName:"p",href:"/materials/guidelines/testing#coverage"},"coverage guidelines")," for a more detailed explanation on what coverage means."),(0,s.kt)("p",null,"As shown above, you can calculate your test coverage using the ",(0,s.kt)("inlineCode",{parentName:"p"},"npm run test:coverage")," command. When running this command, two reports are generated. One of them is a text-generated table that displays coverage percentages and uncovered lines. The other is a visual description of the source file."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Sometimes the text report does not tell the full story. Which is where the second report comes in handy.")," The report file is located at ",(0,s.kt)("inlineCode",{parentName:"p"},"./coverage/lcov-report/index.html"),". Open up your file explorer, navigate to that directory, and open ",(0,s.kt)("inlineCode",{parentName:"p"},"index.html")," inside of a browser."),(0,s.kt)("p",{align:"center"},(0,s.kt)("img",{src:"/img/lcov-1.png"})),(0,s.kt)("p",null,"Opening the file will reveal a visual description of covered and uncovered lines."),(0,s.kt)("p",{align:"center"},(0,s.kt)("img",{src:"/img/lcov-2.png"})),(0,s.kt)("p",null,"As you can see, the functions and lines highlighted in red are uncovered. To cover them, you will need to write tests that execute those statements."))}d.isMDXComponent=!0}}]);