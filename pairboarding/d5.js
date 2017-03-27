function matrixRegionalSum(matrix, topLeft, bottomRight) {
  let sum = 0;

  for (let i = topLeft[0]; i <= bottomRight[0]; i++) {
    for (let j = topLeft[1]; j <= bottomRight[0]; j++) {
      sum += matrix[i][j];
    }
  }
  return sum;
}

// Time: O(n * m),  Space: O(1)
// Time couldn't be any better because we have to view/add all numbers

let matrix = [[1,2,3],
              [4,5,6],
              [7,8,9]];

console.log(matrixRegionalSum(matrix, [0,0], [2,2]));


function mergeSort(arr) {
  if (arr.length < 2) return arr;

  let midx = Math.floor(arr.length / 2);
  return merge(mergeSort(arr.slice(0,midx)), mergeSort(arr.slice(midx)));

}

function merge(left, right) {
  let merged = [];

  let l = 0;
  let r = 0;
  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) {
      merged.push(left[l]);
      l += 1;
    } else {
      merged.push(right[r]);
      r += 1;
    }
  }
  return (merged.concat(left.slice(l)).concat(right.slice(r)));
}

// Time: O(n log(n))  // Space: O(n)

console.log(mergeSort([9,5,7,4,3,6,1]));
console.log(mergeSort([9,8,7,6,5,4,3,2,1]));


function bSearch(arr, target) {
  let midx = Math.floor(arr.length / 2);
  let mid = arr[midx];

  if (mid === target) return midx;
  if (arr.length < 2) return undefined;

  let left = arr.slice(0, midx);
  let right = arr.slice(midx + 1);

  if (target < mid) {
    return bSearch(left, target);
  } else {
    return bSearch(right, target) + midx + 1;
  }
}

console.log(bSearch([1,2,3,4,5], 4));
console.log(bSearch([1,2,3,4,5], 2));


function productify(arr) {
  let res = [];

  let before = 1;
  for (let i = 0; i < arr.length; i++) {
    res.push(before);
    before *= arr[i];
  }

  let after = 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    res[i] *= after;
    after *= arr[i];
  }
  return res;

}
// Time: O(n), Space: O(1)

console.log(productify([1,2,3,4]));
