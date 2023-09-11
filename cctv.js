const cogs = 300000;
const selNum = 35;
const sell = 650000;
const rent = 3000000;

const revenue = selNum * sell;
const capital = selNum * cogs;
const grossProfit = revenue - capital - rent;

const staff = 2000000;
const numStaff = 2;
const fixedCost = staff * numStaff;

const netProfit = grossProfit - fixedCost;
const netProfitPercentage = netProfit / capital;
console.log(capital);
console.log(netProfitPercentage);
