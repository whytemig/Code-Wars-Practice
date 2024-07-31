//You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

//Over thouhght it

function getMiddle(s) {
  const length = s.length;

  //the floor will always provide us with an interger
  const theMid = Math.floor(length / 2);

  if (length % 2 === 0) {
    return s.slice(theMid - 1, theMid + 1);
  } else {
    return s.charAt(theMid);
  }
}

//Other coding examples
function getMiddle(s) {
  //Code goes here!
  return s.length % 2 == 0
    ? s[s.length / 2 - 1] + s[s.length / 2]
    : s[Math.floor(s.length / 2)];
}

function getMiddle(s) {
  return s.substring(Math.round(s.length / 2) - 1, s.length / 2 + 1);
}
