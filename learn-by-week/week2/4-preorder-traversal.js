// 144 二叉树前序遍历
var preorderTraversal = function (root) {
  let res = [];

  const preorder = (root) => {
    if (!root) {
      return;
    }
    res.push(root.val);
    preorder(root.left);
    preorder(root.right);
  };

  return res;
};
