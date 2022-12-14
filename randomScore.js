let i = 0;
while (i < 7) {
  const score = Math.floor(Math.random() * 100);
  if (score > 70 && score < 90) {
    console.log(score);
    i++;
  }
}
