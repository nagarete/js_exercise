const badmintonScore = (score) => {
  let playerA = 0;
  let playerB = 0;
  for (let i = 0; i < score.length; i++) {
    // console.log(playerA, playerB);
    if (score[i] === "A") playerA++;
    else playerB++;
    // if ((playerA === 20) & (playerB === 20)) {
    //   while (playerA - playerB !== 2) {
    //     if (score[i] === "A") {
    //       playerA++;
    //       i++;
    //     } else {
    //       playerB++;
    //       i++;
    //     }

    if (playerA === 21) {
      return i === score.length - 1 && playerA - playerB >= 2;
    }
    if (playerB === 21) {
      return i === score.length - 1 && playerB - playerA >= 2;
    }
  }
  //   console.log(playerA, playerB);
  if (playerA < 21 || playerB < 21) return false;
};

// console.log(badmintonScore("AABAAABAABABBBBBBBAAABBBBBAABABAAABBBAAAABABAA")); //true
// console.log(badmintonScore("AAAAAABBBABAAAABAABABBBABBBABBBBAAABBBBABABAAAA")); //false
// console.log(badmintonScore("ABBBAAAABBBABBBBBBBABBABAABAAAAAAABABAABBB")); //true
// console.log(badmintonScore("BBABBBBAAABABABBAAABBBBAABAAAABBAABBAABBAAA")); //false

//without jus/dus
console.log(badmintonScore("ABBBBAABBBABBAAABAABAABABAABBABAAAAAA")); //correct
console.log(badmintonScore("BBBAAAABBBBBAAABBABABABABBAAABAAABABBBAA")); //wrong
console.log(badmintonScore("ABBBBAABABAAABBAAAAABAAABAAAABAA")); //correct
console.log(badmintonScore("BBBBABBAAABBBBABABABBABBABBABAAABAABA")); //wrong
// console.log(badmintonScore("ABABABABABABABABABABABABABABABABABABABABABABBB")); //true

//if either playerA or playerB reach 21 with 2 differences, break done

/*
  if playerA 21, playerB <20 return true vice versa
  if((playerA === 21 && playerB<20) ||(playerB === 21 && playerA<20)) return true
  if(playerA === 21 && playerB<20) return true
  if(playerB === 21 && playerA<20) return true;
  */
//if playerA > 21 playerB > 21 their differences === 2. else false
