class LLNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

// problem 4
class LinkedList {
  constructor(...items) {
    this.size = 0;
    if (items && items.length) {
      const head = this.pushItems(items.flat());
      // assign head node only after it has all references to next nodes
      this.head = head;
    }
  }

  pushItems(items) {
    const currentItem = items[0];

    if (!currentItem) {
      return null;
    }

    const currentNode = new LLNode(currentItem, null);

    if (items.length === 1) {
      this.tail = currentNode;
    }

    this.size++;

    return {
      ...currentNode,
      next: this.pushItems(items.slice(1)),
    };
  }

  log() {
    const toLog = [];
    for (let i = this.head; !!i; i = i.next) {
      toLog.push(i.value);
    }

    console.log(toLog);
  }
}

// const ll2 = new LinkedList(["a", "b", "c", "d", "e"]);
// reorder(ll2);

const students = new LinkedList([
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Emily",
  "Frank",
  "Grace",
  "Hannah",
  "Isaac",
  "Julia",
]);

function reorderFromLecture(linkedList, startFrom) {
  let x_p = null;
  let x = linkedList.head;

  if (startFrom) {
    for (let i = 1; i < startFrom; i++) {
      x = x.next;
    }
  }

  // this is emily
  let startedSwappingAfterNode = x;

  x = x.next;
  while (!!x) {
    let x_n = x.next;
    x.next = x_p;
    x_p = x;
    x = x_n;
  }

  startedSwappingAfterNode.next = x_p;
}

reorderFromLecture(students, Math.floor(students.size / 2));

// reorder(students);
students.log();
console.log("dupa");
