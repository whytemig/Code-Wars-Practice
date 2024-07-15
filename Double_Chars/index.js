// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// My Solution---
function doubleChar(str) {
  // Your code here
  let doubleStr = "";
  for (const letter of str) {
    doubleStr += letter + letter;
  }
  return doubleStr;
}

// Other Solutions...
const doubleChar = (str) =>
  str
    .split("")
    .map((v) => v + v)
    .join("");
