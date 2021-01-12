/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  let count = 32,
    r = 0;
  while (count--) {
    r <<= 1;
    r += n & 1;
    n >>= 1;
  }
  return r >>> 0;
};
