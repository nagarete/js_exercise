const reverseString = (s) => {
  const newS = [];
  for (let i = s.length - 1; i >= 0; i--) {
    newS.push(s[i]);
  }
  return newS;
};

console.log(reverseString(["h", "e", "l", "l", "o"]));
console.log(reverseString(["H", "a", "n", "n", "a", "h"]));

//it's supposed to be 0(1) but I did it with 0(n)

//https://leetcode.com/problems/reverse-string/
