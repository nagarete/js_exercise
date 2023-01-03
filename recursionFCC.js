//this function will countdown from n to 1

function countdown1(n) {
  if (n < 1) {
    return [];
  } else {
    const arr = countdown1(n - 1);
    arr.unshift(n);
    return arr;
  }
}

function countdown2(n) {
  if (n < 1) {
    return [];
  } else {
    const arr = countdown2(n - 1);
    arr.splice(0, 0, n);
    return arr;
  }
}

function countdown3(n) {
  return n < 1 ? [] : [n].concat(countdown(n - 1));
}

function countdown4(n) {
  return n < 1 ? [] : [n, ...countdown(n - 1)];
}
