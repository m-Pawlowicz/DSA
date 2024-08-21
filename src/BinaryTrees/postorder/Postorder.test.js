import { postorderTraversal } from "./Postorder";

class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

describe("postorder", () => {
  test("should return an empty array for an empty tree", () => {
    const root = null;
    const result = postorderTraversal(root);
    expect(result).toEqual([]);
  });

  test("should return the correct postorder traversal for a single node tree", () => {
    const root = new TreeNode(5);
    const result = postorderTraversal(root);
    expect(result).toEqual([5]);
  });

  test("should return the correct postorder traversal for a binary tree", () => {
    const root = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(4), null),
      new TreeNode(3, null, new TreeNode(5))
    );
    const result = postorderTraversal(root);
    expect(result).toEqual([4, 2, 5, 3, 1]);
  });

  // Add more test cases here...
});
