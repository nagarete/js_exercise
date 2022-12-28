const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const squaredNum = num.map((a) => a * a);
console.log(squaredNum);

const squareRootNum = squaredNum.map(Math.sqrt);
console.log(squareRootNum);

const newNum = num.map((a) => (a % 2 === 0 ? a + 1 : a - 1));
//odd -1 even +1
console.log(newNum);

const isEven = (a) => (a % 2 === 0 ? true : false);
const evenNumMap = num.map(isEven);
// const evenNumMap = num.map(a) => (a % 2 === 0 ? true : false);
console.log(evenNumMap);
const evenNumFilter = num.filter(isEven);
console.log(evenNumFilter);

const findNum = num.find((a) => a > 3);
//find the number bigger than 3
console.log(findNum);

const findNumIndex = num.findIndex((a) => a > 3);
//find the index number bigger than 3. which is 4, that in index 3. 0 1 2 3
console.log(findNumIndex);

console.log(num.forEach);
