function uniqSubs(str) {
  let subs = {};
  for (let i=0; i<str.length - 1; i++) {
    for (let j = i + 1; j < str.length; j++) {
      subs[str.slice(i, j)] = true;
    }
  }
  return Object.keys(subs);
}
// Time: O(n^3)  -- Hashing a string is linear!!!

console.log(uniqSubs('apple'));
console.log(uniqSubs('moo'));

function largestContiguousSubsum(arr) {
  let largest = arr.length ? 0 : null;
  let current = 0;

  for (let i=0; i<arr.length; i++) {
    current += arr[i];

    if (current > largest) {
      largest = current;
    }

    if (current < 0) {
      current = 0;
    }
  }
  return largest;
}
// Time: O(n)  Space: O(1)

console.log(largestContiguousSubsum([5, 3, -7, 6, 4]));


function sillyYears(year) {
  let years = [];
  while (years.length !== 10) {
    year += 1;
    let first = Math.floor(year/100);
    let last = year % 100;
    let middle = Math.floor(year / 10) % 100;
    if (first + last === middle) years.push(year);
  }
  return years;
}

console.log(sillyYears(1776));
