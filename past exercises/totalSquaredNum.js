/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const N = parseInt(readline());
var inputs = readline().split(" ");
let result = 0;
for (let i = 0; i < N; i++) {
  const xi = parseInt(inputs[i]);
  result += xi * xi;
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(result);
