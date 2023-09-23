let i = 0;
while (i < 8) {
  const score = Math.floor(Math.random() * 100);
  if (score > 78 && score < 85) {
    console.log(score);
    i++;
  }
}
