/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = parseInt(readline());

function convertCelcius(tom) {
  (tom * 9) / 5 + 32;
}
for (let i = 0; i < n; i++) {
  var inputs = readline().split(" ");
  let b = parseInt(inputs[0]);
  let t = parseInt(inputs[1]);
  convertCelci;
  if (b == t) {
    console.log("Same");
  } else if (b > t) {
    console.log("Higher");
  } else {
    console.log("Lower");
  }
}

// if(b==t){
//     console.log('Same');
// }else if(b>t){
//     console.log('Higher');
// }else{
//     console.log('Lower');
// }
