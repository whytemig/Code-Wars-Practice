/**
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit, there are 3 multiplications)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2, there are 4 multiplications)
4 --> 0 (because 4 is already a one-digit number, there is no multiplication)
 */

// My code...........
function persistence(num) {
  let count = 0;

  while (num >= 10) {
    count += 1;
    let anArray = [...String(num)];
    num = anArray.reduce((acc, num) => parseInt(acc) * parseInt(num));
  }
  return count;
}

// Other peoples code......
function persistence(num) {
  for (var i = 0; num > 9; i++) {
    num = num
      .toString()
      .split("")
      .reduce((t, c) => c * t);
  }
  return i;
}
// .................
function persistence(num, counter = 0) {
  if (num.toString().length === 1) return counter;
  num = num
    .toString()
    .split("")
    .reduce((x, y) => x * y);
  counter++;
  return persistence(num, counter);
}
