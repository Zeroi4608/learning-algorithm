/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    let hash = {};
    if(nums.length < 4) {
        return []
    }
    nums = nums.sort((a, b)=>a - b);
    for(let i = 0; i < nums.length - 3; i++) {
        for(let j = i + 1; j < nums.length - 2; j++) {
            for(let k = j + 1; k < nums.length - 1; k++) {
                for(let l = k + 1; l < nums.length; l++) {
                    if(nums[i] + nums[j] + nums[k] + nums[l] === target) {
                        let key = [nums[i], nums[j], nums[k], nums[l]]
                        if(!hash[key]) {
                            hash[key] = key;
                        }
                    }
                }
            }
        }
    }
    return Object.values(hash)
};

fourSum([1, 0, -1, 0, -2, 2], 0);
