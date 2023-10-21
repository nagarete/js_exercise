const merge = (nums1, m, nums2, n) => {
  const newArray = (arr, length) => {
    const newArr = [];
    for (let i = 0; i < length; i++) {
      if (arr[i] !== 0) newArr.push(arr[i]);
    }
    return newArr;
  };
  const newNums1 = newArray(nums1, m);
  const newNums2 = newArray(nums2, n);
  const noZeroArray = newNums1.concat(newNums2).sort((a, b) => a - b);
  return noZeroArray;
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(merge([1], 1, [], 0));
console.log(merge([0], 0, [1], 1));

//gimana cara return ke num1?
//https://leetcode.com/problems/merge-sorted-array/
