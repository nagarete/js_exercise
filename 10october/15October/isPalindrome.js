const isPalindrome = function (x) {
  //ini testnya gimana cara dapetnya
  const stringX = x.toString();
  const splitX = stringX.split("");
  const reverseX = splitX.reverse();
  const joinX = reverseX.join("");
  console.log(x, stringX, splitX, reverseX, joinX);
  // const reverseX = x.toString().split("").reverse().join("");
  return joinX == x ? true : false;
};

console.log(isPalindrome(121));

/*var isPalindrome = function(x) {
    const reverseX = x.toString().split("").reverse().join("");
    return reverseX == x ? true : false;
};*/
//ini jawaban ke leetcode
