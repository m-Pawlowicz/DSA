function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let node4_1 = new ListNode(5, new ListNode(7, new ListNode(8)));
let node2 = new ListNode(3, node4_1);
let head1 = new ListNode(1, node2);

let node4_2 = new ListNode(6);
let node3 = new ListNode(4, node4_2);
let head2 = new ListNode(2, node3);

function mergeTwoLists(head1, head2) {
  if (!head1) {
    return head2;
  }

  if (!head2) {
    return head1;
  }

  const newHead = new ListNode();
  let prev = newHead;

  let toMerge = head1;

  while (head1 || head2) {
    prev.next = toMerge;
    prev = prev.next;

    if (toMerge === head1) {
      if (head2) {
        // if second list has ended do not set its node here
        toMerge = head2;
      } else {
        toMerge = head1.next;
      }
      head1 = head1.next;
      continue;
    }

    if (toMerge === head2) {
      if (head1) {
        // if first list has ended do not set its node here
        toMerge = head1;
      } else {
        toMerge = head2.next;
      }
      head2 = head2.next;
      continue;
    }
  }

  return newHead.next;
}

const result = mergeTwoLists(head1, head2);
console.log(result);

function Rmerge(head1, head2) {
  const newHead = new ListNode("dummy", null);

  function recurse(node, nodeToMerge) {
    if (!nodeToMerge) {
      return null;
    }

    node.next = nodeToMerge;

    let nextNodeToMerge = null;
    if (nodeToMerge === head1) {
      if (head2) {
        nextNodeToMerge = head2;
      } else {
        nextNodeToMerge = head1.next;
      }
      head1 = head1.next;
    }
    if (nodeToMerge === head2) {
      if (head1) {
        nextNodeToMerge = head1;
      } else {
        nextNodeToMerge = head2.next;
      }
      head2 = head2.next;
    }

    recurse(node.next, nextNodeToMerge);
  }

  recurse(newHead, head1);
  return newHead.next;
}

const resultRecursive = Rmerge(head1, head2);
console.log(resultRecursive);
