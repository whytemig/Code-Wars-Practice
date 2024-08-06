/*

Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

"Hey fellow warriors"  --> "Hey wollef sroirraw" 
"This is a test        --> "This is a test" 
"This is another test" --> "This is rehtona test"

*/

// My Code

function spinWords(string) {
  const newArrayOfWords = string.split(" ");

  return newArrayOfWords
    .map((word) => {
      if (word.length >= 5) {
        return word.split("").reverse().join("");
      } else {
        return word;
      }
    })
    .join(" ");
}

//Shorter Version
function spinWords(words) {
  return words
    .split(" ")
    .map((w) => (w.length <= 5 ? w : w.split("").reverse().join("")))
    .join(" ");
}

// Other people's code

function spinWords(str) {
  let strArr = str.split(" ");
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length >= 5)
      strArr[i] = strArr[i].split("").reverse().join("");
  }
  return strArr.join(" ");
}
