const names = [
  ["John", "Smith"],
  ["Jane", "Doe"],
  ["Bob", "Jones"],
  ["Alice", "Williams"],
  ["Eve", "Brown"],
  ["Adam", "Miller"],
  ["Steve", "Davis"],
  ["Bill", "Garcia"],
  ["Mark", "Rodriguez"],
  ["Paul", "Wilson"],
  ["George", "Martinez"],
  ["Ringo", "Anderson"],
  ["Pete", "Taylor"],
  ["John", "Thomas"],
  ["Paul", "Hernandez"],
];

const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];
// console.log(
//   contacts.sort((a, b) => {
//     if (a.lastName < b.lastName) return -1;
//     if (a.lastName === b.lastName) return 0;
//     else return 1;
//   })
// );

// console.log(
//   contacts.sort((a, b) => {
//     if (a.number === "unknown" || b.number === "unknown") return 1;
//     if (a.number < b.number) return -1;
//     if (a.lastName === b.lastName) return 0;
//     if (a.number > b.number) return 1;
//     if (a.number === "unknown" || b.number === "unknown") return 1;
//   })
// );

// console.log(
//   contacts.sort((a, b) => {
//     return b.likes.length - a.likes.length;
//   })
// );

// console.log(
//   contacts.sort((a, b) => {
//     let nameALength = a.firstName.length + a.lastName.length;
//     let nameBLength = b.firstName.length + b.lastName.length;
//     return nameALength - nameBLength;
//   })
// );

// console.log(
//   contacts.filter((contact) => {
//     return contact.likes.length !== 3;
//   })
// );

console.log(
  contacts.map((contact) => {
    return [contact.firstName, contact.lastName, ...contact.likes];
  })
);
console.log(
  contacts.map((contact) => {
    return [contact.firstName, contact.lastName, contact.likes].flat();
  })
);
//output ["John Smith", "Jane Doe"...]

const newNamesA = (arr) => {
  // return `${arr[0]} ${arr[1]}`;
  return arr.join(" ");
};

const firstJname = (arr) => {
  return arr[0] !== "j" || arr[0] !== "J";
};

const firstLetterOfLastName = (name) => {
  return name.split(" ")[1];
};

// const a = "nathan";
// const b = "samuel";
// if (a[0] < b[0]) {
//   console.log("1");
// }
// console.log("2");

// const newNames = names.map(newName).sort((a, b) => {
//   if (firstLetterOfLastName(a) < firstLetterOfLastName(b)) return -1;
//   return 1;
// });

const newNames = names
  .map((arr) => `${arr[0]} ${arr[1]}`)
  .filter((arr) => arr[0] !== "j" || arr[0] !== "J")
  .sort((a, b) => {
    if (firstLetterOfLastName(a) < firstLetterOfLastName(b)) return -1;
    return 1;
  });

// console.log(newNames);
