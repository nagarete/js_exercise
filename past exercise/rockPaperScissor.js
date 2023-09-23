/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

 let o = readline();

 // Write an answer using console.log()
 // To debug: console.error('Debug messages...');
 if(o === "Scissors"){
     console.log("Stone");
 }else if( o === "Hand"){
     console.log("Scissors")
 }else if(o === "Stone"){
     console.log("Hand");
 }else{
     console.log("Error")
 }
 
 // console.log();

//  //punya Nathan
//  const o = readline();
// const hands = {
//     "Scissors": "Stone",
//     "Stone": "Hand",
//     "Hand": "Scissors"
// }
// console.log(hands[o] ? hands[o] : "Error")