const inp = `4514
8009
6703
1811
4881
3905
3933
9436
4332

4514
8009
6703
1811
4881
3905
3933
9436
4332`;

const tempIn = inp.split("\n\n");
console.log(tempIn);
let newIn = [];
for (let index of tempIn) {
  const newInp = index.split("\n");
  newIn.push(newInp);
}

console.log(newIn);

for (let index of newIn) {
  for (let jindex of index) {
    if (jindex < 5000) console.log(`${jindex} ${true}`);
    else console.log(`${jindex} ${false}`);
  }
}
