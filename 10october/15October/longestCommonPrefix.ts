const longestCommonPrefix = function (strs: string[]) {
  let current = 1;
  let longest = 1;
  for (let i = 0; i < strs.length; i++) {
    for (let j = 1; j < strs[i].length; j++) {
      if (strs[i][j] === strs[i][j - 1]) {
        current++;
        longest = Math.max(current, longest);
      } else {
        current = 1;
      }
    }
  }
  return longest;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));

// const a = ["helaw", "salam", "sister"];
// const b = "";
// console.log(b.concat(a[1][0]));

//under development. Need to think again later why the function is not running
