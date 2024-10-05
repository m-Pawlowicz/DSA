function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

var removeNthFromEnd = function (head, n) {
  if (!head.next && n > 0) {
    return null;
  }

  let initialHead = head;
  const visited = [];
  while (head) {
    visited.push(head);
    head = head.next;
  }

  const theOneToRemoveIndex = visited.length - n;
  const beforeTheOneToRemove = visited[theOneToRemoveIndex - 1];
  const theOneToRemove = visited[theOneToRemoveIndex];
  const afterTheOneToRemove = visited[theOneToRemoveIndex + 1] ?? null;

  if (!beforeTheOneToRemove) {
    return afterTheOneToRemove;
  }

  beforeTheOneToRemove.next = afterTheOneToRemove;

  return initialHead;
};

let head2 = new ListNode(1);
head2.next = new ListNode(2);

// removeNthFromEnd(head, 2);

const returnedHead = removeNthFromEnd(head2, 1);
// const returnedHead = removeNthFromEnd(head2, 2);
console.log(returnedHead);
