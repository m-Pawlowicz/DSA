import { Queue } from "../data-structures/Queue";

const root = {
  name: "2001",
  isFile: false,
  children: [
    {
      isFile: false,
      name: "2001",
      children: [
        { isFile: true, name: "a.png" },
        { isFile: true, name: "space.png" },
        {
          isFile: false,
          children: [{ isFile: true, name: "abcdefNested.png" }],
        },
      ],
    },
    { isFile: true, name: "odyssey.png" },
  ],
};

function treeBFS(theTree) {
  const queue = new Queue();
  const files = [];

  traverseNodeChildren(theTree);

  while (queue.size) {
    const currentNode = queue.pop();
    traverseNodeChildren(currentNode);
  }

  function traverseNodeChildren(node) {
    node.children.forEach((child) => {
      if (!child.isFile) {
        queue.push(child);
        return;
      }

      files.push(child);
    });
  }

  return files;
}

function treeRecursively(node) {
  if (node.isFile) {
    return node;
  }

  let files = [];

  node.children.forEach((child) => {
    const result = treeRecursively(child);
    if (result[Symbol.iterator]) {
      files.push(...result);
    } else {
      files.push(result);
    }
  });

  return files;
}

console.log(treeBFS(root));
console.log(treeRecursively(root));
