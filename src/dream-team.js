const { NotImplementedError } = require('../extensions/index.js');

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
  let team = '';
  let name = '';
  if (!members){
    return false;
  }
  for (let i = 0 ; i < members.length; i++){
    if (typeof members[i] === 'string'){
      name = members[i].trim().toUpperCase();
      team += name[0];
    }
  }  
  if (team === ''){
    return false;
  }
  let teamArr = team.split('');
  teamArr = teamArr.sort();
  return teamArr.join('');
}

module.exports = {
  createDreamTeam
};
