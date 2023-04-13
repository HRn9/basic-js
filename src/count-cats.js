const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  const arr = matrix.flat()
  if (!arr.includes('^^')) {
    return 0
  } else {
    let count = arr.reduce((acc, val) => val === '^^' ? acc + 1 : acc, 0)
    return count
  }
}

countCats([
  [0, 1, '^^'],
  [0, '^^', 2],
  ['^^', 1, 2]
  ])

module.exports = {
  countCats
};
