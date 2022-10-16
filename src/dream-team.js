const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!members || !(members instanceof Array)) return false;
  return members
    .reduce((mas, element) => {
      if (typeof element !== "string" || element.trim() === "") return mas;
      mas.push(element.trimStart()[0].toUpperCase());
      return mas;
    }, [])
    .sort()
    .join("");
}

module.exports = {
  createDreamTeam,
};
