const arr = [2, 5, 4, 1, 1, 2, 4, 3];
arr.push(6);
arr.push(8, 9, 10);
console.log(arr);
console.log("This is called array\n");

const set = new Set();
set.add(5);
set.add(2);
set.add(4);
set.add(5);
set.add(2);
console.log(set); /*unique values*/
console.log("This is called set\n");

// deno-lint-ignore no-explicit-any
const obj: any = {};
obj.name = "Ryan";
obj.surname = "Smith";
obj.age = 27;
console.log(obj);
console.log("This is called object\n");

const mp = new Map();
mp.set("a", 1);
mp.set("b", 3);
mp.set("a", 2);
console.log(mp);
console.log("This is called map\n");
