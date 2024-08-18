// a binary tree is a tree where each node can have 2 children at most

export class BinaryTree {
  root = {};

  constructor(treeNode) {
    this.root = treeNode;
  }

  /**
   * returns a node which comes first according to traversal order
   * of this node's subtree; it will be the leftmost leaf of this subtree
   */
  subtreeFirst(node) {
    const left = node.left;
    if (!left) {
      return node;
    }

    return this.subtreeFirst(left);
  }

  subtreeLast(node) {
    const right = node.right;
    if (!right) {
      return node;
    }

    return this.subtreeLast(right);
  }

  /**
   *
   * @param {*} node; the node whose successor we are looking for
   */
  successor(node) {
    const traverseInOrder = (currentNode, prevNode = null) => {
      if (!currentNode) {
        return currentNode;
      }

      if (currentNode.right && currentNode.right !== prevNode) {
        return this.subtreeFirst(node.right);
      }

      if (currentNode.parent?.left === currentNode) {
        return currentNode.parent;
      }

      return traverseInOrder(currentNode.parent, currentNode);
    }

    return traverseInOrder(node)
  }

  predecessor(node, prevNode = null) {
    // TODO 
    if (node.left && node.left !== prevNode) {
      return this.subtreeLast();
    }

    return;
  }

  insertAfter(node, newNode) {
    if (!node.right) {
      node.right = newNode;
      return this;
    }

    this.successor(node).left = newNode;
  }

  insertBefore(node, newNode) {
    if (!node.left) {
      node.left = newNode;
      return this;
    }
  }
}
