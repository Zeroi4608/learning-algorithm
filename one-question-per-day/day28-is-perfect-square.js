/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  var low = 0;
  var high = num;
  var tmpSquare = 0;

  while (low <= high) {
    var mid = (low + high) >> 1;
    tmpSquare = mid * mid;
    if (tmpSquare > num) {
      high = mid - 1;
    } else if (tmpSquare < num) {
      low = mid + 1;
    } else {
      return true;
    }
  }
  return false;
};
isPerfectSquare(16);
