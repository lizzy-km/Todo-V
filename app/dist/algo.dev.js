"use strict";

// Reverse number   
var isPalindrome = function isPalindrome(num) {
  num === parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num);
};

var res = isPalindrome(10);
console.log(res);

var reverseNumber = function reverseNumber(num) {
  return parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num);
};