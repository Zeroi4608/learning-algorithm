var test = 10;
// var climbStairs = function (n) {
//   const squrt_5 = Math.sqrt(5);
//   const fib_n =
//     Math.pow((1 + squrt_5) / 2, n + 1) - Math.pow((1 - squrt_5) / 2, n + 1);
//   return Math.round(fib_n / squrt_5);
// };
var climbStairs = function (n) {
  let dp = [];
  for (let i = 0; i <= n; i++) {
    if (i <= 1) dp[i] = 1;
    else dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};
console.log(climbStairs(10));
