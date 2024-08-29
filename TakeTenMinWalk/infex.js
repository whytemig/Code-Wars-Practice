/* 
Create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

The function will determine if the array length of timed walked is 10. it cant be less or more than 10. The letters "n", "s", "w", "e" in the array should be equal to each other. If one letter is more than the other then return False.
*/

// My Code with help....(Over thought it)...

const isValidWalk = (walk) => {
  if (walk.length !== 10) return false;

  // function to get the length of each letter
  // "n", "s", "w", "e"

  function letterCount(letterWalked) {
    return walk.filter((letter) => letter === letterWalked).length;
  }

  if (
    walk.length === 10 &&
    letterCount("n") === letterCount("s") &&
    letterCount("w") === letterCount("n")
  ) {
    return true;
  } else {
    return false;
  }
};

// My Complicated Code .............
function isValidWalk(walk) {
  if (walk.length !== 10) return false;

  let mapCount = {};

  // Count occurrences of each direction in the walk
  for (let i = 0; i < walk.length; i++) {
    if (mapCount[walk[i]]) {
      mapCount[walk[i]] += 1;
    } else {
      mapCount[walk[i]] = 1;
    }
  }

  return (
    (mapCount["n"] || 0) === (mapCount["s"] || 0) &&
    (mapCount["e"] || 0) === (mapCount["w"] || 0) &&
    walk.length === 10
  );
}

//Simpliar Code.........
const isValidWalk = (walk) => {
  const howManyOfWay = (way) =>
    walk.filter((thisWay) => thisWay === way).length;
  const n = howManyOfWay("n");
  const s = howManyOfWay("s");
  const w = howManyOfWay("w");
  const e = howManyOfWay("e");

  return walk.length === 10 && n === s && w === e;
};
