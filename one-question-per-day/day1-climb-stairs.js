var test = 10;
var climbStairs = function (n) {
  const squrt_5 = Math.sqrt(5);
  const fib_n =
    Math.pow((1 + squrt_5) / 2, n + 1) - Math.pow((1 - squrt_5) / 2, n + 1);
  return Math.round(fib_n / squrt_5);
};
console.log(climbStairs(test))
