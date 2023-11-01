const guessNumber = (n) => {
  let left = 0;
  let right = 1_000_000;
  //   let right = 21474836500;
  while (left < right) {
    const middle = parseInt((right + left) / 2);
    if (n == middle) return n;
    else if (n < middle) {
      right = middle;
    } else if (n > middle) {
      left = middle;
    }
  }
};

console.log(guessNumber(1));

//https://leetcode.com/problems/guess-number-higher-or-lower/
