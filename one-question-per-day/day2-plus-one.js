/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits = []) {
  for (let n = digits.length - 1; n >= 0; n--) {
    digits[n] += 1;
    digits[n] %= 10;
    if (digits[n] !== 0) {
      return digits;
    }
  }
  digits.unshift(1)
  return digits;
};


console.log(plusOne([8,9,9,9]))
