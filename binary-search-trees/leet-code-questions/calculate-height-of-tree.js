class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const maxHeight = (node) => {
  if (node === null) {
    return 0;
  } else {
    let leftDepth = maxHeight(node.left);
    let rightDepth = maxHeight(node.right);

    if (leftDepth > rightDepth) {
      return leftDepth + 1;
    } else {
      return rightDepth + 1;
    }
  }
};

let node = new TreeNode(5, new TreeNode(3, null, new TreeNode(4)), null)
console.log(maxHeight(node))