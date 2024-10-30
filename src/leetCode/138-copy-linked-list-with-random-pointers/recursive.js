function _Node(val, next = null, random = null) {
  this.val = val;
  this.next = next;
  this.random = random;
}

// Create nodes
let node1 = new _Node(1);
let node2 = new _Node(2);

// Set up the next pointers
node1.next = node2;
node2.next = null; // End of the list

// Set up the random pointers
node1.random = node2; // node1's random pointer points to node2
node2.random = node2; // node2's random pointer points to itself

let visitedMap = new Map();

var copyRandomList = function (head) {
  if (!head) {
    return null;
  }

  if (visitedMap.has(head)) {
    return visitedMap.get(head);
  }

  const clonedNode = new _Node(head.val, null, null);
  visitedMap.set(head, clonedNode);
  clonedNode.next = copyRandomList(head.next);
  clonedNode.random = copyRandomList(head.random);

  return clonedNode;
};

copyRandomList(node1);
