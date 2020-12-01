/**
 * @param {number} n
 * @return {number}
 */
// 动态规划
// var climbStairs = function (n) {
//   const dp = [];
//   dp[0] = 1;
//   dp[1] = 1;
//   for (let i = 2; i <= n; i++) {
//     dp[i] = dp[i - 1] + dp[i - 2];
//   }
//   return dp[n];
// };

// 数学公式
var climbStairs = function (n) {
  let squrt_5 = Math.sqrt(5);
  let fib =
    Math.pow((1 + squrt_5) / 2, n + 1) - Math.pow((1 - squrt_5) / 2, n + 1);
  return Math.round(fib / squrt_5);
};

console.log(climbStairs(10));
