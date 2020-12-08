/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
    let l = nums.length;
    while(l > 1) {
        const last = nums.pop();
        if(nums.includes(target - last)) {
            return [nums.indexOf(target - last), nums.length]
        }
        l--;
    }
}