const isPowerOfFour = (n) => {
  let ans = n;
  while (ans !== 1) {
    if (ans < 1) return false;
    ans = ans / 4;
  }
  return true;
};

console.log(isPowerOfFour(4));
console.log(isPowerOfFour(1));
console.log(isPowerOfFour(17));
console.log(isPowerOfFour(2));
