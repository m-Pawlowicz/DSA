function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// Create linked list with 6 elements
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
head.next.next.next.next.next = new ListNode(6);

var reverseBetween = function (head, swapFrom, swapTo) {
  let left = head;
  let stop = false;

  function traverse(right, m, n) {
    if (m > 1) {
      left = left.next;
    }

    if (n === 1) {
      return;
    }

    right = right.next;
    traverse(right, --m, --n);

    if (right === left || right.next === left) {
      stop = true;
    }

    if (!stop) {
      [left.val, right.val] = [right.val, left.val];
      left = left.next;
    }
  }

  traverse(head, swapFrom, swapTo);

  return head;
};

// reverseBetween(head, 1, 2);
reverseBetween(head, 2, 4);
console.log(head);
