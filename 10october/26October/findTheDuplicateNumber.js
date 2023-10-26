const findDuplicate = (nums) => {
  const set = new Set();
  for (const num of nums) {
    if (!set.has(num)) set.add(num);
    else return num;
  }
};

//https://leetcode.com/problems/find-the-duplicate-number/description/
