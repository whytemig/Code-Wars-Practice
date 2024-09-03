/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
*/

// My Code....
function moveZeros(arr) {
  let nonZero = [];
  let zeroAnswer = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      nonZero.push(arr[i]);
    } else {
      zeroAnswer.push(arr[i]);
    }
  }

  return [...nonZero, ...zeroAnswer];
}

// Refactor Code...........
function moveZeros(arr) {
  let anotherMarker = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[anotherMarker] = arr[i];
      anotherMarker++;
    }
  }

  while (anotherMarker < arr.length) {
    arr[anotherMarker++] = 0;
  }
  return arr;
}

// Other Code....
var moveZeros = function (arr) {
  for (var i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 0) {
      arr.splice(i, 1);
      arr.push(0);
    }
  }
  return arr;
};
