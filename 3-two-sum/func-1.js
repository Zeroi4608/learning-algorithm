/**
 * a + b = c 换成 b = c - a;c 是已知参数，a 为每次遍历的具体值
 * 从数组右侧不断取出一个数和剩余数组做对比，看满足 b = c - a 是否满足 （indexof 和 includes 皆可判断）
 * 如果满足 返回 a 和 b 的下标，注：因为数组在不断变短,所以返回值a为arr[arr.length]
 *
 */
let test = [2, 7, 11, 15];
const tar = 18;
function twoSum(nums = [], target = 0) {
  let i = nums.length;
  while (i > 1) {
    let last = nums.pop();
    if (nums.includes(target - last)) {
      return [nums.indexOf(target - last), nums.length];
    }
    i--;
  }
}
console.log(twoSum(test, tar));
