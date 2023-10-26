const map1 = new Map();
map1.set(1, 0);
map1.set(2, 0);
map1.set(3, 0);

console.log(map1);
map1.set(1, +1);

map1.set(1, +1);
// if (!map1.has(1)) console.log("there is");
console.log(map1);

// const majorityElement = nums =>{
//     const mapNums = new Map();
//     for(let i = 0; i<nums.length; i++){
//         if()
//     }
// }

// console.log(majorityElement([3, 2, 3]));
// console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
