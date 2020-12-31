/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const n = nums.length;
  if (n === 1) return nums[0];
  else if (n === 0) return 0;
  const dpFunc = (nums) => {
    const n = nums.length;
    let dp = Array.from(new Array(n), () => new Array(n));
    dp[0][0] = 0;
    dp[0][1] = nums[0];
    for (let i = 1; i < n; i++) {
      dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1]);
      dp[i][1] = nums[i] + dp[i - 1][0];
    }

    return Math.max(dp[n - 1][0], dp[n - 1][1]);
  };
  return Math.max(
    dpFunc(nums.slice(1)),
    dpFunc(nums.slice(0, nums.length - 1))
  );
};
