// Arrow functions/ Lambda functions
/*
Arrow functions are a shorthand syntax for writing anonymous functions.
They are often used when you want to pass a function as an argument or assign it to a variable.

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

let multiplyy = (x: number, y: number): number => {
    return x * y;
}

console.log("Product:", multiplyy(4, 6)); // Calling the arrow function

//Arrow function with single parameter and implicit return
console.log("\n--- Example of an arrow function with single parameter and implicit return ---");

let square = (n: number): number => n * n;

console.log("Square:", square(5)); // Calling the arrow function

// Arrow function with no parameters and implicit return
console.log("\n--- Example of an arrow function with no parameters and implicit return ---");

let getCurrentYear = (): number => new Date().getFullYear();

console.log("Current Year:", getCurrentYear()); // Calling the arrow function

// Arrow function with rest parameters
console.log("\n--- Example of an arrow function with rest parameters ---");

let sumAll = (...numbers: number[]): number => {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log("Sum of all numbers:", sumAll(1, 2, 3, 4, 5)); // Calling the arrow function

// Arrow function with default parameters
console.log("\n--- Example of an arrow function with default parameters ---");

let greetPerson = (name: string = "Guest"): string => {
    return `Hello, ${name}!`;
}

console.log(greetPerson());
console.log(greetPerson("Bob")); // Calling the arrow function

// Arrow function with optional parameters
console.log("\n--- Example of an arrow function with optional parameters ---");

let introduce = (name: string, age?: number): string => {
    if (age) {
        return `My name is ${name} and I am ${age} years old.`;
    } else {
        return `My name is ${name}.`;
    }
}

console.log(introduce("Alice"));
console.log(introduce("Charlie", 30)); // Calling the arrow function

// Arrow functions and 'this' context
console.log("\n--- Example of arrow function and 'this' context ---");

class Counter {
    count: number = 0;

    // Using arrow function to retain 'this' context
    increment = (): void => {
        this.count++;
        console.log("Count:", this.count);
    }
}

const counter = new Counter();
counter.increment(); // Count: 1
counter.increment(); // Count: 2

// Best Practices
/*
- Use arrow functions for concise syntax, especially for short functions.
- Be cautious when using arrow functions as methods in classes or objects, as they do not have their own 'this' context.
- Use arrow functions for callbacks to retain the surrounding 'this' context.
*/