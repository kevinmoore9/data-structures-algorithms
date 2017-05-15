// Time Complexity: O(n log(n)) avg, O(n^2) worst case
// Space Complexity: O(n log(n))

function quicksort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[0];

  let left = arr.slice(1).filter(el => el <= pivot);
  let right = arr.slice(1).filter(el => el > pivot);

  let leftSorted = quicksort(left);
  let rightSorted = quicksort(right);
  leftSorted.push(pivot);

  return leftSorted.concat(rightSorted);
}

console.log(quicksort([1,2,3,4,5]));
console.log(quicksort([4,2,5,1,3]));


console.log(quicksort([5,5,4,3,6,8,3]));
console.log(quicksort([5,5,4,3,6,8,3]));
