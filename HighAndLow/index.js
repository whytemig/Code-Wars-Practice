/*
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
*/

// My Code......
function highAndLow(numbers) {
  let maxAndMin = [];

  const newNumbers = numbers.split(" ");

  for (let i = 0; i < newNumbers.length; i++) {
    maxAndMin.push(parseInt(newNumbers[i]));
  }
  const theMax = Math.max(...maxAndMin);
  const theMin = Math.min(...maxAndMin);

  return `${theMax} ${theMin}`;
}

// Other Code....

function highAndLow(numbers) {
  numbers = numbers.split(" ");
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}
