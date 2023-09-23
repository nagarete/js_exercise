const height = parseInt(readline());
const width = parseInt(readline());

for (let i = 0; i < height; ++i) {
  //for loop i itu reset, jadi pas abis print, ke bawahnya ulang dari 0
  let row = "";
  //bikin width dulu
  for (let j = 0; j < width; ++j) {
    row += "O";
  }
  //bikin heightnya
  console.log(row);
}
