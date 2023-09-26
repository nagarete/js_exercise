const howManyNumbers = (a: number) => {
  const arr = [];
  for (let i = 1; i < a; i++) {
    arr.push(i);
  }
  return arr;
};
const times_two = howManyNumbers(10).map((n) => n * 2);
console.log(times_two);
