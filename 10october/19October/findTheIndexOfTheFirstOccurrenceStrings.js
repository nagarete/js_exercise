const strStr = (haystack, needle) => {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      for (let j = 0; j < needle.length; j++) {
        if (haystack[i + j] !== needle[j]) {
          break;
        } else if (j === needle.length - 1) return i;
      }
    }
  }
  return -1;
};

console.log(strStr("sadbutsad", "sad"));
console.log(strStr("leetcode", "leeto"));
console.log(strStr("happysadbutsad", "sad"));
console.log(strStr("a", "a"));

//dibantuin Gitta
