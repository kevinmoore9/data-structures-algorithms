Array.prototype.map = function(callback) {
  let res = [];
  this.forEach(el => res.push(callback(el)));
  return res;
};

let a = [1,2,3];
let b = a.map(el => el * el);
console.log(a);
console.log(b);


function foldingCipher(str) {
  let alph = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let res = '';

  for (let i = 0; i<str.length; i++) {
    let idx = 25 - alph.indexOf(str[i]);
    res += alph[idx];
  }
  return res;

}

console.log(foldingCipher('abcxyz'));
console.log(foldingCipher('xyzabc'));
