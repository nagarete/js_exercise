const nathans = ["jono", "alex", "linus", "bob", "kevin", "jason"];
const samuels = ["linus", "marques", "michael", "jordan", "jono"];

const mutual = (a, b) => {
  //let counts =0;
  let names = [];
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        //counts++;
        names.push(b[j]);
      }
    }
  }
  //return counts;
  return names;
};

console.log(mutual(nathans, samuels));
