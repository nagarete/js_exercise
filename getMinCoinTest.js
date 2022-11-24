import { assertEquals } from "https://deno.land/std@0.165.0/testing/asserts.ts";

const getMinimumCoins = (total, money) => {
  money.sort((a, b) => b - a);
  //   console.log(money);
  let result = 0;
  let count = 0;
  let num = 0;
  while (result < total) {
    // console.log(num);
    result += money[num];
    count++;
    // console.log(result);

    if (result > total) {
      result -= money[num];
      num++;
      count--;
      //   console.log(result);
    }
  }
  console.log(result);
  return count;
};

Deno.test("Test 1", () => {
  const target = 250;
  const coins = [1, 2, 5, 10, 20, 50, 100, 200];
  assertEquals(getMinimumCoins(target, coins), 2);
});

Deno.test("Test 2", () => {
  const target = 200;
  const coins = [1, 2, 5, 10, 20, 50, 100, 200];
  assertEquals(getMinimumCoins(target, coins), 1);
});

Deno.test("Test 3", () => {
  const target = 40;
  const coins = [1, 2, 5, 10, 20, 50, 100, 200];
  assertEquals(getMinimumCoins(target, coins), 2);
});

Deno.test("Test 4", () => {
  const target = 440;
  const coins = [1, 2, 5, 10, 20, 50, 100, 200];
  assertEquals(getMinimumCoins(target, coins), 4);
});
