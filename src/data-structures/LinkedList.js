
// TODO finish when ready
class SingleLinkedList {
  firstNode = null;
  lastNode = null;

  constructor(iterable) {
    if (!iterable[Symbol.iterator]) {
      throw new Error("object must fulfill iterator interface");
    }

    iterable.forEach((item, index) => {
      const newNode = new Node(item);

      if (index === 0) {
        this.firstNode = newNode;
        this.lastNode = newNode;
        return;
      }

      this.lastNode.next = newNode;
      this.lastNode = newNode;
    });
  }

  // this is O(1)
  addLast(value) {
    const newNode = new Node(value);
    this.lastNode.next = newNode;
    this.lastNode = newNode;
  }

  // this is O(1)
  addFirst(value) {
    const newNode = new Node(value);
    const prevFirstNode = this.firstNode;

    this.firstNode = newNode;
    this.firstNode.next = prevFirstNode;
  }

  // this is O(n)
  // can be pretty inperformant
  addAt(value, index) {
    if(index === 0) {
        this.addFirst(value);
        return
    }

    let counter = 0;

    let currentNode = this.firstNode;

    // we need to stop the counter at index - 1
    while (counter < index - 1) {
      counter++;
      currentNode = currentNode.next;
    }

    const newNode = new Node(value);
    const currentNodeNext = currentNode.next;

    currentNode.next = newNode;
    newNode.next = currentNodeNext;
  }

  toString() {
    const stringRepresentation = [];
    for (
      let currentNode = this.firstNode;
      currentNode.next !== null;
      currentNode = currentNode.next
    ) {
      stringRepresentation.push(currentNode.value);
    }
    stringRepresentation.push(this.lastNode.value);

    return stringRepresentation;
  }
}

class Node {
  constructor(value, nextNode) {
    this.value = value;
    this.next = nextNode ?? null;
  }
}

const linkedList = new SingleLinkedList([123, 320, 421]);
linkedList.addFirst(420);
linkedList.addLast(420);
linkedList.addAt("test", 1);
linkedList.addAt("test", 1);
linkedList.addAt("first item", 0);
linkedList.addAt("last item", 8);
console.log(linkedList.toString());
