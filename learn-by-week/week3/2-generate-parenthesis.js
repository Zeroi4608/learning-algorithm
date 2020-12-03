/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let res = [];
  const generaterFuc = (cur, left, right) => {
    if (cur.length === 2 * n) {
      res.push(cur);
      return;
    }
    if (left < n) {
      generaterFuc(cur + "(", left + 1, right);
    }
    if (right < left) {
      generaterFuc(cur + ")", left, right + 1);
    }
  };
  generaterFuc("", 0, 0);
  console.log(res);
  return res;
};
generateParenthesis(3);

