// const data = await fetch("https://api.randomuser.me/?results=10");
const data = await fetch("https://api.github.com/users/nagarete");
// const contacts = await data.json();
// console.log(contacts);

// console.log(
//   contacts.results.map((contact) => {
//     return contact.gender;
//   })
// );

const samuelData = await data.text();
const samuelDataObject = JSON.parse(samuelData);
// console.log(samuelDataObject.followers);
const created = samuelDataObject.created_at.split("-");
// console.log(created);
const updated = samuelDataObject.updated_at.split("-");
// console.log(`${Math.abs(Number(created[0]) - Number(updated[0]))} years`);

const createdDate = new Date(samuelDataObject.created_at);
console.log(createdDate.getTime().toLocaleString());
const updatedDate = new Date(samuelDataObject.updated_at);
console.log(Math.abs((createdDate - updatedDate) / 1000 / 60 / 60 / 24));
