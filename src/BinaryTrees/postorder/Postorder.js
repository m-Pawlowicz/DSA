export function postorderTraversal(root) {
    if (!root) {
      return [];
    }
  
    const result = postorderTraversal(root.left).concat(postorderTraversal(root.right)).concat(root.value);
  
    return result;
  }
  