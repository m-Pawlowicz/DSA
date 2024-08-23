function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
export function sortedArrayToBST(nums) {
  const middleIndex = Math.floor(nums.length / 2);

  if (nums.length === 0) {
    return null;
  }

  return new TreeNode(
    nums[middleIndex],
    sortedArrayToBST(nums.slice(0, middleIndex)),
    sortedArrayToBST(nums.slice(middleIndex + 1))
  );
}
