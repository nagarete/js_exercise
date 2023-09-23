let radius = 20;
let x = Math.PI;

//ternary
radius % 7 === 0 ? (x = 22 / 7) : (x = x.toFixed(2));

//if biasa
// if (radius % 7 == 0) {
//   x = 22 / 7;
// } else {
//   x = x.toFixed(2);
// }

const perimeter = radius * 2 * x;
const area = radius * radius * x;

console.log(perimeter);
console.log(area);
