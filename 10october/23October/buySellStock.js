const maxProfit = (prices) => {
  let best = 0;
  let lowest = 100000;
  for (let i = 0; i < prices.length; ++i) {
    const price = prices[i];
    if (price < lowest) lowest = price;

    const profit = price - lowest;
    if (profit > best) best = profit;
  }

  return best;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([2, 4, 1]));

//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

/*
  let lowest = prices[0];
  let lowestIndex = 0;
  let highest = -1;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < lowest) {
      lowest = prices[i];
      lowestIndex = i;
    }
  }
  for (let j = lowestIndex; j < prices.length; j++) {
    if (prices[j] > highest) highest = prices[j];
  }
  return highest - lowest;
  */
