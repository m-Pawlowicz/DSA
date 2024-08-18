const from = [11, 7, 10, 9, 8, 4, 1];
const to = [1, 10, 11, 10, 11, 8, 4];

export function findEndNode(startId, fromIds, toIds) {
  let currentIndex = findNodeIndex(startId, fromIds);

  if (currentIndex === -1) {
    const nodeWithoutAnyChildrenIndex = findNodeIndex(startId, toIds);
    return nodeWithoutAnyChildrenIndex !== -1
      ? toIds[nodeWithoutAnyChildrenIndex]
      : null;
  }

  // keep already visited nodes to prevent infinite loop
  const visited = [fromIds[currentIndex]];
  while (currentIndex !== -1) {
    const currentToNode = toIds[currentIndex];

    if (visited.includes(currentToNode)) {
      return fromIds[currentIndex];
    }

    currentIndex = findNodeIndex(currentToNode, fromIds);
    visited.push(currentToNode);
  }

  return visited.at(-1);

  function findNodeIndex(id, data) {
    return data.findIndex((x) => x === id);
  }
}

// console.log(findEndNode(2, [1, 7, 3, 4, 2, 6, 9], [3, 3, 4, 6, 6, 9, 5]));
// console.log(findEndNode(9, from, to));
