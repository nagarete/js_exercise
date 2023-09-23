const inp = `a x
x a
a x
x a
a x
a x
a x
a x
x a
x a
x a
x a`;

const tempInp = inp.split("\n\n");
let newInp = [];
for (let index of tempInp) {
  const newOne = index.split("\n");
  newInp.push(newOne);
}
console.log(newInp);
