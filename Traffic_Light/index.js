// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

// For example, when the input is green, output should be yellow.

// My Code (RAW).....

function updateLight(current) {
  let colors = ["green", "yellow", "red"];

  let color = "";

  for (let i = 0; i < colors.length; i++) {
    if (colors[i] === current) {
      color += colors[i + 1];
      break;
    } else if (colors[i + 2] === current) {
      color += colors[i];
      break;
    }
  }
  return color;
}

//current = "green", "yellow", "red"

// Optimized Code......

function updateLightII(current) {
  switch (current) {
    case "green":
      return "yellow";
    case "yellow":
      return "red";
    default:
      return "green";
  }
}
