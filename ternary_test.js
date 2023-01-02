const a = [1, 2, 3, 4, 5, 6];
let b = 0;
let c = 0;
for (let i of a) {
  i > 3 || i > 2 ? (b += 1) : (c -= 1);
  //   if (i > 3 || i > 2) b += 1;
  //   else c -= 1;
  console.log(b, c);
}
console.log(b);
