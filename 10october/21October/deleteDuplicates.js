const deleteDuplicates = (head) => {
  const sortedHead = head.sort();
  const distinctHead = new Set(sortedHead);
  const newHead = Array.from(distinctHead);
  return newHead;
};

console.log(deleteDuplicates([1, 1, 2, 3, 3]));
//https://leetcode.com/problems/remove-duplicates-from-sorted-list/
