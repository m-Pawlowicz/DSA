export function preorderTraversal(root) {
  if (!root) {
    return [];
  }

  const result = [root.value].concat(preorderTraversal(root.left)).concat(preorderTraversal(root.right));

  return result;
}
