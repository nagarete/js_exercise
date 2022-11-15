//punya Sam
const n = parseInt(readline());
const m = readline();

let result = "";

for (let i = 0; i < n; i++) {
  if (m[i] !== " ") {
    result += "e";
  } else if (m[i] === " ") {
    result += " ";
  }
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(result);

// //punya Nathan
// const n = parseInt(readline());
// const m = readline();
// let ans = "";

// // Write an answer using console.log()
// // To debug: console.error('Debug messages...');
// for(let i = 0; i<n; ++i){
//     if(m[i] === ' ') ans += ' ';
//     else ans += 'e';
// }

// console.log(ans)
