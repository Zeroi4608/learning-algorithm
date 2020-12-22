/**
 * @param {string} S
 * @return {string}
 */

// var removeOuterParentheses = function (S = []) {
//   let list = [];
//   let theStack = [];
//   let str = "";
//   for (let i = 0; i < S.length; i++) {
//     str += S[i];
//     if (S[i] === ")" && theStack.length) {
//       theStack.pop(S[i]);
//     } else {
//       theStack.push(S[i]);
//     }
//     if (i > 0 && theStack.length === 0) {
//       list.push(str.slice(1, str.length - 1));
//       str = "";
//     }
//   }
//   return list.join("");
// };

var removeOuterParentheses = function (S) {
  let stack = [];
  let list = [];
  let str = "";
  for (let i = 0; i < S.length; i++) {
    str += S[i];
    if (S[i] === "(") {
      stack.push(S[i]);
    } else {
      stack.pop();
    }
    if (i > 0 && str.length && !stack.length) {
      list.push(str.slice(1, str.length - 1));
      str = ""
    }
  }
  return list.join("")
};

console.log(removeOuterParentheses("(()())(())()"));
