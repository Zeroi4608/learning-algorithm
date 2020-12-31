/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while(start <= end) {
    // 循环终止条件
    const mid = start + ((end - start) >> 1);
    if (nums[mid] === target) return mid;

    if(nums[mid] >= nums[start]) {
      // start -> mid 有序
      if(target >= nums[start] && target <= nums[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }

    } else {
      // mid -> end 有序
      if(target >= nums[mid] && target <= nums[end]) {
        start = mid + 1;
      } else {
        end = mid  - 1;
      }
    }
  }
  return -1;
};