const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let addStrFormatted = "addition" in options ? `${options.addition}` : "";
  if ("additionRepeatTimes" in options) {
    addStrFormatted = new Array(options.additionRepeatTimes)
      .fill(`${options.addition}`)
      .join("additionSeparator" in options ? options.additionSeparator : "|");
  }

  let strFormatted = str + addStrFormatted;
  if ("repeatTimes" in options) {
    strFormatted = new Array(options.repeatTimes)
      .fill(str + addStrFormatted)
      .join("separator" in options ? options.separator : "+");
  }

  return strFormatted;
}

module.exports = {
  repeater,
};
