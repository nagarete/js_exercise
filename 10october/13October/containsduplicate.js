/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
  const newNums = nums.sort(function (a, b) {
    return a - b;
  });

  if (nums.length <= 1) return false;

  for (let i = 1; i < nums.length; i++) {
    if (newNums[i] === newNums[i - 1]) return true;
  }

  return false;
};
