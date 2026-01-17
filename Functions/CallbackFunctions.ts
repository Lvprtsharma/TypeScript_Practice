// Callback Function:
/*
- A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed.
- Callback functions are commonly used for asynchronous operations, event handling, and functional programming.
*/

function showMessage(message: string): void {
    console.log("Message:", message);
}

 showMessage("Hello from the callback function!"); // Calling the function with a message

 greet("Hi there!", showMessage); // Calling the greet function with a message and a callback function

function greet(msg: string, callback: (message: string) => void): void {
    console.log("Greeting...");
    callback(msg); // Executing the callback function
}

/*
Arrow Function:
- An arrow function is a concise way to write functions in TypeScript (and JavaScript).
- They are often used when you want to pass a function as an argument or assign it to a variable.

There are 3 parts to an arrow function:
1. Parameter(s): The input to the function. If there is only one parameter, parentheses can be omitted.
2. Arrow (=>): Indicates that this is an arrow function.
3. Function Body: The code that defines what the function does. If the body contains a single expression, 
                    curly braces can be omitted, and the expression's value is returned automatically.    
*/

console.log("\n--- Example of an arrow function ---");

// Examples of arrow functions with no parameters
let greetArrow = (): void => {
    console.log("This is an arrow function with no parameters.");
}

greetArrow(); // Calling the arrow function

console.log("\n--- Example of an arrow function with parameters ---");

let multiply = (x: number, y: number): number => {
    return x * y;
}

console.log("Product:", multiply(4, 6)); // Calling the arrow function