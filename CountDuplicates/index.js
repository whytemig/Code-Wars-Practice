/*
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
*/

// My Code ..........

function duplicateCount(text) {
  let map = {};

  for (let letter of text.toLowerCase()) {
    if (map[letter]) {
      map[letter] += 1;
    } else {
      map[letter] = 1;
    }
  }

  return Object.values(map).filter((val) => val > 1).length;
}

// Another......

const duplicateCount = (string) => {
  let lowerTxt = string.toLowerCase();
  let answerArray = [];

  for (let i = 0; i < lowerTxt.length; i++) {
    if (lowerTxt[i] === lowerTxt[i + 1] && !answerArray.includes(lowerTxt[i])) {
      answerArray.push(lowerTxt[i]);
    }
  }

  return answerArray.length;
};
