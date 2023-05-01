"use strict";(self.webpackChunkumass_compsci_220_github_io=self.webpackChunkumass_compsci_220_github_io||[]).push([[163],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),o=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=o(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=o(a),d=r,k=u["".concat(l,".").concat(d)]||u[d]||c[d]||s;return a?n.createElement(k,i(i({ref:t},m),{},{components:a})):n.createElement(k,i({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:r,i[1]=p;for(var o=2;o<s;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4215:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>p,toc:()=>o});var n=a(7462),r=(a(7294),a(3905));const s={sidebar_position:8},i="Building an Interpreter",p={unversionedId:"homework/building-an-interpreter",id:"homework/building-an-interpreter",title:"Building an Interpreter",description:"Overview",source:"@site/materials/homework/building-an-interpreter.md",sourceDirName:"homework",slug:"/homework/building-an-interpreter",permalink:"/materials/homework/building-an-interpreter",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Fetching and Web APIs",permalink:"/materials/homework/fetching-and-web-apis"},next:{title:"Practice and Extra Credit",permalink:"/materials/category/practice-and-extra-credit"}},l={},o=[{value:"Overview",id:"overview",level:2},{value:"Learning Objectives",id:"learning-objectives",level:3},{value:"Student Expectations",id:"student-expectations",level:3},{value:"Getting Started",id:"getting-started",level:2},{value:"Concrete Syntax",id:"concrete-syntax",level:3},{value:"Parser",id:"parser",level:3},{value:"State",id:"state",level:3},{value:"Behavior",id:"behavior",level:3},{value:"Error Handling",id:"error-handling",level:3},{value:"Optional: Interpreting Functions",id:"optional-interpreting-functions",level:3},{value:"Programming Tasks",id:"programming-tasks",level:2},{value:"<code>interpExpression</code>",id:"interpexpression",level:3},{value:"<code>interpStatement</code>",id:"interpstatement",level:3},{value:"<code>interpProgram</code>",id:"interpprogram",level:3},{value:"Testing",id:"testing",level:2}],m={toc:o},u="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"building-an-interpreter"},"Building an Interpreter"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"For this project, you will write an ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Interpreter_(computing)"},"interpreter")," for a small programming language similar to ",(0,r.kt)("strong",{parentName:"p"},"JavaScript (not TypeScript)"),". To write an interpreter, you need a parser (provided to you inside of ",(0,r.kt)("inlineCode",{parentName:"p"},"./include/parser.ts"),") to turn the program's concrete syntax (a string of characters) into an ",(0,r.kt)("em",{parentName:"p"},"abstract syntax tree"),". You will need to traverse the AST making necessary checks and executing corresponding statements and expressions."),(0,r.kt)("h3",{id:"learning-objectives"},"Learning Objectives"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Learn fundamentals of programming language implementation"),(0,r.kt)("li",{parentName:"ul"},"How to read the grammar for a concrete syntax"),(0,r.kt)("li",{parentName:"ul"},"How to work and read abstract syntax trees")),(0,r.kt)("h3",{id:"student-expectations"},"Student Expectations"),(0,r.kt)("p",null,"Students will be graded on their ability to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Correctly implement the functions ",(0,r.kt)("a",{parentName:"li",href:"#programming-tasks"},"specified below")),(0,r.kt)("li",{parentName:"ul"},"Resolve all linter warnings"),(0,r.kt)("li",{parentName:"ul"},"Follow the ",(0,r.kt)("a",{parentName:"li",href:"/materials/homework/image-processing"},"coding"),", ",(0,r.kt)("a",{parentName:"li",href:"/materials/guidelines/bad-practices"},"bad practice")," and ",(0,r.kt)("a",{parentName:"li",href:"/materials/guidelines/testing"},"testing")," guidelines"),(0,r.kt)("li",{parentName:"ul"},"Design full-coverage ",(0,r.kt)("a",{parentName:"li",href:"#testing"},"unit-tests")," for the functions they implemented",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"See the ",(0,r.kt)("a",{parentName:"li",href:"/materials/guidelines/testing#coverage"},"testing guidelines")," on coverage for more details")))),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("h3",{id:"concrete-syntax"},"Concrete Syntax"),(0,r.kt)("p",null,"The following (simplified) grammar describes the concrete syntax of the fragment of JavaScript that you will be working with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},"Numbers        n ::= ...                 base-10 numbers\n\nVariables      x ::= ...                 variable name, a sequence of alphabetic letters\n\nExpressions    e ::= n                   numeric constant\n                | true                  boolean value true\n                | false                 boolean value false\n                | x                     variable reference\n                | e_1 + e_2             addition\n                | e_1 - e_2             subtraction\n                | e_1 * e_2             multiplication\n                | e_1 / e_2             division\n                | e_1 && e_2            logical AND\n                | e_1 || e_2            logical OR\n                | e_1 < e_2             less than\n                | e_1 > e_2             greater than\n                | e_1 === e_2           equal to\n\nStatements    s ::= let x = e;          variable declaration\n                  | x = e;                assignment\n                  | if (e) b_1 else b_2   conditional\n                  | while (e) b           loop\n                  | print(e);             display to console\n\nBlocks        b ::= { s_1 ... s_n }\n\nPrograms      p ::= s_1 ... s_n\n")),(0,r.kt)("p",null,"Some structures (like ",(0,r.kt)("inlineCode",{parentName:"p"},"Numbers")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Variables"),") have been omitted for simplicity. The actual grammar is defined inside of ",(0,r.kt)("inlineCode",{parentName:"p"},"./include/grammar.pegjs"),". You may take a look at it if you are curious, but you should not need to."),(0,r.kt)("p",null,"Each line of the grammar defines a rule. As an example, the rule"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},"Expressions   e ::= n                   numeric constant\n                  | true                  boolean value true\n                  | false                 boolean value false\n                  | e_1 + e_2             addition\n                  | e_1 && e_2            logical AND\n")),(0,r.kt)("p",null,"would read as: An expression, labeled as ",(0,r.kt)("inlineCode",{parentName:"p"},"e"),", may be one of:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"n"),", a number (as defined above)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"true"),", the boolean value true"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"false"),", the boolean value false"),(0,r.kt)("li",{parentName:"ul"},"An expression, ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("msub",{parentName:"mrow"},(0,r.kt)("mi",{parentName:"msub"},"e"),(0,r.kt)("mn",{parentName:"msub"},"1"))),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"e_1")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.5806em",verticalAlign:"-0.15em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"1")))),(0,r.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,r.kt)("span",{parentName:"span"})))))))))),", a plus symbol, followed by another expression ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("msub",{parentName:"mrow"},(0,r.kt)("mi",{parentName:"msub"},"e"),(0,r.kt)("mn",{parentName:"msub"},"2"))),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"e_2")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.5806em",verticalAlign:"-0.15em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"2")))),(0,r.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,r.kt)("span",{parentName:"span"})))))))))),", for addition addition"),(0,r.kt)("li",{parentName:"ul"},"An expression, ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("msub",{parentName:"mrow"},(0,r.kt)("mi",{parentName:"msub"},"e"),(0,r.kt)("mn",{parentName:"msub"},"1"))),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"e_1")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.5806em",verticalAlign:"-0.15em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"1")))),(0,r.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,r.kt)("span",{parentName:"span"})))))))))),", two ampersands (",(0,r.kt)("inlineCode",{parentName:"li"},"&&"),"), followed by another expression ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("msub",{parentName:"mrow"},(0,r.kt)("mi",{parentName:"msub"},"e"),(0,r.kt)("mn",{parentName:"msub"},"2"))),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"e_2")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.5806em",verticalAlign:"-0.15em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"2")))),(0,r.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,r.kt)("span",{parentName:"span"})))))))))),", for logical AND")),(0,r.kt)("h3",{id:"parser"},"Parser"),(0,r.kt)("p",null,"We have provided two parsing functions, defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"./include/parser.ts"),", the function ",(0,r.kt)("inlineCode",{parentName:"p"},"parseExpression")," parses an expression and the function ",(0,r.kt)("inlineCode",{parentName:"p"},"parseProgram")," parses a program (a series of statements). Their type signatures are outlined below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'type BinaryOperator = "+" | "-" | "*" | "/" | "&&" | "||" | ">" | "<" | "===";\n\ntype Expression =\n  | { kind: "boolean"; value: boolean }\n  | { kind: "number"; value: number }\n  | { kind: "variable"; name: string }\n  | { kind: "operator"; operator: BinaryOperator; left: Expression; right: Expression };\n\ntype Statement =\n  | { kind: "let"; name: string; expression: Expression }\n  | { kind: "assignment"; name: string; expression: Expression }\n  | { kind: "if"; test: Expression; truePart: Statement[]; falsePart: Statement[] }\n  | { kind: "while"; test: Expression; body: Statement[] }\n  | { kind: "print"; expression: Expression };\n\nfunction parseExpression(expression: string): Expression;\nfunction parseProgram(statements: string): Statement[];\n')),(0,r.kt)("p",null,"On success, these functions will return an object that contains the the corresponding abstract syntax tree (AST) for the given string. On failure, these functions throw an error with a reason the string cannot be parsed."),(0,r.kt)("h3",{id:"state"},"State"),(0,r.kt)("p",null,"The State type is defined as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type RuntimeValue = number | boolean;\ntype State = { [key: string]: State | RuntimeValue };\n")),(0,r.kt)("p",null,"This notation indicates that a ",(0,r.kt)("inlineCode",{parentName:"p"},"State")," object has a variable number of properties with values of type ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")," (representing values of variables that are in scope), or of type ",(0,r.kt)("inlineCode",{parentName:"p"},"State")," (link to the parent scope)."),(0,r.kt)("p",null,"A block starts a new inner scope. A variable declared in a block will shadow an outer declaration (any variable use will refer to the inner declaration). On exiting a scope, variables declared there are no longer accessible (since we don't have closures). Thus, they should not be in the global state at the end. The nesting of block scopes corresponds to a stack, which you can implement as a linked list, by adding to your ",(0,r.kt)("inlineCode",{parentName:"p"},"State")," object a link to an outer scope. Since the link is just another property, this allows all functions to keep their signatures. To ensure the link name does not clash with a program variable, use a property name that is not an identifier (see given: ",(0,r.kt)("inlineCode",{parentName:"p"},"PARENT_STATE_KEY"),"). The global state cannot have extra properties, and does not need a link, as the last state on the list."),(0,r.kt)("h3",{id:"behavior"},"Behavior"),(0,r.kt)("p",null,"The behavior of our interpreter should be similar to the ",(0,r.kt)("inlineCode",{parentName:"p"},"node"),' interpreter in "',(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode"},"strict mode"),'" (with some exceptions). To test what your interpreter should do in a scenario, you may use the ',(0,r.kt)("inlineCode",{parentName:"p"},"node --use-strict")," command in a terminal to open a Read Eval Print Loop (REPL). This interface will allow you to input statements and expressions and will display an error or an the evaluated result."),(0,r.kt)("p",null,"Exceptions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Arithmetic and greater/less-than comparison may only happen between numbers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Logical operations may only happen between booleans")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Division by zero is forbidden"))),(0,r.kt)("h3",{id:"error-handling"},"Error Handling"),(0,r.kt)("p",null,"An interpreter can generally not continue meaningfully after an error (as opposed to compilers). Thus, if you find an error, ",(0,r.kt)("strong",{parentName:"p"},'you should throw an error, using an informative error message (i.e. "Arithmetic may only happen between numbers")'),". You need to do a number of checks (e.g., correct typing, and missing or duplicate declarations)."),(0,r.kt)("h3",{id:"optional-interpreting-functions"},"Optional: Interpreting Functions"),(0,r.kt)("p",null,"As extra (uncredited) practice, you can implement first-class functions inside of your interpreter. We will extend the grammar to include function expressions, call expressions, return statements, and expression statements (",(0,r.kt)("inlineCode",{parentName:"p"},"1 + 1;"),"- to support both ",(0,r.kt)("inlineCode",{parentName:"p"},"f();")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"f(g());"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},"e ::=\n    ...\n    | function (x1 ... xn ) b   Function expressions\n    | ::= x(e1 ... en )         Call expression\n\ns ::=\n    ...\n    | e;                        Expression statements\n    | return e;                 Return statements\n")),(0,r.kt)("p",null,"The parser already supports these constructs. You may look at types inside ",(0,r.kt)("inlineCode",{parentName:"p"},"./include/parser.ts"),". Here are some hints for what needs to be updated ",(0,r.kt)("inlineCode",{parentName:"p"},"./src/interpreter.ts"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add a new type of ",(0,r.kt)("inlineCode",{parentName:"li"},"RuntimeValue")," to support functions/closures",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Define an ",(0,r.kt)("inlineCode",{parentName:"li"},"interface")," with the values you might think you'd need"))),(0,r.kt)("li",{parentName:"ul"},"Give ",(0,r.kt)("inlineCode",{parentName:"li"},"interpStatement")," a return type other than ",(0,r.kt)("inlineCode",{parentName:"li"},"void"))),(0,r.kt)("p",null,"Rules:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"A function's body is only evaluated when called")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Functions capture the environment they were created in")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Providing more, or less, arguments than there are parameters is considered a runtime error")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"All functions must explicitly return a value (number, boolean, or another function)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If a function has not explicitly returned after executing its body it is a runtime error")))),(0,r.kt)("h2",{id:"programming-tasks"},"Programming Tasks"),(0,r.kt)("p",null,"Your task is to implement the following functions inside of ",(0,r.kt)("inlineCode",{parentName:"p"},"./src/interpreter.ts"),". You may do them in any order. Reviewing lecture slides might be helpful."),(0,r.kt)("h3",{id:"interpexpression"},(0,r.kt)("inlineCode",{parentName:"h3"},"interpExpression")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export function interpExpression(state: State, e: Expression): number | boolean {\n  // TODO\n}\n")),(0,r.kt)("h3",{id:"interpstatement"},(0,r.kt)("inlineCode",{parentName:"h3"},"interpStatement")),(0,r.kt)("p",null,"Given a state object and an AST of a statement, ",(0,r.kt)("inlineCode",{parentName:"p"},"interpStatement")," updates the ",(0,r.kt)("inlineCode",{parentName:"p"},"State")," object. It should throw an error if the statement is invalid. See ",(0,r.kt)("a",{parentName:"p",href:"#behavior"},"Behavior")," and ",(0,r.kt)("a",{parentName:"p",href:"#error-handling"},"Error Handling"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export function interpStatement(state: State, p: Statement): void {\n  // TODO\n}\n")),(0,r.kt)("h3",{id:"interpprogram"},(0,r.kt)("inlineCode",{parentName:"h3"},"interpProgram")),(0,r.kt)("p",null,"Given the AST of a program, ",(0,r.kt)("inlineCode",{parentName:"p"},"interpProgram")," returns the final state of the program. It should throw an error if any statement or expression is invalid. See ",(0,r.kt)("a",{parentName:"p",href:"#behavior"},"Behavior")," and ",(0,r.kt)("a",{parentName:"p",href:"#error-handling"},"Error Handling"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export function interpProgram(p: Statement[]): State {\n  // TODO\n}\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'interpProgram(parseProgram("let x = 10; x = x * 2;"));\n// {\n//   x: 20;\n// }\n\ninterpProgram([\n  { kind: "let", name: "x", expression: { kind: "number", value: 10 } },\n  {\n    kind: "assignment",\n    name: "x",\n    expression: {\n      kind: "operator",\n      operator: "*",\n      left: { kind: "variable", name: "x" },\n      right: { kind: "number", value: 2 },\n    },\n  },\n]);\n\n// {\n//   x: 20;\n// }\n')),(0,r.kt)("h2",{id:"testing"},"Testing"),(0,r.kt)("p",null,"Implement ",(0,r.kt)("inlineCode",{parentName:"p"},"interpExpression"),", following the template shown in class. You can use an empty object (",(0,r.kt)("inlineCode",{parentName:"p"},"{ }"),") for the state if you do not have any variables, or you can set the values of variables by hand. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'describe("interpExpression", () => {\n  it("evaluates multiplication with a variable", () => {\n    const r = interpExpression({ x: 10 }, parseExpression("x * 2"));\n\n    expect(r).toBe(20);\n  });\n});\n')),(0,r.kt)("p",null,"Implement ",(0,r.kt)("inlineCode",{parentName:"p"},"interpStatement")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"interpProgram"),", following the template shown in class. You should be able to test that assignment updates variables. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'describe("interpProgram", () => {\n  it("handles declarations and reassignment", () => {\n    const st = interpProgram(parseProgram("let x = 10; x = 20;"));\n\n    expect(st).toEqual({ x: 20 });\n  });\n});\n')),(0,r.kt)("p",null,"Finally, test your interpreter with some simple programs. For example, you should be able to interpret an iterative factorial or Fibonacci sequence computation."),(0,r.kt)("p",null,"You may find yourself in a scenario where you need to write a test that verifies a program throws an error. Here is an example of how you would write a test like that:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'function sqrt(n) {\n  if (n < 0) throw new Error("Input must be positive or zero.");\n\n  // Do some iterations of Newton\'s method\n}\n\ntest("sqrt fails on invalid input", () => {\n  expect(() => {\n    sqrt(-1);\n  }).toThrow();\n});\n')),(0,r.kt)("p",null,"You can read more on the ",(0,r.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/expect#tothrowerror"},"Jest documentation on ",(0,r.kt)("inlineCode",{parentName:"a"},".toThrow()")),"."))}c.isMDXComponent=!0}}]);