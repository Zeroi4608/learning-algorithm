/**
 * 94 二叉树的中序遍历
 * */

// 递归
var inorderTraversal = function (root) {
  const res = [];
  const inorder = (root) => {
    if (!root) {
      return;
    }
    inorder(root.left);
    res.push(root.val);
    inorder(root.right);
  };
  inorder(root);
  return res;
};

// 栈
var inorderTraversal1 = function (root) {
  const res = [];
  const stk = [];
  while (root || stk.length) {
    while(root) {
        stk.push(root);
        root = root.left;
    }
    root = stk.pop();
    res.push(root.val);
    root = root.right;
  }

  return res
};
