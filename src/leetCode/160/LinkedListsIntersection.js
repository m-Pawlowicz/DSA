function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function createLinkedList(arr, sharedNode) {
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }

  current.next = sharedNode;

  return head;
}

let node4_1 = new ListNode(4);
let node2 = new ListNode(2, node4_1);
let head1 = new ListNode(1, node2);

let headA = createLinkedList([4, 4, 5], head1);
let headB = createLinkedList([5, 6, 1, 8, 4, 5], head1);
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  const firstSet = new Set();

  while (!!headA) {
    firstSet.add(headA);
    headA = headA.next;
  }

  while (!!headB) {
    if (firstSet.has(headB)) {
      return headB.val;
    }

    headB = headB.next;
  }

  return null;
};

const result = getIntersectionNode(headA, headB);
