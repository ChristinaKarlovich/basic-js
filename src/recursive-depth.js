const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  depth;
  calculateDepth(arr, current = 0) {
    if (current === 0) this.depth = 0;
    if (arr instanceof Array !== true) return 0;
    current++;
    if (current > this.depth) this.depth = current;
    arr.forEach((element) => this.calculateDepth(element, current));
    current--;
    return this.depth;
  }
}

module.exports = {
  DepthCalculator,
};
