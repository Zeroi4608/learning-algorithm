/**
 * @url https://leetcode-cn.com/problems/validate-binary-search-tree/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  const recurse = (root, lower, upper) => {
    if (root === null) {
      return true;
    }
    if (root.val <= lower || root.val >= upper) {
      return false;
    }

    return (
      recurse(root.left, lower, root.val) &&
      recurse(root.right, root.val, upper)
    );
  };
  return recurse(root, -Infinity, Infinity);
};
