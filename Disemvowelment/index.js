// CODE that was recommended.....

function disemvowel(str) {
  var vowels = ["a", "e", "i", "o", "u"];

  return str
    .split("")
    .filter(function (el) {
      return vowels.indexOf(el.toLowerCase()) == -1;
    })
    .join("");
}

// CODE I LEARN....

function disemvowelII(str) {
  var vowels = ["a", "e", "i", "o", "u"];

  let newStr = [...str]
    .filter((letter) => {
      return !vowels.includes(letter.toLowerCase());
    })
    .join("");

  return newStr;
}
