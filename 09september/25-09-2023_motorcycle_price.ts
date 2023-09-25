const totalPercentage = (
  basePrice: number,
  downPayment: number,
  months: number,
  monthly: number
) => {
  const instalment = monthly * months;
  const totalPayment = downPayment + instalment;
  const interest = totalPayment - basePrice;
  const interestPercentage = (((interest / basePrice) * 100) / months) * 12;
  const result = `DP ${downPayment} cicil ${months}, total bayar ${totalPayment} total bunga ${interest}= ${
    interestPercentage.toFixed(2) + "%"
  }`;
  return result;
};

console.log(totalPercentage(21783, 4000, 11, 2121));
console.log(totalPercentage(21783, 5000, 11, 2013));
console.log(totalPercentage(21783, 5800, 11, 1928));
console.log(totalPercentage(21783, 4000, 17, 1500));
console.log(totalPercentage(21783, 5000, 17, 1425));
console.log(totalPercentage(21783, 5800, 17, 1365));
console.log(totalPercentage(21783, 4000, 23, 1213));
console.log(totalPercentage(21783, 4000, 27, 1094));
