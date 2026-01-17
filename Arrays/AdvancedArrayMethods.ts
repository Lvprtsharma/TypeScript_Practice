// ======  Advanced Array Methods ======

/*
Advanced Array Methods in TypeScript:
--------------------------------------
- TypeScript supports all standard JavaScript array methods, providing type safety and autocompletion.
- Advanced array methods include map, filter, reduce, forEach, find, some, every, and more.
- These methods allow for functional programming techniques to manipulate and transform arrays efficiently.
- TypeScript's type system ensures that the operations performed on arrays are type-safe, reducing runtime errors.
- These methods are able to accept functions as arguments, enabling powerful data processing capabilities.

*/

// ForEach - method to execute a function for each array element
// It takes a callback function as an argument and applies it to each element in the array.
/*
Syntax:
array.forEach((element, index, array) => {
    // Your code here
});
*/

let nums: number[] = [1, 2, 3, 4, 5];
let fruit: string[] = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

console.log("Using forEach on numbers:");
nums.forEach((num, index) => {
    console.log(`Index ${index}: ${num}`);
});


console.log("Using forEach on fruits:");fruit.forEach((item, index) => {
    console.log(`Index ${index}: ${item}`);
});

// map() - creates a new array by applying a function to each element of the original array
// It returns a new array with the results of calling the provided function on every element in the calling array.

/*
Syntax:
let newArray = array.map((element, index, array) => {
    // Your code here
    return modifiedElement;
});
*/

let numberArray: number[] = [1, 2, 3, 4, 5];

let squaredNumbers = numberArray.map(function(num){
    return num * num;
})
console.log("Original Numbers:", numberArray);
console.log("Squared Numbers using map:", squaredNumbers);

// Ex2: Double each number in the array
let doubledNumber = numberArray.map(element => element * 2);
console.log("Doubled Numbers using map:", doubledNumber);

// filter() - creates a new array with all elements that pass the test/condition implemented by the provided function
// It takes function as a parameter and returns a new array containing only the elements that satisfy the condition specified in the function.
// The returned array may be of a different length than the original array.

/*
Syntax:
let newArray = array.filter((element, index, array) => {
    // Your code here
    return condition; // true to keep the element, false otherwise
});
*/

let mixedNumbers: number[] = [10, 15, 20, 25, 30, 35, 40];

// Ex1: Filter out even numbers
let evenNums = mixedNumbers.filter(num => num % 2 === 0);
console.log("Original Numbers:", mixedNumbers);
console.log("Even Numbers using filter:", evenNums);

// reduce - method to reduce the array to a single value by executing a reducer function on each element of the array
// It takes a callback function and an optional initial value as arguments and returns a single output value.

/*
Syntax:
let result = array.reduce((accumulator, currentValue, index, array) => {
    // Your code here
    return updatedAccumulator;
}, initialValue);
*/

let values: number[] = [1, 2, 3, 4, 5];

// Ex1: Sum of all numbers in the array
let totalSum = values.reduce((acc, curr) => acc + curr, 0);
console.log("Original Values:", values);
console.log("Sum of Values using reduce:", totalSum);

// Ex2: Product of all numbers in the array
let product = values.reduce((acc, curr) => acc * curr, 1);
console.log("Product of Values using reduce:", product);

// find - method to find the first element in the array that satisfies a provided testing function
// It returns the value of the first element that passes the test. If no elements satisfy the condition, it returns undefined.

/*
Syntax:
let foundElement = array.find((element, index, array) => {
    // Your code here
    return condition; // true to indicate a match
});
*/

let searchNumbers: number[] = [5, 12, 8, 130, 44];

// Ex1: Find the first number greater than 10
let firstOverTen = searchNumbers.find(num => num > 10);
console.log("Original Numbers:", searchNumbers);
console.log("First number greater than 10 using find:", firstOverTen);

// Ex2: Find the first even number
let firstEven = searchNumbers.find(num => num % 2 === 0);
console.log("First even number using find:", firstEven);

// findIndex - method to find the index of the first element in the array that satisfies a provided testing function
// It returns the index of the first element that passes the test. If no elements satisfy the condition, it returns -1.

/*
Syntax:
let foundIndex = array.findIndex((element, index, array) => {
    // Your code here
    return condition; // true to indicate a match
});
*/

let indexNumbers: number[] = [5, 12, 8, 130, 44];

// Ex1: Find the index of the first number greater than 10
let indexFirstOverTen = indexNumbers.findIndex(num => num > 10);
console.log("Original Numbers:", indexNumbers);
console.log("Index of first number greater than 10 using findIndex:", indexFirstOverTen);

// Ex2: Find the index of the first even number
let indexFirstEven = indexNumbers.findIndex(num => num % 2 === 0);
console.log("Index of first even number using findIndex:", indexFirstEven);

// some - method to test whether at least one element in the array passes the test implemented by the provided function
// It returns a boolean value: true if at least one element satisfies the condition, otherwise false.

/*
Syntax:
let result = array.some((element, index, array) => {
    // Your code here
    return condition; // true to indicate a match
});
*/

let checkNumbers: number[] = [1, 3, 5, 7, 8];

// Ex1: Check if there is at least one even number
let hasEven = checkNumbers.some(num => num % 2 === 0);
console.log("Original Numbers:", checkNumbers);
console.log("Does the array have at least one even number using some?", hasEven);

// Ex2: Check if there is at least one number greater than 10
let hasGreaterThanTen = checkNumbers.some(num => num > 10);
console.log("Does the array have at least one number greater than 10 using some?", hasGreaterThanTen);

// every - method to test whether all elements in the array pass the test implemented by the provided function
// It returns a boolean value: true if all elements satisfy the condition, otherwise false.

/*
Syntax:
let result = array.every((element, index, array) => {
    // Your code here
    return condition; // true to indicate a match
});
*/
let allNum: number[] = [2, 4, 6, 8, 10];

// Ex1: Check if all numbers are even
let allEven = allNum.every(num => num % 2 === 0);
console.log("Original Numbers:", allNum);
console.log("Are all numbers even using every?", allEven);

// Ex2: Check if all numbers are greater than 0
let allGreaterThanZero = allNum.every(num => num > 0);
console.log("Are all numbers greater than 0 using every?", allGreaterThanZero);

// flat - method to flatten nested arrays into a single array
// It creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

/*
Syntax:
let flattenedArray = array.flat(depth);
*/

let nestedNums: number[][] = [[1, 2], [3, 4], [5, 6]];

// Ex1: Flatten the nested array by one level
let flatArray = nestedNums.flat();
console.log("Original Nested Array:", nestedNums);
console.log("Flattened Array using flat():", flatArray);

// Ex2: Flatten a deeper nested array
let deepNestedNums: any[] = [1, [2, [3, [4, 5]]]];
let deeplyFlatArray = deepNestedNums.flat(3);
console.log("Original Deeply Nested Array:", deepNestedNums);
console.log("Deeply Flattened Array using flat(3):", deeplyFlatArray);