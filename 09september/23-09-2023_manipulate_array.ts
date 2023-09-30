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

const isEven = howManyNumbers(10).filter((n) => n % 2 == 0);
//With filter, we can take out any elements we want with certain conditions
console.log(isEven);

const primeNumbers = (number: number) => {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return number > 1;
};

console.log(howManyNumbers(100).filter(primeNumbers));

const isBiggerThanFive = (n: number) => n > 5;
console.log(howManyNumbers(10).find(isBiggerThanFive)); //return first element which conditions is met
console.log(howManyNumbers(10).findIndex(isBiggerThanFive)); //return first index that already met the conditions we set, in this case n>5

// factors = [1, 2, 3, 5, 6, 10, 15, 30]
// 1 30
// 2, 15
// 3, 10
// 5, 6

//1 100
//2 50
//4 25
//5 20
//10 10
