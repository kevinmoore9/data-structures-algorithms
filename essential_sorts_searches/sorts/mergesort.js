// Time complelxity: O(n log(n))
// Space complexity: O(n)


// maybe not nlog(n) with the pushes and splices...
// instead could keep a counter of left and right indices to ensure O(n)


function merge2(left, right) {
  let res = [];
  let r = 0;
  let l = 0;
  while (r < right.length && l < left.length) {
    if (right[r] <= left[l]) {
      res.push(right[r]);
      r += 1;
    } else {
      res.push(left[l]);
      l += 1;
    }
  }
  return res.concat(left.slice(l)).concat(right.slice(r));
}


function mergesort2(arr) {
  if (arr.length <= 1) return arr;

  const midx = Math.floor(arr.length / 2);
  let left = mergesort2(arr.slice(0, midx));
  let right = mergesort2(arr.slice(midx));

  return merge2(left, right);

}

// let arr = [];
// for (let i = 0; i < 200000; i++) {
//   arr.push(Math.random());
// }
//
// let d = new Date();
// console.log(d);
// mergesort1(arr);
// let g = new Date();
// console.log(g);
// console.log(g-d);
//
// let arr2 = [];
// for (let i = 0; i < 200000; i++) {
//   arr2.push(Math.random());
// }
// let f = new Date();
// console.log(f);
// mergesort2(arr2);
// let r = new Date();
// console.log(r);
// console.log(r-f);


// function merge1(left, right) {
//   let res = [];
//   while (right.length > 0 && left.length > 0) {
//     if (right[0] <= left[0]) {
//       res.push(right[0]);
//       right.splice(0,1);
//     } else {
//       res.push(left[0]);
//       left.splice(0,1);
//     }
//   }
//   return res.concat(left).concat(right);
// }
//
//
// function mergesort1(arr) {
//   if (arr.length <= 1) return arr;
//
//   const midx = Math.floor(arr.length / 2);
//   let left = mergesort1(arr.slice(0, midx));
//   let right = mergesort1(arr.slice(midx));
//
//   return merge1(left, right);
//
// }
