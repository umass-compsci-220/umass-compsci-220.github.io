---
sidebar_position: 3
---

# Lists and Closures

- Please download the project [here](https://github.com/umass-compsci-220/public-materials/raw/main/homework/03-lists-and-closures.zip).
- You may edit any file inside of `./src/`, **DO NOT make any edits to any file inside of `./include/`**

## Overview

In this assignment, you will work with lists and closures.

### Learning Objectives

- Practice writing and reasoning about lists
- Practice writing and reasoning about closures
- Practice writing and reasoning with recursion

### Student Expectations

Students will be graded on their ability to:

- Correctly implement the functions [specified below](#programming-tasks)
- Resolve all linter warnings
- Follow the [coding](/materials/guidelines/syntax-and-code), [bad practice](/materials/guidelines/bad-practices) and [testing](/materials/guidelines/testing) guidelines
- Design full-coverage [unit-tests](#testing) for the functions they implemented
  - See the [testing guidelines](/materials/guidelines/testing#coverage) on coverage for more details
  - Make sure you are calling all functions, including functions returned by functions you write.

## Testing

You must write tests for all your functions, following the principles used so far.

- [Project testing page](/materials/tutorials/assignments/testing)
- [Testing guidelines](/materials/guidelines/testing)

It may not be obvious how to implement some of the functions. Try writing some tests first.

## Programming Tasks

- Note:
  - In all problems involving lists you are **not** allowed to use arrays in your solution.
  - You must reduce code duplication whenever applicable.
  - For reference: Our sample solutions are less than 100 lines of code. Testing systematically can lead to half a dozen tests per function or more.
 
- **Important**
  - You may **not** use `listToArray` or `arrayToList` in **any** of your functions. Your score will be 0 for any function using these.
  - You are allowed to use them in your tests.

- Some of the functions you are asked to write are related. Avoid code duplication by identifying the common elements.

### `keepTrendMiddles`

Takes in a list of numbers and a function `allSatisfy: (prev: number, curr: number, next: number) => boolean`. Returns a list of numbers, keeping only those numbers `curr` from the original list that have adjacent values `prev` and `next` so that `allSatisfy` returns true when applied to the numbers in the given order.

### `keepLocalMaxima`

Take a list of numbers and returns a list of numbers where only the local maxima from the original list are included in the same order. A local maximum is a number that is preceded and followed in the list by smaller numbers.

### `keepLocalMinima`

Take a list of numbers and returns a list of numbers where only the local minima from the original list are included in the same order. A local minimum is a number that is preceded and followed in the list by larger numbers.

### `keepLocalMinimaAndMaxima`

Take a list of numbers and returns a list of numbers that includes only the local minima and maxima from the original list, in the same order.

#### Note: For the above three functions you must use `keepTrendMiddles`. Reduce code duplication among them.

### `everyNList`

Write a function that takes a list of some type `T` and a number `n` (assumed to be a positive natural). It should return a list containing every nth element from the input list (the nth, 2nth, 3nth, ...), in the original order.

### `everyNRev`

Write a function that takes a list of some type `T` and a number `n` (assumed to be a positive natural). It should return a list containing every nth element from the input list, in reverse order (the nth element appears last, the 2nth before it, ...). Use `List.reduce`. Do not use `everyNList`, though you may use this function to implement `everyNList`.

### `everyNCond`

Write a function that takes a list of some type `T`, a number `n` (assumed to be a positive integer), and a function `cond: (e: T) => boolean`. It should return a list containing every `n`th element of those that satisfy `cond`, in the original order.

### `nonNegativeProducts`

Write a function that takes as input a list of numbers and returns a list of numbers. For each nonnegative number `n` in the input list, the result list contains the product of the longest contiguous subsequence of nonnegative list elements ending at `n`.

- Example:
  - input: 2 -> 3 -> -1 -> 0.5 -> 2 -> empty
  - output: 2 -> 6 -> 0.5 -> 1 -> empty

### `negativeProducts`

Write a function that takes as input a list of numbers and returns a list of numbers. For each negative number `n` in the input list, the result list contains the product of the longest contiguous subsequence of negative list elements ending at `n`.

- Example:
  - input: -3 -> -6 -> 2-> -2-> -1 -> -2 -> empty
  - output: -3 -> 18 -> -2 -> 2 -> -4 -> empty

#### You should write a helper function to reduce the code duplication between the functions `nonNegativeProducts` and `negativeProducts`.

### `squashList`

Write a function that takes as input a list where each element is either a `number` or a `List<number>`. Return a list of numbers where each element that is a list is replaced by the sum of its elements.

- Hint: The [typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof) operator may be useful.

### `composeList`

Write a function that takes as input a list of functions, potentially empty. Each function has the signature `T => T`. Return a function with the signature `T => T` that when called on a value of type `T` will return the value obtained by successively applying all functions in the list, in order. Do not use loops.

### `composeFunctions`

Write a function that takes as input an array of functions of type `(x: T) => T`, potentially empty, and returns a closure that takes a value `v: T` and returns an array of the values obtained by starting with `v` and successively applying zero, one, two, ..., all functions of the array. That is, the array returned by the closure is `[v, f0(v), f1(f0(v)), ...]` if the array of functions is `[f0, f1, ...]`.

## Submitting

Use the following command to build a `.zip` file:

```sh
npm run build:submission
```

This command will automatically format your submissions source code so it is easier to read then bundle your `./src/*` files into a `.zip`. Please upload this file to the respective assignment on Gradescope.
