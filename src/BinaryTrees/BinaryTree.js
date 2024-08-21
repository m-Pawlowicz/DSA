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
  // runs in O(h), where h is the height of the tree
  successor(node) {
    const traverseInOrder = (currentNode, prevNode = null) => {
      // this means we have gone past root, thus there is no successor for given node
      if (!currentNode) {
        return undefined;
      }

      if (currentNode.right && currentNode.right !== prevNode) {
        return this.subtreeFirst(node.right);
      }

      if (currentNode.parent?.left === currentNode) {
        return currentNode.parent;
      }

      return traverseInOrder(currentNode.parent, currentNode);
    };

    return traverseInOrder(node);
  }

  // runs in O(h), where h is the height of the tree
  predecessor(node) {
    const traverseInOrderReverse = (currentNode, prevNode = null) => {
      // this means we have gone past root, thus there is no predecessor given node
      if (!currentNode) {
        return undefined;
      }

      // prevent infinite loop after going up 1 edge
      if (currentNode.left && currentNode.left !== prevNode) {
        return this.subtreeLast(currentNode.left);
      }

      if (currentNode.parent?.right === currentNode) {
        return currentNode.parent;
      }

      return traverseInOrderReverse(currentNode.parent, currentNode);
    };

    return traverseInOrderReverse(node);
  }

  insertAfter(node, newNode) {
    if (!node.right) {
      node.right = newNode;
      newNode.parent = node;
    } else {
      const successor = this.successor(node);
      successor.left = newNode;
      newNode.parent = successor;
    }

    newNode.height = 0;
    this.augmentAncestorHeight(newNode);
    return newNode;
  }

  insertBefore(node, newNode) {
    if (!node.left) {
      node.left = newNode;
      newNode.parent = node;
    } else {
      const predecessor = this.predecessor(node);
      predecessor.right = newNode;
      newNode.parent = predecessor;
    }

    newNode.height = 0;
    this.augmentAncestorHeight(newNode);
    return newNode;
  }

  augmentAncestorHeight(node) {
    if (!node.parent) {
      return;
    }

    node.parent.height = node.height + 1;
    this.augmentAncestorHeight(node.parent);
  }

  /**
   * three cases to cover
   * node is a leaf - the easiest one
   * node has one child, either left or right
   * node has two children
   * @param {*} nodeToDelete
   * @returns
   */
  delete(nodeToDelete) {
    if (nodeToDelete?.isLeaf()) {
      nodeToDelete.parent.height = 0;
      this.augmentAncestorHeight(nodeToDelete.parent);
      this.deleteLeaf(nodeToDelete);
      return;
    }

    const predecessor = this.predecessor(nodeToDelete);

    // if the remove a node which has children we have to move
    // its children and parent to the predecessor node
    // this way we are 'swapping' the node
    const swappedNode = Object.assign(predecessor, {
      left: predecessor.isLeftChild() ? null : nodeToDelete.left,
      right: nodeToDelete.isRightChild() ? null : nodeToDelete.right,
      parent: nodeToDelete.parent,
    });

    [swappedNode.left, swappedNode.right].forEach((child) => {
      if (child) {
        child.parent = swappedNode;
      }
    });

    [swappedNode.parent.left, swappedNode.parent.right].forEach((oldChild) => {
      if (oldChild === nodeToDelete) {
        swappedNode.parent.left = swappedNode;
        return;
      }
      if (oldChild === nodeToDelete) {
        swappedNode.parent.right = swappedNode;
      }
    });

    if (nodeToDelete === this.root) {
      this.root = swappedNode;
    }

    swappedNode.height = this.calculateHeight(swappedNode);
    this.augmentAncestorHeight(swappedNode);
  }

  clearReferencesToDeletedNode(deletedNode) {}

  deleteLeaf(leaf) {
    if (leaf.isLeftChild()) {
      leaf.parent.left = null;
      return;
    }

    leaf.parent.right = null;
  }

  calculateHeight(node) {
    if (!node) {
      return -1;
    }

    return (
      Math.max(
        this.calculateHeight(node.left),
        this.calculateHeight(node.right)
      ) + 1
    );
  }
}
