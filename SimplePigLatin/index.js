/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

*/

// My Code............
function pigIt(str) {
  let letter = null;
  let newWord = null;
  let answer = [];

  str = str.split(" ");

  for (let i = 0; i < str.length; i++) {
    let word = str[i];
    let firstChar = word[0];
    let isLetter = firstChar.toLowerCase() !== firstChar.toUpperCase();

    if (isLetter) {
      letter = firstChar + "ay";
      newWord = word.slice(1);
      answer.push(newWord + letter);
    } else {
      answer.push(word);
    }
  }

  return answer.join(" ");
}

// Other People Code .........
function pigIt(str) {
  return str
    .split(" ")
    .map((item) => `${item.substr(1)}${item[0]}ay`)
    .join(" ");
}
