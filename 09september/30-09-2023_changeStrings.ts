const changeToA = (word: string) => {
  let newWord = "";
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== " ") {
      newWord += "a";
    } else newWord += " ";
  }
  return newWord;
};

console.log(changeToA("hello guys"));
