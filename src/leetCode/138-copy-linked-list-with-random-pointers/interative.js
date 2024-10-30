var copyRandomList = function (head) {
  const dummyHead = new _Node(null, head, null);
  const newListDummyHead = new _Node(null, null, null);
  let prev = newListDummyHead;

  const map = new Map();

  while (head) {
    const test = map.get(head);

    const randomIsEqualToCurrent =
      !!map.get(head) &&
      !!map.get(head.random) &&
      map.get(head) === map.get(head.random);

    if (randomIsEqualToCurrent) {
      const current = map.get(head);
      current.random = current;
      prev.next = current;
      prev = current;
      head = head.next;
      continue;
    }
    const newNode = new _Node(head.val);

    if (!map.has(head)) {
      map.set(head, newNode);
    }

    if (head.random) {
      if (!map.has(head.random)) {
        const newRandomNode = new _Node(head.random.val);
        map.set(head.random, newRandomNode);
      }

      newNode.random = map.get(head.random);
    } else {
      newNode.random = null;
    }

    prev.next = newNode;
    prev = newNode;
    head = head.next;
  }

  return newListDummyHead.next;
};
