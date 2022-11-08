/**
 * Create a function that takes an integer as an argument and returns
 * "Even" for even numbers or "Odd" for odd numbers.
 */

 function even_or_odd1(number) {
    return number % 2 ? "Odd" : "Even";
  }


function even_or_odd2(number) {
  return number % 2 === 0 ? 'Even' : 'odd';
}

console.log(even_or_odd1(2));
console.log(even_or_odd2(1));

//3
function even_or_odd3(number) {
  if (number % 2 == 0) {
    console.log('even number ');
  } else {
    console.log('odd number');
  }
  return number;
}



console.log(even_or_odd(4));
