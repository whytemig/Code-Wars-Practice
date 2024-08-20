/* 
You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

[2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)

*/

// My Old code.....
function findOutlier(integers) {
  let evenAnswer = [];
  let oddAnswer = [];

  for (let num of integers) {
    if (num % 2 === 0) {
      evenAnswer.push(num);
    } else {
      oddAnswer.push(num);
    }
  }

  if (evenAnswer.length > oddAnswer.length) {
    return Number(oddAnswer.join(""));
  } else {
    return Number(evenAnswer.join(""));
  }
}

// Refactor Code........
function findOutlier(integers) {
  let evenAnswer = integers.filter((num) => num % 2 === 0);
  let oddAnswer = integers.filter((num) => num % 2 !== 0);

  return evenAnswer.length > oddAnswer.length ? oddAnswer[0] : evenAnswer[0];
}
