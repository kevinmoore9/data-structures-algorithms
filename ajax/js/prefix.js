// Question #7

String.prototype.prefix = function(prefix) {
  return prefix + this;
};

console.log('bc'.prefix('a') === 'abc');
