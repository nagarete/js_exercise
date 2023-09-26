const howManyNumbers = (a: number) => {
  //This function is to make some numbers
  const arr = [];
  for (let i = 1; i < a; i++) {
    arr.push(i);
  }
  return arr;
};
const times_two = howManyNumbers(10).map((n) => n * 2);
//With map, we can do something(e.g times 2 all elements) to every element in the array
console.log(times_two);

const isEven = howManyNumbers(10).filter((n) => (n % 2 == 0 ? true : false));
//With filter, we can take out any elements we want with certain conditions
console.log(isEven);

const primeNumbers = (number: number) => {
  for (let i = 2, s = Math.sqrt(number); i <= s; i++) {
    if (number % i === 0) return false;
  }
  return number > 1;
};

console.log(howManyNumbers(100).filter(primeNumbers));

const isBiggerThanFive = (n: number) => n > 5;
console.log(howManyNumbers(10).find(isBiggerThanFive)); //return first element which conditions is met
console.log(howManyNumbers(10).findIndex(isBiggerThanFive)); //return first index that already met the conditions we set, in this case n>5
