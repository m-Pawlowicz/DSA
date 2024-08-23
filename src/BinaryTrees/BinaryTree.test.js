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
        // setTimeout(() => {
        //   // TODO seems a pretty bad idea to do this, but it will let me
        //   // defer accessing the properties until beforeEach runs, instead
        //   // of referencing empty objects when function is
        //   tree.delete(nodeToDelete);
        //   expect(inorderTraversal(tree.root)).toEqual(expectedOrder);
        // });
      }
    );

    it("deletes nodes and correctly augments heights", () => {
      const { root, left, right_left, right } = createNodes();

      const tree = new BinaryTree(root);

      const right_left_left = new TreeNode("right_left_left");
      const right_left_right = new TreeNode("right_left_right");

      // substitute height for test purposes
      right_left_right.height = 0;

      right_left_left.parent = right_left;
      right_left_right.parent = right_left;

      right.left.left = right_left_left;
      right.left.right = right_left_right;

      tree.delete(right_left);

      console.log(inorderTraversal(tree.root));

      expect(right_left_left.getBalanceFactor()).toBe(0);

      expect(inorderTraversal(tree.root)).toEqual([
        "left_left",
        "left",
        "left_right",
        "root",
        "right_left_left",
        "right_left_right",
        "right",
        "right_right",
      ]);
    });
  });

  describe("calculates nodes' height", () => {
    const { root, left_right, left, left_left, right_right, right } =
      createNodes();
    const tree = new BinaryTree(root);

    it.each([
      [root, 2],
      [left_right, 0],
      [left, 1],
    ])("", (node, expectedHeight) => {
      expect(tree.calculateHeight(node)).toBe(expectedHeight);
    });

    it("handles additional nodes", () => {
      const newNode = new TreeNode(
        "new node",
        null,
        new TreeNode("new node 2")
      );
      right_right.right = newNode;

      expect(tree.calculateHeight(newNode)).toBe(1);
      expect(tree.calculateHeight(right_right)).toBe(2);
      expect(tree.calculateHeight(right)).toBe(3);
      expect(tree.calculateHeight(root)).toBe(4);
    });
  });

  describe("tree balance", () => {});
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
