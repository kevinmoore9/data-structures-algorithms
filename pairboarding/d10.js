function binary(n) {
  let res = [];
  while (n != 0) {
    res.unshift(n % 2);
    n = Math.floor(n / 2);
  }
  return res.length ? res.join('') : '0' ;
}

console.log(binary(11));
console.log(binary(2));
console.log(binary(3));
console.log(binary(0));

function factorial1(n) {
  let prod = 1;
  for (let i = 1; i <= n; i++) {
    prod *= i;
  }

  return prod;
}

function factorial2(n) {
  if (n <= 2) return n;

  return (factorial2(n - 1) * n);
}

console.log(factorial2(5));


// Both Times: O(n)
// Recursive: Space: O(n)
// Iterative: Space: O(1)
