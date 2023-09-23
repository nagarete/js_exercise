let wishlist = readline(); // The list containing the items to search for.
wishlist = wishlist.split(", ");
const N = parseInt(readline()); // The amount of items you will dig through.
for (let i = 0; i < N; i++) {
  const item = readline();
  let found = false; //kasih tau kalau ini kita blm ketemu itemnya
  for (let j = 0; j < wishlist.length; ++j) {
    if (item === wishlist[j]) {
      found = true; //kasih tau kalau kita udah ketemu itemnya
      break;
    }
  }

  if (found) console.log("YOINK");
  else console.log("YEET");
}
