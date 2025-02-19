---
sidebar_position: 4
---

# Closures and Iterators

- Please download the project [here](https://github.com/umass-compsci-220/public-materials/raw/main/homework/04-closures-iterators.zip).
- You may edit any file inside `./src`. **DO NOT make any edits to any file inside `./include`.**

## Overview

### Learning Objectives

- Practice working with and reasoning about closures.
- Practice working with and reasoning about iterators.

### Student Expectations

Students will be graded on their ability to:

- Correctly implement the [programming tasks](#programming-tasks).
- Resolve all linter warnings.
- Follow
  the [syntax and code](/materials/guidelines/syntax-and-code), [bad practices](/materials/guidelines/bad-practices)
  and [testing](/materials/guidelines/testing) guidelines.
- Design full-coverage unit tests for the implemented functions.
    - See the [testing guidelines on coverage](/materials/guidelines/testing#coverage) for more details.
    - Make sure you are calling all functions, including functions returned by functions you write.

## Testing

You must write tests for all your functions, following the principles used so far.

- [Testing tutorial](/materials/tutorials/assignments/testing)
- [Testing guidelines](/materials/guidelines/testing)

It may helpful to write some tests first to make sure your implementation addresses those cases.

## Programming Tasks

### `composeList`

Write a function that takes as input a list of functions, potentially empty. Each function has the signature `T => T`.
Return a function with the signature `T => T` that when called on a value of type `T` will return the value obtained by
successively applying all functions in the list, in order. _Do not use loops._

### `composeFunctions`

Write a function that takes as input an array of functions of type `(x: T) => T`, potentially empty, and returns a
closure that takes a value `v: T` and returns an array of the values obtained by starting with `v` and successively
applying zero, one, two, ..., all functions of the array. That is, the array returned by the closure is
`[v, f0(v), f1(f0(v)), ...]` if the array of functions is `[f0, f1, ...]`.

### `composeBinary`

Write a function that takes an array of functions `(arg1: T, arg2: U) => T`, potentially empty, as input.
It returns a closure that takes an input `in: U` and returns a function `T => T`. 
The returned closure is equivalent to fixing `arg2` as `in` for all functions, and applying them successively
to an input `T` as `arg1`, using the result of the previous function as input. _Do not use loops._

### `enumRatios`

Write a function that returns a closure with no arguments. On each call, the closure should return a new rational number
from the sequence:
- 1 / 1,
- 2 / 1, 1 / 2,
- 3 / 1, 2 / 2, 1 / 3,
- 4 / 1, 3 / 2, 2 / 3, 1 / 4, ...
where the numbers are ordered by increasing sum of numerator and denominator, with a decreasing numerator in each group.
Do not repeat numbers, e.g., omit 2 / 2 since it is equal to 1 / 1.

### `cycleArr`

Write a function that takes an array of arrays and returns an iterator that yields all array elements as follows:

- first element of each array,
- second element of each array, etc., until all elements are exhausted.

Skip arrays that have been exhausted.

#### Example

- **Input**: `[[1, 2, 3], [4, 5], [6, 7, 8, 9]]`
- **Output**: `1, 4, 6, 2, 5, 7, 3, 8, 9`

### `dovetail`

Write a function that takes an array of lists and returns an iterator that yields all list elements as follows:

- one element from the first list,
- two more elements, one from each of the first two lists,
- three more elements, one from each of the first three lists, etc., util all elements are exhausted.

Skip lists that don't exist (numbered higher than the array length) and lists that have been exhausted.

#### Example

- **Input**: `[1 -> 2 -> 3, 4 -> 5, 6 -> 7 -> 8 -> 9]`
- **Output**: `1, 2, 4, 3, 5, 6, 7, 8, 9`

## Submission

Use the following command to build a zip file:

```shell
npm run build:submission
```

Please upload the zip file created by the command to Gradescope.
