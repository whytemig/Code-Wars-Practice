/* 

Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

   16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2


*/

// My Code.........
function digitalRoot(n) {
  if (n === 0) return 0;

  while (n >= 10) {
    let answer = 0;

    n = [...String(n)];

    for (let i = 0; i < n.length; i++) {
      answer += parseInt(n[i]);
    }
    n = answer;
  }

  return n;
}

//  with Recursion my Code

function digitalRoot(n) {
  if (n < 10) return n;
  let sum = 0;
  n = n.toString().split("");

  for (let i = 0; i < n.length; i++) {
    sum += parseInt(n[i]);
  }

  if (sum > 10) return digitalRoot(sum);
}

//  with Recursion

function digital_root(n) {
  n = eval(n.toString().split("").join("+"));

  if (n > 9) {
    return digital_root(n);
  }

  return n;
}
