/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function (nums) {
  let ans = [];
  let len = nums.length;
  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) break; //边界条件
    if (i > 0 && nums[i] === nums[i - 1]) continue; // 去重
    let L = i + 1;
    let R = len - 1;
    while (L < R) {
      const sum = nums[i] + nums[L] + nums[R];
      if (sum === 0) {
        ans.push([nums[i], nums[L], nums[R]]);
        while (L < R && nums[L] === nums[L + 1]) L++;
        while (L < R && nums[R] === nums[R - 1]) R--;
        L++;
        R--;
      } else if (sum > 0) R--;
      else if (sum < 0) L++;
    }
  }
  return ans;
};
