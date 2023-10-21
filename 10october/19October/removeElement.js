// const arr = [1, 2, 2, 5, 4];
// console.log(arr);

// const swap = (a, b) => {
//   const temp = a;
//   a = b;
//   b = temp;
//   return a, b;
// };

// swap(arr[0], arr[1]);
// console.log(arr);

const removeElement = (nums, val) => {
  // const k = [];
  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] !== val) k.push(nums[i]);
  // }
  // return k.length;

  let i = 0;
  let j = nums.length - 1;

  while (i <= j) {
    while (nums[j] === val) {
      j--;
      if (j < 0) break;
    }
    while (nums[i] !== val) {
      i++;
      if (i >= nums.length) break;
    }
    if (i >= j) break;
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }
  return j + 1;
};

console.log(removeElement([3, 2, 2, 3], 4));
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
console.log(removeElement([3, 3, 3, 3], 3));
// [3, 3, 3, 3];
// i;
console.log(removeElement([1], 1));

// 0, 1, 4, 0, 3, 2, 2, 2
//             j  i
//             j=4
//             i=5
//https://leetcode.com/problems/remove-element/
