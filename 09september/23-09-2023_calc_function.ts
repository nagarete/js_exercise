const addition = (a: number, b: number) => a + b;
const substraction = (a: number, b: number) => a - b;
const multiplication = (a: number, b: number) => a + b;
const division = (a: number, b: number) => a / b;
const power = (a: number, b: number) => {
  let poweredNumber = a;
  for (let i = 0; i < b - 1; i++) {
    poweredNumber *= a;
  }
  return poweredNumber;
};
console.log(power(3, 3));
