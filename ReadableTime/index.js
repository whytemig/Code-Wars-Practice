/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/

// My Code.............
function humanReadable(seconds) {
  const hours = Math.floor(seconds / 3600).toString();
  const minutes = Math.floor((seconds % 3600) / 60).toString();
  const secs = Math.floor(seconds % 60).toString();

  return `${hours.padStart(2, "0")}:${minutes.padStart(2, "0")}:${secs.padStart(
    2,
    "0"
  )}`;
}

// Other People's code...........
function humanReadable(seconds) {
  const secs = seconds % 60;
  const mins = parseInt(seconds / 60) % 60;
  const hrs = parseInt(seconds / 3600) % 100;
  return [hrs, mins, secs]
    .map((n) => {
      return n < 10 ? (n = `0${n}`) : n;
    })
    .join(":");
}
