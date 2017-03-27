function weightedRandomIndex(arr) {     // Time: O(n)
  let sum = 0;
  arr.forEach(el => sum += el)
  let idx = Math.random() * sum;
  console.log(idx);
  let acc = 0;
  for (let i = 0; i < arr.length; i++) {
    acc += arr[i];
    if (idx < acc) return i;
  }
}

console.log(weightedRandomIndex([1,2,3,4]));


function moveZeros(arr) {
  let zeros = 0;
  let idx = 0;

  while (idx < arr.length - zeros) {
    if (arr[idx] === 0) {
      arr[idx] = arr[arr.length - zeros - 1];
      arr[arr.length - zeros - 1] = 0;
      zeros += 1;
    } else {
      idx += 1;
    }
  }
  return arr;
}


console.log(moveZeros([4,3,0,2,0,3]));
