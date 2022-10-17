const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = Array.from(n.toString());
  let result = arr.reduce((prev, current, index) => {
    let temp = arr
      .slice(0, index)
      .concat(arr.slice(index + 1))
      .join("");
    if (temp > prev) prev = temp;
    return prev;
  }, 0);
  return +result;
}

module.exports = {
  deleteDigit,
};
