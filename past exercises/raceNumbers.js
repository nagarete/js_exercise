let raceNumber = Math.floor(Math.random() * 1000);
let timeRegister = false;
const runnerAge = 28;

if (runnerAge < 18 && timeRegister === true) {
  raceNumber += 1000;
}

if (runnerAge > 18 && timeRegister === true) {
  console.log(
    `you will register at 9.30am & your race number is ${raceNumber} `
  );
} else if (runnerAge > 18 && timeRegister === false) {
  console.log(`you will register at 11am & your race number is ${raceNumber}`);
} else if (runnerAge === 18) {
  console.log(`you should go to the registration desk`);
} else {
  console.log(
    `you will register at 12.30pm & your race number is ${raceNumber}`
  );
}
