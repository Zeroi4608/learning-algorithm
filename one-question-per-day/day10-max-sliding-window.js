/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums = [], k) {
  let res = [];
  if (!nums.length) {
    return res;
  }
  if (k > nums.length) {
    k = nums.length;
  }
  let max = nums.length - k + 1;
  for (let i = 0; i < max; i++) {
    let theArr = nums.slice(i, i + k);
    let theMax = Math.max(...theArr);
    res.push(theMax);
  }
  return res;
};

var maxSlidingWindow1 = function (nums = [], k) {
  let res = [];
  let n = nums.length;
  class slideWindow {
    constructor() {
      this.data = [];
    }
    push(val) {
      let data = this.data;
      while (data.length > 0 && data[data.length - 1] < val) {
        data.pop();
      }
      data.push(val);
    }
    pop(val) {
        let data = this.data;
        if(data.length > 0 && data[0] === val) {
            data.shift();
        }
    }
    max() {
        return this.data[0]
    }
  }
  let windows = new slideWindow();
  for(let i = 0;i < n;i++) {
      if(i < k - 1) {
          windows.push(nums[i])
      } else {
          windows.push(nums[i])
          res.push(windows.max());
          windows.pop(nums[i - k + 1]);
      }
  } 
  return res;
};
maxSlidingWindow1([1, 3, -1, -3, 5, 3, 6, 7], 3);
maxSlidingWindow1([9, 11], 2);
