const randomNumberGenerator = (a: number) => {
  const arr = [];
  for (let i = 0; i < a; i++) {
    arr.push(Math.floor(Math.random() * 100));
  }
  return arr;
};
console.log(randomNumberGenerator(100));
