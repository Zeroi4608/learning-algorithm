/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let pointer = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      while (pointer + i < nums.length) {
        if (nums[pointer + i] === 0) pointer++;
        else {
          [nums[i], nums[pointer + i]] = [nums[pointer + i], nums[i]];
          break;
        }
      }
    }
  }
};
moveZeroes([0, 1, 0, 3, 12]);
