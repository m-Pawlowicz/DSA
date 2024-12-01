function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val; // Set the value to 0 if not provided
  this.left = left === undefined ? null : left; // Set left to null if not provided
  this.right = right === undefined ? null : right; // Set right to null if not provided
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

function traverseInorderIterative(root) {
  let order = [];
  let leftQueue = [root];
  let rightStack = [];

  do {
    let current = leftQueue.length ? leftQueue.shift() : rightStack.shift();

    if (!current) {
      continue;
    }

    order.push(current.val);
    const { left, right } = current;

    if (left) {
      leftQueue.push(left);
    }

    if (right) {
      rightStack.unshift(right);
    }
  } while (leftQueue.length || rightStack.length);

  return order;
}
