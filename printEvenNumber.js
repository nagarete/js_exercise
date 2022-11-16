/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

 const N = parseInt(readline());

 // Write an answer using console.log()
 // To debug: console.error('Debug messages...');
 let total = 0;
 for(let i = 1; i <= N; i++){
     if(i%2 == 0){
         total+=i;
         // console.log(total)
     }
 }
 
 console.log(total);


//  //Nathan
//  const N = parseInt(readline());

// // Write an answer using console.log()
// // To debug: console.error('Debug messages...');
// let total = 0;
// for(let i = 2; i<=N; i+=2) total += i
// console.log(total);