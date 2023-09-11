const tenRandomNumber = [];
for (let i = 0; i < 10; ++i) {
  tenRandomNumber.push(Math.floor(Math.random() * 10));
}
tenRandomNumber.sort((a, b) => a - b);
console.log(tenRandomNumber);
