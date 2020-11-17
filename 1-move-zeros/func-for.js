let test = [0, 1, 0, 0, 3, 12];
function moveZeros(nums = []) {
  let pointer = 0;
  for (let i = 0; i < nums.length; i++) {
    if (test[i] === 0) {
      while (pointer + i < nums.length) {
        if (nums[pointer + i] === 0) {
          pointer++;
        } else {
          [nums[i], nums[pointer + i]] = [nums[pointer + i], nums[i]];
          break;
        }
      }
    }
  }
  console.log(nums);
}
moveZeros(test)
