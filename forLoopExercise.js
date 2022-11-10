// function isPalidrome(a) {
//   let word = [];
//   for (let i = a.length - 1; i >= 0; i--) {
//     word.push(a[i]);
//   }
//   if (word.join("") == a) {
//     return true;
//   } else {
//     return false;
//   }
// }

function isPalidrome(a) {
  let left = 0;
  let right = a.length - 1;

  while (left < right) {
    if (a[left] != a[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

console.log(isPalidrome("car")); // false
console.log(isPalidrome("abba")); // true
