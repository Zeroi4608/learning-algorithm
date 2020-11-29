let arr1 = [4, 4, 9, 5];
let arr2 = [9, 9, 4, 8, 4];
var intersect = function (nums1, nums2) {
  let backArr = [];
  for (let i = 0; i < nums1.length; i++) {
    const target = nums2.indexOf(nums1[i]);
    if (target > -1) {
      backArr.push(nums1[i]);
      nums2[target] = "__isPush__";
    }
  }
  return backArr;
};
intersect(arr1, arr2)
