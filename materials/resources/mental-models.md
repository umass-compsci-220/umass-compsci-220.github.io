---
sidebar_position: 3
---

# Mental Models in JavaScript

This primer explains key mental models when working with JavaScript, focusing on object references, value assignments, and how JavaScript handles data when passed into functions.

## 1. Objects and References

- **Object References**: In JavaScript, objects are stored by reference (i.e., memory addresses). This means when we assign an object to a variable, we’re assigning a reference, not a copy of the object.
  
    ```javascript
    let o = { x: 10, y: 2 };
    const p = o;
    o = 17;
    console.log(p.x); // Output: 10
    ```
  
    - Here, `p` initially references `o`, but when `o` is reassigned, `p` retains the original object reference.

<iframe src='/html/mental-models/ex1.html' width='100%' height='385px'></iframe> 

## 2. Assignment by Value

- **Value Assignment**: All JavaScript variables, including those referencing objects, are assigned by value. This includes primitive data types (numbers, strings) as well as object references.
  
    ```javascript
    let x = 1;
    function reassignNumber(x) {
      x = 5;
      console.log(x); // Output: 5
    }
    reassignNumber(x);
    console.log(x); // Output: 1
    ```

    - The function `reassignNumber` doesn’t affect the original `x` since only the value is passed into the function.

<iframe src='/html/mental-models/ex2.html' width='100%' height='410px'></iframe> 

## 3. Function Behavior with Objects

- **No Pass by Reference**: JavaScript does not support pass-by-reference, even for objects. However, when passing an object into a function, JavaScript passes the reference (address), so modifying the object within the function affects the original object.

    ```javascript
    let obj = { y: 1 };
    function reassignObjVal(inputObj) {
      inputObj.y = 5;
      console.log(inputObj.y); // Output: 5
    }
    reassignObjVal(obj);
    console.log(obj.y); // Output: 5
    ```

    - Here, `inputObj` is a reference to `obj`. Changing `inputObj.y` inside the function affects `obj`.

- **Reassignment vs. Modification**: Assigning a new value to an object parameter within a function does not affect the original object. Modifying the properties of the passed object does.

    ```javascript
    let obj = { y: 1 };
    function reassignObj(obj) {
      obj = { y: 5 };
      console.log(obj.y); // Output: 5
    }
    reassignObj(obj);
    console.log(obj.y); // Output: 1
    ```

    - Although `obj` is assigned a new object inside the function, the original `obj` remains unchanged outside.

These mental models clarify how JavaScript handles objects and functions, reinforcing that objects are not "special" when it comes to passing by value.

<iframe src='/html/mental-models/ex3.html' width='100%' height='430px'></iframe> 

## 4. Functions as First-Class Citizens

- **Functions as Values**: In JavaScript, functions are treated as first-class citizens, meaning they can be assigned to variables, passed as arguments, or returned from other functions.

    ```javascript
    const greet = function(name) {
      return `Hello, ${name}!`;
    };
    console.log(greet("Alice")); // Output: "Hello, Alice!"
    ```

    - Here, `greet` is a function expression assigned to a variable, demonstrating that functions can be stored like any other value.
  
<iframe src='/html/mental-models/ex4.html' width='100%' height='430px'></iframe> 

## 5. Higher-Order Functions

- **Higher-Order Functions**: These are functions that take other functions as arguments or return functions as results. Higher-order functions enable JavaScript's functional programming capabilities.

    ```javascript
    function multiplyBy(factor) {
      return function(number) {
        return number * factor;
      };
    }
    const double = multiplyBy(2);
    console.log(double(5)); // Output: 10
    ```

    - `multiplyBy` returns a new function, `double`, which maintains the context of `factor` from its original scope.

<iframe src='/html/mental-models/ex5.html' width='100%' height='400px'></iframe> 

## 6. Closures and Scope

- **Closures**: A closure occurs when an inner function remembers variables from its outer function, even after the outer function has finished executing. Closures are powerful for creating private variables and for optimizing computation by remembering past results.

    ```javascript
    function createCounter() {
      let count = 0;
      return function() {
        count += 1;
        return count;
      };
    }
    const counter = createCounter();
    console.log(counter()); // Output: 1
    console.log(counter()); // Output: 2
    ```

    - The `createCounter` function returns an inner function that retains access to `count`, creating a persistent scope for `count` across calls.

<iframe src='/html/mental-models/ex6.html' width='100%' height='490px'></iframe> 

## 7. Avoiding Recomputation with Closures

- **Closure-Based Caching**: Closures can be used to avoid recomputation by “remembering” previous values without explicitly memoizing. This is particularly useful for mathematical sequences or operations that may otherwise require recalculation.

    ```javascript
    function fibonacci() {
      let memo = { 0: 0, 1: 1 };
      return function(n) {
        if (n in memo) return memo[n];
        memo[n] = fibonacci()(n - 1) + fibonacci()(n - 2);
        return memo[n];
      };
    }
    const fib = fibonacci();
    console.log(fib(5)); // Output: 5
    ```

    - Here, `memo` is closed over by the inner function to store previously calculated Fibonacci numbers, which prevents redundant calculations.

<iframe src='/html/mental-models/ex7.html' width='100%' height='530px'></iframe> 

## 8. IIFE (Immediately Invoked Function Expressions)

- **IIFE**: An Immediately Invoked Function Expression (IIFE) is a function that is executed right after it is defined. IIFEs are useful for creating isolated scopes, often to avoid variable pollution.

    ```javascript
    (function() {
      const secret = "I'm a secret!";
      console.log(secret); // Output: "I'm a secret!"
    })();
    // console.log(secret); // Error: secret is not defined
    ```

    - Here, `secret` is only accessible within the IIFE and does not leak into the surrounding scope.

<iframe src='/html/mental-models/ex8.html' width='100%' height='370px'></iframe> 

## 9. Lexical Scope

- **Lexical (Static) Scope**: JavaScript uses lexical scoping, meaning that a function’s scope is determined by its location within the code. Variables defined in an outer scope are accessible to inner functions, but not vice versa.

    ```javascript
    function outer() {
      const outerVar = "I'm outside!";
      function inner() {
        console.log(outerVar);
      }
      inner(); // Output: "I'm outside!"
    }
    outer();
    ```

    - `inner` can access `outerVar` because it is lexically within the `outer` function scope, reinforcing predictable scoping rules.

<iframe src='/html/mental-models/ex9.html' width='100%' height='530px'></iframe> 