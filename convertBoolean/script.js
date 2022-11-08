/*
DESCRIPTION:
 Complete the method that takes a boolean value and
 return a "Yes" string for true, or a "No" string for false.
 */
//1 way to
 function boolToWord1( bool ){
    return bool ? 'Yes':'No';
  }
  console.log(boolToWord1("yes"));

  //2 way
  function boolToWord2( bool ){
    if (bool) {
      return 'Yes';
    } else {
      return 'No';
    }
  }
  console.log(boolToWord2("true"));
  //3
  let boolToWord3 = bool => bool ? 'Yes' : 'No';

  //4
  const boolToWord4 = bool => bool ? 'Yes' : 'No';

  //5
  function boolToWord5(bool) {
    if(bool === true){
      return "Yes"
    }
    else{
        return "No"
    }
  }
console.log(boolToWord5("false"));
console.log(boolToWord5(true)); // ===true
console.log(boolToWord5("true")); // == false coz == not same type it string in bool

//6
function boolToWord6( bool ){
    return bool === true ? "Yes" : "No";
  }
  console.log(boolToWord6(true)); // === true


  //7
  function boolToWord7( bool ){
    if(bool === true)
    return 'Yes'
    else
    return 'No'
    }
    console.log(boolToWord7(true), 'Yes'); // yes yes
    console.log(boolToWord7(false), 'No'); // no no