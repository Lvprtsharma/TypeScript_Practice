/*
Tuples in TypeScript:
-----------------------
- Tuples are a special type of array that allows you to define an array with a fixed number of elements, where each element can have a different type.
- They are useful when you want to represent a collection of values that are related but of different types.
- Tuples are defined using square brackets [] with the types of each element specified in order.
- You can access and modify tuple elements using their index, similar to arrays.
- TypeScript enforces the types and the number of elements in a tuple, providing type safety.

*/

// Example 1: Defining a tuple
let person: [string, number, boolean]; // Step 1: Declare a tuple with specific types

// Step 2: Initialize the tuple with values
person = ["Alice", 30, true];
console.log("Person Tuple:", person);
console.log(typeof person); // Output: object

let students: [number, string][] = [[1, "Alice"], [2, "Bob"], [3, "Charlie"]]; // Step 1: Declare an array of tuples

console.log("Students Array of Tuples:", students);

console.log("First Student ID:", students[0][1]); // Output: 1


