const randomNumberGenerator = (a) => {
  const arr = new Array();
  for (let i = 0; i < a; i++) {
    arr.push(Math.floor(Math.random() * 100));
  }
  return arr;
};
console.log(randomNumberGenerator(100));
