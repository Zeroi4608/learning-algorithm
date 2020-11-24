/**
 * 最后侧开始判断，如果+1后不为0，则return 数组
 * 如果+1后为0，继续向左
 * 如果全部遍历完也没有return 说明当前这个数组每一位都是9，数组整体增加1位
 * */
let test = [1, 2, 8, 9];
function plusOne(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i]++;
    digits[i] %= 10;
    if (digits[i] !== 0) {
      return digits;
    }
  }
  digits = [...Array(digits.length + 1)].map((_) => 0);
  digits[0] = 1;
  return digits;
}
plusOne(test);
