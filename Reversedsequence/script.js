//Reversed sequence
/*

Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]
*/

//1
    const reverseSeq = n => {
        const r = [];
          for(let i = n ; i > 0 ; i--){
           r.push(i);
          }
          return r;
        };

        //2
        const reverseSeq = n => {
            return Array(n).fill(0).map((e, i) => n - i );
          };
          //3
          const reverseSeq = num => {
            return new Array(num)
                .fill()
                .map((d, i) => i + 1)
                .reverse()
          };

          //4

          const reverseSeq = n => {
            let arr = [];

            while(n > 0) {
              arr.push(n);
              n--;
            }
            return arr;
          };