const N = 5;
const arr = [2, 3, 1, 5];

const getMissingNumber = (num, numList) => {
  numList.sort((a, b) => a - b);
  let missNum = [];
  for (let i = 1; i < num; i++) {
    if (i !== numList[i - 1]) {
      missNum.push(i);
      console.log(i);
      console.log(missNum);
    }
  }
  return missNum;
};

console.log(getMissingNumber(N, arr));
