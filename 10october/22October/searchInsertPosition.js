const searchInsert = (nums, val) => {
  let _ans = 0;
  let condition = false;
  for (let i = 0; i < nums.length; i++) {
    if (val === nums[i]) {
      _ans = i;
      condition = true;
      break;
    }
  }
  while (condition === false) {
    if (val > nums.length - 1) {
      _ans = nums.length;
      condition = true;
    } else if (val <= nums[0]) {
      _ans = 0;
      condition = true;
    }
    for (let j = 0; j < nums.length; j++) {
      if (val > nums[j]) {
        _ans = j + 1;
        condition = true;
      }
    }
  }

  return _ans;
};
console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 7));

//https://leetcode.com/problems/search-insert-position/
