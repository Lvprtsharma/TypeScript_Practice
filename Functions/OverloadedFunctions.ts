// Function Overloading:
/*
- Function overloading is a feature in TypeScript that allows you to define multiple function signatures for a single function implementation.
- This enables the function to handle different types or numbers of arguments while providing type safety.

// Step 1: Write a signature of the function for each variation you want to support.
- Each signature specifies the types of parameters and the return type for that specific variation.
*/

console.log("\n--- Example of function overloading ---");

function getInfo(id: number): string;
function getInfo(name: string): string;
function getInfo(id: number, name: string): string;

// Step 2: Implement the function to handle all variations.
function getInfo(param1: number | string, param2?: string): string {
    if (typeof param1 === "number" && param2 === undefined) {
        return `User ID: ${param1}`;
    } else if (typeof param1 === "string" && param2 === undefined) {
        return `User Name: ${param1}`;
    } else if (typeof param1 === "number" && typeof param2 === "string") {
        return `User ID: ${param1}, User Name: ${param2}`;
    }
    return "Invalid parameters";
}

// Usage examples:
console.log(getInfo(101)); // Output: User ID: 101
console.log(getInfo("Alice")); // Output: User Name: Alice
console.log(getInfo(102, "Bob")); // Output: User ID: 102, User Name: Bob

/*
In this example, the `getInfo` function is overloaded to handle three different scenarios:
1. When called with a single number (user ID).
2. When called with a single string (user name).
3. When called with both a number and a string (user ID and user name).

The implementation checks the types of the parameters and returns the appropriate string based on the input.
This approach ensures type safety and clarity in function usage.
*/