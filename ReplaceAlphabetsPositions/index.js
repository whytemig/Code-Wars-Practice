/**
 In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Input = "The sunset sets at twelve o' clock."
Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
*/

// My Code.............
function alphabetPosition(text) {
  const alphabetPositions = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };

  let answer = [];

  const newString = [...text]
    .filter((letter) => letter !== "'" && letter !== "." && letter !== " ")
    .join("")
    .toLowerCase();

  for (let i = 0; i < newString.length; i++) {
    for (let key in alphabetPositions) {
      if (key === newString[i]) {
        answer.push(alphabetPositions[key]);
      }
    }
  }

  return answer.join(" ");
}

// Other code I like..........
function alphabetPosition(text) {
  var alp = "abcdefghijklmnopqrstuvwxyz",
    newtext = "";
  for (char in text) {
    if (alp.indexOf(text[char].toLowerCase()) !== -1) {
      newtext += alp.indexOf(text[char].toLowerCase()) + 1 + " ";
    }
  }
  return newtext.slice(0, -1);
}
