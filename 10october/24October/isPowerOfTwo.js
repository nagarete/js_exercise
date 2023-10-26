const isPowerOfTwo = (n) => {
  let ans = n;
  while (ans !== 1) {
    if (ans < 1) return false;
    ans = ans / 4;
  }
  return true;
};

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(3));
