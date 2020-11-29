// 590 N叉树的后序遍历
var postorder = function(root) {
    let res = [];
    const post = (root) => {
        if(!root) {
            return;
        }
        if(root.children) {
            for(let i = 0;i < root.children.length;i++) {
                post(root.children[i])
            }
        }
        res.push(root.val)
    }
    post(root)
    return res;
};