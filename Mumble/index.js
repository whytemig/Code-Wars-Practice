// Write this function accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

//My Code
function accum(s) {
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    const character = s[i].toUpperCase() + s[i].toLowerCase().repeat(i);

    answer += character + (i < s.length - 1 ? "-" : "");
  }

  return answer;
}

//Other Solutions
function accum(s) {
  return s
    .split("")
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join("-");
}
