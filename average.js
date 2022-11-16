const N = parseInt(readline());
var inputs = readline().split(' ');
let temp = 0;
for (let i = 0; i < N; i++) {
    const X = parseInt(inputs[i]);
    temp += X;
}

let result = temp / N;
// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(result);

// //Nathan
// const N = parseInt(readline());
// var inputs = readline().split(' ');
// let total = 0;
// for (let i = 0; i < N; i++) {
//     const X = parseInt(inputs[i]);
//     total += X
// }

// // Write an answer using console.log()
// // To debug: console.error('Debug messages...');

// console.log(total/N);