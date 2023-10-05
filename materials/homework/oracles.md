---
sidebar_position: 4
---

# Oracles

- Please download the homework [here](https://github.com/umass-compsci-220/public-materials/raw/main/homework/04-oracles.zip)
- This project is divided into two homeworks (HW4a, HW4b)
  - Both carry the weight of a full homework

## Overview

In this assignment, you will develop an _oracle_ to test (possibly broken) solutions to the _Stable Matching Problem_. This assignment is different in that:

- Your purpose is not to solve the problem, but to test whether a solution given to you is correct. That is, all code you write will be tests and supporting code for tests.
- There might be multiple correct outputs for a single input. Thus, you will need to test _properties_ of the output, and make sure you are considering enough properties so anything that satisfies all of them (i.e. passes all your assertions) is correct.

This homework is divided into two assignments (with separate due dates). You will have one week to complete each part. Part one will focus on writing a function that, if given valid inputs, produces correct outputs. Part two will be similar, but will focus on verifying that the steps of a function are correct.

### Learning Objectives

- Practice writing property based tests
- Practice reading, and reasoning about, a problem's specification

### Student Expectations

Students will be graded on their ability to:

- Correctly implement the functions [specified below](#programming-tasks)
  - Using **public** auto-grader tests
  - **There are no private autograder tests**
- Resolve all linter warnings
  - **There will be credited grading for this (2.5%)**
  - See the section on [linting and formatting assignments](/materials/tutorials/assignments/linting-and-formatting) for more details
- Follow the [coding](/materials/guidelines/syntax-and-code), [bad practice](/materials/guidelines/bad-practices) and [testing](/materials/guidelines/testing) guidelines
  - **There may be manual grading regarding these guidelines**

**You are not required to write anything inside of the `.test.ts` file.**

### Resources

There is an [examples](#examples) section that goes through input and output

## Getting Started

In basic terms, **an oracle is a function that answers a yes or no question**. In your case, **you are writing an oracle to decide if the supplied function correctly solves the [_Stable Matching Problem_](#the-stable-matching-problem)**.

**Your oracle’s job is to generate and feed test inputs to a given "solution" (possibly incorrect) then test the correctness of the output.** In the past, you did this by comparing the output to a precomputed "right answer". This assumes two things: there is only one right answer, and that it is easy for you to find it.

In the real world, either of these can be false. (How do you know what the right answer to an arbitrary instance of the problem is if the original problem was to write a program to find it?)

**You should write code that is well structured, readable, and employs the right abstractions (higher-order functions/objects).** This will make it easier to test and debug. **Avoid code duplication**, which makes it tedious to inspect and maintain your code when changes are needed.

### The Stable Matching Problem

You can learn more about the Stable Matching Problem from [Wikipedia](https://en.wikipedia.org/wiki/Stable_marriage_problem), but a summary of the problem is as follows:

Imagine there are two groups, $A$ and $B$, both with $n$ members. We need to split the two groups into pairs (called a **matching**) consisting of one member from each group.

More formally, we need a **perfect matching** where every member in group $A$ is paired with _exactly one_ member from group $B$, and vice versa (everyone is in a pair).

However, **everyone has a preference** with who they are matched with. Every member from each group ranks all members from the other group by preference.

A solution to the stable matching problem will take as input the two groups and everyone's preference. As output, it will produce a **stable matching**. A matching is **stable** if there do not exist two matched pairs, $[a_1, b_1]$ and $[a_2, b_2]$, such that:

- $a_1$ prefers $b_2$ over $b_1$, and
- $b_2$ prefers $a_1$ over $a_2$

Alternatively, a matching is not stable (**unstable**) if there exist members $a$ and $b$ who are not paired with each other, but prefer each other over their current pair.

### Companies and Candidates

For this assignment, our groups will consist of **companies** and **candidates**. Each company has a ranking of all candidates, in order of preference. And each candidate has a ranking of all companies. Preference lists will be represented as arrays, with the first preference at index $0$ and the last preference at index $n - 1$.

Companies and candidates are each assigned a number between 0 and $n - 1$. Thus, a two-dimensional array can represent the preferences of a single group:

```ts
// n = 3 = There are three companies. = There are three candidates.
[
  [0, 1, 2], // Index 0: Company 0's preference list
  [1, 2, 0], // Index 1: Company 1's preference list
  [0, 2, 1], // Index 2: Company 2's preference list
];
```

Each element of this 2D array is a preference list. Each element of a preference list is a candidate's number. Company 0's first preference is Candidate 0, then Candidate 1, then lastly Candidate 2. Candidate preference lists are structured the same way. However, each number corresponds to a company rather than a candidate.

Inside of `stableMatching.d.ts`, you will find the following type definitions:

```ts
interface Hire {
  company: number;
  candidate: number;
}

type StableMatcher = (companies: number[][], candidates: number[][]) => Hire[];
```

A `Hire` is an object with two fields that represents a matching between a company and candidate. A `StableMatcher` is a function that takes in two 2D arrays of numbers, specifically the preferences of the companies and candidates, and returns an array of `Hire` objects (`Hire[]`).

Along with these type definitions, there are two relevant exported members (functions), both of type `StableMatcher`. They are: `STABLE_MATCHING_SOLUTION_1` and `FLAWED_STABLE_MATCHING_SOLUTION_1`. They are used inside the provided tests (`oracle.test.ts`) to check against your solution.

Their implementations are [obfuscated](https://en.wikipedia.org/wiki/Obfuscation) inside of `stableMatching.js`. Looking at their source code would be counter-productive to the assignment and not particularly useful. As the auto-grader will tests your oracle against numerous correct and incorrect solutions to the problem.

## Programming Tasks

### Part A

1. Write a function called `generateInput`:

```ts
export function generateInput(n: number): number[][] {
  // TODO
}
```

This function should produce an $n \times n$ array of preferences for companies or candidates. This will be used as input for testing a given solution. Your function should generate **random values** in order to test a given solution with a broad spectrum of input.

Constructing a function to complete this is non-trivial. Provided below is a description of the Fisher-Yates shuffling algorithm:

```txt
-- To shuffle an array a of n elements (indices 0..n-1):
for i from n−1 down to 1 do
     j ← random integer such that 0 ≤ j ≤ i
     exchange a[j] and a[i]
```

An function that returns a random number between some range can be done using `Math.random` and `Math.floor`:

```ts
// Returns a random integer i where min <= i < max
function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min)) + min;
}
```

#### Common Issue - 'Type `number` is not assignable to type `never`'

TypeScript uses [type inference](https://www.typescriptlang.org/docs/handbook/type-inference.html) to infer the types of your variables from assignment and context. This means that the majority of the time, we can omit type annotations on variables:

```ts
// Compiler:
// x is assigned to 5
//  -> 5 is a number
//  -> x must be a number
let x = 5;
```

However, sometimes we need to assist the compiler and tell it what we mean. Initializing 2D arrays is one of those cases. To aid the compiler, provide it a type annotation.

```ts
// Compiler:
// type annotation is present
//  -> my2DBoolArray is the user specified type of boolean[][]
const my2DBoolArray: boolean[][] = [];
```

#### Common Issue - 'Unsafe assignment of type `any[]` to variable of type `number[]`'

Similar to situation described above, creating an array using the array constructor without a type parameter (`new Array(...)`) does not give the compiler enough context. A new array? Of what type? Try explicitly telling the compiler what type of array you are trying to construct.

```ts
// Create a boolean array of length 5, fill it with false
my2DBoolArray[0] = new Array<boolean>(5).fill(false);
```

**Although you are not required to write tests, you should confirm your `generateInput` works correctly before attempting `stableMatchingOracle`.**

2. Implement `stableMatchingOracle` inside of `oracles.ts`.

```ts
export function stableMatchingOracle(f: (companies: number[][], candidates: number[][]) => Hire[]): void {
  // TODO
}
```

This function is an oracle for the Stable Matching Problem. If `f` is a valid solution of the stable matching problem, it should do nothing (the return type is `void`). If `f` is an invalid solution, it should throw an `AssertionError` (use `assert(...)`).

As a reminder, the `assert` function will take in a logical expression and an optional message as arguments (`assert(x === 1, "X should be one.")`). If the logical expression is [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy), then `assert` will throw an `AssertionError` containing the message. If the expression is truthy (not falsy) `assert` will do nothing.

A template for the `stableMatchingOracle` function is given inside of `oracles.ts`. To do well, you should carefully consider all the different ways in which the output could be invalid for the original problem statement. You may assume the output is of the right type, `Hire[]`, but nothing else.

As mentioned in the [student expectations](#student-expectations), you should be employing proper coding abstractions (avoid code duplication). When implementing this function, look at all the related data a company or candidate has. What are the common operations and queries that you might do on this data? Is there any way to group this together or pre-compute anything? **Using objects may be helpful.** Think before you code.

### Part B

Part B will be released next week.