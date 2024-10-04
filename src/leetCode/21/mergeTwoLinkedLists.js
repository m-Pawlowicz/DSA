function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let node4_1 = new ListNode(4);
let node2 = new ListNode(2, node4_1);
let head1 = new ListNode(1, node2);

let node4_2 = new ListNode(4);
let node3 = new ListNode(3, node4_2);
let head2 = new ListNode(1, node3);

var mergeTwoLists = function (head, head2) {
  let currentValue = null;

  if (!head && !head2) {
    return null;
  }

  if (!head) {
    currentValue = head2.val;
    return new ListNode(currentValue, mergeTwoLists(head, head2.next));
  }

  if (!head2) {
    currentValue = head.val;
    return new ListNode(currentValue, mergeTwoLists(head.next, head2));
  }

  if (head.val <= head2.val) {
    currentValue = head.val;
    return new ListNode(currentValue, mergeTwoLists(head.next, head2));
  }

  currentValue = head2.val;
  return new ListNode(currentValue, mergeTwoLists(head, head2.next));
};

const xd = mergeTwoLists(head1, head2);
console.log(xd);
