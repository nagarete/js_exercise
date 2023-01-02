export const getOptimalChests = (chests, pocketCapacity) => {
  //code here
  let ans = [];
  for (let i = 0; i < chests.length; ++i) {
    let found = false;
    for (let j = i + 1; j < chests.length; ++j) {
      if (chests[i] + chests[j] === pocketCapacity) {
        ans = [i, j];
        found = true;
        break;
      }
      if (found) break;
    }
  }
  return ans;
};
