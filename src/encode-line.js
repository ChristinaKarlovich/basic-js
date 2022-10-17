const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = Array.from(str);
  return arr
    .reduce((mas, elem, index) => {
      if (index === 0) {
        mas.push(1);
        mas.push(elem);
      } else {
        if (mas[mas.length - 1] == elem) mas[mas.length - 2]++;
        else {
          mas.push(1);
          mas.push(elem);
        }
      }
      return mas;
    }, [])
    .filter((elem) => elem !== 1)
    .join("");
}

module.exports = {
  encodeLine,
};
