/**
 * @url https://leetcode-cn.com/problems/minimum-genetic-mutation/solution/javascript-bfs-by-jsyt/
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function (start, end, bank) {
  let bankSet = new Set(bank);
  if (!bankSet.has(end)) return -1;
  let queue = [[start, 0]];
  let dna = ["A", "C", "G", "T"];
  //  终止条件
  while (queue.length) {
    // 当前层逻辑
    let [node, count] = queue.shift();
    if (node === end) return count;

    for (let i = 0; i < node.length; i++) {
      for (let j = 0; j < dna.length; j++) {
        let d = node.slice(0, i) + dna[j] + node.slice(i + 1);
        // 下钻
        if (bankSet.has(d)) {
          queue.push([d, count + 1]);
          // 清空状态
          bankSet.delete(d);
        }
      }
    }
  }
  return -1;
};


