export function inorderTraversal(root) {
  if (!root) {
    return [];
  }

  const result = inorderTraversal(root.left)
    .concat(root.value)
    .concat(inorderTraversal(root.right));

  return result;
}
 