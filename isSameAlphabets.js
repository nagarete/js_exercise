const message = readline();

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

let alphabets = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

let count = 0;
for (let i = 0; i < message.length; i++) {
  for (let j = 0; j < alphabets.length; j++) {
    if (message[i] === alphabets[j]) {
      count++;
    }
  }
}

console.log(count);
