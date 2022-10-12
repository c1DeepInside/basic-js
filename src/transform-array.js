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
  if (!Array.isArray(arr)){
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }
  if (arr[0] === ''){
    return [];
  }
  let command = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
  let newArr = [];
  for (let i = 0; i < arr.length; i++){
    if (arr[i] !== command[0] && arr[i] !== command[1] && arr[i] !== command[2] && arr[i] !== command[3]){
      newArr.push(arr[i]);
    }
    if (arr[i] === command[1] && i !== 0 ){
      newArr.pop();
    }
    if (arr[i] === command[3] && i !== 0){
      newArr.push(arr[i - 1]);
    } 
    if (arr[i] === command[2] && i !== (arr.length - 1)){
      newArr.push(arr[i + 1]);
      newArr.push(arr[i + 1]);
      i++;
    }
    if (arr[i] === command[0] && i !== (arr.length - 1)){
        if (arr[i + 2] === command[1] || arr[i + 2] === command[2] || arr[i + 2] === command[3] ) {
            i++;
        }
        i++;
    }
  }
  return newArr;
}

module.exports = {
  transform
};
