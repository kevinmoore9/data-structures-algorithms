function fibs(num) {
  if (num < 1) return [];
  if (num === 1) return [0];
  if (num === 2) return [0, 1];

  let prev = fibs(num - 1);
  prev.push(prev[prev.length -1] + prev[prev.length -2]);
  return prev;
}

// Time: O(n)    Space: O(n)
console.log(fibs(3));
console.log(fibs(8));


function isPal(str) {
  if (str.length === 0) return false;
  for (let i=0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - 1 - i]) return false;
  }
  return true;
}

// Time: O(n)  Space: O(1)

console.log(isPal('cat'));
console.log(isPal('racecar'));


function validIP(str) {
  let nums = str.split('.');
  if (nums.length !== 4) return false;
  for (let i=0; i<nums.length; i++) {
    if (parseInt(nums[i]) > 255 || parseInt(nums[i]) < 0) return false;
  }
  return true;
}
// Time: O(n)  Space: O(1)

console.log(validIP('111.222.333.444'));
console.log(validIP('111.111.111.111'));
console.log(validIP('111.111.111.111.'));


function shuffle(arr) {
  let newArr = arr.slice();
  for (let i=0; i<arr.length; i++) {
    let randIdx = Math.floor(Math.random() * arr.length);
    let temp = newArr[i];
    newArr[i] = newArr[randIdx];
    newArr[randIdx] = temp;
  }
  return newArr;
}

// Time: O(n)  Space: O(1)

console.log(shuffle([1,2,3,4,5,5,6]));
