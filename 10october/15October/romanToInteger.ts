const romanToInt = function (s: string) {
  const romanNum = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const arrayOfRoman = s.split("");
  let current = 0;
  for (let i = 1; i < arrayOfRoman.length; i++) {
    if (romanNum[s[i]] > romanNum[s[i - 1]]) {
      current = current + romanNum[s[i]] - romanNum[s[i - 1]];
    } else {
      current = current + romanNum[s[i - 1]];
    }
  }
  return current;
};

console.log(romanToInt("LVIII"));
//Under development
