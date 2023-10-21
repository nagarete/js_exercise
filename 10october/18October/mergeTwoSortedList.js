const mergeTwoLists = (list1, list2) => {
  const arr1 = list1;
  const arr2 = list2;
  const newArr = arr1.concat(arr2);
  const sortedArr = newArr.sort();
  return sortedArr;
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
console.log(mergeTwoLists([], []));
console.log(mergeTwoLists([], [0]));
//https://leetcode.com/problems/merge-two-sorted-lists/
/* Merge Two Sorted List
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

example 1
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:
Input: list1 = [], list2 = []
Output: []

Example 3:
Input: list1 = [], list2 = [0]
Output: [0]*/

//Tested with vscode, but when submit to Leetcode, the error is:
// TypeError: arr1.concat is not a function
