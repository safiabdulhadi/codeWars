//Remove exclamation marks
/*
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
*/

//1
function removeExclamationMarks(s) {
    return s.replace(/!/gi, '');
  }

//   2
const removeExclamationMarks = s => s.replace(/!/g,"") ;

// 3
function removeExclamationMarks(s) {
    return s.split('!').join('');
  }

  //4

