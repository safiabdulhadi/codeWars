//Reversed Strings

/* DESCRIPTION:
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/

//1
function solution(str){
    return str.split('').reverse().join('');
  }

  const result = solution('dlrow');

//   console.log(result);

//2
const solution = str => str.split('').reverse().join('');

//3
function solution(str){
    var newString = "";
    for(var i = str.length-1; i >= 0; i--){
      newString += str[i];
    }
    return newString;
  }

