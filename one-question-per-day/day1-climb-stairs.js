var test = 10;
// var climbStairs = function (n) {
//   const squrt_5 = Math.sqrt(5);
//   const fib_n =
//     Math.pow((1 + squrt_5) / 2, n + 1) - Math.pow((1 - squrt_5) / 2, n + 1);
//   return Math.round(fib_n / squrt_5);
// };
var climbStairs = function (n) {
  let prev = 0;
  let cur = 1;
  let temp;

  for (let i = 0; i < n; i++) {
    temp = prev;
    prev = cur;
    cur += temp;
    console.log(temp, prev, cur);
  }
  return cur;
};
console.log(climbStairs(10));
