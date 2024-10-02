const ll = new LinkedList(["a", "b", "c", "d"]);

function getMidItem(linkedList) {
  let midItem = linkedList.head;
  // start from 1 since we already assigned head as first item
  for (let i = 1; i < Math.floor(linkedList.size / 2); i++) {
    midItem = midItem.next;
  }

  return midItem;
}

console.log(ll);

const test = getMidItem(ll);

function reorderWithStack(linkedList) {
  // get n/2 item with get midItem, set n / 2 + 1 as startNode
  // reverse all items following n/2
  const startNode = getMidItem(linkedList).next;

  // TODO check if this meets the requirements of NOT instantiating a non-constant DS
  const stack = [];

  for (let current = startNode; !!current; current = current.next) {
    stack.push(current.value);
  }

  let currentNode = startNode;

  for (let i = stack.length - 1; i >= 0; i--) {
    currentNode.value = stack[i];
    currentNode = currentNode.next;
  }

  linkedList.log();
}

reorderWithStack(ll);
