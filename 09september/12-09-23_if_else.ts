// const ranum = Math.floor(Math.random() * 100);

// // if (ranum === 100) console.log(ranum + " is the highest number");
// // else if (ranum === 1) console.log(ranum + " is the lowest number");
// // else if (ranum / 2 < 50) console.log(ranum + " is below half");
// // else console.log(ranum + " is more than half");

// const ranum2 = Math.floor(Math.random() * 100);
// if (ranum === ranum2) console.log("we got the same number!");
// else if (ranum > ranum2) console.log(ranum + " is higher than " + ranum2);
// else console.log(ranum + " is lower than " + ranum2);

const iq = Math.floor(Math.random() * 200);
console.log(iq);
while (iq < 200) {
  if (iq < 80) console.log("We cannot help you, seek other organisation");
  else if (iq < 110) console.log("you're above average");
  else if (iq < 140) console.log("you're so genius, your life must be easy");
  else if (iq < 160)
    console.log("People often assume you're freak. It must be hard for you");
  else console.log("you must be Einstein");
  break;
}
