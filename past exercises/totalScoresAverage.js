const n = 10; // n is the number of students
const scores = [
  [12, 45, 14, 86, 88, 48, 88, 38, 8, 63],
  [8, 52, 90, 81, 29, 79, 6, 8, 84, 22],
  [92, 29, 46, 45, 63, 94, 10, 83, 20, 39],
  [44, 77, 52, 69, 36, 1, 52, 64, 68, 19],
  [82, 14, 69, 16, 85, 14, 15, 96, 43, 72],
  [65, 4, 1, 8, 20, 97, 71, 95, 11, 24],
  [23, 73, 85, 2, 2, 69, 20, 89, 45, 68],
  [16, 55, 21, 66, 43, 74, 50, 75, 78, 48],
  [92, 76, 80, 8, 45, 19, 101, 25, 1, 87],
  [59, 24, 60, 8, 23, 91, 5, 94, 85, 67],
];

const getAverage = (arr) => {
  let total = 0;
  let average = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  average = total / arr.length;
  return average;
};

let totalOfAverages = 0;
for (let i = 0; i < n; ++i) {
  totalOfAverages += getAverage(scores[i]);
}
