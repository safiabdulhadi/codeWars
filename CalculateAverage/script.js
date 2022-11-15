// Calculate average
/*
DESCRIPTION:
Write a function which calculates the average of the numbers in a given list.
Note: Empty arrays should return 0.
*/

// 1

function findAverage(array) {
    return array.length == 0 ? 0 : array.reduce((prev,curr) => prev + curr ) / array.length;
    }
    console.log((findAverage([1,1,1]), 1));
    console.log((findAverage([1,2,3]), 2));
    console.log((findAverage([1,2,3,4]), 2.5));

// 2
function find_average(array) {
    if (array.length === 0) {
    return 0;
    }
    var result = 0;
    for (i=0; i<array.length; i++) {
      result +=array[i];
    }
    return result/array.length;
  }

function find_average(arr) {
    return arr.length > 0? arr.reduce((a, b) => a + b) / arr.length : 0;
}
// 3
function find_average(array) {
    if (array.length === 0){return 0}
   return array.reduce((previousValue, currentValue) => previousValue + currentValue) / array.length
  }