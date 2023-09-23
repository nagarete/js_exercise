const count = parseInt(readline());
var inputs = readline().split(" ");
for (let i = 0; i < count; i++) {
  const n = parseInt(inputs[i]);
  if (n % 2 === 0) {
    console.log(`[ ] ${n}`);
  } else {
    console.log(`[x] ${n}`);
  }
}
