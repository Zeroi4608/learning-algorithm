/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// var maxSlidingWindow = function (nums = [], k) {
//   let res = [];
//   if (!nums.length) {
//     return res;
//   }
//   if (k > nums.length) {
//     k = nums.length;
//   }
//   let max = nums.length - k + 1;
//   for (let i = 0; i < max; i++) {
//     let theArr = nums.slice(i, i + k);
//     let theMax = Math.max(...theArr);
//     res.push(theMax);
//   }
//   return res;
// };

var maxSlidingWindow = function (nums = [], k) {
  let result = [];
  if (!nums.length) return result;
  if (k >= nums.length) k = nums.length;
  let max = nums.length - k + 1;
  for (let i = 0; i < max; i++) {
    result.push(Math.max(...nums.slice(i, i + k)));
  }
  return result;
};

maxSlidingWindow1([1, 3, -1, -3, 5, 3, 6, 7], 3);
