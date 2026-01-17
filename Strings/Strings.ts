// Strings: Text value or a combination of characters.

/*
Declaration:
1. Using double quotes
2. Using single quotes
3. Using backticks (template literals)

index in strings starts from 0
*/

// 1. Using double quotes
let doubleQuotedString: string = "Hello, World!";
console.log(doubleQuotedString); // Output: Hello, World!

// 2. Using single quotes
let singleQuotedString: string = 'Hello, TypeScript!';
console.log(singleQuotedString); // Output: Hello, TypeScript!

// 3. Using backticks (template literals)
let names: string = "Alice";
let templateLiteralString: string = `Hello, ${names}! Welcome to TypeScript.`;
console.log(templateLiteralString); // Output: Hello, Alice! Welcome to TypeScript.

// String properties and methods
let sampleString: string = "TypeScript is awesome!";

// Length property
console.log(sampleString.length); // Output: 21

// toUpperCase() method
console.log(sampleString.toUpperCase()); // Output: TYPESCRIPT IS AWESOME!

// toLowerCase() method
console.log(sampleString.toLowerCase()); // Output: typescript is awesome!

// charAt() method
console.log(sampleString.charAt(0)); // Output: T

// substring() method
console.log(sampleString.substring(0, 10)); // Output: TypeScript

// includes() method
console.log(sampleString.includes("awesome")); // Output: true

// replace() method
console.log(sampleString.replace("awesome", "great")); // Output: TypeScript is great!

// trim() method
let stringWithSpaces: string = "   Hello, Trim!   ";
console.log(stringWithSpaces.trim()); // Output: Hello, Trim!

// split() method
let words: string[] = sampleString.split(" ");
console.log(words); // Output: [ 'TypeScript', 'is', 'awesome!' ]

// Accessing characters using index
console.log(sampleString[0]); // Output: T
console.log(sampleString[5]); // Output: c  

// Note: Strings are immutable in TypeScript. Any modification methods return a new string.
// Original string remains unchanged
console.log(sampleString); // Output: TypeScript is awesome!

// startsWith() method
console.log(sampleString.startsWith("Type")); // Output: true

// endsWith() method
console.log(sampleString.endsWith("awesome!")); // Output: true

// repeat() method
console.log("Hi! ".repeat(3)); // Output: Hi! Hi! Hi!

// concat() method
let greeting: string = "Hello, ".concat("World!");
console.log(greeting); // Output: Hello, World!

// indexOf() method
console.log(sampleString.indexOf("is")); // Output: 11

// lastIndexOf() method
console.log(sampleString.lastIndexOf("e")); // Output: 17

// slice() method
console.log(sampleString.slice(0, 10)); // Output: TypeScript

// padStart() method
console.log("5".padStart(3, "0")); // Output: 005



