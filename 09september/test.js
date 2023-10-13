const a = "HeLaw S!a?M";
const newA = a.toLowerCase();
// console.log(newA.length);

const alphanumeric = new Set("abcdefghijklmnopqrstuvwxyz1234567890");

// const alphaA = [];
// for (let i = 0; i < newA.length; i++) {
//   if (alphanumeric.has(newA[i])) {
//     alphaA.push(newA[i]);
//   }
// }
// console.log(alphanumeric.has(";"));

const arrayA = newA.split("");
const brandNewA = arrayA.filter((x) => alphanumeric.has(x));
const reverseA = brandNewA.slice().reverse();
console.log(brandNewA.join(""));
console.log(reverseA.join(""));
