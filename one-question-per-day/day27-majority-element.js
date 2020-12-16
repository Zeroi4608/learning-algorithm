/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let hash = {};
    for(let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if(!hash[element]) {
            hash[element] = 1;
        } else {
            hash[element] += 1;
        }

        if(hash[element] > nums.length / 2) {
            return element
        }
    }
    return Math.max(...Object.values(hash))
};