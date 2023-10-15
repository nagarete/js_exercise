const longestCommonPrefix = function (strs: string[]) {
  const current = "";
  for (let i = 0; i < strs.length; i++) {
    for (let j = 0; j < strs[i].length; j++) {
      current.concat(strs[i][j]);
    }
  }
  return current;
};

console.log(longestCommonPrefix(["helaw", "hello"]));

const a = ["helaw", "salam", "sister"];
const b = "";
console.log(b.concat(a[1][0]));

//under development. Need to think again later why the function is not running
