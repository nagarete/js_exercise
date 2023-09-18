const guessNum = (randomNumber) => {
  let right = 1_000_000;
  let left = 0;
  let middle = -1;
  let howManyTimes = 0;
  while (left < right) {
    if (middle == randomNumber) {
      break;
    } else if (middle > randomNumber) {
      //   console.log("else if");
      right = middle - 1;
    } else if (middle < randomNumber) {
      //   console.log("else");
      left = middle + 1;
    }
    howManyTimes++;
  }
  return howManyTimes;
  //   console.log(randomNumber, middle);
  //   return middle;
};

let worst = -1;
for (let i = 1; i < 1_000_000; ++i) {
  //   console.log("current number", i);
  const guesses = guessNum(i);
  //   if (guesses == 19) console.log(`number: ${i}, guesses: ${guesses}`);
}
// console.log(worst);
// const ranNum1 = Math.floor(Math.random() * 1_000_000);
// const ranNum2 = Math.floor(Math.random() * 1_000_000);

// const a = guessNum(ranNum1);
// const b = guessNum(ranNum2);

// // if a is bigger than b, print "A is bigger", else print "B is bigger"

// if (a > b) console.log(a + " is bigger than " + b);
// else console.log(b + " is bigger than " + a);
