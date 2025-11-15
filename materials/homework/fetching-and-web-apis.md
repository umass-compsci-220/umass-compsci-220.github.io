---
sidebar_position: 7
---

# Fetching and Web APIs

There is no zip file containing the starter code to download. The remote GitHub repository you were invited to contains the starter code for the assignment.

:::warning

You must first uninstall the VSCode Extension "Jest" by Orta if you have this installed on your IDE. Use the extension [Jest Runner](https://marketplace.visualstudio.com/items?itemName=firsttris.vscode-jest-runner) instead. Failure to do so will result in your tests failing often. See [Rate Limiting](#rate-limiting) section for details.
:::

## Overview

During this project, you will work as a group to complete an application that collects weather data for universities. You will query various web interfaces to collect information that will be either passed along as arguments to other interfaces or analyzed on its own.

This assignment shifts some of the focus from implementation towards collaboration. Please try to make the most out of this assignment. Do your assigned tasks (no more - no less), work amicably with your group (meet in-person and talk with them), and learn from this experience.

Between three people, and the time you are given, everyone should be able to do their part. **No one should have to pick up the slack of other group members.** See the [collaborating section](#collaborating).

### Learning Objectives

- Collaborate with other programmers on a single project
- Combine different third-party web services into a single asynchronous application
- Chain and create `Promise` objects
- Declare and interact with `URL` and `URLSearchParam` instances
- Design and implement complete unit tests that use advanced techniques such as mock testing.

### Student Expectations

Students will be graded on their ability to:

- Correctly implement the functions [specified below](#programming-tasks)
- Resolve all linter warnings
- Follow the [coding](/materials/guidelines/syntax-and-code), [bad practice](/materials/guidelines/bad-practices) and [testing](/materials/guidelines/testing) guidelines
- Design full-coverage [unit-tests](#testing) for the functions they implemented
  - See the [testing guidelines](/materials/guidelines/testing#coverage) on coverage for more details
- Follow the [error handling](#error-handling-requirements), [code duplication](#code-duplication-requirements), [branch](#branch-requirements), and [pull request](#pull-request-requirements) requirements.
- Follow the [mock testing](#mock-testing) guidelines.
- Implementation of the [working example](#working-example).

There will be substantial manual grading for this homework.

## Getting Started

### JavaScript vs TypeScript

When looking though the starter code you may have noticed that there are no types to be found! What gives? For this homework, we're using JavaScript. There are a few reasons for this. First, we want you all to get some experience using it. Second, we felt that some of the types surrounding promises and asynchronous code were hindering learning for this HW rather than supporting it. You might wonder: If we don't have type signatures do we have to check all inputs to see if they are the valid type? The answer is no. If we say that a function you need to implement takes in a string and a number you can assume that the correct argument type will be passed to the function in our test. Remember, we're not trying to trick you!

### Git Installation & Authorization

For this homework you and your group will be required to use git and GitHub for managing your project. Git is a great tool for collaboration, version control, and much more. It is good to get in the habit of using it now, as it is a tool you will be using for the rest of your career.

If you don't have git on your machine, follow the instructions [here](https://github.com/git-guides/install-git) to install it.

Once you have git, you need to setup authorization for GitHub on your local machine. If you have not already set up authorization, follow along here.

The setup is different depending on whether you're using Windows, macOS, or Linux. The initial setup steps are as follows:

#### Linux setup:
1. Run: `sudo apt update`
2. Run: `sudo apt install gh`

#### macOS setup:
1. Install brew (https://brew.sh/) by running this script in your terminal
    - `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`
2. **IMPORTANT:** Follow the "Next steps" section in the output after the above script:
<p align="center">
  <img src="/img/git/macos_install.png" />
</p>
3. Run `brew install gh`

#### Windows setup:
1. Open Powershell
2. Run: `winget install --id GitHub.cli`
3. Click ok/continue in installer & wait for install
4. Restart Powershell

#### Login to Github w/ the Github CLI

After setup, run `gh` in your terminal to see if the install worked properly (if it says something to the effect of 'command not found', then it did not install properly). If you're using Powershell, make sure to restart it before trying to run `gh`.

1. Run in your terminal: `gh auth login`
2. Choose the options 'GitHub.com', 'HTTPS', 'Yes', then 'Login with a web browser'. The output should look something like this:
```
? What account do you want to log into? GitHub.com
? What is your preferred protocol for Git operations on this host? HTTPS
? Authenticate Git with your GitHub credentials? Yes
? How would you like to authenticate GitHub CLI? Login with a web browser
```

3. Copy the one-time code listed on your terminal
4. Press enter to open GitHub.com on your browser
5. Provide one-time code on GitHub in the opened browser
6. You should see a webpage on GitHub asking you to authorize GitHub CLI. Scroll down and click the green 'Authorize github' button.
7. You should see this output in your terminal:
```
✓ Authentication complete.
- gh config set -h github.com git_protocol https
✓ Configured git protocol
✓ Logged in as <your_github_username_here>
```

Now you should be able to `git clone`, `git push`, etc. without worrying about authorization. Note that you will have to do this for every machine you use your GitHub account on.

### URLs and Parameters

Source: [MDN - What is a URL?](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL)

A Uniform Resource Locator (URL) is an address for a unique resource on the web. It is what your browser uses to retrieve documents, webpages, JavaScript code, images, and other media and supporting files. Each valid URL first tells your browser where the machine processing the request (the web server) lives. The rest of the URL is used by that web server to service the request and give back the corresponding resource.

Here are some examples of URLs:

```text
https://www.google.com/
https://www.google.com/maps
https://www.google.com/search?q=how+to+exit+vim
```

URLs have a specific structure, which tell both the browser and the eventual web server what the request means.

![URL](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL/mdn-url-all.png)

- **The scheme** documents the protocol the network request should use
  - The web uses `https` or `http`
- **The authority** documents where the server that will process our request lives
  - Consists of the domain name and the port
    - The domain maps to a number (called the IP address) that is used to find the web server on the internet
    - The port is a wellknown number that describes where to talk to the web server once you reach the machine
      - Port 80 for http and 443 for https
- **The path** describes which resource we want to retrieve
  - When the web server first gets the request it will use the path to find the resource we are requesting
- **The parameters** describe how we want to query or provide input for that resource
  - The ask of the URL
  - What specifically is being search for?
  - > `?key1=value1&key2=value2` are extra parameters provided to the Web server. Those parameters are a list of key/value pairs separated with the & symbol. The Web server can use those parameters to do extra stuff before returning the resource. Each Web server has its own rules regarding parameters, and the only reliable way to know if a specific Web server is handling parameters is by asking the Web server owner.
- **The anchor** (irrelevant to this project) will tell the browser where specifically to scroll down to on the page

Looking more closely, at the URLs above:

- `https://www.google.com/` is a URL requesting the resource `/` at `www.google.com`
- `https://www.google.com/maps` is a URL requesting the resource `/maps` at `www.google.com`
- `https://www.google.com/search?q=how+to+exit+vim` is a URL requesting the resource `/search` at `www.google.com` providing a parameter `q` (short for query) with a value `how+to+exit+vim`

If you notice, the value of the `q` parameter looks a little weird. There are some characters that cannot be part of a URL (for example, a space) and some that are reserved for a specific purpose (like `&` separating parameters). To support passing these characters to parameters, strings first need to be put into a format that can be recognized as a URL. This is called [percent encoding](https://en.wikipedia.org/wiki/Percent-encoding). Luckily, there is a class in the Node.js standard library to handle all of that for you.

During this homework, you will construct URLs with specific parameters using the `URL` class in the Node.js standard library. As an example, if I wanted to make a function that constructs a Google search URL from a given query, I would write:

```ts
import { URL } from "url"; // Import the URL class from the url library

function makeSearchURL(query: string): string {
  // Construct a new URL object using the resource URL
  const searchURL = new URL("https://www.google.com/search");

  // Access the searchParams field of the constructed url
  // The field holds an instance of the URLSearchParams
  // Add a new "q" parameter with the value of the functions input
  searchURL.searchParams.append("q", query);

  return searchURL.toString(); // Return the resulting complete URL
}

makeSearchURL("vim tutorial youtube");
// -> https://www.google.com/search?q=vim+tutorial+youtube
makeSearchURL("How to draw the & symbol?");
// -> https://www.google.com/?q=How+to+draw+the+%26+symbol%3F
makeSearchURL("你好");
// -> https://www.google.com/search?q=%E4%BD%A0%E5%A5%BD
```

More documentation, and examples, for the `URL` and `URLSearchParams` class can be found in the [Node.js standard library documentation](https://nodejs.org/dist/latest-v18.x/docs/api/url.html).

### Third-party APIs

Source: [MDN - Introduction to web APIs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction)

An Application Programming Interface (**API**) is the interface exposed by an application for other pieces of software to interact with. Web APIs (APIs on the world wide web) are a popular mechanism for exposing information and providing functionality to websites or other programs. A lot of websites are just an interface for interacting with a series of web APIs. These interfaces allow developers to create complex programs without doing all the heavy lifting.

In this homework, you will be interacting with a few third-party web APIs that provide information about universities, longitude and latitude, and weather data. These web APIs have various URL parameters that provide different functionality.

These web APIs will return unformatted JSON results. It is recommended that you either use Firefox or install [this chrome extension](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa) so the results become readable. As an example:

![Raw JSON](/img/raw-json.png)

Could look like this instead:

![Formatted JSON](/img/formatted-json.png)

You will be provided with URLs to various APIs and the parameters they accept. It is your job to research these APIs further, come up with examples, and understand their behavior.

### Fetching Resources

**Fetching** is the process of retrieving the content from a URL across the web. Before your search results are displayed, your browser first needs to fetch the contents of the page located at the URL.

As you might imagine, this process is done asynchronously. Your browser does not wait for a fetch request to return before it allows you to do anything. It will fetch the requested page, allow you to switch tabs or type in other queries, and _then_ after the fetch resolves it will display the content.

Here is an example of `fetch`:

```js
import path from "path"; // Node.js standard library for resolving arbitrary paths (like those in a url)

fetch("https://spire-api.melanson.dev/instructors/?search=marius+minea") // fetch the /instructions resource with a "search" parameter
  .then(res => res.ok ? res.json() : Promise.reject(new Error(`Error in response: ${res.statusText}`))) // We need to check if there was an error in the response.
  .then(
    json =>
      Array.isArray(json.results) && json.results.length > 0 // This API returns an object with a "results" field as an array of objects
        ? Promise.resolve(json.results[0]) // Resolve with the first object if present, an object with a url, name, and id
        : Promise.reject(new Error("No results found.")) // Reject if nothing is present
  )
  .then(data => fetch(path.join(data.url, "/sections/"))) // Fetch the associated /sections resource for an instructor page
  .then(res => res.ok ? res.json() : Promise.reject(new Error(`Error in response: ${res.statusText}`))) // Again, we need to check if there was an error in the response.
  .then(json => console.log(`Marius Minea has taught ${json.count} different sections at UMass!`)) // Do something with the final result
  .catch(err => console.log("Unable to get section information: " + err));
```

#### Rate Limiting

An important aspect of fetching is [rate-limiting](https://www.cloudflare.com/learning/bots/what-is-rate-limiting/) and self-throttling (preventing your code from sending too many requests). With each request, there is computational overhead on both ends of the network - your local machine sending a request and waiting for the response, _and_ a server listing for requests, querying internal services, and formulating a response. Consider a chat app (Discord), if you try sending a bunch of messages at once the then the client (the software on your computer) will stop you. This protects Discord's servers from getting too many (mostly invalid) requests. Which allows valid requests to get serviced more quickly.

When using publicly available APIs (the ones we are using in this homework), make sure you play by their rules and do not send more requests than needed. Otherwise you run the risk of being rate-limited (unable to send requests for a duration of time) or lose access to the service (banned).

For this HW we have set up a caching server at [https://220.maxkuechen.com/](https://220.maxkuechen.com/). This server will relay requests to the proper APIs and will [cache](<https://en.wikipedia.org/wiki/Cache_(computing)>) the response for some period. As a result we are requesting information from the actual API much less frequently. While once API call is very cheap, think about how often your tests and autograder tests get run over the course of the HW for 200+ students.

In this HW you will be working with the [geocode](https://geocode.maps.co/) API, the [universites](https://github.com/Hipo/university-domains-list) API, and the [weather](https://open-meteo.com) API, as well as other APIs you choose yourself. Feel free to read their respective docs. You will be interacting with these APIs through our caching server. Each programming task outlines what endpoint to fetch the data from.

##### Jest Extension by Orta

The Jest Extension by Orta automatically runs all your test cases each time you make a code change. This results in API calls, which as explained above, is not ideal. Please disable this extension, and use [Jest Runner](https://marketplace.visualstudio.com/items?itemName=firsttris.vscode-jest-runner) instead.

## Testing

See [jest documentation: "Testing Asynchronous Code"](https://jestjs.io/docs/asynchronous).

Testing asynchronous code is a little different from testing synchronous code. One way or another, the testing framework needs to know that there is pending work to be done. **We tell the testing framework we are still "doing" work by returning a `Promise` in the test function rather than returning nothing**.

As an example, one of the given tests returns a `Promise` that has a handler that does the assertions on the result.

```js
describe("fetchGeoCoord", () => {
  it("follows type specification", () => {
    const promise = fetchGeoCoord("University of Massachusetts Amherst");

    return promise.then(result => {
      assert(typeof result === "object"); //  Assert the result is an object
      assert(typeof result.lon === "number"); // Assert that the lon value is a number
      assert(typeof result.lat === "number"); // Assert that the lat value is a number
      assert(typeof result.importances === "object"); // Assert that the importances value is an object
      assert(Object.keys(result).length === 3); // Assert there are only two keys in the object
    });
  });
});
```

Your tests should follow this similar pattern (`return foo().then(result => {/* assertions */ })`). Alternatively, you could use `async`/`await` syntax.

```js
describe("fetchGeoCoord", () => {
  it("follows type specification", async () => {
    const result = await fetchGeoCoord("University of Massachusetts Amherst");
    assert(typeof result === "object"); //  Assert the result is an object
    assert(typeof result.lon === "number"); // Assert that the lon value is a number
    assert(typeof result.lat === "number"); // Assert that the lat value is a number
    assert(typeof result.importances === "object"); // Assert that the importances value is an object
    assert(Object.keys(result).length === 3); // Assert there are only two keys in the object
  });
});
```

If you want to extract the resolve or rejection value, you can use the `.resolves` and `.rejects` matchers. These will error if the promise does not do as stated.

```ts
test("fetchUniversities returns empty results", () => {
  return expect(fetchUniversities("place that does not exist")).resolves.toEqual([]);
});
```

Use what works best for you and your group members.

Additionally, some methods may take a while to complete - but this is OK as it is expected behavior with a large amount of requests. You may need to increase the jest test timeout from 5000ms (5 seconds) to something around 30 seconds. You can put this at the top level on your test file to change the timeout:

```ts
// 1000ms
const SECOND = 1000;
// 30 second timeout
jest.setTimeout(30 * SECOND);
```

### Mock Testing

In addition to the testing above, some functions will require you to test them by mocking `fetch`. In other words, you'll be intercepting the `fetch` call and have it resolve to some predictable value. There are a number of reasons for why we might want to do this.

1. The API might respond differently to the same query. For example, when fetching the current weather the temperature will obviously be different during the day. If we have some function that does different actions based on how warm it is, we run into a problem. With mock testing, we can guarantee that fetch will return a response consistent with what we're trying to test.

2. We want to know how our code responds to different API scenarios that we cannot test for. For example, does our code correctly handle an Internal Server Error?

3. Finally the API might be rate limited or unavailable. This makes testing hard and expensive. With mock testing we can reserve API calls to the API for only some tests saving time and money. See the documentation for more information on this: https://www.npmjs.com/package/jest-fetch-mock.

The lecture slides [Testing Asynchronous Code in Week 10](https://umamherst.instructure.com/courses/8875/files/4853295?module_item_id=887630) give a step by step description of how to properly mock `fetch`.

Some functions will require you to write mock tests explicitly. You are welcome to write mock tests for other functions as well.

If you'd like to mock every test in a `describe` block, you can follow this format:
```ts
// Other imports
import fetchMock from "jest-fetch-mock";

describe("exampe tests", () => {
  beforeEach(() => {
    fetchMock.enableMocks();
  });

  // Both tests will have mocking enabled for fetch
  it("test 1", () => { /* Test logic here */ });
  it("test 2", () => { /* Test logic here */ });

  // Last line of describe block:
  afterEach(() => {
    fetchMock.resetMocks();
    fetchMock.disableMocks();
  });
});
```
This is one way to guarantee all the tests in your `describe` block will mock `fetch`. You can also follow the above mentioned lecture slides, or any other method that works for you. When in doubt, check the jest-fetch-mock documentation in [Resources](#resources) and use a debugger to ensure that you are indeed mocking or not mocking.

## Requirements

### Error Handling Requirements

For all the [programming tasks](#programming-tasks) below, if the response from the API is not okay, then the promise should reject with an **Error** object that contains an informational error message, or the message the programming task tells you to reject with in the outlined scenario. This rejection reason should propagate, meaning the returned promises from these functions should reject with the same reason. You should not try to recover in any way.

### Code Duplication Requirements

This is the first assignment where there is more than one source file. You should not have duplication between two source files _or_ within one source file. There is the `./src/utility.js` file used to declare and export members accordingly.

### Git Branch Requirements

Of the files in this homework, there are 3 of them that each should be completed by a different group member: `fetchGeoCoord.js`, `fetchCurrentTemperature.js`, and `fetchUniversities.js`. The respective assigned group member is responsible for completing both functions of the respective file, and its test file with tests for all the functions in it, and they must do so on a [branch](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches). The branch should be created from the **main** branch, and its name should be as follows: `[my first name]-[file name]`. For example, if my name is John and my group and I have decided I will be doing the `fetchGeoCoord.js` file, I will create a branch from main called `john-fetchGeoCoord`. This will be demonstrated in the [Git Tutorial](#git-tutorial) section. So all in all, the branch should only modify 2 files: the file the group member is responsible for, and its corresponding test file. **We will check to see that each member creates their branches in this way and that they're the only member to work on that branch. This will be part of the manual grading for this assignment.**

You are not required to create any other branches for the homework. However, creating branches for new features of a project is good practice. For example, it would be best practice to create branches for `universityWeather.js` (see below for description) and your group's working example, and then merge them into main upon their completion.

### GitHub Pull Request Requirements

When a member of your group believes they've finished working on the branch they're responsible for (one of `fetchGeoCoord`, `fetchCurrentTemperature`, or `fetchUniversities`), they will create a pull request. The other 2 members of the group **must review the pull request** and approve it (by leaving a comment or clicking the approve button) if it's ready to be merged into main. The only pull requests your group are required to create and merge into main are pull requests for the branches outlined in [Branch Requirements](#branch-requirements). **This will be part of the manual grading for this assignment.**

This whole process is covered in the [Git Tutorial](#git-tutorial) section.

## Git Tutorial

Here, we will give a short overview of how to do all the git operations your group will need to complete this assignment.

Before trying anything here, make sure to follow the steps in [Git Installation & Authorization](#git-installation--authorization).

### Setting Up the Repo

Open the GitHub repo you were invited to by email and click the green code button and copy the https link to the repo into your clipboard:

<p align="center">
  <img src="/img/git/1.png" />
</p>

On your machine, open your terminal of choice in the directory in which you want the repo, and run the command `git clone <link you just copied in the previous step>` (without the angle brackets of course):

<p align="center">
  <img src="/img/git/2.png" />
</p>

Now the repo is on your local machine!

### Creating a Branch

When you're ready to create a branch, open the directory containing your local repo in VSCode and click the Source Control tab on the left, click the 3 dots and click the 'Create Branch' option:

<p align="center">
  <img src="/img/git/3.png" width="75%" height="75%" />
</p>

In the opened console at the top of the screen, type the name of the branch you wish to create using the previously mentioned naming convention:

<p align="center">
  <img src="/img/git/4.png" />
</p>

Now click the 'Publish Branch' button in the Source Control tab:

<p align="center">
  <img src="/img/git/5.png" />
</p>

Now, in the bottom left corner, you should see that you are now on the branch you just created:

<p align="center">
  <img src="/img/git/6.png" />
</p>

If you want to switch the branch you're working on, click the button with the branch name in the bottom left corner and select the branch you want to switch to:

<p align="center">
  <img src="/img/git/7.png" />
</p>

### Committing and Pushing Changes

Once you write some code and make modifications to your homework, you are ready to commit your changes and push them to the remote repository on GitHub (in the below pictures, the modifications were the addition of a `console.log` statement to the `utility.js` file).

In the Source Control tab on the left, enter a meaningful commit message and click the 'Commit' button:

<p align="center">
  <img src="/img/git/9.png" width="95%" />
</p>

<p align="center">
  <img src="/img/git/10.png" />
</p>

Finally, click the 'Sync Changes' button:

<p align="center">
  <img src="/img/git/11.png" />
</p>

Your changes are now on the remote repository!

### Pull Requests

Whenever a branch has been pushed to, on the remote repository on GitHub you will see this button appear:

<p align="center">
  <img src="/img/git/13.png" />
</p>

If you believe your work on that branch is done and you're ready to merge that branch into main, you can click the 'Compare & pull request' button above. Now create your pull request detailing the changes you've made:

<p align="center">
  <img src="/img/git/14.png" />
</p>

Once your two other group members have approved the pull request, click the 'Merge pull request' button to merge that branch into main:

<p align="center">
  <img src="/img/git/15.png" />
</p>

And you've successfully completed a pull request!

You will see this option to delete the branch after merging. **Do not** delete the branch as we will be looking at them to grade your homework. However, note that branches can always be restored.

<p align="center">
  <img src="/img/git/16.png" />
</p>

### Git Notes

- It is good practice to commit often.
- If you mess something up on a branch (this could be main), remember that you can always revert to a prior commit.
- GitHub allows you to view a branch's commit history.
- If you encounter any merge conflicts when resolving your pull requests, refer to the [documentation here](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github) on how to handle them.
- While git is very powerful, it's also complex, and everyone has trouble using it time-to-time - so don't be discouraged! Reach out to your teammates first (this is group work!), and if things still don't work, ask, ideally directly in office hours.

## Resources

- [MDN Web Docs: Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [MDN Web Docs: Using Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
- [MDN Web Docs: How to use promises](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises)
- [jest-fetch-mock](https://www.npmjs.com/package/jest-fetch-mock)

## Programming Tasks

### `fetchGeoCoord.js`

Write the following functions inside of `fetchGeoCoord.js`. These functions should be implemented by the first group member on a separate git branch. See the [Git Branch Requirements](#git-branch-requirements) section for instructions.

#### `fetchGeoCoord`

```ts
interface GeoCoord {
    lon: number,
    lat: number,
    importances: number[]
}
```

```ts
export function fetchGeoCoord(query: string): Promise<GeoCoord> {
  // TODO
}
```

This function should take in a query string and return a `Promise` that fulfils with the first geo-coordinate result. If the `ok` property of the returned [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) object is false, it should reject with an `Error` with the `statusText` property of [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) as its error message. The above interface tells you what the object looks like (note that interfaces are a feature of TypeScript and are not in JavaScript).

Use the following API, <https://220.maxkuechen.com/geoCoord/search?q=query+goes+here>, to retrieve your results. The base URL should be `"https://220.maxkuechen.com"` and there should be one URL search parameter `q` for the query. This API returns an array of objects containing a `lon`, `lat`, and `importances` field.

See the [getting started section on queries](#urls-and-parameters) if you are confused. Use the [`Number.parseFloat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat) function to convert to a number if needed.

#### `locationImportantEnough`

```ts
export function locationImportantEnough(place: string, importanceThreshold: number): Promise<boolean> {
    // TODO
}
```

This function takes a string for a place and a number for the importanceThreshold. It should call `fetchGeoCoord` and return a `Promise` that fulfils with `true` if the maximum importance value in the importances field is greater than the importanceThreshold that was passed in, `false` otherwise. This function should propagate errors from `fetchGeoCoord`.

You will need to write mock tests for this function since places have different importance values during the day. You should also test what happens if the `ok` property of the API's returned [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) object is false. You need to write at least three mock tests.

### `fetchCurrentTemperature.js`

Write the following functions inside of `./src/fetchCurrentTemperature.js`. These functions should be implemented by the second group member on a separate git branch. See the [Git Branch Requirements](#git-branch-requirements) section for instructions.

#### `fetchCurrentTemperature`

```ts
interface TemperatureReading {
  time: string[];
  temperature_2m: number[];
}

export function fetchCurrentTemperature(coords: GeoCoord): Promise<TemperatureReading> {
  // TODO
}
```

This function should take in a longitude and latitude and return a `Promise` that fulfils with an object. The object should have two fields called `time` and `temperature_2m`. The `time` field should be an array of times and the `temperature_2m` should be an array of corresponding temperature measurements. If the `ok` property of the returned [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) object is false, it should reject with an `Error` with the `statusText` property of [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) as its error message. The above interface tells you what the object looks like (note that interfaces are a feature of TypeScript and are not in JavaScript).

Use the <https://220.maxkuechen.com/currentTemperature/forecast?latitude=40&longitude=40&hourly=temperature_2m&temperature_unit=fahrenheit> API to retrieve your result. It has `latitude` and `longitude` parameters. You should set the `hourly` parameter to `temperature_2m`, and the `temperature_unit` parameter to `fahrenheit`.

#### `tempAvgAboveAtCoords`

```ts
export function tempAvgAboveAtCoords(coords: {lat: number, lon: number}, temp: number): Promise<boolean> {
    // TODO
}
```

This function should call `fetchCurrentTemperature` with the supplied coordinates and then return a `Promise` that fulfils with `true` if the average of the temperatures in `temperature_2m` is greater than temp, `false` otherwise. This function should propagate errors from `fetchCurrentTemperature`.

You will need to write mock tests for this function since temperatures change during the day. You should also test what happens if the `ok` property of the API's returned [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) object is false. You need to write at least three mock tests.

### `fetchUniversities.js`

Write the following functions inside of `./src/fetchUniversities.js`. These functions should be implemented by the third group member on a separate git branch. See the [Git Branch Requirements](#git-branch-requirements) section for instructions.

#### `fetchUniversities`

```ts
export function fetchUniversities(query: string): Promise<string[]> {
  // TODO
}
```

This function should take in a query string and return a `Promise` that fulfils with an array of university names. If the `ok` property of the returned [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) object is false, it should reject with an `Error` with the `statusText` property of [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) as its error message.

Use the following API, <https://220.maxkuechen.com/universities/search?name=name+query+goes+here>, retrieve your result. It has a `name` parameter to search for universities with a similar name. **If there are no results (the returned JSON is an empty array), resolve to an empty array.**

#### `universityNameLengthOrderAscending`

```ts
export function universityNameLengthOrderAscending(queryName: string): Promise<boolean> {
    // TODO
}
```

The function should call `fetchUniversities` with the given query and then return a `Promise` that fulfils with `true` if the length of the strings in the resulting array are strictly ascending, `false` otherwise. This function should propagate errors from `fetchUniversities`.

You will need to write mock tests for this function since the order of university names from the API is not guaranteed. You should also test what happens if the `ok` property of the API's returned [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) object is false. You need to write at least three mock tests.

### `fetchUniversityWeather`

- This function should be done as a group, after each member has completed their individual tasks

Write a function, inside of `./src/universityWeather.js`, with the following type signature:

```ts
interface AverageTemperatureResults {
  totalAverage: number;
  [key: string]: number;
}

export function fetchUniversityWeather(
  universityQuery: string,
  transformName?: (s: string) => string
): Promise<AverageTemperatureResults> {
  // TODO
}
```

This function should take in a query string and return a `Promise` that fulfils with an object that contains the total average and individual average temperatures of all universities matching the given `universityQuery` string. **The optionally provided `transformName` function should be applied to each university name before it is transformed into a `GeoCoord`.** The total average should be in a field called `totalAverage` and the individual averages should use the name of the university as a key. The keys should be the original, untransformed, names. The above interface tells you what the object looks like (note that interfaces are a feature of TypeScript and are not in JavaScript).

If there are no matching universities you should reject with an error:

```js
new Error("No results found for query.");
```

As an example, if there were three universities found by the query (University One, University Two, University Three), then the object might look something like this:

```js
{
  totalAverage: 50,
  "University One": 60,
  "University Two": 40,
  "University Three": 50
}
```

### `fetchUMassWeather`

- This function should be done as a group, after completing all previous tasks

Write a function, inside of `universityWeather.js`, with the following type signature:

```ts
export function fetchUMassWeather(): Promise<AverageTemperatureResults> {
  // TODO
}
```

This function should find the average temperature of all universities in the "University of Massachusetts" system. Use an appropriate function from a previous task to compute your result. Return the result unchanged.

You may notice that the following query, <https://220.maxkuechen.com/geoCoord/search?q=University+of+Massachusetts+at+Amherst>, returns no results, but <https://220.maxkuechen.com/geoCoord/search?q=University+of+Massachusetts+Amherst> does. You will need to use the `transformName` parameter to cover this case. Look at the documentation for the [`String` object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and figure out how to handle it.

### `fetchUMichWeather`

- This function should be done as a group, after completing all previous tasks

Write a function, inside of `universityWeather.js`, with the following type signature:

```ts
export function fetchUMichWeather(): Promise<AverageTemperatureResults> {
  // TODO
}
```

This function should find the average temperature of all universities in the "University of Michigan" system. Use an appropriate function from a previous task to compute your result. Return the result unchanged. This function should only be a single statement.

### Working Example

- This task should be completed as a group

Using any free ones you can find (here is a [a long list](https://github.com/public-api-lists/public-api-lists)), write a short program inside of `main.js` that calculates some interesting statistics.

**Requirements:**

- Must use `fetch`, either directly or indirectly
- At least one new type of API call
  - The program cannot consist of functions defined in [Programming Tasks](#programming-tasks)
  - You must use a new API
- Must use at least two different types of data
  - These data items can be from the same API (different endpoint) or different APIs
    - Stores, and their names, would count as one
    - Brightness readings would count as one
- The program must take input from the user
  - Read the [Node.js documentation](https://nodejs.org/api/readline.html#readline)
- The result of the program must be output somehow (either in the console or into a file)
  - You could use the [`fs` library](https://nodejs.org/api/fs.html) to read/write to a JSON file
    - See HW6 `./include/data.ts` for examples
- The program must be documented with what it calculates exactly
  - Write a multi-line comment at the top of the file
  - A few sentences is fine
- The program must produce a correct result according to its documentation
- At least 25 lines of code (after running `npm run format` - ignoring the description comment)

Pick something interesting and try to have fun with it. As long as you meet the requirements stated above, you should receive full credit.

You are not required to write tests for this code, however your code should execute without errors and work as intended.

### If you are worried about being rate limited with the API you have choosen

If you would like to cache the results of an API call to an API of your choice, you can use the 220 caching server that we described in the [Rate Limiting Section](#rate-limiting). Here is an example of the URL for caching the [https://www.boredapi.com](https://www.boredapi.com).

`https://220.maxkuechen.com/fetch/?url=https://www.boredapi.com/api/activity?type=recreational`.

You'll notice that some APIs, like the one above, give different responses every time. However, since we cached the response, the result will always be the same. For convenience, we are providing the following route that does not cache. You should not use this route in tests.

`htps://220.maxkuechen.com/fetch/noCache/?url=https://www.boredapi.com/api/activity?type=recreational`.

You may use the caching server for any API call in the working example, but it is not a requirement.

## Collaborating

We recognize that this may be the first time that you have had to work in a team in your CS classes, so we want to give you the proper tools to succeed:

> _Why do we have to work in a team?_

- In other CS classes, such as 320 or 326 you will have to work closely with a team. Also, once you graduate and get a job there will be many instances where you will be asked to collaborate with others. We want students to be prepared to work with others and make sure you all have the tools to succeed later in your career.
- The project can have a bigger scope and can be more complex when students are able to closely collaborate.

> _Why can't we choose our own groups?_

- Groups are random to give students a chance to work with people they typically wouldn't. We hope that this will be a way for students to get to know each other and step out of their comfort zones.
- We will not accommodate students switching groups to work with their friends, so don't ask.

> _How should we communicate and meet to work?_

- This is up to you as a team, but we have a few tips.
- Reach out to your team early, everyone has busy schedules and communicating early is the best way to have time to collaborate.
- You are welcome to create your own group chat on some external platform (iMessage, Discord, WhatsApp, etc.), or you can create a group DM on CampusWire. Use the initial email thread to organize this.

- Meet physically on campus or virtually on zoom or discord to actually discuss and work on the project. You can reserve a study space in the library here: <https://libcal.library.umass.edu/reserve/groupstudyrooms>

> _How should we collaborate?_

- Even though this is a group assignment, we expect that every student understands all the concepts covered by this homework and understands the entire code that is submitted by the group.
- All team members should contribute equally. It is natural that some team members will be more experienced with some topics of the class. It is your responsibility to ensure that everyone understands the material.

> _What if there are problems in our group?_

- If you feel that there some team members are not contributing equally, or feel that there are any other problems, please make a private post on Campuswire.
- It is expected that all students will abide by the Equity and Inclusion Statement and Academic Honesty policies posted on Canvas when interacting with other students.

## Submitting

Only one group member should submit the final draft to Gradescope. Please add the other group members to the submission using the "Group Members" feature.

See [this help article](https://help.gradescope.com/article/m5qz2xsnjy-student-add-group-members) if you are unsure how to do so.
