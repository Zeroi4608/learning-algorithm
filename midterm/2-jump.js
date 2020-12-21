/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  if(nums.length === 1) {
      return 0;
  }
  nums[nums.length - 1] = 0;
  let steps = [];
  for (let i = 0; i < nums.length; i++) {
    let flag = true;

    if (steps.length) {
      for (let j = 0; j < steps.length; j++) {
        let end = steps[j][1];
        if (end >= nums[i] + i) {
          flag = false;
        }
      }
    }
    if (flag) {
      steps.push([i, nums[i] + i]);
    }
  }
  return steps.length;
};

console.log(jump([1,1,2]));
