---
sidebar_position: 2
---

# Image Processing with HOF

- Please download the homework [here](https://github.com/umass-compsci-220/public-materials/raw/main/homework/02-image-processing-with-hof.zip).
- Run `npm install` in the project directory
- You may edit any file inside of `./src/`, **DO NOT make any edits to any file inside of `./include/`**
  - This rule applies to all homework

## Overview

Following up on [Homework 1](/materials/homework/image-processing), in Homework 2 you will perform more image processing tasks with higher order functions. One of the requirements of this assignment is that your implementations are clean and do not duplicate code.

### Learning Objectives

- Become more familiar with first-class functions
- Practice writing and using higher-order functions
- Practice avoiding code duplication

### Student Expectations

Students will be graded on their ability to:

- Correctly implement the functions [specified below](#programming-tasks)
  - Using private auto-grader tests
- Resolve all linter warnings
  - **There will be credited grading for this (2.5%)**
  - Use `npm run lint` to see if you have any warnings, `npm run lint:fix` may fix some automatically
  - See the section on [linting and formatting assignments](/materials/tutorials/assignments/linting-and-formatting) for more details
- Follow the [coding](/materials/guidelines/syntax-and-code), [bad practice](/materials/guidelines/bad-practices) and [testing](/materials/guidelines/testing) guidelines
- Design full-coverage [unit-tests](#testing) for the functions they implemented
  - **There will be credited grading for coverage (7.5%)**
  - **There will be credited grading for design (15%)**
  - See the [testing guidelines](/materials/guidelines/testing#coverage) on coverage
- Avoid unnecessary code duplication wherever possible
  - **This will be manually graded**

Some of the functions require you not to use loops, but instead use higher-order functions on images. Carefully selecting which function to use will allow you to write your code more concisely and promote reuse, which are important points of the assignment.

This assignment puts extra emphasis on avoiding code duplication. Many of the functions have similar operations and conditions. For example, in `pixelBlur`, neighboring pixels need to be handled in similar but not identical ways. Can you avoid having many cases of repeated code?

**Submissions that do not attempt to avoid code duplication may receive manual grading point deductions.** If you have a series of if-statements with similar conditions or similar bodies, or separate functions with near-identical bodies, consider an alternative approach. If-statements are allowed, but do not abuse them.

Try to avoid repetition from the get-go, don't delay it to "after my code works". **Read the descriptions of all the tasks before you start coding.**

## Getting Started

All interfaces are the same as the previous assignment. Please review the ["Getting Started" section](/materials/homework/image-processing#getting-started) from Homework 1 if necessary.

## Testing

As with Homework 1, you are expected to write your own tests. To help you get started, we have provided a few test cases inside of `imageProcessingHOF.test.ts`. It is up to you to define additional tests to check your solution for correctness. As always, try writing some tests before you start coding. **You must write you tests in the provided describe statements**.

### Changing How We Compare Colors

Arithmetic with the `number` type produces some non-obvious results:

```ts
console.log(0.1 + 0.2); // .30000000000000004 🤨
```

This is a common issue in programming languages that use [floating point numbers](https://en.wikipedia.org/wiki/Floating-point_arithmetic). [This website](https://floating-point-gui.de/) gives a great overview of how floating point numbers work and why this behavior exists.

Throughout this homework, you will be doing arithmetic with fractional values (e.g., finding the mean). Depending on the order of the operations, you may get a different result:

```ts
console.log((254 + 254 + 254) / 3); // 254
console.log(((1 / 3) * 254) + ((1 / 3) * 254) + ((1 / 3) * 254)); // 253.99999999999997
```

Hopefully it is clear to see that this can become a problem because we truncate any decimal remainder in our calculations. To reconcile this issue we need to change how we define "equality" between two `Color` values. Instead of strictly checking that each channel is exactly what it should be:

```ts
const actual = img.getPixel(0, 0);
assert(actual[0] === 0);
assert(actual[1] === 0);
assert(actual[2] === 0);

// or

expect(img.getPixel(0, 0)).toEqual([0, 0, 0]);
```

We should accept a degree of error (in this case default to less than or equal to 1) between two values:

```ts
function expectColorToBeCloseTo(actual: Color, expected: Color, error = 1) {
  [0, 1, 2].forEach(i => expect(Math.abs(actual[i] - expected[i])).toBeLessThanOrEqual(error));
}

expectColorToBeCloseTo([0, 0, 0], [1, 1, 1]); // Will pass
expectColorToBeCloseTo([0, 0, 0], [0, 0, 0]); // Will pass
expectColorToBeCloseTo([0, 0, 0], [0, 0, 2]); // Will fail
```

You may need to use the function above when writing your own tests.

## Programming Tasks

All functions should be written in `imageProcessingHOF.ts`. Other files (`main.ts` and `imageProcessingHOF.test.ts`) should import them like so:

```ts
import {
  imageMapCoord,
  imageMapIf,
  mapWindow,
  isGrayish,
  makeGrayish,
  pixelBlur,
  imageBlur
} from "./imageProcessingHOF.js";
```

### `imageMapCoord`

Write a function called `imageMapCoord`:

```ts
export function imageMapCoord(img: Image, func: (img: Image, x: number, y: number) => Color): Image {
  // TODO
}
```

**The result must be a new image** with the same dimensions as `img`. For each pixel in the new image, its color should be the result of applying `func` to the image and the pixel's coordinates. This function is more general than `imageMap`; the new pixel's color may also depend on its coordinates, and any other elements of the image (perhaps other pixels). An example is given to you in `main.ts`.

### `imageMapIf`

Write a function called `imageMapIf`

```ts
export function imageMapIf(
  img: Image,
  cond: (img: Image, x: number, y: number) => boolean,
  func: (p: Color) => Color
): Image {
  // TODO
}
```

**The result is a new image.** In it, the pixel at $(x, y)$ with color $c$ is either:

1. The value `func(c)` when `cond(img, x, y)` returns `true`
2. $c$ otherwise

**You may not use loops in this function. Instead, use `imageMapCoord` defined above.**

### `mapWindow`

Write a function called `mapWindow`

```ts
export function mapWindow(
  img: Image,
  xInterval: number[], // Assumed to be a two element array containing [x_min, x_max]
  yInterval: number[], // Assumed to be a two element array containing [y_min, y_max]
  func: (p: Color) => Color
): Image {
  // TODO
}
```

**The result is a new image.** In it, the value of the pixel at $(x, y)$ with color $c$ is either:

1. The value `func(c)` if the pixel coordinates are in the interval $[x_{min}, x_{max}]$ and $[y_{min}, y_{max}]$ respectively (inclusive)
2. $c$ otherwise

**Use `imageMapIf`.** You may assume that the second and third argument are always two-element number arrays. The behavior otherwise is not specified. You could write an `assert` statement to ensure this is the case; however, this is not required.

### `isGrayish`

Write a function called `isGrayish`

```ts
export function isGrayish(p: Color): boolean {
  // TODO
}
```

The result should be true if and only if the difference between the maximum and minimum color channel value is at most 85 (one third of 255). You may assume that `p` is a valid color according to the `Image` library.

### `makeGrayish`

Write a function called `makeGrayish`

```ts
export function makeGrayish(img: Image): Image {
  // TODO
}
```

**The result is a new image**, where each grayish pixel, as determined by the `isGrayish` function, is left unchanged. All other pixels should be replaced with a gray-scale pixel, computed by averaging the three channels. If the input pixel's color is $(r, g, b)$, its gray-scale version is $(m, m, m)$ where $m$ is the truncated average of $r$, $g$, and $b$. Other pixel colors are unchanged. You may not use loops within this function. **Use a suitable function defined above or from Homework 1.**

### `pixelBlur`

Write a function called `pixelBlur`:

```ts
export function pixelBlur(img: Image, x: number, y: number): Color {
  // TODO
}
```

The result is the blurred value of the pixel at coordinates $(x, y)$, assumed to be valid for the image. Each color channel of the resulting pixel should be the truncated mean of the same channels of the $(x, y)$ pixel itself and its neighbors in `img`. Two distinct pixels are neighbors if both their x-coordinates and y-coordinates differ by at most 1 in absolute value. **Avoid [code duplication](/materials/homework/image-processing#code-duplication).**

### `imageBlur`

Write a function called `imageBlur`:

```ts
export function imageBlur(img: Image): Image {
  // TODO
}
```

**The result is a new image** that is the blurred version of the argument, with pixels obtained by applying `pixelBlur` to each pixel of the input image. You may not use loops within this function. Instead, use `imageMapCoord`.

## Submitting

Use the following command to build a `.zip` file:

```sh
npm run build:submission
```

This command will automatically format your submissions source code so it is easier to read then bundle your `./src/*` files into a `.zip`. Please upload this file to the respective assignment on Gradescope.
