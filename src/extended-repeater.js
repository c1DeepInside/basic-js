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
  let solution = str;
  if (typeof str === 'boolean'){
    solution = str.toString();
  }
  if (str === null){
    solution = 'null';
  }
  let arr = []; 
  if (typeof options.addition === 'boolean'){
    options.addition = options.addition.toString();
  }
  if (options.addition === null){
    options.addition = 'null';
  }
  if (options.addition){   
    if (options.additionRepeatTimes > 1){
      for (let i = 0; i < options.additionRepeatTimes; i++){
        arr.push(options.addition);
        console.log(arr[i]);
      }  
      if (options.additionSeparator){
        solution += arr.join(options.additionSeparator);
      } else {
        solution += arr.join('|');
      }
    } else {
      solution += options.addition;
    }   
  }
  let sol = solution;
  if (options.repeatTimes > 1){
    if (options.separator){
      for (let i = 0; i < options.repeatTimes - 1; i++){
        solution += options.separator + sol;
      }
    } else {
      for (let i = 0; i < options.repeatTimes - 1; i++){
        solution += '+' + sol;
      }
    }
  }
  return solution;
}

module.exports = {
  repeater
};
