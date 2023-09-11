interface FamilyMember {
  firstName: string;
  age: number;
  gender: string;
}

interface Family {
  id: number;
  familyName: string;
  location: string;
  members: FamilyMember[];
}

const response = await fetch("https://api.narasaka.dev/families");
const responseString = await response.text();
const data = JSON.parse(responseString);

const families: Family[] = data.families;

//sorting by how many male family members
const countMale = (familyMembers: FamilyMember[]) => {
  let count = 0;
  for (const member of familyMembers) {
    if (member.gender === "male") count++;
  }
  return count;
};

console.log(
  families.sort((a, b) => countMale(a.members) - countMale(b.members))
);

//sorting by how many family members
// console.log(families.sort((a, b) => a.members.length - b.members.length));

// firstname family member ke 2 dari family ke 3
// console.log(families[2].members[1].firstName);

//array 4 element, tiap element: array of first and last name every family members

const arrOfNames = [];
for (let i = 0; i < families.length; ++i) {
  const fullName = [];
  for (let j = 0; j < families[i].members.length; ++j) {
    fullName.push(
      `${families[i].members[j].firstName} ${families[i].familyName}`
    );
  }
  arrOfNames.push(fullName);
}
// arrOfNames.forEach((name) => console.log(name));
