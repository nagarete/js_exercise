let arr = [90, 70, 80, 80, 75];
let totalScore = 0;

for (let i in arr) {
  totalScore += arr[i];
}

sum = totalScore / arr.length;

let grade = "";

if (sum > 90) {
  grade = "A";
} else if (sum > 70) {
  grade = "B";
} else if (sum > 65) {
  grade = "C";
}

console.log(sum);
console.log(grade);
