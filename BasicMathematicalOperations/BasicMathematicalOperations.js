/*
Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output


('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7

*/

/*
function basicOp(operation, value1, value2) {
  switch (operation) {
    case '+':
      return value1 + value2;
    case '-':
      return value1 - value2;
    case '*':
      return value1 * value2;
    case '/':
      return value1 / value2;
    default:
      return 0;
  }
}

console.log(basicOp('/', 4, 4));
console.log(basicOp('-', 4, 4));
console.log(basicOp('+', 4, 4));
console.log(basicOp('*', 4, 4));



function basicOp(operation, value1, value2)
{
  var cases = {
    '+': value1 + value2,
    '-': value1 - value2,
    '*': value1 * value2,
    '/': value1 / value2
  };
  return cases[operation]
}



*/
///
/*
function basicOp(o, a, b) {
  return eval(a + o + b);
}
console.log(basicOp('/', 4, 4));
console.log(basicOp('-', 4, 5));
console.log(basicOp('+', 4, 2));
console.log(basicOp('*', 4, 7));
*/

/*
function basicOp(operation, value1, value2) {
  return eval(value1 + operation + value2);
}

*/
//

/*
function basicOp(operation, value1, value2) {
  // Code
  if (operation == '+') {
    return value1 + value2;
  }
  if (operation == '-') {
    return value1 - value2;
  }
  if (operation == '*') {
    return value1 * value2;
  }
  if (operation == '/') {
    return value1 / value2;
  }
}
console.log(basicOp('/', 4, 4));
console.log(basicOp('-', 4, 5));
console.log(basicOp('+', 4, 2));
console.log(basicOp('*', 4, 7));
*/

/*
///
basicOp = (operation, value1, value2) =>
  eval(`${value1} ${operation} ${value2}`);

console.log(basicOp('/', 5, 4));
console.log(basicOp('-', 2, 5));
console.log(basicOp('+', 8, 2));
console.log(basicOp('*', 9, 7));

*/
