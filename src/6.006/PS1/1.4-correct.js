function getItemAt(singleLinkedList, index) {
  let i = 0;
  let current = singleLinkedList.head;
  while (i < index) {
    current = current.next;
    i++;
  }

  return current;
}

/**
 * this is the right solution !!!
 */
export function reorder(linkedList, n = 0) {
  if (n >= Math.floor(linkedList.size / 4)) {
    return;
  }

  const currentHead = getItemAt(
    linkedList,
    // start swapping from n/2 + 1 as per task requirements
    n + Math.floor(linkedList.size / 2)
  );

  const currentTail = getItemAt(linkedList, linkedList.size - 1 - n);

  const { value: headValue } = currentHead;

  // swap tail and head values
  currentHead.value = currentTail.value;
  currentTail.value = headValue;

  reorder(linkedList, ++n);
}
