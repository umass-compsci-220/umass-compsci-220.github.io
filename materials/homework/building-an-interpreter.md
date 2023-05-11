---
sidebar_position: 8
---

# Building an Interpreter

- Please download the homework from [here](https://github.com/umass-compsci-220/public-materials/raw/main/homework/08-building-an-interpreter.zip)

## Overview

For this project, you will write an [interpreter](<https://en.wikipedia.org/wiki/Interpreter_(computing)>) for a small programming language similar to **JavaScript (not TypeScript)**. To write an interpreter, you need a parser (provided to you inside of `./include/parser.ts`) to turn the program's concrete syntax (a string of characters) into an _abstract syntax tree_. You will need to traverse the AST making necessary checks and executing corresponding statements and expressions.

### Learning Objectives

- Learn fundamentals of programming language implementation
- How to read the grammar for a concrete syntax
- How to work with and read abstract syntax trees

### Student Expectations

Students will be graded on their ability to:

- Correctly implement the functions [specified below](#programming-tasks)
- Resolve all linter warnings
- Follow the [coding](/materials/guidelines/syntax-and-code), [bad practice](/materials/guidelines/bad-practices) and [testing](/materials/guidelines/testing) guidelines
- Design full-coverage [unit-tests](#testing) for the functions they implemented
  - See the [testing guidelines](/materials/guidelines/testing#coverage) on coverage for more details

## Getting Started

### Concrete Syntax

The following (simplified) grammar describes the concrete syntax of the fragment of JavaScript that you will be working with:

```txt
Numbers        n ::= ...                    base-10 numbers

Variables      x ::= ...                    variable name, a sequence of alphabetic letters

Expressions    e ::= n                      numeric constant
                | true                      boolean value true
                | false                     boolean value false
                | x                         variable reference
                | e_1 + e_2                 addition
                | e_1 - e_2                 subtraction
                | e_1 * e_2                 multiplication
                | e_1 / e_2                 division
                | e_1 && e_2                logical AND
                | e_1 || e_2                logical OR
                | e_1 < e_2                 less than
                | e_1 > e_2                 greater than
                | e_1 === e_2               equal to

Statements    s ::= let x = e;              variable declaration
                  | x = e;                  assignment
                  | if (e) b_1 else b_2     conditional
                  | while (e) b             loop
                  | print(e);               display to console

Blocks        b ::= { s_1 ... s_n }

Programs      p ::= s_1 ... s_n
```

Some structures (like `Numbers` and `Variables`) have been omitted for simplicity. The actual grammar is defined inside of `./include/grammar.pegjs`. You may take a look at it if you are curious, but you should not need to.

Each line of the grammar defines a rule. As an example, the rule

```txt
Expressions   e ::= n                     numeric constant
                  | true                  boolean value true
                  | false                 boolean value false
                  | e_1 + e_2             addition
                  | e_1 && e_2            logical AND
```

would read as: An expression, labeled as `e`, may be one of:

- `n`, a number (as defined above)
- `true`, the boolean value true
- `false`, the boolean value false
- An expression, $e_1$, a plus symbol, followed by another expression $e_2$, for addition
- An expression, $e_1$, two ampersands (`&&`), followed by another expression $e_2$, for logical AND

### Parser

We have provided two parsing functions, defined in `./include/parser.ts`, the function `parseExpression` parses an expression and the function `parseProgram` parses a program (a series of statements). Their type signatures are outlined below:

```ts
type BinaryOperator = "+" | "-" | "*" | "/" | "&&" | "||" | ">" | "<" | "===";

type Expression =
  | { kind: "boolean"; value: boolean }
  | { kind: "number"; value: number }
  | { kind: "variable"; name: string }
  | { kind: "operator"; operator: BinaryOperator; left: Expression; right: Expression };

type Statement =
  | { kind: "let"; name: string; expression: Expression }
  | { kind: "assignment"; name: string; expression: Expression }
  | { kind: "if"; test: Expression; truePart: Statement[]; falsePart: Statement[] }
  | { kind: "while"; test: Expression; body: Statement[] }
  | { kind: "print"; expression: Expression };

function parseExpression(expression: string): Expression;
function parseProgram(statements: string): Statement[];
```

On success, these functions will return an object that contains the the corresponding abstract syntax tree (AST) for the given string. On failure, these functions throw an error with a reason: the string cannot be parsed.

Parsing and interpreting are separate stages of a programs execution. The interpreter depends on the parser to construct a valid AST. If the parser fails, then it is considered an unrecoverable failure and proceeding stages, such as interpreting (or linting/formatting if we were writing those tools), cannot not run. **You are not expected to cover input that the parser rejects.**

### State

The State type is defined as follows:

```ts
type RuntimeValue = number | boolean;
type State = { [key: string]: State | RuntimeValue };
```

This notation indicates that a `State` object has a variable number of properties with values of type `number`, `boolean` (representing values of variables that are in scope), or of type `State` (link to the parent scope).

A block starts a new inner scope. A variable declared in a block will shadow an outer declaration (any variable use will refer to the inner declaration). On exiting a scope, variables declared there are no longer accessible (since we don't have closures). Thus, they should not be in the global state at the end. The nesting of block scopes corresponds to a stack, which you can implement as a linked list, by adding to your `State` object a link to an outer scope. Since the link is just another property, this allows all functions to keep their signatures. To ensure the link name does not clash with a program variable, use a property name that is not an identifier (see given: `PARENT_STATE_KEY`). The global state cannot have extra properties, and does not need a link, as the last state on the list.

### Accessing Values from State

The `State` type maps arbitrary strings to a `RuntimeValue` or another `State` type. Meaning field access on the state object will result in values of that type.

```ts
const variableName = "foo";
const value = state[variableName]; // Compiler infers that `value` is RuntimeValue | State
```

However, you control the structure of your `state` object, and know that only the `PARENT_STATE_KEY` field holds a `State` type. To aid the compiler, you can override its inference using a [type assertion](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions).

```ts
const variableName = "foo";
const value = state[variableName] as RuntimeValue; // Compiler accepts that `value` is a `RuntimeValue`
```

You may come across the complimentary situation where you know the value is defiantly a `State` type. A similar solution follows.

### Behavior

The behavior of our interpreter should be similar to the `node` interpreter in "[strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)" (with some exceptions). To test what your interpreter should do in a scenario, you may use the `node --use-strict` command in a terminal to open a Read Eval Print Loop (REPL). This interface will allow you to input statements and expressions and will display an error or the evaluated result.

Exceptions:

- _Arithmetic and greater/less-than comparison may only happen between numbers_
- _Logical operations may only happen between booleans_
  - Logical operations should [short-circuit](https://en.wikipedia.org/wiki/Short-circuit_evaluation)
  - Evaluated operands must be boolean values
- _Division by zero is forbidden_
- _Additional checks to emulate `ReferenceError` behavior are unneeded_
  - This would require an additional pass prior to interpreting to ensure variables are not used before declaration
  - See [MDN on Hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting) if you are curious

### Error Handling

An interpreter can generally not continue meaningfully after an error (as opposed to compilers). Thus, if you find an error, **you should throw an error, using an informative error message (i.e. "Arithmetic may only happen between numbers")**. You need to do a number of checks (e.g., correct typing, and missing or duplicate declarations).

### Optional: Interpreting Functions

As extra (uncredited) practice, you can implement first-class functions inside of your interpreter. We will extend the grammar to include function expressions, call expressions, return statements, and expression statements (`1 + 1;`) - to support both `f();` and `f(g());`:

```txt
e ::=
    ...
    | function (x1 ... xn ) b   Function expressions
    | x(e1 ... en )             Call expression

s ::=
    ...
    | e;                        Expression statements
    | return e;                 Return statements
```

The parser already supports these constructs. You may look at types inside `./include/parser.ts`. Here are some hints for what needs to be updated in `./src/interpreter.ts`:

- Add a new type of `RuntimeValue` to support functions/closures
  - Define an `interface` with the values you might think you'd need
- Give `interpStatement` a return type other than `void`

Rules:

- _A function's body is only evaluated when called_
- _Functions capture the environment they were created in_
- _There may not be duplicate parameter names_
- _Providing more, or fewer, arguments than there are parameters is considered a runtime error_
- _All functions must explicitly return a value (number, boolean, or another function)_
  - If a function has not explicitly returned after executing its body it is a runtime error

## Programming Tasks

Your task is to implement the following functions inside of `./src/interpreter.ts`. You may do them in any order. Reviewing lecture slides might be helpful.

**You may not use `eval` or anything similar (`new Function(...)`).**

The most common approach to these functions is using a `switch` statement to match `Statement` or `Expression` variants with their desired behavior. This is an acceptable approach, but looks awkward syntactically. If you'd like, you can use the [ts-pattern](https://github.com/gvergnaud/ts-pattern) library to do structural pattern matching rather than a `switch` statement. You will need to add a new import statement at the top of `./src/interpreter.ts`:

```ts
import { match, P } from "ts-pattern";
```

### `interpExpression`

Given a state object and an AST of an expression, `interpExpression` evaluates the expression and returns its result. It should throw an error if the expression is invalid. See [Behavior](#behavior) and [Error Handling](#error-handling).

```ts
export function interpExpression(state: State, e: Expression): RuntimeValue {
  // TODO
}
```

### `interpStatement`

Given a state object and an AST of a statement, `interpStatement` updates the `State` object. It should throw an error if the statement is invalid. See [Behavior](#behavior) and [Error Handling](#error-handling).

```ts
export function interpStatement(state: State, p: Statement): void {
  // TODO
}
```

### `interpProgram`

Given the AST of a program, `interpProgram` returns the final state of the program. It should throw an error if any statement or expression is invalid. See [Behavior](#behavior) and [Error Handling](#error-handling).

```ts
export function interpProgram(p: Statement[]): State {
  // TODO
}
```

## Testing

### Approach

Implement `interpExpression`, following the template shown in class. You can use an empty object (`{ }`) for the state if you do not have any variables, or you can set the values of variables by hand. For example:

```ts
describe("interpExpression", () => {
  it("evaluates multiplication with a variable", () => {
    const r = interpExpression({ x: 10 }, parseExpression("x * 2"));

    expect(r).toBe(20);
  });
});
```

Implement `interpStatement` and `interpProgram`, following the template shown in class. You should be able to test that assignment updates variables. For example:

```ts
describe("interpProgram", () => {
  it("handles declarations and reassignment", () => {
    const st = interpProgram(parseProgram("let x = 10; x = 20;"));

    expect(st).toEqual({ x: 20 });
  });
});
```

Finally, test your interpreter with some simple programs. For example, you should be able to interpret an iterative factorial or Fibonacci sequence computation.

### Capturing Errors

You may find yourself in a scenario where you need to write a test that verifies a program throws an error. Here is an example of how you would write a test like that:

```js
function sqrt(n) {
  if (n < 0) throw new Error("Input must be positive or zero.");

  // Do some iterations of Newton's method
}

test("sqrt fails on invalid input", () => {
  // Must pass a function, otherwise the error will not be captured and the test will fail
  expect(() => {
    sqrt(-1);
  }).toThrow();
});
```

You can read more on the [Jest documentation on `.toThrow()`](https://jestjs.io/docs/expect#tothrowerror).
