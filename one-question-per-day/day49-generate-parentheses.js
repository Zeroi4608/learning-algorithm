/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let res = [];

  const generate = (str, left, right) => {
    if (str.length === n * 2) {
      res.push(str);
      return;
    }
    if (left < n) {
      generate(str + "(", left + 1, right);
    }
    if (right < left) {
      generate(str + ")", left, right + 1);
    }
  };
  generate("", 0, 0);
  return res;
};
