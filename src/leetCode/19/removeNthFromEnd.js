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
  if (!head) {
    return null;
  }

  if (!head.next) {
    return null;
  }

  function traverseList(head, n, visited) {
    if (!head) {
      return 1;
    }

    const result = 1 + traverseList(head?.next?.next, n, head);

    if (result === n) {
      morePrevNode.next = head;
      return;
    }

    return result;
  }

  traverseList(head, n, null);

  return head;
};

let head2 = new ListNode(1);
head2.next = new ListNode(2);

// removeNthFromEnd(head, 2);

removeNthFromEnd(head2, 2);
