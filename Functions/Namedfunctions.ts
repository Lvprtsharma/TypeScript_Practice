// Named Functions: These functions have a specific name and can be called by that name.

/*
syntax:

function declaration:
--------------------------------------------
function functionName(parameters) {
    // function body
}
--------------------------------------------

function call:
--------------------------------------------
functionName(arguments);
--------------------------------------------
*/

/*
Function vs Method:
- A function is a standalone block of code that performs a specific task and can be called independently.
- A method is a function that is associated with an object or class and is called on that object or class.
*/

/* 
Types of Named Functions:
1. Named function with no return value (void)
2. Named function with return value
3. Named function with parameters
4. Named function with rest parameters
5. Named function with optional parameters
6. Named function with default parameters
*/

console.log("--- Example of a named function with no return value ---");
function display(): void {
    console.log("This is a named function with no return.");
}

display(); // Calling the function

console.log("\n--- Example of a named function with return value ---");
// Example of a named function
function greet(name: string): string {
    return `Hello, ${name}!`;
}

// Calling the named function
const message: string = greet("Alice");
console.log(message); // Output: Hello, Alice!

console.log("\n--- Another example of a named function with parameters ---");
// Another example with parameters
function add(a: number, b: number): number {
    return a + b;
}

const sum: number = add(5, 10);
console.log("Sum:", sum); // Output: Sum: 15

// Best Practices
/*
- Use descriptive names for functions to indicate their purpose.
- Keep functions focused on a single task.
- Use type annotations for parameters and return types in TypeScript.
*/

// Named functions with rest parameters
// This function takes a variable number of arguments and multiplies each by a given factor

console.log("\n--- Named function with rest parameters ---");
function addNumbers(...nums: number[]): number {
    let i;
    let total: number = 0;
    for (i = 0; i < nums.length; i++) {
        total += nums[i];
    }
    return total;
}

const result: number = addNumbers(2, 1, 2, 3, 4);
console.log("Sum:", result); // Output: Sum: 12

// Named function with rest parameters - multiple types
console.log("\n--- Named function with rest parameters of multiple types ---");
function findElements(...elements:(number | string)[]): void {
    console.log("Elements:", elements);
    console.log("Total elements:", elements.length);
}

findElements(1, 2, 3, 4, 5); // Output: Elements: [ 1, 2, 3, 4, 5 ]
findElements("apple", "banana", "orange"); // Output: Elements: [ 'apple', 'banana', 'orange' ]
findElements(1, "two", 3, "four"); // Output: Elements: [ 1, 'two', 3, 'four' ]

// Named function with optional parameters
// Optional parameters are parameters that may or may not be provided when calling the function.
// Any parameter can be made optional by adding a question mark (?) after its name in the function definition.
console.log("\n--- Named function with optional parameters ---");
function displayDetails(name: string, age?: number): void {
    if (age !== undefined) {
        console.log(`Name: ${name}, Age: ${age}`);
    } else {
        console.log(`Name: ${name}, Age: Not provided`);
    }
}

displayDetails("John", 30); // Output: Name: John, Age: 30
displayDetails("Alice"); // Output: Name: Alice, Age: Not provided

// Named function with default parameters
// Default parameters allow named functions to have default values for parameters if no value or undefined is passed.
console.log("\n--- Named function with default parameters ---");
function multiply(a: number, b: number = 2): number {
    return a * b;
}

console.log("Multiply with one parameter (default b=2):", multiply(5)); // Output: 10
console.log("Multiply with both parameters:", multiply(5, 3)); // Output: 15
