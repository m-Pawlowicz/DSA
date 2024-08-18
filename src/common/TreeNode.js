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
}
