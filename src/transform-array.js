const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (arr instanceof Array !== true) {
    throw new Error(`\'arr\' parameter must be an instance of the Array!`);
  }
  if (arr.length === 0) return arr;
  if (!arr.join("")) return arr;
  let newArr = [];
  let discardedIndex = -1;
  let doubleIndex = -1;
  arr.reduce((newArr, element, index) => {
    switch (element) {
      case "--discard-next": {
        if (arr.length - 1 === index) break;
        discardedIndex = index + 1;
        break;
      }
      case "--discard-prev": {
        if (newArr.length === 0) break;
        if (discardedIndex === index - 1) break;
        newArr.pop();
        break;
      }
      case "--double-next": {
        if (arr.length - 1 === index) break;
        doubleIndex = index + 1;
        break;
      }
      case "--double-prev": {
        if (newArr.length === 0) break;
        if (discardedIndex === index - 1) break;
        newArr.push(arr[index - 1]);
        break;
      }
      default: {
        if (index !== discardedIndex) newArr.push(element);
        if (index === doubleIndex) newArr.push(element);
      }
    }
    return newArr;
  }, newArr);
  return newArr;
}

module.exports = {
  transform,
};
