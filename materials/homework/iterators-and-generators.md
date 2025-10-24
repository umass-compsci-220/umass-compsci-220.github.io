---
sidebar_position: 5
---

# Iterators and Generators

<!-- TODO: Fix starter code link -->
- Please download the homework [here](https://github.com/umass-compsci-220/public-materials/raw/main/homework/05-iterators-generators.zip)

## Overview

During this project, you will develop a class that implements an iterable for a list of businesses. You will be given a large set of business data and you are tasked with implementing a class that provides methods to initialize and transform an iterable over businesses. You will also be tasked with implementing two functions that create generator objects that extend the functionality of an iterable.

### Learning Objectives

- Practice writing class-based TypeScript
- Work with iterators, iterables, and generators
- Learn about JavaScript Object Notation (JSON)

### Student Expectations

Students will be graded on their ability to:

- Correctly implement the functions [specified below](#programming-tasks)
- Follow the [coding](/materials/guidelines/syntax-and-code), [bad practice](/materials/guidelines/bad-practices) and [testing](/materials/guidelines/testing) guidelines
- Design full-coverage [unit-tests](#testing) for the functions they implemented
  - See the [testing guidelines](/materials/guidelines/testing#coverage) on coverage for more details

## Testing

You must write tests for all your functions, following the principles used so far.

## Getting Started

### JSON

JavaScript Object Notation (JSON) is a syntax for representing JavaScript objects, arrays, numbers, strings, booleans, and `null` as a complete (single) string. With this format, we can store runtime data on the disk or send it over a network.

Below is a JavaScript object,

```js
const sandwichOrders = {
  orders: [
    {
      orderId: 1234,
      sandwiches: [
        {
          bread: "whole wheat",
          vegetables: ["lettuce", "onion", "tomato", "hot peppers"],
          meat: ["prosciutto", "salami"],
          cheese: ["provolone"],
          condiments: ["mayonnaise", "vinegar"],
          isToasted: false,
        },
        {
          bread: "white",
          vegetables: null,
          meat: ["bologna"],
          cheese: null,
          condiments: null,
          isToasted: false,
        },
      ],
      total: 13.4,
    },
  ],
};
```

and its JSON representation:

```js
const str = JSON.stringify(sandwichOrders);
console.log(str);
// {"orders":[{"orderId":1234,"sandwiches":[{"bread":"whole wheat","vegetables":["lettuce","onion","tomato","hot peppers"],"meat":["prosciutto","salami"],"cheese":["provolone"],"condiments":["mayonnaise","vinegar"],"isToasted":false},{"bread":"white","vegetables":null,"meat":["bologna"],"cheese":null,"condiments":null,"isToasted":false}],"total":13.4}]}
```

We used the `JSON.stringify` function to convert our object into a string. All fields and values were placed into this string in a format that is readable:

```jsonc
{
  "orders": [
    {
      "orderId": 1234,
      "sandwiches": [
        {
          "bread": "whole wheat",
          "vegetables": ["lettuce", "onion", "tomato", "hot peppers"],
          "meat": ["prosciutto", "salami"],
          "cheese": ["provolone"],
          "condiments": ["mayonnaise", "vinegar"],
          "isToasted": false
        },
        {
          "bread": "white",
          "vegetables": null,
          "meat": ["bologna"],
          "cheese": null,
          "condiments": null,
          "isToasted": false
        }
      ],
      "total": 13.4
    }
  ]
}
```

Notice how all fields have been surrounded by double quotes. The quotes can be dropped in JS/TS - but JSON format indicates that fields are surrounded with double quotes. We can then transform this string back into an object using the `JSON.parse` function:

```js
// JSON.parse(s: string): any
const other = JSON.parse(str);
console.log(other); // { orders: [Object] }
// `other` is an entirely different object than `obj`
```

### The Yelp Dataset

The business review site Yelp releases a large dataset of businesses in a JSON format.

Each entry in the dataset JSON object, and looks something like this:

```json
[
  {
    "business_id": "Pns2l4eNsfO8kk83dixA6A",
    "name": "Abby Rappoport, LAC, CMQ",
    "address": "1616 Chapala St, Ste 2",
    "city": "Santa Barbara",
    "state": "CA",
    "postal_code": "93101",
    "latitude": 34.4266787,
    "longitude": -119.7111968,
    "stars": 5.0,
    "review_count": 7,
    "is_open": 0,
    "categories": [
      "Doctors",
      "Traditional Chinese Medicine",
      "Naturopathic/Holistic",
      "Acupuncture",
      "Health & Medical",
      "Nutritionists"
    ]
  },
  {
    "business_id": "mpf3x-BjTdTEA3yCZrAYPw",
    "name": "The UPS Store",
    "address": "87 Grasso Plaza Shopping Center",
    "city": "Affton",
    "state": "MO",
    "postal_code": "63123",
    "latitude": 38.551126,
    "longitude": -90.335695,
    "stars": 3.0,
    "review_count": 15,
    "is_open": 1,
    "attributes": { "BusinessAcceptsCreditCards": true },
    "categories": ["Shipping Centers", "Local Services", "Notaries", "Mailbox Centers", "Printing Services"],
    "hours": {
      "Monday": "0:0-0:0",
      "Tuesday": "8:0-18:30",
      "Wednesday": "8:0-18:30",
      "Thursday": "8:0-18:30",
      "Friday": "8:0-18:30",
      "Saturday": "8:0-14:0"
    }
  }
  // ...thousands of other entries
]
```

Notice how unorganized and "dirty" the data is. As examples,

- the `attributes` field is absent in the first object, but present with data in the second
- the `hours` field is absent in the first object, but present with data in the second

With thousands of other data entries, it is not hard to imagine there are dozens of other abnormalities in the data.

Provided to you is a version of the Yelp dataset, you may load it by using the `loadYelpData(part?: number)` function in the `./include/data.ts` file. There are other functions implemented in the same file that could be useful, such as creating randomized Businesses with `createRandomData(n: number)`, or creating a dataset with a name, but reusing results from previous runs (`loadOrCreate(datasetName: string, createDataset: () => Business[])`).

Examine the results of these two functions - look at the fields on each entry and the types they typically hold. Additionally, inside of the `./include/data/` folder, there is a series of JSON files that you can use to inspect the dataset.

## Programming Tasks

### `pairwise`

Write a function `pairwise` that takes in an iterable of generic type `T`. This function returns an iterable iterator over consecutive pairs of elements from the original sequence. For example, given an iterable that yields (1, 2, 3, 4), the function returns an iterable iterator that yields ([1, 2], [2, 3], [3, 4]). The order of the elements in both iterators must match. This function must use O(1) storage to receive credit. Your implementation may use generators or a custom iterator class.

### `cycle`

Implement the function `cycle` that takes in an array of iterables. This function returns an iterable iterator that yields one item at a time from each iterable in the order they are given. If any of the iterables reach their end before the others, that iterable is skipped. The returned iterable iterator is finished when all values from the iterables have been exhausted. For example, given iterables [(1, 2), (3)], the returned iterable iterator would yield (1, 3, 2). You may use O(m) space to store iterators, where m is the number of iterables, but your implementation must otherwise use O(1) space. Your implementation must use generators to receive credit.

### `BusinessQuery` class

Create a class `BusinessQuery` that implements the Iterable interface. The `BusinessQuery` class has a constructor that takes in one parameter of type `Iterable<Business>` that is initialized through a parameterized constructor. 

The `BusinessQuery` class must contain the following public methods. Each method must use constant (i.e., O(1)) storage to receive credit.

- A constructor that takes in one parameter of type `Iterable<Business>`
- A method `filter` that takes in a function `func: FilterFunc` and returns a `BusinessQuery` object that, when iterated over, yields only those businesses for which func(business) returns true. FilterFunc is the type of a function that takes in a `Business` and returns a boolean.
- A method `exclude` that takes in a function `func: FilterFunc` and returns a `BusinessQuery` object that, when iterated over, yields only those businesses for which func(business) returns false.
- A method `slice` that takes in two integers `start` and `end` and returns a `BusinessQuery` object that, when iterated over, yields only `BusinessQuery` objects in the 0-indexed range [start, end). That is, if the current `BusinessQuery` would yield 5 `Business` objects, the business query returned by calling `.slice(1, 3)` would yield only 2 `Business` objects (the ones at index 1 and index 2). `slice`’s parameters have the following requirements:
  - The start parameter is required
  - The end parameter is optional
    - Hint: The syntax for declaring a parameter as optional is a question mark (?)  after the name. For example, in the function signature `function spam(egg?: string)`, the parameter egg can be a string if an argument was provided by the caller (e.g., `spam(`spam`)`)or `undefined` if an argument was not provided (e.g., `spam()`).
  - If start or end (when end is provided) are not integers, `slice` throws an exception of type `SliceError` with the message `slice: start and end must be integers`. 
    - The `SliceError` class is provided for you in the starter code
  - If start or end are negative, `slice` throws an exception of type `SliceError` with the message `slice: start and end must be non-negative`.
  - If start is greater than end, `slice` throws an exception of type `SliceError` with the message `slice: start must not be greater than end`
  - If end is greater than the number of elements yielded by the current (pre-slice) business query, the behavior is identical to the behavior when end is equal to the number of elements yielded by the current query.
  - If start is greater than or equal to the number of elements yielded by the current query, the query produced by `slice` will yield no elements when iterated over.
- Any additional methods required to make a `BusinessQuery` object iterable. That is, any methods required by the Iterable interface
  - Hint: `BusinessQuery` is iterable, but it is not itself an iterator. Do not add any unnecessary public methods.
- You may add any private attributes or methods needed for your implementation. Make sure they are declared as private.

