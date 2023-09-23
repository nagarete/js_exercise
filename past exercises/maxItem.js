const budget = 1000;
// const items = [500, 200, 900, 100, 400, 10, 20];
const items = [100, 1000, 200, 30, 2000];

const buyStuff = (cost, itemList) => {
  itemList.sort(function (a, b) {
    return a - b;
  });
  // itemList.sort((a,b) => a-b)
  let totalCost = 0;
  let counts = 0;
  for (let i = 0; i < itemList.length; i++) {
    if (totalCost < cost) {
      totalCost += itemList[i];
      counts++;
    } else if (totalCost > cost) {
      counts--;
    }
  }
  return counts;
};

console.log(buyStuff(budget, items));
