const reverseNum = (arr) => {
  let result = [];
  for (let i = arr.length; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
};

console.log(reverseNum([1, 2, 3, 4, 5]));

// function reverseNum(arr) {
//   let result = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     result.push(arr[i]);
//   }
//   return result;
// }

// console.log(reverseNum([1, 2, 3, 4, 5]));
