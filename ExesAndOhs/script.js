// Exes and Ohs
/*
Check to see if a string has the same amount of 'x's and 'o's.The method
must return a boolean and be case insensitive.The sting can contain any char.
*/
function XO(str){
let xCount = 0;
let oCount = 0;
const xRegexp = new RegExp('x', 'i');
const oRegexp = new RegExp('o', 'i');
for(let i = 0; i < str.length; i++){
    const letter = str[i];
    if(letter.match(oRegexp)){
    xCount++;
    }else{
    oCount++;
    }
}
return xCount == oCount ;
}
let result = XO("xxOo");
console.log(result);