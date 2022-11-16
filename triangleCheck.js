function triangleCheck(side1, side2, side3) {
  if (side1 === side2 && side1 === side3) {
    console.log("this is equilateral triangle");
  } else if (side1 === side2 || side2 === side3 || side1 === side3) {
    console.log("this is isosceles triangle");
  } else {
    console.log("this is scalene triangle");
  }
}

triangleCheck(1, 2, 3);
triangleCheck(4, 4, 4);
triangleCheck(5, 6, 5);
triangleCheck(2, 2, 4);
triangleCheck(3, 7, 7);
