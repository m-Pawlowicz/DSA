import { TreeNode } from "../TreeNode/TreeNode";
import { BinaryTree } from "./BinaryTree";
import { inorderTraversal } from "./inorder/Inorder";

describe("subtree_first", () => {
  it("subtree first", () => {
    const { root, left_left } = createNodes();
    const tree = new BinaryTree(root);
    expect(tree.subtreeFirst(root)).toBe(left_left);
  });

  describe("successor tests", () => {
    const { root, right_right, left_right, left } = createNodes();

    const tree = new BinaryTree(root);

    it.each(
      [
        [left_right, root],
        [right_right, undefined],
        [left, left_right],
      ],
      ("returns successor correctly",
      (node, successor) => {
        expect(tree.successor(node)).toBe(successor);
      })
    );
  });

  describe("predecessor tests", () => {
    const { root, right_left, left_left, left_right, left } = createNodes();

    const tree = new BinaryTree(root);

    it.each([
      [right_left, root],
      [left_left, undefined],
      [left_right, left],
    ])("returns predecessor correctly", (node, predecessor) => {
      expect(tree.predecessor(node)).toBe(predecessor);
    });
  });

  describe("insert after", () => {
    const { root, right_left, left_right, left } = createNodes();

    it.each([
      [left, left_right],
      [root, right_left],
    ])(
      'correctly insertsAfter node in "inorder" order when node.right is not empty',
      (nodeToInsertAfter, nodeExpectedToHaveNewLeftChild) => {
        const { root } = createNodes();

        const tree = new BinaryTree(root);

        const newNode = new TreeNode("new node");
        tree.insertAfter(nodeToInsertAfter, newNode);

        expect(nodeExpectedToHaveNewLeftChild.left).toBe(newNode);
      }
    );
  });

  describe("insert before", () => {
    it("correctly inserts after when left subtree is empty", () => {
      const { left_left } = createNodes();
      const tree = new BinaryTree(root);
      const newNode = new TreeNode("new node");

      console.log(tree.insertBefore(left_left, newNode).parent);

      expect(tree.insertBefore(left_left, newNode).parent).toBe(left_left);
      expect(left_left.left).toBe(newNode);
    });

    const { root, left_right, left, left_left } = createNodes();

    it.each([
      [left, left_left],
      [root, left_right],
    ])(
      'correctly insertsBefore node in "inorder" order',
      (nodeToInsertBefore, nodeExpectedToHaveNewRightChild) => {
        const tree = new BinaryTree(root);

        const newNode = new TreeNode("new node");

        tree.insertBefore(nodeToInsertBefore, newNode);

        expect(nodeExpectedToHaveNewRightChild.right).toBe(newNode);
      }
    );
  });

  describe("delete node", () => {
    let tree = {};
    let root = {};
    let left = {};

    beforeEach(() => {
      const { root: newRoot, left: newLeft } = createNodes();
      root = newRoot
      left = newLeft
      tree = new BinaryTree(root);
    });

    it.each([
      [
        root,
        [
          "left_left",
          "left",
          "left_right",
          "right_left",
          "right",
          "right_right",
        ],
      ],
      [
        left,
        [
          "left_left",
          "left_right",
          "root",
          "right_left",
          "right",
          "right_right",
        ],
      ],
    ])(
      "deletes node while preserving inorder order",
      (nodeToDelete, expectedOrder) => {
        setTimeout(() => {
          // TODO seems a pretty bad idea to do this, but it will let me 
          // defer accessing the properties until beforeEach runs, instead
          // of referencing empty objects when function is
          tree.delete(nodeToDelete);
          expect(inorderTraversal(tree.root)).toEqual(expectedOrder);
        })
         }
    );
  });
});

function createNodes() {
  const left_left = new TreeNode("left_left");
  const left_right = new TreeNode("left_right");
  const left = new TreeNode("left", left_left, left_right);
  const right_left = new TreeNode("right_left");
  const right_right = new TreeNode("right_right");
  const right = new TreeNode("right", right_left, right_right);
  const root = new TreeNode("root", left, right);
  return { root, left_left, right_right, left_right, left, right_left };
}
