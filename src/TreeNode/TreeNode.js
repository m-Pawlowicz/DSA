// skew is height(node.right) - height(node.left)
const balancedSkews = new Set([-1, 0, 1]);

export class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    left?.setParent(this);
    this.right = right;
    right?.setParent(this);
  }

  updateHeight() {
    const newHeight = Math.max();
  }

  get isBalanced() {
    return balancedSkews.has(this.right.height - this.left.height);
  }

  setParent(parent) {
    this.parent = parent;
  }

  isLeaf() {
    return !this.left && !this.right;
  }

  isLeftChild() {
    return this.parent.left === this;
  }

  isRightChild() {
    return this.parent.right === this;
  }
}
