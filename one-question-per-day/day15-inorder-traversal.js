/**
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

var inorderTraversal = function (root) {
  let res = [];
  const traversal = (root) => {
    if(!root) {
      return
    }
    traversal(root.left);
    res.push(root.val);
    traversal(root.right);
  }
  traversal(root)
  return res;
};
