function factorial(num) {
  // code here
  let result = 1;
  for (let i = num; i != 0; i--) {
    result *= i;
  }
  return result;
}

// 5! = 5 x 4!
// 10! = 10 x 9!
// function factorial(num){
//   if(num == 1) return 1;
//   return num * factorial(num-1);
// }

console.log(factorial(5));
console.log(factorial(10));
