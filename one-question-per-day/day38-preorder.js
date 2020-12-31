/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
  let res = [];
  const traversal = (root) => {
    if(root !== null) {
      res.push(root.val);
      root.children.forEach(element => {
        traversal(element)
      });
    }
  }
  traversal(root)
  return res;
};