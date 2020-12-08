/**
 * @url https://leetcode-cn.com/problems/generate-parentheses/#/description
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const res = [];
  const generateFunc = (str, left, right) => {
    if (str.length === n * 2) {
      res.push(res);
      return;
    }

    if (left < n) {
      generateFunc(str + "(", left + 1, right);
    }
    if (right < left) {
      generateFunc(str + ")", left, right + 1);
    }
  };

  generateFunc("", 0, 0);
  return res;
};
