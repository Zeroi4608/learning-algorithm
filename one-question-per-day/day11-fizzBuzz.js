/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let res = [];
  for (let i = 1; i < n + 1; i++) {
    if (Math.round(i / 3) === i / 3 && Math.round(i / 5) === i / 5) {
      res.push("FizzBuzz");
    } else if (Math.round(i / 3) === i / 3) {
      res.push("Fizz");
    } else if (Math.round(i / 5) === i / 5) {
      res.push("Buzz");
    } else {
      res.push(i + "");
    }
  }
  return res;
};
fizzBuzz(15);
// let recursion = function (level, params) {
//   // 终止条件
//   if (level >= MAX_LEVEL) {
//     return;
//   }
//   // 处理当前层逻辑
//   process(level, data);

//   // 下探到下一层
//   recursion(level + 1, p1);
// };
