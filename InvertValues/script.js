//Invert values
/*
Given a set of numbers, return the additive inverse of each.
Each positive becomes negatives, and the negatives become positives.
invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list.
*/
//1
function invert(array) {
    return  array.map((number) => number * -1);
 }

   console.log((invert([1,2,3,4,5]), [-1,-2,-3,-4,-5]));
   console.log((invert([1,-2,3,-4,5]), [-1,2,-3,4,-5]));
   console.log((invert([]), []));
   console.log((invert([0]), [-0]));

   //2
   const invert = array => array.map(num => -num);

//    3
function invert(array) {
    var newArr = [];
    for(var i = 0; i < array.length; i++){
      newArr.push(-array[i]);
    }
     return newArr;
  }

  //4
  function invert(array) {
    return array.map(e=> e*-1);
 }

 //5
 function invert(array) {
    return array.map(v => ~v+1);
 }
