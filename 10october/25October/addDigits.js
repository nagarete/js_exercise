const addDigits = (num) => {
  let newNum = num.toString().split(""); //change the num into array of string
  // if (newNum.length === 1) return newNum[0];//recursion
  // console.log(newNum);
  while (newNum.length !== 1) {
    const arrNum = [];

    for (let i = 0; i < newNum.length; i++) {
      //change the array of string to array of num
      arrNum.push(parseInt(newNum[i]));
    }
    // console.log(arrNum);
    let addNum = 0;
    for (let i = 0; i < arrNum.length; i++) {
      addNum += arrNum[i];
    }
    // newNum = addNum;
    newNum = addNum.toString().split("");
  }

  // return addDigits(newNum); //recursion
  return newNum[0];
};

//how to do the function again? with while?

console.log(addDigits(26));
console.log(addDigits(374));
console.log(addDigits(27891));
console.log(addDigits(7541649321));
console.log(addDigits(9999999999));
console.log(addDigits(999999999999999));
//https://leetcode.com/problems/add-digits/
