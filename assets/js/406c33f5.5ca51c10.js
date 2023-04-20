"use strict";(self.webpackChunkumass_compsci_220_github_io=self.webpackChunkumass_compsci_220_github_io||[]).push([[308],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>u});var n=t(7294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),m=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=m(e.components);return n.createElement(l.Provider,{value:a},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=m(t),g=i,u=d["".concat(l,".").concat(g)]||d[g]||c[g]||r;return t?n.createElement(u,o(o({ref:a},p),{},{components:t})):n.createElement(u,o({ref:a},p))}));function u(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=g;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var m=2;m<r;m++)o[m]=t[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},922:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>m});var n=t(7462),i=(t(7294),t(3905));const r={sidebar_position:1},o="Image Processing",s={unversionedId:"homework/image-processing",id:"homework/image-processing",title:"Image Processing",description:"- Please download the project here.",source:"@site/materials/homework/image-processing.md",sourceDirName:"homework",slug:"/homework/image-processing",permalink:"/materials/homework/image-processing",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Homework",permalink:"/materials/category/homework"},next:{title:"Image Processing with HOF",permalink:"/materials/homework/image-processing-with-hof"}},l={},m=[{value:"Overview",id:"overview",level:2},{value:"Learning Objectives",id:"learning-objectives",level:3},{value:"Student Expectations",id:"student-expectations",level:3},{value:"Resources",id:"resources",level:3},{value:"Getting Started",id:"getting-started",level:2},{value:"Digital Representation of Images",id:"digital-representation-of-images",level:3},{value:"The <code>Image</code> Class and Related Members",id:"the-image-class-and-related-members",level:3},{value:"Testing",id:"testing",level:2},{value:"Programming Tasks",id:"programming-tasks",level:2},{value:"<code>removeRed</code>",id:"removered",level:3},{value:"<code>flipColors</code>",id:"flipcolors",level:3},{value:"Moving Forward",id:"moving-forward",level:3},{value:"<code>flipColors</code>",id:"flipcolors-1",level:3},{value:"<code>imageMap</code>",id:"imagemap",level:3},{value:"<code>mapToGB</code> and <code>mapFlipColors</code>",id:"maptogb-and-mapflipcolors",level:3},{value:"Submitting",id:"submitting",level:2}],p={toc:m},d="wrapper";function c(e){let{components:a,...t}=e;return(0,i.kt)(d,(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"image-processing"},"Image Processing"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Please download the project ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/umass-compsci-220/public-materials/raw/main/homework/01-image-processing.zip"},"here"),"."),(0,i.kt)("li",{parentName:"ul"},"If you need help installing ",(0,i.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/"},"VSCode")," and ",(0,i.kt)("a",{parentName:"li",href:"https://nodejs.org/"},"Node.js")," (required for this course), read ",(0,i.kt)("a",{parentName:"li",href:"/"},"this page"),".",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"You will need a Node.js version starting from v16 and less than v20")))),(0,i.kt)("li",{parentName:"ul"},"If you need help opening the project, read ",(0,i.kt)("a",{parentName:"li",href:"/materials/tutorials/assignments/opening-an-assignment"},"this page"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"After opening, run ",(0,i.kt)("inlineCode",{parentName:"strong"},"npm install")," in a VSCode terminal")),(0,i.kt)("li",{parentName:"ul"},"You may edit any file inside of ",(0,i.kt)("inlineCode",{parentName:"li"},"./src/"),", ",(0,i.kt)("strong",{parentName:"li"},"DO NOT make any edits to any file inside of ",(0,i.kt)("inlineCode",{parentName:"strong"},"./include/")))),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"The goal of this assignment is to introduce you to the basic features of TypeScript/JavaScript, such as functions, variables, conditionals, and loops.")," You should already be familiar with these concepts from other programming languages (Python, Java). ",(0,i.kt)("strong",{parentName:"p"},"You will use these features to write several image processing functions")," (e.g., manipulating image colors). You will also work with, and write your own, higher-order functions."),(0,i.kt)("h3",{id:"learning-objectives"},"Learning Objectives"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Become familiar with the TypeScript syntax, and JavaScript runtime behavior, of functions, loops, and arrays"),(0,i.kt)("li",{parentName:"ul"},"Understand why higher order functions are so useful"),(0,i.kt)("li",{parentName:"ul"},"Know how to pass a function to a function and how to receive a function in a function"),(0,i.kt)("li",{parentName:"ul"},"Learn basic testing methodology and syntax")),(0,i.kt)("h3",{id:"student-expectations"},"Student Expectations"),(0,i.kt)("p",null,"Students will be graded on their ability to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Correctly implement the functions ",(0,i.kt)("a",{parentName:"li",href:"#programming-tasks"},"specified below"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Using private auto-grader tests"))),(0,i.kt)("li",{parentName:"ul"},"Follow the ",(0,i.kt)("a",{parentName:"li",href:"/materials/homework/image-processing"},"coding"),", ",(0,i.kt)("a",{parentName:"li",href:"/materials/guidelines/bad-practices"},"bad practice"),", and ",(0,i.kt)("a",{parentName:"li",href:"/materials/guidelines/testing"},"testing")," guidelines",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"There will be no grading regarding these rules on this assignment"),(0,i.kt)("li",{parentName:"ul"},"Starting with Homework 3, there may be crediting manual grading"))),(0,i.kt)("li",{parentName:"ul"},"Design full-coverage ",(0,i.kt)("a",{parentName:"li",href:"#testing"},"unit-tests")," for the functions they implemented",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"For the first homework, this will not be checked"),(0,i.kt)("li",{parentName:"ul"},"Starting with Homework 2, the autograder will calculate and score you based off how well you write your tests"),(0,i.kt)("li",{parentName:"ul"},"See the ",(0,i.kt)("a",{parentName:"li",href:"/materials/guidelines/testing#coverage"},"testing guidelines")," on coverage")))),(0,i.kt)("h3",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/materials/tutorials/assignments/linting-and-formatting"},"Linting/formatting"),", ",(0,i.kt)("a",{parentName:"li",href:"/materials/tutorials/assignments/running-and-debugging"},"running/debugging"),", and ",(0,i.kt)("a",{parentName:"li",href:"/materials/tutorials/assignments/testing"},"testing")," a project"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions"},"MDN Guide on Functions"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions"},"MDN Docs Arrow Functions")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays"},"MDN Guide on Arrays"))),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("h3",{id:"digital-representation-of-images"},"Digital Representation of Images"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Any image you see on your computer screen consists of tiny square dots known as pixels.")," On many screens, individual pixels are too small to see with the naked eye, but if you look very closely, you may be able to discern the pattern in which pixels are arranged, as illustrated in the figure below."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"/img/image-pixels.png"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Pixels are arranged in a grid and each pixel has x- and y- coordinates that identify its position in the grid.")," All coordinates are non-negative integers and the top-left corner has the coordinates (0, 0). Therefore, the x-coordinate increases as you move right and the y-coordinate increases as you move down. For example, if we had an image with just nine pixels arranged in a 3-by-3 grid, their coordinates would appear as shown below. Line number 0 consists of pixels (0, 0), (1, 0), (2, 0)."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"/img/image-coordinates.svg"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Finally, every pixel has a color that is represented using the three primary colors (i.e., red, green, and blue).")," Therefore, to set the color of a pixel, you have to specify how much red, green, and blue to use. ",(0,i.kt)("strong",{parentName:"p"},"Each of these primary colors has an ",(0,i.kt)("em",{parentName:"strong"},"integer")," intensity between 0 and 255 (inclusive).")," For example, to get a black pixel, we can set the intensity of the three primary colors to 0, thus the black pixel value is ",(0,i.kt)("inlineCode",{parentName:"p"},"[0, 0, 0]"),", and to get a white pixel we can set the intensity of the three primary colors to 255, thus the white color pixel value is ",(0,i.kt)("inlineCode",{parentName:"p"},"[255, 255, 255]"),"."),(0,i.kt)("p",null,"In this project, you will use a very simple image manipulation library that enables you to load images from a gallery, set the color of each pixel, and read the color of each pixel. These are the only primitive functions you need to build sophisticated image processing functions yourself."),(0,i.kt)("h3",{id:"the-image-class-and-related-members"},"The ",(0,i.kt)("inlineCode",{parentName:"h3"},"Image")," Class and Related Members"),(0,i.kt)("p",null,"We have provided you the ",(0,i.kt)("inlineCode",{parentName:"p"},"Image")," class and related members to interact and manipulate images ",(0,i.kt)("inlineCode",{parentName:"p"},"./include/image.ts"),". At the top of ",(0,i.kt)("inlineCode",{parentName:"p"},"imageProcessing.ts")," you should see the following line:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import type { Image, Color } from "include/image.js";\n')),(0,i.kt)("p",null,"This imports the ",(0,i.kt)("inlineCode",{parentName:"p"},"Image")," class and ",(0,i.kt)("inlineCode",{parentName:"p"},"Color")," type into the file. An ",(0,i.kt)("inlineCode",{parentName:"p"},"Image")," represents a digital picture that has been loaded into memory. Its public interface (what is exposed) is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"class Image {\n  static loadImageFromGallery(name?: ImageName): Image;\n  static loadImageFromFile(filePath: string): Image;\n  static create(width: number, height: number, fillColor: Color): Image;\n\n  readonly width: number;\n  readonly height: number;\n\n  constructor(width: number, height: number, data: Uint8ClampedArray);\n\n  getPixel(x: number, y: number): Color;\n  setPixel(x: number, y: number, color: Color): void;\n  copy(): Image;\n  save(fileName: string): void;\n  show(): void;\n  assertCoordinatesInBounds(x: number, y: number): void;\n}\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Image")," class itself has three static methods used to create images (",(0,i.kt)("strong",{parentName:"p"},"DO NOT USE ",(0,i.kt)("inlineCode",{parentName:"strong"},"new Image()")," TO MAKE AN IMAGE"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'// Load an image from the provided gallery (see ./images folder)\nconst art = Image.loadImageFromGallery("art");\n// Load a random image from the provided gallery\nconst random = Image.loadImageFromGallery();\n// Load a .png image from a file on your computer\nconst mySpecialImage = Image.loadImageFromFile("/path/to/my/image.png");\n// Create an image by defining a width height and fill color\n// A 50 pixel by 25 pixel white image\nconst redImage = Image.create(50, 25, [255, 0, 0]);\n')),(0,i.kt)("p",null,"Instances of the image class have two fields: ",(0,i.kt)("inlineCode",{parentName:"p"},"width")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"height"),". They also have two methods to read and modify the pixels inside of the image."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"console.log(redImage.width); // -> 50\nconsole.log(redImage.height); // -> 25\n\n// Sets the top left pixel to black\nredImage.setPixel(0, 0, [0, 0, 0]);\nconsole.log(redImage.getPixel(0, 0)); // -> [0, 0, 0]\n")),(0,i.kt)("p",null,"There is also the ",(0,i.kt)("inlineCode",{parentName:"p"},"Image.copy()")," method, which will create a duplicate of the current image (same ",(0,i.kt)("inlineCode",{parentName:"p"},"width"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"height"),", and set of pixels);"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const copyOfRed = redImage.copy();\nconsole.log(copyOfRed.getPixel(0, 0)); // -> [0, 0, 0]\nconsole.log(copyOfRed.getPixel(5, 5)); // -> [255, 0, 0]\n\nredImage.setPixel(0, 0, [255, 0, 0]); // Does not change any of the copies\nconsole.log(copyOfRed.getPixel(0, 0)); // -> [0, 0, 0]\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Image.show()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Image.save()")," can be used to inspect the resulting images."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'// Supply a name to give the saved image,\n// and this method will create a file in the images_out folder called <name>.png\nredImage.save("redOutput");\n// Opens the image in a VSCode preview.\nredImage.show();\n')),(0,i.kt)("p",null,"There is also the ",(0,i.kt)("inlineCode",{parentName:"p"},"Image.assertCoordinatesInBounds")," method, which will throw an error the supplied coordinates do not fit within the image."),(0,i.kt)("p",null,"In addition to ",(0,i.kt)("inlineCode",{parentName:"p"},"Image"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"image.ts")," exports the ",(0,i.kt)("inlineCode",{parentName:"p"},"Color")," type. Inspecting the source code reveals that this is an alias for ",(0,i.kt)("inlineCode",{parentName:"p"},"number[]")," (an array of numbers). Our variables will still hold values that are array's of numbers - this type solely exits to make the ",(0,i.kt)("inlineCode",{parentName:"p"},"Image")," interface more descriptive."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const arr = [0, 0, 0];\n// Works fine, the type of arr (number[]) is compatible with Color\nrenImage.setPixel(0, 0, arr);\n")),(0,i.kt)("p",null,"There is also an object (similar to a hash table) called ",(0,i.kt)("inlineCode",{parentName:"p"},"COLORS"),", which is used to get the digital representation of a color from its name. This could be helpful inside of ",(0,i.kt)("inlineCode",{parentName:"p"},"main.ts")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"imageProcessing.test.ts"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'// include/image.ts\nexport const COLORS = {\n  WHITE: [255, 255, 255],\n  BLACK: [0, 0, 0],\n  RED: [255, 0, 0],\n  GREEN: [0, 255, 0],\n  BLUE: [0, 0, 255],\n  AQUA: [0, 255, 255],\n  YELLOW: [255, 255, 0],\n  MAGENTA: [255, 0, 255],\n};\n\n// src/main.ts\nimport { Image, COLORS } from "include/image.js";\n\nconst blueImage = Image.create(25, 25, COLORS.BLUE);\nconst blackImage = Image.create(25, 25, COLORS.BLACK);\n')),(0,i.kt)("p",null,"Inside of the project's ",(0,i.kt)("inlineCode",{parentName:"p"},"main.ts")," is some example usages of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Image")," interface. You can read the full pageation and source for everything inside of ",(0,i.kt)("inlineCode",{parentName:"p"},"image.ts"),"."),(0,i.kt)("h2",{id:"testing"},"Testing"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"An important part of programming is testing your code thoroughly.")," Without appropriate unit tests, you may not catch bugs in your code. There is an auto-grader, but ",(0,i.kt)("strong",{parentName:"p"},"you will not be able to see complete results until after the deadline"),". This is to encourage you to embrace ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Test-driven_development"},"test driven development"),". You will be scored on how well you write your tests, so it is always a good idea to write a few tests before you start the programming tasks."),(0,i.kt)("p",null,"To help you get started, we have provided a few test cases inside of ",(0,i.kt)("inlineCode",{parentName:"p"},"imageProcessing.test.ts"),". It is up to you to define additional tests to check your solution for correctness. Please follow the same general syntax of the tests defined for you."),(0,i.kt)("p",null,"Checkout the ",(0,i.kt)("a",{parentName:"p",href:"/materials/tutorials/assignments/testing"},"project testing page")," for information about testing methodology and syntax. The ",(0,i.kt)("a",{parentName:"p",href:"/materials/guidelines/testing"},"testing guidelines")," pages requirements your tests should follow."),(0,i.kt)("h2",{id:"programming-tasks"},"Programming Tasks"),(0,i.kt)("p",null,"If you are having trouble reading the specification, please go to office hours or ask a question on Campuswire (",(0,i.kt)("strong",{parentName:"p"},"search for a similar question first"),")."),(0,i.kt)("p",null,"All functions should be written in ",(0,i.kt)("inlineCode",{parentName:"p"},"imageProcessing.ts"),". Other files (",(0,i.kt)("inlineCode",{parentName:"p"},"main.ts")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"imageProcessing.test.ts"),") should import them like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { removeRed, flipColors, mapLine, imageMap, mapToGB, mapFlipColors } from "./imageProcessing.js";\n')),(0,i.kt)("h3",{id:"removered"},(0,i.kt)("inlineCode",{parentName:"h3"},"removeRed")),(0,i.kt)("p",null,"Write a function called ",(0,i.kt)("inlineCode",{parentName:"p"},"removeRed")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export function removeRed(img: Image): Image {\n  // TODO\n}\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"removeRed")," takes an image as an argument and returns a new image, where each pixel has the red color channel removed. If the ",(0,i.kt)("inlineCode",{parentName:"p"},"Color")," of a pixel is ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,i.kt)("mi",{parentName:"mrow"},"r"),(0,i.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,i.kt)("mi",{parentName:"mrow"},"g"),(0,i.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,i.kt)("mi",{parentName:"mrow"},"b"),(0,i.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"(r, g, b)")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.kt)("span",{parentName:"span",className:"mopen"},"("),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,i.kt)("span",{parentName:"span",className:"mpunct"},","),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,i.kt)("span",{parentName:"span",className:"mpunct"},","),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,i.kt)("span",{parentName:"span",className:"mclose"},")")))))," in the input image, its ",(0,i.kt)("inlineCode",{parentName:"p"},"Color")," in the output must be ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,i.kt)("mn",{parentName:"mrow"},"0"),(0,i.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,i.kt)("mi",{parentName:"mrow"},"g"),(0,i.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,i.kt)("mi",{parentName:"mrow"},"b"),(0,i.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"(0, g, b)")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.kt)("span",{parentName:"span",className:"mopen"},"("),(0,i.kt)("span",{parentName:"span",className:"mord"},"0"),(0,i.kt)("span",{parentName:"span",className:"mpunct"},","),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,i.kt)("span",{parentName:"span",className:"mpunct"},","),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,i.kt)("span",{parentName:"span",className:"mclose"},")"))))),"."),(0,i.kt)("h3",{id:"flipcolors"},(0,i.kt)("inlineCode",{parentName:"h3"},"flipColors")),(0,i.kt)("p",null,"Write a function called ",(0,i.kt)("inlineCode",{parentName:"p"},"flipColors")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export funciton flipColors(img: Image): Image {\n  // TODO\n}\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"flipColors")," takes an image as an argument and returns a new image, where each pixel has each ",(0,i.kt)("inlineCode",{parentName:"p"},"Color")," channel set to the average of the other two channels in the original pixel. Truncate any decimal remainder using ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor"},(0,i.kt)("inlineCode",{parentName:"a"},"Math.floor")),"."),(0,i.kt)("h3",{id:"moving-forward"},"Moving Forward"),(0,i.kt)("p",null,"If you have solved these two tasks, you might notice that the structure of the two functions is very similar, the difference is only in the actual processing applied. We can avoid duplication by defining functions, similar to ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map"},"Array.prototype.map"),", that apply the same transformation to several or all pixels of an image."),(0,i.kt)("h3",{id:"flipcolors-1"},(0,i.kt)("inlineCode",{parentName:"h3"},"flipColors")),(0,i.kt)("p",null,"Write a function called ",(0,i.kt)("inlineCode",{parentName:"p"},"mapLine")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export function mapLine(img: Image, lineNo: number, func: (c: Color) => Color): void {\n  // TODO\n}\n")),(0,i.kt)("p",null,"The function ",(0,i.kt)("em",{parentName:"p"},"should modify")," the given image in place, so that the value of each pixel in the given horizontal line is the result of applying ",(0,i.kt)("inlineCode",{parentName:"p"},"func")," to the corresponding pixel of ",(0,i.kt)("inlineCode",{parentName:"p"},"img"),". It does not return any value. If ",(0,i.kt)("inlineCode",{parentName:"p"},"lineNo")," is not a valid line number, then ",(0,i.kt)("inlineCode",{parentName:"p"},"img")," should not be modified."),(0,i.kt)("h3",{id:"imagemap"},(0,i.kt)("inlineCode",{parentName:"h3"},"imageMap")),(0,i.kt)("p",null,"Write a function called ",(0,i.kt)("inlineCode",{parentName:"p"},"imageMap")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export function imageMap(img: Image, func: (c: Color) => Color): Image {\n  // TODO\n}\n")),(0,i.kt)("p",null,"The result must be a new image with the same dimensions as ",(0,i.kt)("inlineCode",{parentName:"p"},"img"),". The value of each pixel in the new image should be the result of applying ",(0,i.kt)("inlineCode",{parentName:"p"},"func")," to the corresponding pixel of ",(0,i.kt)("inlineCode",{parentName:"p"},"img"),". ",(0,i.kt)("u",null,(0,i.kt)("strong",{parentName:"p"},"Use ",(0,i.kt)("inlineCode",{parentName:"strong"},"mapLine"))),"."),(0,i.kt)("h3",{id:"maptogb-and-mapflipcolors"},(0,i.kt)("inlineCode",{parentName:"h3"},"mapToGB")," and ",(0,i.kt)("inlineCode",{parentName:"h3"},"mapFlipColors")),(0,i.kt)("p",null,"Write two functions called ",(0,i.kt)("inlineCode",{parentName:"p"},"mapToGB")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"mapFlipColors")),(0,i.kt)("p",null,"These are equivalent to (i.e., have the same type signature and behave exactly like) ",(0,i.kt)("inlineCode",{parentName:"p"},"removeRed")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"flipColors")," ",(0,i.kt)("u",null,(0,i.kt)("strong",{parentName:"p"},"but use must use ",(0,i.kt)("inlineCode",{parentName:"strong"},"imageMap"))),"."),(0,i.kt)("h2",{id:"submitting"},"Submitting"),(0,i.kt)("p",null,"Use the following command to build a ",(0,i.kt)("inlineCode",{parentName:"p"},".zip")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm run build:submission\n")),(0,i.kt)("p",null,"This command will automatically format your submissions source code so it is easier to read then bundle your ",(0,i.kt)("inlineCode",{parentName:"p"},"./src/*")," files into a ",(0,i.kt)("inlineCode",{parentName:"p"},".zip"),". Please upload this file to the respective assignment on Gradescope."))}c.isMDXComponent=!0}}]);