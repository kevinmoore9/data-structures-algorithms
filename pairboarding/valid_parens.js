function valid_paren_length(str) {
  let count = 0;
  let current_len = 0;
  let max = 0;

  for (let i=0;i<str.length;i++) {
    current_len += 1;
    if (str[i] === "(") {
      count += 1;
    } else {
      count -= 1;
    }

    if (count === 0) {
      current_len > max ? max = current_len : null
    } else if (count < 0) {
      current_len = 0;
      count = 0;
    }

  }
  return max;
}

console.log(valid_paren_length("(())()"))
