/**
 * @param {number} num
 * @return {number}
 */

var addDigits = function (num) {
  let res = "";
  const recursion = (num) => {
    // 递归终止条件
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
    recursion(nextNum);
  };
  recursion(num);
  return res;
};

console.log(addDigits(59));
