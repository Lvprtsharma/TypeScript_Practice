// Variables: A container for storing data values

// Types of Variables in TypeScript
/*
1. var: Function-scoped or globally-scoped variable. Can be re-declared and updated.
2. let: Block-scoped variable. Can be updated but not re-declared within the same scope.
3. const: Block-scoped variable. Cannot be updated or re-declared. Must be initialized at the time of declaration.
*/

// Syntax
// var variableName = value;
// let variableName = value;
// const variableName = value;

// Examples

// Using var
var age: number = 25;
console.log("Age using var:", age);

// Using let
let fname: string = "John";
console.log("Name using let:", fname);

// Using const
const pi: number = 3.14;
console.log("Value of pi using const:", pi);

// Attempting to re-declare or update const will result in an error
// pi = 3.14159; // Error: Cannot assign to 'pi' because it is a constant.
// const pi: number = 3.14159; // Error: Cannot redeclare block-scoped variable 'pi'.

// Best Practices
/*
- Use 'let' for variables that will change their value.
- Use 'const' for variables that should not change.
- Avoid using 'var' to prevent scope-related issues.
*/

// Output:
// Age using var: 25
// Name using let: John
// Value of pi using const: 3.14
