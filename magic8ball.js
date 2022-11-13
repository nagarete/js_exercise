// let username = "";
// console.log(username === "Jane" ? "Hello, Jane!" : "Hello!");

let userQuestion = "";
console.log("what is your number?");

let randomNumber = Math.floor(Math.random() * 8);
let eightBall = randomNumber;

switch (eightBall) {
  case 1:
    console.log("It is certain");
    break;
  case 2:
    console.log("It is decidedly so");
    break;
  case 3:
    console.log("Reply hazy try again");
    break;
  case 4:
    console.log("Cannot predict now");
    break;
  case 5:
    console.log("Do not count on it");
    break;
  case 6:
    console.log("My sources say no");
    break;
  case 7:
    console.log("Outlook not so good");
    break;
  default:
    console.log("Signs point to yes");
    break;
}
// console.log(randomNumber);
console.log(eightBall);
