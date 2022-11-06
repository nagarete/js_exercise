let randomNum = Math.floor(Math.random) * 100;

let ans = prompt("guess the number !");
while (ans != randomNum) {
  if (ans <= randomNum) {
    console.log("guess higher");
  }

  if (ans >= randomNum) {
    console.log("guess lower");
    if (ans == randomNum) {
      break;
    }
  }
}
