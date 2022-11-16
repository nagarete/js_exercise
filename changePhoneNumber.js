// //Punya Sam modified
// let S = readline();
// let A = "(111) 111-1111";

// // Write an answer using console.log()
// // To debug: console.error('Debug messages...');
// let S_idx = 0;
// for(let i = 0; i<A.length; ++i){
//   if(A[i] === '1'){
//     A[i] = S[S_idx];
//     S_idx++;
//   }
// }

// console.log(A);

// // punya natan
// const S = readline();

// // Write an answer using console.log()
// // To debug: console.error('Debug messages...');

// console.log(`(${S.slice(0, 3)}) ${S.slice(3, 6)}-${S.slice(6)}`);

// punya ivan
const S = readline();

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

let a = S.substring(0, 3)
let b = S.substring(3, 6)
let c = S.substring(6, S.length)
console.log(`(${a}) ${b}-${c}`);

// //mestinya gini
// const S = readline();

// console.log(`(${S[0]}${S[1]}${S[2]}) ${S[3]}${S[4]}${S[5]});