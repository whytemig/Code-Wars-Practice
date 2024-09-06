/*
The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.


255, 255, 255 --> "FFFFFF"
255, 255, 300 --> "FFFFFF"
0, 0, 0       --> "000000"
148, 0, 211   --> "9400D3"
*/

// My Code plus a little research about toString(16) method
function rgb(r, g, b) {
  let answer = null;

  answer = [r, g, b].map((char) => {
    if (char <= 0) {
      return "00";
    } else if (char >= 255) {
      return "FF";
    } else {
      return char.toString(16).toUpperCase().padStart(2, "0");
    }
  });

  return answer.join("");
}
