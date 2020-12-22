/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// var intersect = function (nums1, nums2) {
//   let backArr = [];
//   for (let i = 0; i < nums1.length; i++) {
//     const target = nums2.indexOf(nums1[i]);
//     if (target > -1) {
//       backArr.push(nums1[i]);
//       nums2[target] = "__isPush__";
//     }
//   }
//   return backArr;
// };

var intersect = function (nums1, nums2) {
  let result = [];
  for (let i = 0; i < nums1.length; i++) {
    const target = nums2.indexOf(nums1[i]);
    if (target > -1) {
      result.push(nums1[i]);
      nums2[target] = "__isPushed__";
    }
  }
  return result;
};
intersect([4, 4, 9, 5], [9, 9, 4, 8, 4]);
