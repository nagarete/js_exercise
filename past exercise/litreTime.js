var inputs = readline().split(' ');
const t = parseInt(inputs[0]); // time
const c = parseInt(inputs[1]); // capacity
const r = parseInt(inputs[2]); // rate
// time x rate = capacity
if(t*r < c) console.log('no')
else console.log('yes')