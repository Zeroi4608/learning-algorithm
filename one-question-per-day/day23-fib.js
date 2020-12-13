/**
 * @param {number} N
 * @return {number}
 */
var fib = function (N) {
  if (N === 0) return 0;
  if (N === 1) return 1;
  return fib(N - 2) + fib(N - 1);
};
