/*
A Needle in the Haystack

DESCRIPTION:
Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

Example(Input --> Output)
["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"
Note: In COBOL, it should return "found the needle at position 6"

*/

//1
function findNeedle(haystack) {
    return "found the needle at position " + haystack.indexOf("needle");
  }
// 2
function findNeedle(haystack) {
    return `found the needle at position ${haystack.indexOf('needle')}`;
  }

// 3
function findNeedle(array) {
    for (var i=0; i<array.length; i++){
      if (array[i] === 'needle')
        return 'found the needle at position ' + i;
    }
      // your code here
    }
