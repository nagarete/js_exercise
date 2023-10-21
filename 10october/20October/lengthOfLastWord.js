const lengthOfLastWord = (s) => {
  let currentLength = 0;
  const newS = s.trim();
  for (let i = newS.length - 1; i >= 0; i--) {
    if (newS[i] !== " ") {
      currentLength++;
      // console.log(newS[i]);
    } else if (newS[i] == " ") break;
  }
  // s.trim().split(' ')[s.length - 1].length
  // return s.trim().split(" ").reverse()[0].length;
  return currentLength;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("luffy is still joyboy"));

//don't understand why even already trimmed, the fly me to the moon test case is failed.
//https://leetcode.com/problems/length-of-last-word/
//done
