"use strict";

const array = [2, 8, 26, 33, 56, 93, 1200];

export function binarySearch(array, findMe) {
  if (!array.length) {
    return null;
  }

  if (array.length === 1 && array[0] === findMe) {
    return array[0];
  }

  // if the first element is bigger than searched one; then it can't be in the array
  if (array[0] > findMe) {
    return null;
  }

  // if the last element is less than the searched element; then it can't be in the array
  if (array.at(-1) && array.at(-1) < findMe) {
    return null;
  }

  let l = 0;
  let r = array.length - 1;

  while (l <= r) {
    const middleIndex = Math.floor((l + r) / 2);
    const middleValue = array[middleIndex];

    if (middleValue === findMe) {
      return middleIndex;
    }

    if (middleValue > findMe) {
      r = middleIndex;
    }

    if (middleValue < findMe) {
      l = middleIndex;
    }
  }

  return null;
}

console.log(binarySearch(array, 93));

const array2 = [2, 4, 6, 8, 10, 12, 14, 16];

console.log(binarySearch(array2, 4));
