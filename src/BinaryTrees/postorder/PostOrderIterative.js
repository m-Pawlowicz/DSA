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

var postorderTraversal = function (root) {
  if (!root) {
    return [];
  }

  let stack = [root];
  let order = new Set();

  do {
    let current = stack.at(0);

    if (!current.left && !current.right) {
      order.add(current);
      stack.shift();
      continue;
    }

    if (current.right && !order.has(current.right)) {
      stack.unshift(current.right);
    }

    if (current.left && !order.has(current.left)) {
      stack.unshift(current.left);
    }

    if (order.has(current.left) || order.has(current.right)) {
      order.add(current);
      stack.shift();
    }
  } while (stack.length);

  return [...order].map((x) => x.val);
};

const result = postorderTraversal(root);
// const result = postorderTraversal(root2);
console.log(result);

var levelOrder = function (root) {
  let queue = [[root]];
  let order = [];

  do {
    let current = queue.shift();

    if (!current.length) {
      break;
    }

    order.push(current.map((x) => x.val));

    queue.push(current.map((x) => [x.left, x.right].filter((x) => !!x)).flat());
  } while (queue.length);

  return order;
};

levelOrder(root);
