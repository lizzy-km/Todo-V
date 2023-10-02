// Reverse number

// const isPalindrome = (num) => {
//       const  numr = +num.toString().split('').reverse().join('') ;

//         return numr
//     }
// isPalindrome(101)
let num = 101;
const reverseNumber =
  num < 0 ? false : parseFloat(num.toString().split("").reverse().join(""));
  
console.log(reverseNumber === num);
