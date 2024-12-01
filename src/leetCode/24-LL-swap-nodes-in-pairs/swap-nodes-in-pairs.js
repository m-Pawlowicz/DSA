function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let evenList = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))));

var swapPairs = function (head) {
  if (!head || !head.next) {
    // either head is null or has no pair
    // in the second case we return the head anyway just without any swapping
    // (it is just one item; so nothing to swap)
    return head;
  }

  let swappedTwoItemListHead = swapPairs(head.next?.next);

  let next = head.next;
  next.next = head;
  head.next = swappedTwoItemListHead;

  // previous next is the new head of two item list
  return next;
};


const newList = swapPairs(evenList);
console.log(newList)