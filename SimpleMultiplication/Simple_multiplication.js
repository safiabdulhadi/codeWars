// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(n) {
  return n * (n % 2 ? 9 : 8);
}
console.log(simpleMultiplication(10));

function simpleMultiplication(n) {
  return n % 2 == 0 ? n * 8 : n * 9;
}
