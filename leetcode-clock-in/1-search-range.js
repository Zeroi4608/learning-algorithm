/**
 * @url https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//  暴力
var searchRange = function (nums, target) {
  let res = [-1, -1];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      if (res[0] === -1) {
        res[0] = i;
      }
      res[1] = i;
    }
  }
  console.log(res);
  return res;
};

// 二分查找
var binarySearch = function (nums, target) {
  let ans = [-1, -1];

  // 二分查找
  const binary = (nums, target, lower) => {
    let left = 0,
      right = nums.length - 1,
      res = nums.length;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      console.log("mid", mid);
      if (nums[mid] > target || (lower && nums[mid] >= target)) {
        right = mid - 1;
        res = mid;
        console.log("mid-right", right, mid);
      } else {
        left = mid + 1;
        console.log("mid-left", left, mid);
      }
    }
    console.log(res);
    return res;
  };

  const leftIdx = binary(nums, target, true);
  const rightIdx = binary(nums, target, false) - 1;
  if (
    leftIdx <= rightIdx &&
    rightIdx < nums.length &&
    nums[leftIdx] === target &&
    nums[rightIdx] === target
  ) {
    ans = [leftIdx, rightIdx];
  }
  //   console.log(ans);
  return ans;
};

binarySearch([1, 1, 2, 2, 3, 7, 8, 8, 8, 8, 9, 10], 8);
// binarySearch([5, 7, 7, 8, 8, 10], 6);
// binarySearch([], 0);
