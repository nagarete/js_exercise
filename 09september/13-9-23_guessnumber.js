const ranNum = Math.floor(Math.random() * 1_000_000);

const guessNum = (randomNumber) => {
  let right = 1_000_000;
  let left = 0;
  let middle = -1;
  while (left < right) {
    middle = Math.floor((right + left) / 2);
    if (middle == randomNumber) {
      break;
    } else if (middle > randomNumber) {
      console.log("else if");
      right = middle - 1;
    } else {
      console.log("else");
      left = middle + 1;
    }
  }
  console.log(randomNumber, middle);
};

guessNum(ranNum);
