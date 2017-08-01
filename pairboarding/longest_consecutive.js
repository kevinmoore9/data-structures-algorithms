function longestConsecutive(arr) {
  let elements = {};
  let longest = 0;
  arr.forEach(el => {
    current = 0;
    elements[el] = true;
    let i = 0;
    while (elements[el + i] === true) {
      current += 1;
      i += 1;
    };

    i = 1;
    while (elements[el - i] === true) {
      current += 1;
      i += 1;
    }
    longest = current;
  });
  return longest;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
