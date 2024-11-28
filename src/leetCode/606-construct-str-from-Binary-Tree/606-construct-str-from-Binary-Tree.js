function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let node1 = new TreeNode(1);
let node2 = new TreeNode(2);
let node3 = new TreeNode(3);
let node4 = new TreeNode(4);
let node5 = new TreeNode(5);
let node6 = new TreeNode(6);

// Connect the nodes to form the tree structure
node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.right = node6;

var tree2str = function (root) {
  if (!root) {
    return "";
  }

  const left = tree2str(root.left);
  const right = tree2str(root.right);

  if (!left && !right) {
    return root.val.toString();
  }

  if (!right) {
    return root.val + `(${left})`;
  }

  if (!left) {
    return root.val + "()" + `(${right})`;
  }

  return root.val + `(${left})` + `(${right})`;
};

let result = tree2str(node1);
console.log(result);
