export class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    left?.setParent(this);
    this.right = right;
    right?.setParent(this);
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
