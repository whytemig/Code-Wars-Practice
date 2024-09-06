/*
Once upon a time, on a way through the old wild mountainous west,…
… a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.

Going to one direction and coming back the opposite direction right away is a needless effort. Since this is the wild west, with dreadful weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!

How I crossed a mountainous desert the smart way.
The directions given to the man are, for example, the following (depending on the language):

["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
or
{ "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
or
[North, South, South, East, West, North, West]

*/

// My Code.........
function dirReduc(arr) {
  let map = {
    NORTH: "SOUTH",
    SOUTH: "NORTH",
    WEST: "EAST",
    EAST: "WEST",
  };

  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] === arr[i + 1]) {
      arr.splice(i, 2);
      i = -1;
    }
  }
  return arr;
}

// Refactor Code.........
function dirReduc(arr) {
  for (let i = 0; i < arr.length; i++) {
    // Check for opposite directions (NORTH-SOUTH or SOUTH-NORTH)
    if (
      (arr[i] === "NORTH" && arr[i + 1] === "SOUTH") ||
      (arr[i] === "SOUTH" && arr[i + 1] === "NORTH")
    ) {
      arr.splice(i, 2); // Remove both directions
      i = -1; // Reset loop to recheck from the start
    }
    // Check for opposite directions (EAST-WEST or WEST-EAST)
    else if (
      (arr[i] === "WEST" && arr[i + 1] === "EAST") ||
      (arr[i] === "EAST" && arr[i + 1] === "WEST")
    ) {
      arr.splice(i, 2); // Remove both directions
      i = -1; // Reset loop to recheck from the start
    }
  }

  return arr;
}
