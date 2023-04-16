const { NotImplementedError } = require('../extensions/index.js');

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
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    const next = arr[i + 1];
    const prev = result[result.length - 1];

    if (current === '--discard-next') {
      i++;
      if (arr[i + 1] === '--discard-prev' || arr[i + 1] === '--double-prev') {
        i++;
      }
    } else if (current === '--discard-prev') {
      if (result.length > 0 && prev !== '--discard-next') {
        result.pop();
      }
    } else if (current === '--double-next') {
      if (i < arr.length - 1) {
        result.push(next);
      }
    } else if (current === '--double-prev') {
      if (i > 0 && prev !== '--discard-next') {
        result.push(prev);
      }
    } else {
      result.push(current);
    }
  }

  return result;
}

console.log(transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]))

module.exports = {
  transform
};
