/**
 * 589. N叉树的前序遍历
 * Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
  let res = [];
  function traversal(root) {
    if(root !== null) {
        res.push(root.val);
        root.children.forEach(children => {
            traversal(children)
        });
    }
  }
  traversal(root)
  return res;
};
