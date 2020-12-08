/**
 * @url https://leetcode-cn.com/problems/find-largest-value-in-each-tree-row/#/description
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function (root) {
  let ret = [];
  if (root) {
    let q = [];
    q.push(root);
    while (q.length) {
      const size = q.length;
      let valList = [];
      for (let i = 0; i < size; i++) {
        const node = q.shift();
        valList.push(node.val);
        if (node.left) q.push(node.left);
        if (node.right) q.push(node.right);
      }
      ret.push(Math.max(...valList));
    }
  }
  return ret;
};
