export class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    left?.setParent(this);
    this.right = right;
    right?.setParent(this);
  }

  /**
   * 
   * @returns balance factor, also called a skew of a node
   */
  getBalanceFactor() {
    if(!this.right && !this.left) {
      return 0
    }

    if(!this.right) {
      return -this.left.height
    }

    if(!this.left) {
      return this.right.height;
    }

    return this.right?.height - this.left?.height;
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
