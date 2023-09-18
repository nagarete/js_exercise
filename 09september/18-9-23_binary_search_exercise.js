const guessNum = (ranum) => {
  let left = 0;
  let right = 1_000_000;
  let middle = -1;
  let howManyTimes = 1;
  while (left < right) {
    middle = Math.floor((right + left) / 2);
    if (middle == ranum) break;
    else if (ranum > middle) {
      left = middle;
    } else if (ranum < middle) {
      right = middle;
    }
    howManyTimes++;
  }

  console.log(`We took ${howManyTimes} guesses for this number`);
  return middle;
};

const newNumber = Math.floor(Math.random() * 1_000_000);
console.log(newNumber);
console.log(guessNum(newNumber));
