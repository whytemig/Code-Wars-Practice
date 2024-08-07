/**
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd). 
 
*/

// My Code...........
function findOne(A) {
  if (A.length === 1) return A[0];

  let answerObj = {};

  for (let i = 0; i < A.length; i++) {
    if (answerObj[A[i]]) {
      answerObj[A[i]] += 1;
    } else {
      answerObj[A[i]] = 1;
    }
  }
  for (const key in answerObj) {
    if (answerObj[key] % 2 !== 0) {
      return Number(key);
    }
  }

  return null;
}

// Other Code............
function findOdd(arr) {
  // Iterate through the array
  for (let i = 0; i < arr.length; i++) {
    // Filter for arr[i] and check its occurrence count
    if (arr.filter((e) => e == arr[i]).length % 2 != 0) {
      return arr[i];
    }
  }
}
