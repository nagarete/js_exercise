const N = 650;
const coins = [1, 2, 5, 10, 20, 50, 100, 200];

const getCoins = (total, money) => {
  money.sort((a, b) => b - a);
  //   console.log(money);
  let result = 0;
  let count = 0;
  let num = 0;
  while (result < total) {
    // console.log(num);
    result += money[num];
    count++;
    // console.log(result);

    if (result > total) {
      result -= money[num];
      num++;
      count--;
      //   console.log(result);
    }
  }
  console.log(result);
  return count;
};

console.log(getCoins(N, coins));
