/*
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]

arrayDiff([1,2,2,2,3],[2]) == [1,3]

*/

//My Code....
function arrayDiff(a, b) {
  for (let i = 0; i < b.length; i++) {
    a = a.filter((num) => num !== b[i]); // Filter out elements in b
  }

  return a; // Return the filtered array
}

// My Code Adjusted .....

function arrayDiffer(a, b) {
  return a.filter((num) => !b.includes(num));
}

//Other People Code/......
function array_diff(a, b) {
  return a.filter(function (x) {
    return b.indexOf(x) == -1;
  });
}
