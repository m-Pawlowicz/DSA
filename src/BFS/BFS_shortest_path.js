import { Queue } from "../data-structures/Queue";

const graph = {
  A: ["B", "C", "D"],
  B: ["A", "E", "F"],
  C: ["A", "G", "H"],
  D: ["A", "H", "I"],
  E: ["B", "J"],
  F: ["B", "J", "K"],
  G: ["C"],
  H: ["C", "D", "L"],
  I: ["D", "M"],
  J: ["E", "F"],
  K: ["F", "N", "O"],
  L: ["H"],
  M: ["I"],
  N: ["K"],
  O: ["K"],
};

function bfs_shortest_path(from, to, graph) {
  const queue = new Queue();

  graph[from].forEach((item) => queue.push({ item, parent: from }));
  const alreadyEntered = new Set();

  for (let current = queue.pop(); !!current; current = queue.pop()) {
    const { item } = current;

    if (item === to) {
      return createPath(current).reverse();
    }

    if (!alreadyEntered.has(item)) {
      graph[item].forEach((item) => queue.push({ item, parent: current }));
    }

    alreadyEntered.add(item);
  }

  return [];
}

function createPath(graphNode) {
  if (!graphNode.parent) {
    return [graphNode];
  }

  return [graphNode.item].concat([...createPath(graphNode.parent)]);
}

function bfs_shortest_path_iterative(from, to, graph) {
  const pathsQueue = new Queue();
  const alreadyVisited = new Set();

  pathsQueue.push([from]);

  for (let currentPath = pathsQueue.pop(); !!currentPath; currentPath = pathsQueue.pop()) {
    const currentNode = currentPath.at(-1);

    if (alreadyVisited.has(currentNode)) {
      continue;
    }

    alreadyVisited.add(currentNode);
    const currentNodeChildren = graph[currentNode];


    for (const child of currentNodeChildren) {
        const newPath = [...currentPath, child];

        if(child === to) {
            return newPath;
        }

        pathsQueue.push(newPath);
    }
  }
}

console.time("with recursion")
bfs_shortest_path("A", "L", graph)
console.timeEnd("with recursion")

console.time("without recursion")
bfs_shortest_path_iterative("A", "L", graph);
console.timeEnd("without recursion")

