/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

 const a = parseInt(readline());
 const b = parseInt(readline());
 const c = parseInt(readline());
 const d = parseInt(readline());
 
 // Write an answer using console.log()
 // To debug: console.error('Debug messages...');
 let min = Math.min(a,b,c,d);
 let max = Math.max(a,b,c,d);
 
 let result = max-min;
 
 console.log(result);