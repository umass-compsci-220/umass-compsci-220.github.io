---
sidebar_position: 3
---

# Lists and Closures

- Please download the project [here](https://github.com/umass-compsci-220/public-materials/raw/main/homework/03-lists.zip).
- You may edit any file inside of `./src/`, **DO NOT make any edits to any file inside of `./include/`**

## Overview

In this assignment, you will work with lists.

### Learning Objectives

- Practice writing and reasoning about lists
- Practice writing and reasoning about closures
- Practice writing and reasoning with recursion

### Student Expectations

Students will be graded on their ability to:

- Correctly implement the functions [specified below](#programming-tasks)
- Resolve all linter warnings
- Follow the [coding](/materials/homework/image-processing), [bad practice](/materials/guidelines/bad-practices) and [testing](/materials/guidelines/testing) guidelines
- Design full-coverage [unit-tests](#testing) for the functions they implemented
  - See the [testing guidelines](/materials/guidelines/testing#coverage) on coverage for more details

## Testing

You must write tests for all your functions, following the principles used so far.

- [Project testing page](/materials/tutorials/assignments/testing)
- [Testing guidelines](/materials/guidelines/testing)

It may not be obvious how to implement some of the functions. Try writing some tests first.

## Programming Tasks

- Note:
  - In all problems involving lists you are not allowed to use arrays in your solution.
  - You must reduce code duplication whenever applicable
  - For reference: Our sample solutions are ~55 lines of code
 
- **Important**
  - You may **not** use `listToArray` or `arrayToList` in **any** of your implementation. If you use either, your score will be 0 for any function using these.
  - You are allowed to use them in your tests.

### `everyNList`

Write a function that takes a list of some type `T` and a number `n` (assumed to be a positive natural). It should return a list containing every nth element from the input list (the nth, 2nth, 3nth, ...), in the original order.

### `everyNRev`

Write a function that takes a list of some type `T` and a number `n` (assumed to be a positive natural). It should return a list containing every nth element from the input list, in reverse order (the nth element last, the 2nth before it, ...). Use list reduce. Do not use `everyNList`, though you may use this function to implement `everyNList`.

### `everyNCond`

Write a function that takes a list of some type `T`, a number `n` (assumed to be a positive integer), and a function `cond: (e: T) => boolean`. It should return a list containing every `n`th element of those that satisfy `cond`, in the original order.

### `nonNegativeProducts`

Write a function that takes as input a List of `number`s and returns a List of `number`s. For each nonnegative number `n` in the input list, the result list contains the product of the input list elements going back from n (inclusive) as long as they are nonnegative.

- Example:
  - input: 2 -> 3 -> -1 -> 0.5 -> 2 -> empty
  - output: 2 -> 6 -> 0.5 -> 1 -> empty

### `negativeProducts`

Write a function that takes as input a List of `number`s and returns a List of `number`s. For each negative number `n` in the input list, the result list contains the product of the input list elements going back from n (inclusive) as long as they are negative.

- Example:
  - input: -3 -> -6 -> 2-> -2-> -1 -> -2 -> empty
  - output: -3 -> 18 -> -2 -> 2 -> -4 -> empty

#### You should write a helper function to reduce the code duplication between the above two problems `nonNegativeProducts` and `negativeProducts`.

### `squashList`

Write a function that takes a List as input where each element is either a `number` or a `List<number>`. Return a list of numbers where each element that is a List is replaced by the sum of its elements.

- Hint: The [typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof) operator may be useful.

### `composeList`

Write a function that takes a list of functions as input, potentially empty. Each function has the signature `T => T`. Return a function with the signature `T => T` that when called on a `T` will give the same result as successively applying all the functions in the list starting with the function stored in the first node. Do not use loops.

### `composeFunctions`

Write a function that takes an array of `(arg1: T, arg2: U) => T` functions `funcArr`, potentially empty, as input. It returns a closure that takes an input `in: U` and returns a function `T => T`. This returned function is equivalent to applying all functions in `funcArr` successively to the input `T` as `arg1` and `in` as `arg2` starting with the function at position 0 in the array. Do not use loops.

## Submitting

Use the following command to build a `.zip` file:

```sh
npm run build:submission
```

This command will automatically format your submissions source code so it is easier to read then bundle your `./src/*` files into a `.zip`. Please upload this file to the respective assignment on Gradescope.