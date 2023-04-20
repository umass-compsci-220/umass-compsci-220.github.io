"use strict";(self.webpackChunkumass_compsci_220_github_io=self.webpackChunkumass_compsci_220_github_io||[]).push([[137],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),c=o,h=m["".concat(s,".").concat(c)]||m[c]||d[c]||i;return n?a.createElement(h,r(r({ref:t},u),{},{components:n})):a.createElement(h,r({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},522:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const i={sidebar_position:0},r="Development Environment",l={unversionedId:"tutorials/assignments/environment",id:"tutorials/assignments/environment",title:"Development Environment",description:"Before taking this course, you will need to download various pieces of software. This page will guide you through that process in a beginner-friendly manner. If you have any issues configuring your system, please seek help as soon as possible. You have the internet, office hours, and Campuswire at your disposal.",source:"@site/materials/tutorials/assignments/environment.md",sourceDirName:"tutorials/assignments",slug:"/tutorials/assignments/environment",permalink:"/materials/tutorials/assignments/environment",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Assignments",permalink:"/materials/category/assignments"},next:{title:"Opening an Assignment",permalink:"/materials/tutorials/assignments/opening-an-assignment"}},s={},p=[{value:"Getting Started",id:"getting-started",level:2},{value:"About Node.js and NPM",id:"about-nodejs-and-npm",level:2},{value:"Installing Node.js and NPM",id:"installing-nodejs-and-npm",level:2},{value:"About Version Control",id:"about-version-control",level:2},{value:"Installing Git",id:"installing-git",level:2},{value:"About Text Editors",id:"about-text-editors",level:2},{value:"Installing VSCode",id:"installing-vscode",level:2},{value:"VSCode Extensions",id:"vscode-extensions",level:3},{value:"Configuration",id:"configuration",level:3}],u={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"development-environment"},"Development Environment"),(0,o.kt)("p",null,"Before taking this course, you will need to download various pieces of software. This page will guide you through that process in a beginner-friendly manner. If you have any issues configuring your system, please seek help as soon as possible. You have the internet, office hours, and Campuswire at your disposal."),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"0. (Optional) Install Windows Subsystem for Linux")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you are on Windows, it is worthwhile to consider installing ",(0,o.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/windows/wsl/about"},"WSL")),(0,o.kt)("li",{parentName:"ul"},"Windows may be hard to configure in the future when you use more advance tools"),(0,o.kt)("li",{parentName:"ul"},"Read more ",(0,o.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/windows/wsl/install"},"here"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1. Install ",(0,o.kt)("a",{parentName:"strong",href:"https://nodejs.org/en/about/"},"Node.js")," and ",(0,o.kt)("a",{parentName:"strong",href:"https://docs.npmjs.com/about-npm"},"NPM"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Read ",(0,o.kt)("a",{parentName:"li",href:"#installing-nodejs-and-npm"},"Installing Node.js and NPM")," for instructions"),(0,o.kt)("li",{parentName:"ul"},"Optionally read ",(0,o.kt)("a",{parentName:"li",href:"#about-nodejs-and-npm"},"About Node.js and NPM")," for details"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Note: Please make sure you have at least ",(0,o.kt)("inlineCode",{parentName:"strong"},"node")," version greater than or equal to v16 and less than 20"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2. Install Git")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Read ",(0,o.kt)("a",{parentName:"li",href:"#installing-git"},"Installing Git")," for instructions"),(0,o.kt)("li",{parentName:"ul"},"Optionally read ",(0,o.kt)("a",{parentName:"li",href:"#about-version-control"},"About Version Control")," for details")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3. Install VSCode")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Read ",(0,o.kt)("a",{parentName:"li",href:"#installing-vscode"},"Installing VSCode")," for instructions"),(0,o.kt)("li",{parentName:"ul"},"Watch ",(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=B-s71n0dHUk"},"this video (7m16s)")," to familiarize yourself with VSCode"),(0,o.kt)("li",{parentName:"ul"},"Alternatively, you use any text editor or IDE. ",(0,o.kt)("a",{parentName:"li",href:"https://www.lunarvim.org/"},"LunarVim"),", ",(0,o.kt)("a",{parentName:"li",href:"https://www.gnu.org/software/emacs/"},"GNU Emacs"),", and ",(0,o.kt)("a",{parentName:"li",href:"https://www.jetbrains.com/webstorm/"},"Webstorm")," are good options",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"However, we cannot guarantee configuration support")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"4. Open the First Homework in VSCode")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Read ",(0,o.kt)("a",{parentName:"li",href:"/materials/tutorials/assignments/opening-an-assignment"},"Opening An Assignment in VSCode"))),(0,o.kt)("h2",{id:"about-nodejs-and-npm"},"About Node.js and NPM"),(0,o.kt)("p",null,"From the ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Runtime_system"},"Wikipedia page on Runtime Systems"),":"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"In computer programming, a runtime system or runtime environment is a sub-system that exists both in the computer where a program is created, as well as in the computers where the program is intended to be run.")),(0,o.kt)("p",null,"In the past, you might have had to install Java on your system. You were installing the runtime responsible for executing your Java source code. In this course, you will be programming in TypeScript, which is compiled (transformed or made) into JavaScript, then run using a JavaScript runtime system."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/en/about/"},"Node.js")," is a popular JavaScript runtime designed for making web applications. It comes bundled with a complete standard library and access to a public repository of millions of third-party packages. It builds upon the JavaScript runtime that is used in Google Chrome."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/about-npm"},"NPM")," (Node Package Manager) manages the logistics of distributing Node.js software. It keeps track of your projects dependencies so others can download and use them seamlessly. You can read more on their ",(0,o.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/about-npm"},"about page"),"."),(0,o.kt)("h2",{id:"installing-nodejs-and-npm"},"Installing Node.js and NPM"),(0,o.kt)("p",null,"External Tutorials:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=6EwGA0StTeM"},"How to Install NodeJS/NPM on Windows (1m53s)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=Ue6g4udgbdI"},"How To Install NPM and NodeJs On Mac OS (1m22s)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"},"Follow the documentation on the npm website for Linux"))),(0,o.kt)("p",null,"Text Tutorial (Windows and macOS):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Go to the ",(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Node.js download page")," to download the installer for your system",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Windows: Choose the Windows Installer (.msi)",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If you don't know if you are 64-bit or 32-bit, ",(0,o.kt)("a",{parentName:"li",href:"https://support.microsoft.com/en-us/topic/determine-whether-your-computer-is-running-a-32-bit-version-or-64-bit-version-of-the-windows-operating-system-1b03ca69-ac5e-4b04-827b-c0c47145944b"},"use this Microsoft Support Page")))),(0,o.kt)("li",{parentName:"ul"},"macOS: Choose the macOS Installer (.pkg)"))),(0,o.kt)("li",{parentName:"ul"},"Run the installer with the default options"),(0,o.kt)("li",{parentName:"ul"},"After the installer has finished, you can close it")),(0,o.kt)("p",null,"To verify Node.js and ",(0,o.kt)("inlineCode",{parentName:"p"},"npm")," installed:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open a Terminal",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'Windows: Press the Windows key and search for a program called "Command Prompt" or "Terminal"'),(0,o.kt)("li",{parentName:"ul"},'macOS: Use the spotlight search and search for "Terminal"'))),(0,o.kt)("li",{parentName:"ul"},"Type in the command ",(0,o.kt)("inlineCode",{parentName:"li"},"node --version")," and press enter",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"You should see something like ",(0,o.kt)("inlineCode",{parentName:"li"},"v18.10.0")," printed"),(0,o.kt)("li",{parentName:"ul"},"As long as your number is greater than or equal to above, you are OK"))),(0,o.kt)("li",{parentName:"ul"},"Type in the command ",(0,o.kt)("inlineCode",{parentName:"li"},"npm --version")," and press enter",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"You should see something like ",(0,o.kt)("inlineCode",{parentName:"li"},"8.19.2")),(0,o.kt)("li",{parentName:"ul"},"As long as your number is greater than or equal to above, you are OK")))),(0,o.kt)("p",null,"If you do not see both version numbers, you did not install them correctly. You may need to restart."),(0,o.kt)("h2",{id:"about-version-control"},"About Version Control"),(0,o.kt)("p",null,"Sometime after the first midterm, there will be a lecture about version/source control. A version control system (VCS) is responsible for managing and tracking all changes to a collection of software files (called a repository). In team environments, it is extraordinarily useful. Each team member has their local copy of the repository and changes for specific files."),(0,o.kt)("p",null,"Git is the most popular version control system in use today. It might be helpful to familiarize yourself with Git before it is discussed in class. Here are some optional resources if you are interested:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=USjZcfj8yxE"},"Learn Git In 15 Minutes")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.notion.so/zarkom/Introduction-to-Git-ac396a0697704709a12b6a0e545db049"},"Notes")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=RGOj5yH7evk"},"Git and Github for Beginners (1 hour 28 minutes)")))),(0,o.kt)("p",null,"It is perfectly OK if Git seems too daunting. In the meantime, it is a good idea to use something to back up your work until Git is covered:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://onedrive.live.com/"},"Microsoft OneDrive")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.google.com/drive/download/"},"Google Drive")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.dropbox.com/desktop"},"Dropbox"))),(0,o.kt)("h2",{id:"installing-git"},"Installing Git"),(0,o.kt)("p",null,"External Tutorials:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=6EwGA0StTeM"},"How to install Git on Windows 10 (4m57s)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=26hzQ6KWhDM"},"How to install Git on Mac (4m36s)"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Prerequisite: ",(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=UBdiA0SJqLE"},"How to install Homebrew on MacOs (4m52s)"))))),(0,o.kt)("p",null,"Text Tutorial (",(0,o.kt)("strong",{parentName:"p"},"Windows"),"):"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Navigate to the Git ",(0,o.kt)("a",{parentName:"li",href:"https://git-scm.com/download/win"},"Downloads for Windows")," page"),(0,o.kt)("li",{parentName:"ol"},'Download the "Standalone Installer" for your system type',(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If you don't know if you are 64-bit or 32-bit, ",(0,o.kt)("a",{parentName:"li",href:"https://support.microsoft.com/en-us/topic/determine-whether-your-computer-is-running-a-32-bit-version-or-64-bit-version-of-the-windows-operating-system-1b03ca69-ac5e-4b04-827b-c0c47145944b"},"use this Microsoft Support Page")))),(0,o.kt)("li",{parentName:"ol"},"Run the installer with the default options"),(0,o.kt)("li",{parentName:"ol"},"After the installer is finished, you can close it"),(0,o.kt)("li",{parentName:"ol"},'Open Powershell (Press the Windows key -> Search for "Powershell")'),(0,o.kt)("li",{parentName:"ol"},"Run the command ",(0,o.kt)("inlineCode",{parentName:"li"},"git --version"))),(0,o.kt)("p",null,"You should see something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"git version 2.39.0\n")),(0,o.kt)("p",null,"Text Tutorial (",(0,o.kt)("strong",{parentName:"p"},"MacOS"),"):"),(0,o.kt)("p",null,"To install ",(0,o.kt)("inlineCode",{parentName:"p"},"git")," on macOS, you should first install ",(0,o.kt)("a",{parentName:"p",href:"https://brew.sh/"},"Homebrew"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Open a terminal (Spotlight Search -> Search for "Terminal")'),(0,o.kt)("li",{parentName:"ol"},"Paste the following command into the terminal and press enter: ",(0,o.kt)("inlineCode",{parentName:"li"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"')),(0,o.kt)("li",{parentName:"ol"},"After the Homebrew is installed, close, then reopen the terminal"),(0,o.kt)("li",{parentName:"ol"},"Run the command ",(0,o.kt)("inlineCode",{parentName:"li"},"brew install git")),(0,o.kt)("li",{parentName:"ol"},"After ",(0,o.kt)("inlineCode",{parentName:"li"},"git")," has been installed, close, then reopen the terminal"),(0,o.kt)("li",{parentName:"ol"},"Run the command ",(0,o.kt)("inlineCode",{parentName:"li"},"git --version"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"git version 2.39.0\n")),(0,o.kt)("h2",{id:"about-text-editors"},"About Text Editors"),(0,o.kt)("p",null,"You are allowed to use any editor that you prefer. This class recommends that you use ",(0,o.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"VSCode"),"."),(0,o.kt)("p",null,"If you are unfamiliar with VSCode, it is recommended that you watch ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=B-s71n0dHUk"},"this video (7m16s)")," or read ",(0,o.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/editor/codebasics"},"this page"),", particularly the sections on keyboard shortcuts, save/auto-save, and finding and replacing. There are a lot of features aimed to facilitate your productiveness - use them to your advantage."),(0,o.kt)("h2",{id:"installing-vscode"},"Installing VSCode"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open the ",(0,o.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/Download"},"VSCode download page")),(0,o.kt)("li",{parentName:"ol"},"Download the installer for your system (click the large button under your system's icon)",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Windows: If you don't know if you are 64-bit or 32-bit, ",(0,o.kt)("a",{parentName:"li",href:"https://support.microsoft.com/en-us/topic/determine-whether-your-computer-is-running-a-32-bit-version-or-64-bit-version-of-the-windows-operating-system-1b03ca69-ac5e-4b04-827b-c0c47145944b"},"use this Microsoft Support Page")))),(0,o.kt)("li",{parentName:"ol"},"Run the installer with the default options"),(0,o.kt)("li",{parentName:"ol"},"After the installer has finished, you can close it")),(0,o.kt)("h3",{id:"vscode-extensions"},"VSCode Extensions"),(0,o.kt)("p",null,"The majority of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Microsoft/vscode"},"VSCode is written in TypeScript"),", so a lot of TS/JS features come standard with the default installation. The following extensions may be useful:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint"},"VSCode ESLint")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"},"Prettier VSCode")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker"},"Code Spell Checker"))),(0,o.kt)("p",null,"You can install these extensions through the ",(0,o.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/editor/extension-marketplace"},"VSCode Extensions tab"),"."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest"},"VSCode Jest")," may also be helpful, but sometime acts strangely. Use with caution, default to ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run test")," in the terminal if it giving you issues."),(0,o.kt)("h3",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"You can ",(0,o.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/getstarted/settings"},"configure VSCode")," to your liking (",(0,o.kt)("inlineCode",{parentName:"p"},"File -> Preferences -> Settings"),"). Settings specific to TypeScript can be found by typing ",(0,o.kt)("inlineCode",{parentName:"p"},"typescript.")," in the search bar."))}d.isMDXComponent=!0}}]);