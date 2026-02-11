---
sidebar_position: 3
---

# Closures

- Please download the project [here](https://github.com/umass-compsci-220/public-materials/raw/main/homework/03-closures.zip).
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

```ts
export function composeFunctions<T>(funs: GenericFunction<T>[]): (x: T) => T[] {
  // TODO
}
```

Write a function that takes in an array of functions, each of type `GenericFunction<T>`, i.e., `(x: T) => T`. It returns a closure that takes in one argument `v` of type `T`. When called, the closure returns an array of the values obtained by starting with `v` and successively applying each  function of the array passed into `composeFunctions`. That is, the array returned by the closure is
`[v, f0(v), f1(f0(v)), ...]` if the array of functions is `[f0, f1, ...]`.

### `cyclic`

Write a function called `cyclic`

```ts
export function cyclic<T>(values: T[]): () => T {
  // TODO
}
```
`cyclic` takes an array of values and returns a closure. Each time the closure is called, it returns the next value in the array, cycling back to the beginning after reaching the end. If it is initialized with an empty array, throw an Error. The syntax for throwing an error in TypeScript looks like the following

```ts
throw new Error("lorem ipsum")
```

### `rateLimiter`

Write a function called `rateLimiter`.

```ts
export function rateLimiter<T, R>(func: (x: T, y: T) => R, limit: number): (x: T, y: T) => R | undefined {
  // TODO
}
```

`rateLimiter` takes a function `func: (x: T, y: T) => R` and a non-negative integer `limit`. It returns a new function (closure) that:
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

Write a function called `byParity`

```ts
export function byParity(
  evenFunc: (n: number) => number,
  oddFunc: (n: number) => number
): (n: number) => number {
  // TODO
}
```

`byParity` takes two functions as arguments, evenFunc and oddFunc. It returns a closure that takes in a number and returns the result of passing that number to evenFunc if the number is even or oddFunc if the number is odd. You may assume that all numerical input will be integers.

### `vendingMachine`

Write a function called `vendingMachine`

```ts
export function vendingMachine(
price: number,
stock: number
): (amount: number) => number | undefined {
  // TODO
}
```

`vendingMachine` takes in two numbers:
* `price`: the cost of one item
* `stock`: the number of items available (you may assume stock is an integer)

It returns a closure simulating vending machine purchases.

The returned closure should take an amount of money as input and simulate the purchase of one item:
* Return the change if the amount >= price and the item is in stock
* Return undefined if the amount is insufficient or the item is out of stock
* Each successful call (purchase) should reduce the stock by 1

### `wageIncrease`

Write a function
```ts
export function wageChange(calc_new: (yr: number, prev_wage: number) => number):
  (start_wage: number, start_yr: number, end_yr: number) => number {
  // TODO
}
```
used to compute wage changes over the years.

`wageChange` takes as argument a function that, given a year and the previous year’s wage, returns the new wage.
`wageChange` returns a closure which takes three arguments: a starting wage, the year for which this wage applies, and the end year for which to compute the new wage, which is returned.
The end year passed to this closure should be no lower than the start year. Valid years are 1970 to 2026, and valid wage values are numbers greater than 0. The closure returned by `wageChange` should return NaN when any arguments or computed values at any point are invalid.

### `sineSeries`

The sine of a number `x` can be approximated via the Taylor series:
$$
\sin(x) = \frac{x}{1} - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + \dots
$$

The terms of the series can be generalized to:
$$
\left(-1\right)^k \frac{x^{2k+1}}{(2k+1)!}
$$

Write a function called `sineSeries`
```ts
export function sineSeries(x: number) => (moreTerms: number = 1) => number {
  // TODO
}
```
It accepts a number `x`. When called with some value moreTerms (defaults to 1 if no value provided), the closure computes the specified number of additional terms, updates the sum computed with these new terms and returns it. You may assume `moreTerms` is a positive integer.

**You must use state to avoid re-calculating factorials and powers from scratch on every call.**

## Submission

Use the following command to build a zip file:

```shell
npm run build:submission
```

Please upload the zip file created by the command to Gradescope.
