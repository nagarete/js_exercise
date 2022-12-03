let text = "How are you doing today?";
const myChar = text.split(""); //split to each character
const myWords = text.split(" "); //setiap ada space, kita split to each words

let fruits = "banana, apple, orange, durian, kiwi";
const myCommaFruits = fruits.split(","); //return the array without comma
const myCommaFruits2 = fruits.split(" "); //return the array with comma
const myCommaFruits3 = fruits.split("a"); //setiap kena 'a', kita split dia jadi array baru

let sentence =
  "The sky is blue. Grass is green! Do you know the color of the Cloud?";
const splitSymbol = sentence.split(/[.,?,!]/);
/*dia run charnya sampe ketemu '.' itu jadi 1 array
run lagi sampe ketemu '?' itu jadi 1 array
run lagi sampe ketemu '!' itu jadi 1 array*/

console.log("hello, my name is Sam".split(" "));
console.log(myChar);
console.log(myWords);
console.log(myCommaFruits);
console.log(myCommaFruits2);
console.log(myCommaFruits3);
console.log(splitSymbol);
