/*
Anonymous Function:
- An anonymous function is a function that does not have a name.
- It is often used as an argument to other functions or assigned to variables.
- Anonymous functions are also known as lambda functions or function expressions.
*/

/*
Syntax:
--------------------------------------------
const variableName = function(parameters) {
    // function body
};
--------------------------------------------

or using arrow function syntax:
--------------------------------------------
const variableName = (parameters) => {
    // function body
};
--------------------------------------------
*/

// Examples:

console.log("--- Example of an anonymous function assigned to a variable ---");
let msg = function(): String
{
    return "Hello, World!";
}

console.log(msg()); // Calling the anonymous function

console.log("\n--- Example of an anonymous function with parameters ---");
let summ = function(a: number, b: number): number
{
    return a + b;
}

console.log("Sum:", summ(5, 10)); // Calling the anonymous function with arguments
