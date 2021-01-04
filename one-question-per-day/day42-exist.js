/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const m = board.length;
  const n = board[0].length;
  const used = new Array(m);
  // 二维数组存放使用过的
  for (let i = 0; i < m; i++) {
    used[i] = new Array(n);
  }
  // canFind 判断当前点是否是目标路径上的点
  const canFind = (row, col, i) => {
    // 递归终止条件
    if (i === word.length) return true;
    // 数组越界判断
    if (row < 0 || col < 0 || row >= m || col >= n) return false;
    // 已访问过
    if (used[row][col] || board[row][col] !== word[i]) return false;

    // 合格点，记录已访问
    used[row][col] = true;
    const canFindNext =
      canFind(row + 1, col, i + 1) ||
      canFind(row - 1, col, i + 1) ||
      canFind(row, col + 1, i + 1) ||
      canFind(row, col - 1, i + 1);

    // 可发现下一结点
    if(canFindNext) {
      return true;
    }

    // 不可发现下一结点,撤销当前访问状态
    used[row][col] = false;
    return false;

  };

  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      if(board[i][j] === word[0] && canFind(i, j, 0)) {
        return true;
      }
    }
  }
  return false;
};
