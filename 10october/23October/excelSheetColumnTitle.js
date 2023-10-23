const convertToTitle = (columnNumber) => {
  const numberToAlphabet = new Map();
  const alphabets = "ZABCDEFGHIJKLMNOPQRSTUVWXY";
  for (let i = 0; i < alphabets.length; i++) {
    numberToAlphabet.set(i, alphabets[i]);
  }
  const arr = [];

  while (columnNumber >= 1) {
    const remainder = columnNumber % 26;
    columnNumber = Math.floor(columnNumber / 26);
    arr.push(remainder);
  }
  let ans = "";
  for (let i = arr.length - 1; i >= 0; i--) {
    ans += numberToAlphabet.get(arr[i]);
  }
  return ans;
};

console.log(convertToTitle(1));
console.log(convertToTitle(28));
console.log(convertToTitle(701));
console.log(convertToTitle(1821));
console.log(convertToTitle(26));

//modulo (%) = remainder

//https://leetcode.com/problems/excel-sheet-column-title/
