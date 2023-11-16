---
sidebar_position: 1
---

# Spring 2023 Final Exam

## Instructions

- Time for Exam: 2 hours
- Write TypeScript signatures for any of your functions

## The following are useful definitions and type signatures

```ts
    Array<T>.filter(f: (e: T) => boolean): T[]
    Array<T>.map<R>(f: (e: T) => R): R[]
    Array<T>.reduce<R>(f: (acc: R, e: T) => R, init: R): R
    Array<T>.forEach(f: (e: T) => any): void
    Array<T>.every(f: (e: T) => boolean): boolean
    Array<T>.some(f: (e: T) => boolean): boolean

    interface Stream<T> {
        head: () => T;
        tail: () => Stream<T>;
        isEmpty: () => boolean;
        toString: () => string;
        map: <U>(f: (x: T) => U) => Stream<U>;
        filter: (f: (x: T) => boolean) => Stream<T>;
    }
    interface Memoized<T> { get: () => T; }
    function sempty<T>(): Stream<T>
    function snode<T>(head: T, tail: () => Stream<T>): Stream<T>

    type Observer<T> = (x: T) => void;
    class Observable<T> {
        private observers: Observer<T>[] = [];
        subscribe(f: Observer<T>) { this.observers.push(f); }
        update(x: T) { this.observers.forEach(f => f(x)); }
        filter(f: (x: T) => boolean): Observable<T> { /* some code */ }
    }

    Promise<T>.prototype.then<R>(onfulfill: (v: T) => R, onrej?: (reason: any) => R): Promise<R>
    type PromiseSettledResult<T> = { status: ’fulfilled’, value: T }
                                 | { status: ’rejected’, reason: any }
    Promise<T>.all(parr: Promise<T>[]): Promise<T[]>
    Promise<T>.allSettled(parr: Promise<T>[]): Promise<PromiseSettledResult<T>[]>
```

## Exam Questions (100 pts)

### Q1 Streams (18 pts)

Write code that creates the stream of all primes, stored as a global variable `primeStream: Stream<number>` (A prime number is a number whose only factors are 1 and itself. The first prime is 2; larger numbers nare prime if no prime up to $\sqrt{n}$ is a factor of $n$.)

Write a function `iterPrimes(): () => number`, which returns a closure. Each call to the closure returns the next prime. It should be possible to create multiple prime iterators that work independently.

Avoid repeated primality checks for the same number. You may use your answer to one part for the other part.

<details>
<summary>View Solution</summary>

```ts
const primeStream = snode(2, () => nextprime(3));

function nextprime(n: number): Stream<number> { // next prime >= n
    for (let s = primeStream, d = s.head(); d <= Math.sqrt(n); d = (s=s.tail()).head())
    if (n % d === 0) return nextprime(n + 2); // try next odd number
    return snode(n, () => nextprime(n + 2));
}

function iterPrimes(): () => number {
    let s = snode(1, () => primeStream); // dummy node
    return () => (s = s.tail()).head();
}
```

`iterPrimes` just iterates over `primeStream`, which is expanded as needed. `nextPrime` could be adapted to just check for prime divisors starting at 3, if we directly add 3 as the second prime. We could also use the prime sieve written in class.
</details>

### Q2 Mental Models (15 pts)

For the indicated lines in the given code, explain what closures and objects are created, what values are computed, modified or printed, and when objects are no longer accessible. Ignore objects created internally by `memo()`.

```ts
    1 const f = (n: number) => (e: number) => e += n;
    2 let cnt = 0;
    3 console.log([1,2,3].map(f(++cnt)));
    4 const a = [1, 2, 3];
    5 let i = a.length;
    6 function g() { return () => --i >= 0 ? a[i] : 0; }
    7 g();
    8 g()();
    9 console.log(i, g()());
    10 const sn = <T>(e: T, t: Stream<T>) => snode(e, () => t);
    11 let s: Stream<number> = sempty();
    12 [1,2,3,4].forEach(e => s = sn(e, s));
    13 console.log(s.filter(x => x % 2 > 0).head());
```

<details>
<summary>View Solution</summary>

3. An array (object) `[1,2,3]` is created. To map, we evaluate its argument, `f(++cnt)`, and first increment `cnt` to 1. (Like any function argument, this is evaluated once). Calling `f(1)` returns a closure, equivalent to `e => e += 1`. This is called with every array element, and returns a number higher by 1 (the assignment to e has no effect outside the closure). Thus, map creates and returns a new array `[2,3,4]` which is printed. The original and new array as well as the created closure are no longer accessible and can be garbage collected.

4. A new array `[1,2,3]` is created and its reference assigned to a (which can’t be modified, but the array contents can).

7. `g` is called, creates and returns a closure. It is not used and can be garbage collected.

8. `g` is called, created and returns a new closure. The closure is called, decrementing `i` to 2 and returning `a[2]` (i.e., 3). The closure returned by `g` can be garbage collected. (Numbers are values and are not stored on the heap).

9. The value of i, 2, is printed. `g` is called, returning a new closure. The closure is called, decrementing `i` to 1 and returning `a[1]` (i.e., 2), which is also printed. The created closure can be garbage collected.

12. A new array `[1,2,3,4]` is created. A closure is created and passed to `forEach`. The closure is called on each array element, creating a new snode at each call (linked to the previous value of `s`) and updating `s` each time with the result. At the end, `s` is a stream of four nodes, 4, 3, 2, 1. The array can be garbage collected.

13. `filter` is called on s with a new created closure, `x => x % 2 > 0`. This creates a stream with a single evaluated
node, the first odd element (3) found in `s`. The value 3 is printed. The new stream and the closure can be garbage collected.

</details>

### Q3 Aynchronous Programming (18 pts)

Write a function `map2D<T, R>(a:T[][], f:(x: T) => Promise<R>): Promise<R[][]>`. The function should apply `f` to every element of the given array and return a Promise that fulfills with a new `R[][]` array containing the values with which `f` fulfills (ignoring any rejects). (If `f` rejects for all elements of a row, include an empty row). Do not enforce sequential computation where not needed. See Promise methods on page 1.

<details>
<summary>View Solution</summary>

```ts
function map2D<T, R>(a: T[][], f: (x: T) => Promise<R>): Promise<R[][]> {
    return Promise.all(a.map(row =>
        Promise.allSettled(row.map(f))
            .then(ra => ra.reduce((acc: R[], r) =>
                r.status === ’fulfilled’ ? acc.concat([r.value]) : acc, [])
    )));
}
```

In each row, we map each element with function `f`, and wait for all promises to settle; then we extract the values of the ones that fulfilled (we could also do this with a filter+map). This is done independently for all rows; here we can use `Promise.all`, since we know that the inner promise always fulfills.
</details>

### Q4 Programm Correctness (15 pts)

Implement a function `peakIndex(a: number[]): number` that returns the index of the maximum in an array. Assume the array consists of a strictly increasing sequence (may be empty) up to the maximum, then a strictly decreasing sequence (may be empty). Return -1 for an empty array. Prove your code correct (including termination) using assertions and invariants (start with informal ones). Like in binary search, decide whether to search left or right, using the skeleton:

`while ( ??? ) { /* ... */ if (a[m] < a[m+1]) /* ... */ else /* ... */ }`

You might start by writing down how the array is ordered before and after the peak index.

<details>
<summary>View Solution</summary>

We express two properties: the array has a peak (given), and the invariant: peak is to be found between `lo` and `hi` (which are within the array bounds), unless the array length is `0`. If `a[mid] < a[mid+1]`, the peak is not before `mid+1`, otherwise, it is not after `mid`. This allows us to update `lo` or `hi`, restoring the invariant. Their difference decreases, so the loop terminates. At this point, `lo > hi` iff `a` is empty; we return `-1`; otherwise, `lo = hi` is the index of the maximum.

```ts
function peakIndex(a: number[]): number {
    let lo = 0;
    let hi = a.length - 1;
    // Define: peak(M) = forall i: 0 < i <= M ==> a[i-1] < a[i] && forall j: M < j < a.length ==> a[j-1] > a[j]
    // INVAR: a.length = 0 || 0 <= lo <= hi < a.length && exists M: lo <= M <= hi && peak(M)
    // VARIANT: hi - lo
    while (lo < hi) {
        // INVAR && lo < hi
        let mid = lo + Math.floor((hi - lo) / 2);
        // 0 <= lo <= mid < hi < a.length && exists M: lo <= M <= hi && peak(M)
        if (a[mid] < a[mid+1]) {
            // 0 <= lo <= mid < hi < a.length && exists M: lo <= M <= hi && peak(M) && mid+1 <= M
            lo = mid + 1;
            // 0 <= lo <= hi < a.length && exists M: lo <= M <= hi && peak(M)
            // lo > \old(lo) ==> hi - lo < \old(hi - lo)
        } else { // a[mid] >= a[mid+1]
            // 0 <= lo <= mid < hi < a.length && exists M: lo <= M <= hi && peak(M) && M <= mid
            hi = mid;
            // 0 <= lo <= hi < a.length && exists M: lo <= M <= hi && peak(M)
            // hi < \old(hi) ==> hi - lo < \old(hi - lo)
        }
        // INVAR restored: 0 <= lo <= hi < a.length && exists M: lo <= M <= hi && peak(M)
        // VARIANT decreased: hi - lo < \old(hi - lo) ==> loop terminates
    }
    // lo >= hi && INVAR
    // a.length = 0 || lo = M = hi && peak(M) ===> correct result
    return lo === hi ? lo : -1;
}
```
</details>

### Q5 Interpreters (16 pts)

Write a function `needParens(e: Expression): boolean` that determines whether parentheses would be needed when translating a given expression AST into code (or, equivalently, whether the AST could have been produced from an expression without parentheses). Assume the expression contains numbers and arithmetic operators $+$, $-$, $*$, $/$. Recall that operators are left-associative: in $2 + 3 + 5$, the rightmost operation is done last.

`type Expression = { kind: ’number’, value: number } | { kind: ’operator’, operator: string, left: Expression, right: Expression }`

Consider how a few simple expressions with or without parentheses would be represented as AST.

<details>
<summary>View Solution</summary>

This is an example of recursive processing. An expression only needs parentheses if it has an operator. The top operator needs parentheses if the root of the left or right subexpression has lower precedence, or the right operator has the same precedence (since associativity is left to right). The other cases are when any of the expressions itself needs parentheses. We express this by giving numeric precedence to operators.

```ts
const prec = (e: Expression) => e.kind === ’number’ ? 2
               : e.operator === ’+’ || e.operator === ’-’ ? 0 : 1;

function needParens(e: Expression): boolean {
    return e.kind === ’operator’ && (prec(e) > prec(e.left) || prec(e) >= prec(e.right)
                                    || needParens(e.left) || needParens(e.right));
}
```
</details>

### Q6 Observables (18 pts)

Consider the Observable class on page 1, with a method `filter` that returns a new Observable and subscribes a function to the old one, but has otherwise unknown implementation. Implement a new `class EnhancedObs<T>` with all methods of Observable and two new methods: `countSubscribers(): number` returns the number of subscribers `merge(oArr: Observable<T>[]): EnhancedObs<T>` returns a new EnhancedObs that updates whenever any of the Observables in the input arrays update.

The class should not have other public properties. Its `filter` method should return an EnhancedObs.

<details>
<summary>View Solution</summary>

Since `filter` returns a new Observable, and we need an EnhancedObs, we use wrapping. We can’t directly inherit any methods, so we don’t need to extend the base class, just to have its methods. We should not reimplement any methods, this duplicates code (and the `filter` implementation is unknown). We can’t directly access the subscribers array, so we add a private counter, incremented in `subscribe` and `filter`.

```ts
class EnhancedObs<T> {
    private subs = 0;
    private obs = new Observable<T>();
    update(x: T) { this.obs.update(x); }
    subscribe(f: Observer<T>) { ++this.subs; this.obs.subscribe(f); }
    filter(f: (x: T) => boolean): EnhancedObs<T> {
        const r = new EnhancedObs<T>();
        // or copy: r = Object.assign(){}, this); Object.setPrototypeOf(r, this,prototype);
        r.obs = this.obs.filter(f);
        ++this.subs; // function subscribed in filter
        return r;
    }
    countSubscribers(): number { return this.subs; }
    merge(oArr: Observable<T>[]): EnhancedObs<T> {
        const r = new EnhancedObs<T>();
        oArr.forEach(o => o.subscribe(x => r.update(x)));
        return r;
    }
}
```
</details>