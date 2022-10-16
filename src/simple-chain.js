const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (
      !isFinite(position) ||
      position < 1 ||
      this.chain.length - 1 < position
    ) {
      this.chain.length = 0;
      throw new Error("You can't remove incorrect link!");
    }
    if (this.chain.length > 0) this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let str = this.chain.map((element) => `( ${element} )`).join("~~");
    this.chain.length = 0;
    return str;
  },
};

module.exports = {
  chainMaker,
};
