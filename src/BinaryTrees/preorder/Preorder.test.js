import { preorderTraversal } from "./Preorder";

class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

describe("preorder", () => {
  test("should return an empty array for an empty tree", () => {
    const root = null;
    const result = preorderTraversal(root);
    expect(result).toEqual([]);
  });

  test("should return the correct preorder traversal for a single node tree", () => {
    const root = new TreeNode(5);
    const result = preorderTraversal(root);
    expect(result).toEqual([5]);
  });

  test("should return the correct preorder traversal for a binary tree", () => {
    const root = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(4), null),
      new TreeNode(3, null, new TreeNode(5))
    );
    const result = preorderTraversal(root);
    expect(result).toEqual([1, 2, 4, 3, 5]);
  });

  // Add more test cases here...
});
