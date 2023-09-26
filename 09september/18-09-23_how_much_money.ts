const saving = 3_000_000;
const yearlyInterest = 7 / 100 / 12;
let totalSaving = 0;
const howMuchMoney = (years: number) => {
  years = years * 12;
  for (let i = 0; i < years; i++) {
    totalSaving += yearlyInterest * totalSaving + saving;
  }
  return new Intl.NumberFormat("en-Id", {
    style: "currency",
    currency: "idr",
  }).format(totalSaving);
};

console.log(howMuchMoney(20));
