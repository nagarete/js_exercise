const N = 650;
const coins = [1, 2, 5, 10, 20, 50, 100, 200];
// const coins = [1, 2, 5, 10, 20, 50, 100, 200];
//fail
const getMinimumCoins = (total, banknotes) => {
  banknotes.sort((a, b) => b - a);
  let result = 0;
  let count = 0;

  for (let i = 0; i < banknotes.length; i++) {
    for (let j = 0; j < banknotes.length; j++) {
      if (result < N) {
        result += banknotes[i];
        count++;
        if (result > N) {
          result -= banknotes[i];
          count--;
        }
      }
    }
  }

  // for (let i = 0; i < banknotes.length; i++) {
  //   if (result < N) {
  //     result += banknotes[i];
  //     count++;
  //     if (result > N) {
  //       result -= banknotes[i];
  //       count--;
  //     }
  //     //   console.log(result);
  //   }
  // }
  return count;
};

console.log(getMinimumCoins(N, coins));
