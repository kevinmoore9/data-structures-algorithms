function digitalRoot2(int) {
  if (int < 10) return int;

  let last = int % 10;
  let remainder = Math.floor(int / 10);

  let res = (digitalRoot(remainder) + last);

  return digitalRoot(res);
}

function digitalRoot(int) {
  if (int < 10) return int;
  let last = int % 10;
  let remainder = Math.floor(int / 10);
  return digitalRoot(last + remainder);
}
console.log(digitalRoot(81));
console.log(digitalRoot(817));
console.log(digitalRoot(427));

function caesarCipher(string, n) {
  let a = "abcdefghijklmnopqrstuvwxyz".split("");
  let s = string.split("");
  let res = [];
  let i;
  s.forEach(char => {
    if (char === " ") {
      res.push(char);
    } else {
      i = a.indexOf(char);
      res.push(a[(i + n) % 26]);
    }
  });
  return res.join("");
}
// Time: O(n)
// Space: O(1)

console.log(caesarCipher("cats are cool", 2));
console.log(caesarCipher("zebra", 2));


// 'apple' 'topple'

function stringMatrix(str1, str2) {
  let matrix = new Array(str1.length + 1);
  for (let i=0; i<=str1.length;i++) {
    matrix[i] = new Array(str2.length + 1);
  }

  for (let i=0; i<str1.length;i++) {
    for (let j=0; j<str2.length;j++) {
      if (str1[i] === str2[j]) {
        if (matrix[i][j]) {
          matrix[i+1][j+1] = matrix[i][j] + 1;
        } else {
          matrix[i+1][j+1] = 1;
        }
      } else {
        matrix[i+1][j+1] = 0;
      }
    }
  }
  return matrix;
}


function longestCommonSubstring(str1, str2) {
  let matrix = stringMatrix(str1, str2);
  let long = '';

  for (let i=0; i<matrix.length; i++) {
    for (let j=0; j<matrix[0].length; j++) {
      if (matrix[i][j] > long.length) {
        long = str2.slice(j - matrix[i][j], j);
      }
    }
  }
  return long;
}

// Time: O(m*n)
// Space: O(m*n)
console.log(longestCommonSubstring('apple', 'topple'));

function sumRec(arr) {
  if (arr.length === 0) return null;
  if (arr.length === 1) return arr[0];

  let last = arr.pop();
  return (sumRec(arr) + last);
}
// Time: O(n)
// Space: O(n) ??

console.log(sumRec([1,2,3,4,5]));
