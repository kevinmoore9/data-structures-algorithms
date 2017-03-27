function subSets(arr) {
  if (arr.length === 0) return [[]];

  let last = arr.pop();
  let prevSubs = subSets(arr); // O(n) --> N calls on subSets
  let subs = prevSubs.map(sub => sub.concat([last])); // O(n)

  return prevSubs.concat(subs);
}
// Time: O(2^n)

// console.log(subSets([1,2,3]));


function longestPalindrome(str) {   // Time: O(n^2), Space: O(1)

  let longestLength = 0;
  let beginLongest = 0;

  for (let i = 0; i<str.length; i++) {
    let stretch = 0;

    // Odd pals
    while (true) {
      if (i - stretch < 0 || i + stretch >= str.length) break;

      if (str[i - stretch] === str[i + stretch]) {
        let thisLength = stretch * 2 + 1;
        if (thisLength > longestLength) {
          longestLength = thisLength;
          beginLongest = i - stretch;
        }
      } else break;

      stretch += 1;
    }

    // Even pals

    while (true) {
      if (i - stretch < 0 || i + stretch + 1 >= str.length) break;

      if (str[i - stretch] === str[i + stretch + 1]) {
        let thisLength = stretch * 2 + 2;
        if (thisLength > longestLength) {
          longestLength = thisLength;
          beginLongest = i - stretch;
        }
      } else break;

      stretch += 1;
    }
  }

  return [beginLongest, beginLongest + longestLength - 1];
}

// console.log(longestPalindrome('smomt'));
// console.log(longestPalindrome('acapella'));
// console.log(longestPalindrome('racecar'));


function fastIntersection(arr1, arr2) {   // O(n)
  let h1 = {};
  let intersection = [];

  for (let i=0; i<arr1.length; i++) {
    h1[arr1[i]] = true;
  }

  for (let i=0; i<arr2.length; i++) {
    if (h1[arr2[i]]) intersection.push(arr2[i]);
  }

  return intersection;
}


console.log(fastIntersection([1,2,3,4,5], [3,4,5,6,7]));

// Review concept ... ask questions about repeated letters, etc..

// function commonSubsets(arr1, arr2) {  O(2^n)
//   let h1 = {};
//   let h2 = {};
//
//   for (let i=0; i<arr1.length; i++) {
//     if (h1[arr1[i]]){
//       h1[arr1[i]] += 1;
//     } else {
//       h1[arr1[i]] = 1;
//     }
//   }
//
//   for (let i=0; i<arr2.length; i++) {
//     if (h1[arr2[i]]){
//       h1[arr2[i]] += 1;
//     } else {
//       h1[arr2[i]] = 1;
//     }
//   }
//
//   Object.keys(h1).forEach(ch => {
//     if (h2[ch]) {
//
//     }
//   });
// }

function canWin(arr, idx, seen = {}) {
  if (arr[idx] === 0) return true;
  if (seen[idx] || idx < 0 || idx >= arr.length) return false;

  seen[idx] = true;

  return canWin(arr, idx + arr[idx], seen) || canWin(arr, idx - arr[idx], seen);
}

console.log(canWin([1,0,1], 0));
console.log(canWin([1,2,0], 0));
