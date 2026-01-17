/*
Arrays in Typescript:
--------------------
- Arrays are used to store multiple values in a single variable.
- The values in an array can be of the same type or different types.
- TypeScript provides several ways to define and work with arrays, including:
  1. Using square brackets [] to define an array of a specific type.
  2. Using the Array<T> generic type to define an array of a specific type.
  3. Using tuples to define arrays with fixed sizes and types for each element.
- Indexing starts at 0, meaning the first element is accessed with index 0, the second with index 1, and so on.
- Arrays are an ordered collection, meaning the order of elements is maintained.

// Example 1: Defining an array using square brackets
let numbers: number[] = [1, 2, 3, 4, 5];
console.log("Numbers Array:", numbers);
*/

// Approach 1: Using literals
let fruits: string[] = [] // Step 1: Declare an empty array of strings

// Initialize the array with some values
fruits[0] = "Apple";
fruits[1] = "Banana";
fruits[2] = "Cherry";
console.log("Fruits Array:", fruits);

let days: string[] = ["Monday", "Tuesday", "Wednesday"]; // Step 1: Declare and initialize an array of strings
console.log("Days Array:", days);

// Approach 2: Using Array<T> generic type
let empNames: Array<string> = ["John", "Jane", "Doe"]; // Step 1: Declare and initialize an array of strings using Array<T>
console.log("Employee Names Array:", empNames);

let data: Array<string | number> = []; // Step 1: Declare an empty array that can hold strings and numbers

// Initialize the array with mixed values
data.push("Hello");
data.push(42);
data.push("World");
data.push(100);
console.log("Mixed Data Array:", data);

// Example 2: Array of type any
let mixedArray: any[] = [1, "Two", true, { key: "value" }, [5, 6, 7]];
console.log("Mixed Array:", mixedArray);

// Opertions on Arrays

// 1. Accessing elements
console.log("First fruit:", fruits[0]); // Output: Apple
console.log("Second day:", days[1]); // Output: Tuesday

// 2. Modifying elements
fruits[1] = "Blueberry"; // Change Banana to Blueberry
console.log("Modified Fruits Array:", fruits);

// 3. Adding elements
fruits.push("Date"); // Add Date to the end of the array
console.log("Fruits Array after push:", fruits);

// 4. Removing elements
let removedFruit = fruits.pop(); // Remove the last element (Date)
console.log("Removed Fruit:", removedFruit);
console.log("Fruits Array after pop:", fruits);

// 5. Iterating over an array
console.log("Iterating over Days Array:");
for (let day of days) {
    console.log(day);
}

for (let i = 0; i < empNames.length; i++) {
    console.log(`Employee ${i + 1}:`, empNames[i]);
}

for (let index in data) {
    console.log(`Data at index ${index}:`, data[index]);
}

// 6. Array length
console.log("Number of fruits:", fruits.length); // Output: Number of fruits: 3

// 7. Using array methods
let sortedDays = days.sort(); // Sort the days array
console.log("Sorted Days Array:", sortedDays);

let filteredFruits = fruits.filter(fruit => fruit.startsWith("B")); // Filter fruits starting with 'B'
console.log("Filtered Fruits (start with B):", filteredFruits);

/*
In this example, we demonstrated various ways to define and manipulate arrays in TypeScript.
We covered defining arrays using both square brackets and the Array<T> generic type, as well as performing common operations such as accessing, modifying, adding, removing elements, iterating over arrays, and using array methods.
*/