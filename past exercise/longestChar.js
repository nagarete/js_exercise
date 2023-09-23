const chain = "xxxxoooxo";
const chain2 = "xxxooooooooooxxxoxoxoxxxxxxxxoooxoxo";
const chain3 = "xoxoxoxoxo";
const chain4 = "xxxoooxxxx";
const chain5 = "oooooooooooooooooooo";

const getLongest = (sequence) => {
  let temp = 1;
  let longest = 0;
  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] === sequence[i + 1]) {
      temp++;

      //   console.log(i);
      //   console.log(sequence[i]);
      //   console.log(i - 1);
      //   console.log(sequence[i - 1]);
      //   console.log(temp);
    } else {
      if (longest < temp) {
        longest = temp;
        temp = 1;
      }
    }
  }
  return longest;
};

console.log(getLongest(chain)); //4
console.log(getLongest(chain2)); //10
console.log(getLongest(chain3)); //1
console.log(getLongest(chain4)); //4
console.log(getLongest(chain5)); //20
