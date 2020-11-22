/**
 * 使用双指针，慢指针nonRepetitive记录非重复项的下角标
 * 每个元素只和下一个元素做比较
 * */
let test = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const removeDuplicates = (nums) => {
  let nonRepetitive = 0;
  let len = nums.length;
  for (let i = 1; i < len; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[i - nonRepetitive] = nums[i];
    } else {
      nonRepetitive++;
    }
  }
  return len - nonRepetitive;
};
