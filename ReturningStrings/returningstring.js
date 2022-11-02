/**
 Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

[Make sure you type the exact thing I wrote or the program may not execute properly]
 */

// there are many ways to do that
// Return a greeting string
function greet(name) {
  return `Hello, ${name} how are you doing today?`;
}
console.log(greet('Abdulhadi'));

// Return a greeting string
function greet(name) {
  return 'Hello, ' + name + ' how are you doing today?';
}
console.log(greet('Safi'));

// Return a greeting string
const greet1 = (name) => `Hello, ${name} how are you doing today?`;

console.log(greet1('Khan'));
