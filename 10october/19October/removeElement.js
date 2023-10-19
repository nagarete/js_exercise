const removeElement = (nums, val) => {
  const k = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) k.push(nums[i]);
  }
  return k.length;
};

console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
