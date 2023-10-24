const majorityElement = (nums) => {
  let best = 0;
  let current = 1;
  let theNumber = 0;
  nums.sort((a, b) => a - b);
  //   console.log(nums);
  for (let i = 0; i < nums.length; i++) {
    // console.log(current);
    // console.log(theNumber);
    if (nums[i + 1] === nums[i]) {
      current++;
    } else if (nums[i + 1] !== nums[i]) {
      if (best < current) {
        best = current;
        theNumber = nums[i];
        current = 1;
      }
    }
  }
  return theNumber;
};

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));

//https://leetcode.com/problems/majority-element/
