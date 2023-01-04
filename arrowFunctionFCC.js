const increment = (number, value = 1) => number + value; //this code will add number +1 one if only given 1 parameter

/*const sum = (x, y, z) => {
    const args = [x, y, z];
    return args.reduce((a, b) => a + b, 0);
  }*/

//this code can take any number of arguments because the ... (it is called rest parameter)
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
};

/*const product = (n1, n2, n3) => {
    const args = [n1, n2, n3];
    return args.reduce((a, b) => a * b, 1);
  }
  console.log(product(2, 4, 6)); //48 */

//can written like this
const product = (...n) => {
  return n.reduce((a, b) => a * b, 1);
};
console.log(product(2, 4, 6)); //48
