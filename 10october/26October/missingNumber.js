const missingNumber = (nums) => {
  const totalNums = (nums.length * (nums.length + 1)) / 2;
  let addNum = 0;
  for (let i = 0; i < nums.length; i++) {
    addNum += nums[i];
  }
  return totalNums - addNum;
};

/*
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (i !== nums[i]) return i;
  }
  return nums.length;   
*/

console.log(missingNumber([3, 0, 1])); //length 3
console.log(missingNumber([0, 1])); //length 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); //length 9
console.log(missingNumber([0, 5, 1, 2, 4, 8, 7, 3])); //length 8

//https://leetcode.com/problems/missing-number/
