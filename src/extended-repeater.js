const { NotImplementedError } = require('../extensions/index.js');

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
  let result = '';
  let addition = '';

  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || '+';
  const additionSeparator = options.additionSeparator || '|';
  const additionRepeatTimes = options.additionRepeatTimes || 1;

  if (options.hasOwnProperty('addition')) {
    addition = options.addition;
  }

  str = String(str);
  addition = String(addition);

  let additionStr = '';
  for (let i = 1; i <= additionRepeatTimes; i++) {
    additionStr += addition;
    if (i !== additionRepeatTimes) {
      additionStr += additionSeparator;
    }
  }

  for (let i = 1; i <= repeatTimes; i++) {
    result += str + additionStr;
    if (i !== repeatTimes) {
      result += separator;
    }
  }

  return result;
}

module.exports = {
  repeater
};
