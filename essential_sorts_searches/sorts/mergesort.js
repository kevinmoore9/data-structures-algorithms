// Time complelxity: O(n log(n))
// Space complexity: O(n)

function merge(left, right) {
  let res = [];
  while (right.length > 0 && left.length > 0) {
    if (right[0] <= left[0]) {
      res.push(right[0]);
      right.splice(0,1);
    } else {
      res.push(left[0]);
      left.splice(0,1);
    }
  }
  return res.concat(left).concat(right);
}


function mergesort(arr) {
  if (arr.length <= 1) return arr;

  const midx = Math.floor(arr.length / 2);
  let left = mergesort(arr.slice(0, midx));
  let right = mergesort(arr.slice(midx));

  return merge(left, right);

}

console.log(mergesort([3,2,517,9,7,2]));
