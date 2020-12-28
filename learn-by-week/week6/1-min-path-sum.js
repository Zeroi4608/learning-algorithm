/**
 * @url https://leetcode-cn.com/problems/minimum-path-sum/
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  let row = grid.length,
    col = grid[0].length;
  // 初始化原始行和原始列
  for (let i = 1; i < row; i++) grid[i][0] += grid[i - 1][0];
  for (let j = 1; j < col; j++) grid[0][j] += grid[0][j - 1];
  // 累加其他最小值的格子
  for (let i = 1; i < row; i++)
    for (let j = 1; j < col; j++)
      grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);

  console.log(grid);
  return grid[row - 1][col - 1];
};
minPathSum([
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
]);
