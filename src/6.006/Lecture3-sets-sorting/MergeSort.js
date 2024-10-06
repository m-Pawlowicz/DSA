function mergeSort(items) {
  const middleIndex = Math.floor(items.length / 2);

  if (items.length === 2) {
    if (items[0] <= items[1]) {
      //early return if sorted
      return items;
    }

    const tmp = items[0];
    items[0] = items[1];
    items[1] = tmp;
    return items;
  }

  if (items.length === 1) {
    return items;
  }

  const lhs = mergeSort(items.slice(0, middleIndex));
  const rhs = mergeSort(items.slice(middleIndex, items.length));

  return mergeSorted(lhs, rhs);
}

function mergeSorted(lhs, rhs) {
  const merged = [];
  let li = lhs.length - 1;
  let ri = rhs.length - 1;

  while (li >= 0 || ri >= 0) {
    if (rhs[ri] === undefined || lhs[li] > rhs[ri]) {
      merged.unshift(lhs.at(li));
      li--;
    } else if (lhs[li] === undefined || lhs[li] < rhs[ri]) {
      merged.unshift(rhs.at(ri));
      ri--;
    }
  }

  return merged;
}

const merged = mergeSorted([5], [1, 9]);
const result = mergeSort([320, 5, 1, 9, 98, 3, 2, 0]);
console.log(result);
