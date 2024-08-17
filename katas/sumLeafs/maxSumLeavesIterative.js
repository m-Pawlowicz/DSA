import { Queue } from "../../data-structures/Queue";
export function maxSumLeavesIterative(root) {
  if (!root) {
    return 0;
  }

  const pathsQueue = new Queue([[root]]);
  const finishedPaths = [];

  while (pathsQueue.size) {
    const currentPath = pathsQueue.pop();
    const lastNode = currentPath.at(-1);

    if (isLeaf(lastNode)) {
      // if a node is a leaf
      // we have reached the end of the path
      finishedPaths.push(currentPath);
      continue;
    }

    if (lastNode.left) {
      pathsQueue.push([...currentPath, lastNode.left]);
    }

    if (lastNode.right) {
      pathsQueue.push([...currentPath, lastNode.right]);
    }
  }

  return finishedPaths
    .map((x) => sumPathValues(x))
    .sort((a, b) => b - a)
    // get the highest path at index 0 since its sorted descending
    .at(0);
}

function sumPathValues(x) {
  return x.reduce((prev, current) => prev + current.value, 0);
}

function isLeaf(node) {
  return !node?.left && !node?.right;
}
