import { TreeNode } from "../common/TreeNode";
import { BinaryTree } from "./BinaryTree";

describe("subtree_first", () => {
  // Add your test cases here

  const left_left = new TreeNode("left_left");
  const left_right = new TreeNode("left_right");
  const left = new TreeNode("left", left_left, left_right);
  const right_left = new TreeNode("right_left");
  const right_right = new TreeNode("right_right");
  const right = new TreeNode("right", right_left, right_right);
  const root = new TreeNode("root", left, right);

  it("subtree first", () => {
    const tree = new BinaryTree(root);
    expect(tree.subtreeFirst(root)).toBe(left_left);
  });

  it("successor for right_right", () => {
    const tree = new BinaryTree(root);

    const newNode = new TreeNode("new");

    right_right.right = newNode;

    expect(tree.successor(right_right)).toBe(newNode)

    right_right.right = null;
  })

  it("successor for left_right node", () => {
    const tree = new BinaryTree(root);

    expect(tree.successor(left_right)).toBe(root);
  });

  it("successor of left_left to be left", () => {
    const tree = new BinaryTree(left);

    expect(tree.successor(left_left)).toBe(left);
  });

  it("returns with correct value when there is no successor at all", () => {
    const tree = new BinaryTree(root);

    expect(tree.successor(right_right)).toBe(undefined);
  })

  it.each([[left, left_right], [root, right_left]])(
    "correctly insertsAfter node in \"inorder\" order when node.right is not empty",
    (nodeToInsertAfter, nodeExpectedToHaveNewLeftChild) => {
      const tree = new BinaryTree(root);

      const newNode = new TreeNode("new node");
      tree.insertAfter(nodeToInsertAfter, newNode);

      expect(nodeExpectedToHaveNewLeftChild.left).toBe(newNode);
    }
  );
});
