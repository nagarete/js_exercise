// if (velocity * time < distance) {
//   console.log("Failure, Not enough time");
// } else if (fuel * fuelConsumption < distance) {
//   console.log("Failure, Not enough fuel");
// } else if (velocity * time <= distance && fuel * fuelConsumption <= distance) {
//   console.log("Failure, Not enough time");
// } else {
//   console.log("Welcome to Mars");
// }

const distance = parseInt(readline());
const time = parseInt(readline());
const velocity = parseInt(readline());
const fuel = parseInt(readline());
const fuelConsumption = parseInt(readline());

const noTime = velocity * time < distance;
const noFuel = fuel * fuelConsumption < distance;

if (noTime && noFuel) {
  console.log("Failure, Not enough time");
} else if (noTime) {
  console.log("Failure, Not enough time");
} else if (noFuel) {
  console.log("Failure, Not enough fuel");
} else {
  console.log("Welcome to Mars");
}
