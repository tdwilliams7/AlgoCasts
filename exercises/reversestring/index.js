// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // return str
  //   .split("")
  //   .reverse()
  //   .join("");

  // let string = "";
  // for (let i = str.length - 1; i >= 0; i--) {
  //   string += str[i];
  // }
  // return string;

  // let reversed = "";
  //
  // for (let char of str) {
  //   reversed = char + reversed;
  // }
  // return reversed;

  return str.split("").reduce((reversed, char) => char + reversed, "");
}

module.exports = reverse;
