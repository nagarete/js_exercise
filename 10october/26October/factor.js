const factor = (num) => {
  const arr = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) arr.push(i);
  }
  return arr;
};

console.log(factor(12));
console.log(factor(35));
console.log(factor(1000));
console.log(factor(80));
console.log(factor(90));
