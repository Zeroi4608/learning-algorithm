/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  let res = "";
  const recursion = (num) => {
    // 终止条件
    if (num < 10) {
      res = num;
      return;
    }
    // 当前层逻辑
    num += "";
    let nextNum = 0;
    for (let i = 0; i < num.length; i++) {
      nextNum += num[i] * 1;
    }
    // 下探至下一层
    recursion(nextNum * 1);
  };
  recursion(num);
  return res;
};
addDigits(59);
