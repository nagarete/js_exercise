const singleNumber = (nums) => {
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    const left = nums[i - 1];
    const right = nums[i + 1];
    if (nums[i] !== left && nums[i] !== right) return nums[i];
  }
};

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
console.log(singleNumber([1]));
console.log(singleNumber([5, 1, 6, 6, 5, 1, 2]));
//[1,1,2,5,5,6,6]

/*cara Nathan XOR
let ans = 0
for(let i = 0; i<nums.length; ++i){
  ans ^= nums[i]
}
return ans*/

//https://leetcode.com/problems/single-number/
