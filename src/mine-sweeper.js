const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(matrix) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      sum = 0;
      if (matrix[i][j] === false){
        if (typeof matrix[i + 1] !== 'undefined' && matrix[i + 1][j + 1] === true){
          sum++;
        }
        if (typeof matrix[i] !== 'undefined' && matrix[i][j + 1] === true){
          sum++;
        }
        if (typeof matrix[i + 1] !== 'undefined' && matrix[i + 1][j] === true){
          sum++;
        }
        if (typeof matrix[i - 1] !== 'undefined' && matrix[i - 1][j - 1] === true){
          sum++;
        }
        if (typeof matrix[i] !== 'undefined' && matrix[i][j - 1] === true){
          sum++;
        }
        if (typeof matrix[i - 1] !== 'undefined' && matrix[i - 1][j] === true){
          sum++;
        }
        if (typeof matrix[i - 1] !== 'undefined' && matrix[i - 1][j + 1] === true){
          sum++;
        }
        if (typeof matrix[i + 1] !== 'undefined' && matrix[i + 1][j - 1] === true){
          sum++;
        }
        matrix[i][j] = sum;
      }
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === true){
        matrix[i][j] = 1;
      }
    }
  }
  return matrix;
}

module.exports = {
  minesweeper
};
