/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const a = parseInt(readline());
const b = parseInt(readline());
const c = parseInt(readline());
let total = 0;
if (a % 2 == 0) {
  total += a;
} else if (a % 2 == 1) {
  total -= a;
}

if (b % 2 == 0) {
  total += b;
} else if (b % 2 == 1) {
  total -= b;
}

if (c % 2 == 0) {
  total += c;
} else if (c % 2 == 1) {
  total -= c;
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(total);

//  const a = parseInt(readline());
// const b = parseInt(readline());
// const c = parseInt(readline());

// const arr = [a, b, c];
// let total = 0;

// for(let num of arr){
//     if(num%2===0) total += num;
//     else total -= num;
// }

// // Write an answer using console.log()
// // To debug: console.error('Debug messages...');

// console.log(total);
