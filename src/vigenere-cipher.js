const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direction = true){
    this.direction = direction;
    this.alphabet = ('ABCDEFGHIJKLMNOPQRSTUVWXYZ').split('');
  }

  encrypt(message, key) {
    if (!message || !key){
      throw new Error('Incorrect arguments!');
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    let strK = '';
    while (strK.length < message.length){
      strK += key;
    }
    strK = strK.slice(0, message.length);
    let c = 0;
    let j = 0;
    let arr = []; 
    for (let i = 0; i < message.length; i++) {
      if (this.alphabet.includes(message[i])){
        c = (this.alphabet.indexOf(message[i]) + this.alphabet.indexOf(strK[j])) % 26;
        j++;
        arr.push(this.alphabet[c]); 
      } else {
        arr.push(message[i]);
      }
    }
    let sol = '';
    if (this.direction === true){
      sol = arr.join('');
    } else {
      sol = arr.reverse().join('');
    }
    return sol;
  }
  decrypt(message, key) {
    if (!message || !key){
      throw new Error('Incorrect arguments!');
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    let strK = '';
    while (strK.length < message.length){
      strK += key;
    }
    strK = strK.slice(0, message.length);
    let c = 0;
    let j = 0;
    let arr = []; 
    for (let i = 0; i < message.length; i++) {
      if (this.alphabet.includes(message[i])){
        c = (this.alphabet.indexOf(message[i]) - this.alphabet.indexOf(strK[j]) + 26) % 26;
        j++;
        arr.push(this.alphabet[c]); 
      } else {
        arr.push(message[i]);
      }
    }
    let sol = '';
    if (this.direction === true){
      sol = arr.join('');
    } else {
      sol = arr.reverse().join('');
    }
    return sol;
  }
}

module.exports = {
  VigenereCipheringMachine
};
