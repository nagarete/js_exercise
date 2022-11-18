const n = parseInt(readline());

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

let ans = 0;
for (let i = 0; i < n; i++) {
  ans += Math.pow(2, i);
}

console.log(ans);
