/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// var searchMatrix = function(matrix, target) {
//   const row = matrix.length;
//   for(let i = 0; i < row; i++) {
//     if(matrix[i].includes(target)) {
//       return true
//     }
//   }
//   return false;
// };

var searchMatrix = function(matrix, target) {
  if(matrix.length === 0) return false;
  let [left, up] = [matrix[0].length - 1, 0]; // 初始化位置
  while(left >= 0 && up < matrix.length) {
    if(matrix[up][left] > target) {
      left--;
    } else if (matrix[up][left] < target) {
      up++;
    } else {
      return true;
    }
  }
  return false;

};