/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Additionally, if the number is negative, return 0.

Note: If the number is a multiple of both 3 and 5, only count it once.

*/

// My Code...

function solution(number) {
  let answer = [];

  if (number < 0) return 0;

  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      answer.push(i);
    }
  }
  answer = answer.reduce((accum, currentValue) => accum + currentValue, 0);

  return answer;
}

// Other Code To Review....
function solution(number) {
  return number < 3
    ? 0
    : [...Array(number).keys()]
        .map((int) => (int % 3 === 0 || int % 5 === 0 ? int : 0))
        .reduce((a, b) => a + b);
}
