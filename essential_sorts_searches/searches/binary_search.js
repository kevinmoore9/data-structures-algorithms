// Time complelxity: O(log(n))
// Space complexity: O(1) -- I believe

function bSearch(arr, target) {
  const midx = Math.floor(arr.length/2);
  const mid = arr[midx];

  if (target === mid) return midx;
  if (arr.length <= 1) return undefined;

  const left = arr.slice(0, midx);
  const right = arr.slice(midx + 1);


  if (target < mid) {
    return bSearch(left, target);
  } else {
    return midx + bSearch(right, target) + 1;
  }
}

// try slice instead of splice

console.log(bSearch([2,3], 2)); // 0
console.log(bSearch([1,2,3,4], 2)); // 1
console.log(bSearch([1,2,3,4], 4)); // 3
console.log(bSearch([1,2,3,4], 1)); // 0

// Remember to return undefined because adding to null will return a number
// undefined will return NaN
// dont want false positives
