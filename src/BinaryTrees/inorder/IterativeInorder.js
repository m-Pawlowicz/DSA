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

const root2 = new TreeNode(1);
root2.right = new TreeNode(2);
root2.right.left = new TreeNode(3);

function traverseInorderIterative(root) {
  if (!root) {
    return [];
  }

  let order = new Set();
  let stack = [root];

  do {
    let current = stack.at(0);

    if (!current) {
      continue;
    }

    // const {left, right} = current;
    if (!current.left && !current.right) {
      order.add(current);
      stack.shift();
      continue;
    }

    if (current.left && !order.has(current.left)) {
      stack.unshift(current.left);
      continue;
    }

    if (current.right) {
      order.add(current);
      stack.shift();
      stack.unshift(current.right);
      continue;
    }

    // means that we are on a node which has left subtree already visited and no right node to visit
    order.add(stack.shift());
  } while (stack.length);

  return [...order].map((x) => x.val);
}

traverseInorderIterative(root);
