const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  let original = domains.slice();
  let arr = [];
  let str =  '';
  for (let i = 0; i < domains.length; i++){
    original[i] = domains[i].split('.').reverse();
    domains[i] = domains[i].split('.'); 
    original[i] = '.' + original[i].join('.');
    domains[i] = domains[i].reverse();
  }
  for(let k = 0; k < domains.length; k++){
    for (let i = 0; i < domains[k].length; i++){
      str = '';
      for (let j = 0; j < domains[k].length - i; j++){
        str += '.' + domains[k][j];
      }
      arr.push(str);
    }
  } 
  arr = [... new Set(arr)];
  arr = arr.sort(function(a ,b){
    return a.length - b.length;
  });
  let obj = {};
  let max = 0;
  for (let i = 0; i < arr.length; i++){
    max = 0;
    for (let j = 0; j < original.length; j++){
      if (original[j].includes(arr[i])){
        max++;
      }
    }
    obj[arr[i]] = max; 
  }
  return obj;
}

module.exports = {
  getDNSStats
};
