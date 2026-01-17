
let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: string[] = ["Apple", "Banana", "Cherry"];

console.log("Numbers:", numbers);
console.log("Fruits:", fruits);

// length of array - attribute but not a method
console.log("Length of numbers array:", numbers.length);
console.log("Length of fruits array:", fruits.length);

// push - method to add an element at the end
numbers.push(6);
fruits.push("Date");

console.log("Numbers after push:", numbers);
console.log("Fruits after push:", fruits);

// pop - method to remove the last element
let lastNumber = numbers.pop();
let lastFruit = fruits.pop();

console.log("Popped number:", lastNumber);
console.log("Popped fruit:", lastFruit);
console.log("Numbers after pop:", numbers);
console.log("Fruits after pop:", fruits);

// indexOf - method to find the index of an element
let indexOfThree = numbers.indexOf(3);
let indexOfBanana = fruits.indexOf("Banana");
let indexOfGrape = fruits.indexOf("Grape", 2); // Not found case -1


console.log("Index of 3 in numbers:", indexOfThree);
console.log("Index of 'Banana' in fruits:", indexOfBanana);
console.log("Index of 'Grape' in fruits starting from index 2:", indexOfGrape);

// splice - method to remove or replace elements
// Remove 1 element at index 1
let removedNumbers = numbers.splice(1, 1);
let removedFruits = fruits.splice(1, 1);

console.log("Removed from numbers:", removedNumbers);
console.log("Numbers after splice:", numbers);
console.log("Removed from fruits:", removedFruits);
console.log("Fruits after splice:", fruits);

// slice - method to get a sub-array
let subNumbers = numbers.slice(1, 3); // from index 1 to 3 (not inclusive)
let subFruits = fruits.slice(0, 2); // from index 0 to 2 (not inclusive)

console.log("Sub-array of numbers:", subNumbers);
console.log("Sub-array of fruits:", subFruits);

// splice to add elements
// At index 1, remove 0 elements and add 10 and 20
numbers.splice(1, 0, 10, 20);
fruits.splice(1, 0, "Blueberry", "Cantaloupe");

console.log("Numbers after adding with splice:", numbers);
console.log("Fruits after adding with splice:", fruits);


// shift - method to remove the first element
let firstNumber = numbers.shift();
let firstFruit = fruits.shift();

console.log("Shifted number:", firstNumber);
console.log("Numbers after shift:", numbers);
console.log("Shifted fruit:", firstFruit);
console.log("Fruits after shift:", fruits);

// unshift - method to add an element at the beginning
numbers.unshift(0);
fruits.unshift("Avocado");

console.log("Numbers after unshift:", numbers);
console.log("Fruits after unshift:", fruits);

// concat - method to merge two arrays
let moreNumbers: number[] = [7, 8, 9];
let allNumbers = numbers.concat(moreNumbers);

let moreFruits: string[] = ["Elderberry", "Fig"];
let allFruits = fruits.concat(moreFruits);

console.log("All Numbers after concat:", allNumbers);
console.log("All Fruits after concat:", allFruits);

// join - method to join array elements into a string
let numbersString = numbers.join(", ");
let fruitsString = fruits.join(" - ");

console.log("Numbers joined into string:", numbersString);
console.log("Fruits joined into string:", fruitsString);

// reverse - method to reverse the array
numbers.reverse();
fruits.reverse();

console.log("Reversed Numbers:", numbers);
console.log("Reversed Fruits:", fruits);

// sort - method to sort the array
numbers.sort((a, b) => a - b); // Numeric sort
fruits.sort(); // Alphabetical sort

console.log("Sorted Numbers:", numbers);
console.log("Sorted Fruits:", fruits);

// Includes - method to check if an array contains a specific element
let hasThree = numbers.includes(3);
let hasMango = fruits.includes("Mango");

console.log("Does numbers include 3?", hasThree);
console.log("Does fruits include 'Mango'?", hasMango);

// toString - method to convert array to string
let numbersToString = numbers.toString();
let fruitsToString = fruits.toString();

console.log("Numbers toString:", numbersToString);
console.log("Fruits toString:", fruitsToString);

// forEach - method to execute a function for each array element
console.log("Using forEach on numbers:");
numbers.forEach((num, index) => {
    console.log(`Index ${index}: ${num}`);
});

console.log("Using forEach on fruits:");
fruits.forEach((fruit, index) => {
    console.log(`Index ${index}: ${fruit}`);
});

// map - method to create a new array by applying a function to each element
let doubledNumbers = numbers.map(num => num * 2);
let uppercasedFruits = fruits.map(fruit => fruit.toUpperCase());

console.log("Doubled Numbers using map:", doubledNumbers);
console.log("Uppercased Fruits using map:", uppercasedFruits);

// filter - method to create a new array with elements that pass a test
let evenNumbers = numbers.filter(num => num % 2 === 0);
let fruitsWithA = fruits.filter(fruit => fruit.includes("a") || fruit.includes("A"));

console.log("Even Numbers using filter:", evenNumbers);
console.log("Fruits containing 'a' using filter:", fruitsWithA);

// reduce - method to reduce the array to a single value
let sumOfNumbers = numbers.reduce((acc, curr) => acc + curr, 0);
let concatenatedFruits = fruits.reduce((acc, curr) => acc + " " + curr, "").trim();

console.log("Sum of Numbers using reduce:", sumOfNumbers);
console.log("Concatenated Fruits using reduce:", concatenatedFruits);

// find - method to find the first element that satisfies a condition
let firstEvenNumber = numbers.find(num => num % 2 === 0);
let firstFruitWithE = fruits.find(fruit => fruit.includes("e") || fruit.includes("E"));

console.log("First even number using find:", firstEvenNumber);
console.log("First fruit containing 'e' using find:", firstFruitWithE);

// findIndex - method to find the index of the first element that satisfies a condition
let indexFirstEvenNumber = numbers.findIndex(num => num % 2 === 0);
let indexFirstFruitWithE = fruits.findIndex(fruit => fruit.includes("e") || fruit.includes("E"));

console.log("Index of first even number using findIndex:", indexFirstEvenNumber);
console.log("Index of first fruit containing 'e' using findIndex:", indexFirstFruitWithE);

// some - method to check if at least one element satisfies a condition
let hasEvenNumber = numbers.some(num => num % 2 === 0);
let hasFruitWithZ = fruits.some(fruit => fruit.includes("z") || fruit.includes("Z"));

console.log("Does numbers have at least one even number using some?", hasEvenNumber);
console.log("Does fruits have at least one fruit containing 'z' using some?", hasFruitWithZ);

// every - method to check if all elements satisfy a condition
let allPositiveNumbers = numbers.every(num => num > 0);
let allFruitsLongerThanTwo = fruits.every(fruit => fruit.length > 2);

console.log("Are all numbers positive using every?", allPositiveNumbers);
console.log("Are all fruits longer than two characters using every?", allFruitsLongerThanTwo);

// flat - method to flatten nested arrays
let nestedNumbers = [[1, 2], [3, 4], [5, 6]];
let flattenedNumbers = nestedNumbers.flat();

console.log("Flattened Numbers:", flattenedNumbers);
let nestedFruits = [["Apple", "Banana"], ["Cherry", "Date"]];
let flattenedFruits = nestedFruits.flat();

console.log("Flattened Fruits:", flattenedFruits);