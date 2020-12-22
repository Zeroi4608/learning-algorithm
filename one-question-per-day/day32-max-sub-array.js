/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let ans = nums[0];
    let sum = 0;
    for(let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if(sum > 0) {
            sum += element
        } else {
            sum = element
        }
        ans = Math.max(ans, sum)
    }
    return ans;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
