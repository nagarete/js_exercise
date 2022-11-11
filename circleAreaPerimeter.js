let radius = 20;
let pi = 0;

if (radius % 7 == 0) {
  pi = 22 / 7;
} else {
  pi = 3.14;
}

const perimeter = radius * 2 * pi;
const area = radius * radius * pi;

console.log(perimeter);
console.log(area);
