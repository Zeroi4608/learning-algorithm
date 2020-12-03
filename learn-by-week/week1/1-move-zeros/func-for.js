/**
 * 判断每一项是否为零
 * 如果为0，pointer++ 内层循环继续
 * 如果不为0，则赋值，外循环和内循环对调赋值
 * */ 
let test = [0, 1, 0, 0, 3, 12];
function moveZeros(nums = []) {
  let pointer = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
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
}
moveZeros(test)
