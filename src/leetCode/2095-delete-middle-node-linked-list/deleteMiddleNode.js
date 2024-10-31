function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
// head.next.next.next.next.next = new ListNode(6);

// we want to get node n - 1 to middle so we can remove the reference to it
function deleteMiddleFastAndSlowPtr(head) {
  let slow = head;
  let fast = head.next.next;

  while (fast && !!fast.next) {
    slow = slow.next;
    fast = fast?.next?.next;
  }

  slow.next = slow.next.next;

  return head;
}

const withoutMiddle = deleteMiddleFastAndSlowPtr(head);
console.log(withoutMiddle);
