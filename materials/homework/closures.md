---
sidebar_position: 3
---

# Closures

TODO: Fix link
- Please download the project [here](https://github.com/umass-compsci-220/public-materials/raw/main/homework/04-closures-iterators.zip).
- You may edit any file inside `./src`. **DO NOT make any edits to any file inside `./include`.**

## Overview

### Learning Objectives

- Practice working with and reasoning about closures.

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

### `composeFunctions`

Write a function that takes as input an array of functions of type `(x: T) => T`, potentially empty, and returns a
closure that takes a value `v: T` and returns an array of the values obtained by starting with `v` and successively
applying zero, one, two, ..., all functions of the array. That is, the array returned by the closure is
`[v, f0(v), f1(f0(v)), ...]` if the array of functions is `[f0, f1, ...]`.

### `cyclic`

TODO

### `rateLimiter`

TODO: proof-read

Write a function called `rateLimiter` which takes a function `func: (x: T, y: T) => R` and a non-negative integer `limit`. It returns a new function (closure) that:
   - Has the type signature `(x: T, y: T) => R | undefined`  
   - Calls `func` with the provided arguments and returns its result
   - Only allows `func` to be called `limit` times in total
   - Returns `undefined` after `func` has been called `limit` times

#### Example
```ts
const func = (x: number, y: number) => x === y        // some function
const limitedFunc = rateLimiter(func, 2);
console.log(limitedFunc(1, 1));    // true
console.log(limitedFunc(1, 2));    // false
console.log(limitedFunc(1, 1));    // undefined
```

### `byParity`

TODO

### `vendingMachine`

TODO

### `wageIncrease`

TODO

### `sinusSeries`

TODO

### `memoize`

TODO

## Submission

Use the following command to build a zip file:

```shell
npm run build:submission
```

Please upload the zip file created by the command to Gradescope.
