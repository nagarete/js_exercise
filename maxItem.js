const budget = 1000;
const items = [500, 200, 900, 100, 400, 10, 20];

const buyStuff = (cost, itemList) => {
  itemList.sort();
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

// items.sort();
// console.log(items);

console.log(buyStuff(budget, items));
