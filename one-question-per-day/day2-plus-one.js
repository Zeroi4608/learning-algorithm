let test = [1, 2, 3];
var plusOne = function (digits = []) {
  for (let n = digits.length - 1; n >= 0; n--) {
    digits[n] += 1;
    digits[n] %= 10;
    if (digits[n] !== 0) {
      return digits;
    }
  }
  digits = [...Array(digits.length + 1)].map(() => 0);
  digits[0] = 1;
  return digits;
};
