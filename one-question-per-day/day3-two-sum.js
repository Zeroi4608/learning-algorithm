let test = [2, 7, 11, 15];
let tar = 26;
var twoSum = function (nums = [], target) {
  let i = nums.length - 1;
  while (i > 0) {
    const last = nums.pop();
    if (nums.indexOf(target - last) > -1) {
      return [nums.indexOf(target - last), nums.length];
    }
    i--;
  }
};
console.log(twoSum(test, tar));
