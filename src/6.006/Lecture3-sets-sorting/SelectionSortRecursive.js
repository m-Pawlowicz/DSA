function SelectionSortRecursive(items, n = items.length - 1) {
  if (n === 0) {
    return;
  }

  // with each call we decrease n by 1 to look only into (0 to n) range at a time
  // everything after this range is already sorted
  const currentLargest = findLargestInRangeRecursively(items, n);

  // if the largest item in range 0 to n happens to be the last one
  // noop
  if (currentLargest.index !== n) {
    items[currentLargest.index] = items[n];
    items[n] = currentLargest.val;
  }

  SelectionSortRecursive(items, n - 1);
}

function findLargestInRangeRecursively(
  items,
  currentIndex = items.length - 1,
  largest = { val: items[currentIndex], index: currentIndex }
) {
  if (items.at(currentIndex) === undefined) {
    return largest;
  }

  if (items[currentIndex] > largest.val) {
    largest.val = items[currentIndex];
    largest.index = currentIndex;
  }

  return findLargestInRangeRecursively(items, currentIndex - 1, largest);
}

const mixedValuesArray = [34, -2, 45, 0, 11, -9, 3, 78, -56, 23];
// const mixedValuesArray = [8, 2, 4, 9, 3];

const returnVal = findLargestInRangeRecursively(mixedValuesArray);
console.log(returnVal);

SelectionSortRecursive(mixedValuesArray);
console.log(mixedValuesArray);
