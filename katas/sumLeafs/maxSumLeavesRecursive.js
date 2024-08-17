// https://www.codewars.com/kata/57e5279b7cf1aea5cf000359

export function maxSumLeavesRecursive(root) {
  if (!root) {
    return 0;
  }

  // not initialized with 0, since it
  // is actually larger
  // than negative numbers
  let maxSum = null;

  function traverse(node, prevSum) {
    if (isLeaf(node)) {
      // finish summing path to the leaf when encountered one
      setMaxSum(prevSum + node?.value ?? 0);
      return;
    }

    const currentSum = prevSum + node.value;

    // filter out undefined, to avoid creating new entry in execution stack for null children
    const children = [node.left, node.right].filter((x) => !!x);
    children.forEach((child) => traverse(child, currentSum));
  }

  traverse(root, 0);
  return maxSum;

  function isLeaf(node) {
    return !node?.left && !node?.right;
  }

  function setMaxSum(sum) {
    if (!maxSum) {
      maxSum = sum;
    }

    if (sum > maxSum) {
      maxSum = sum;
    }
  }
}
