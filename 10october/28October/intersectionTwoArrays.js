const intersectionOfTwoArrays = (nums1, nums2) => {
  const sameSetNum = new Set();
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) sameSetNum.add(nums1[i]);
    }
  }
  const sameArrNum = [];
  for (const value of sameSetNum) {
    sameArrNum.push(value);
  }
  return sameArrNum;
};

console.log(intersectionOfTwoArrays([1, 2, 2, 1], [2, 2]));
console.log(intersectionOfTwoArrays([4, 9, 5], [9, 4, 9, 8, 4]));

//On^2+n (?)

//https://leetcode.com/problems/intersection-of-two-arrays/
