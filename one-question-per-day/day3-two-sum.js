let test = [2, 7, 11, 15];
let tar = 26;
// var twoSum = function (nums = [], target) {
//   let i = nums.length - 1;
//   while (i > 0) {
//     const last = nums.pop();
//     if (nums.indexOf(target - last) > -1) {
//       return [nums.indexOf(target - last), nums.length];
//     }
//     i--;
//   }
// };


var twoSum = function (nums = [], target) {
  while(nums.length) {
    let last = nums.pop();
    if(nums.includes(target - last)) {
      return [nums.indexOf(target - last), nums.length]
    }
  }
};


console.log(twoSum([2, 7, 11, 15], 26));
