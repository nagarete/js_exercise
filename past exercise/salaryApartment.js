/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const a = parseInt(readline());
const b = parseInt(readline());
const c = parseInt(readline());

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

let income = a * 6 * 5 * 4;
let affordable = false;
if (income - b > c) {
  affordable = true;
}

console.log(affordable);
