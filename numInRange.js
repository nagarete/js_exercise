function checkInRange(num, start, end) {
  if (num >= start && num <= end) {
    console.log("In range");
  } else {
    console.log("not in range");
  }
}

checkInRange(2, 1, 4);
checkInRange(5, 6, 9);
checkInRange(3, 3, 7);
checkInRange(8, 2, 8);
checkInRange(9, 1, 5);
