const addition = (a, b) => a + b;
const substraction = (a, b) => a - b;
const multiplication = (a, b) => a + b;
const division = (a, b) => a / b;
const power = (a, b) => {
  let poweredNumber = a;
  for (let i = 0; i < b - 1; i++) {
    poweredNumber *= a;
  }
  return poweredNumber;
};
console.log(power(3, 3));
