const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value !== ''){
      this.chain.push('( ' + value + ' )');
    } else {
      this.chain.push('( )');
    }
    return this;
  },
  removeLink(position) {
    if ( typeof position !== 'number' || !Number.isInteger(position) || position < 1 || position > this.chain.length ){
      this.chain.length = 0;
      throw new Error('You can\'t remove incorrect link!');
    } 
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let str = this.chain.join('~~');
    this.chain.length = 0;
    return str;
  }
};

module.exports = {
  chainMaker
};
