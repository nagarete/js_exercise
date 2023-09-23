/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const time = parseInt(readline());
const speed = parseInt(readline());

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

//30s dia makan dengan speed 20gr/minutes 10gr
//20gr/60

let result = speed * (time / 60);

//input 30 20
//output 10
console.log(result);
