function quickSort(arr) {
  // the base case
  if (arr.length < 2) {
    return arr;
  }

  if (arr.length === 2) {
    const [first, second] = arr;

    return first > second ? [second, first] : [first, second];
  }

  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr[pivotIndex];

  const pivotDuplicates = arr.filter(x => x === pivot);

  const lhs = arr.filter((x) => x < pivot);
  const rhs = arr.filter((x) => x > pivot);

  return quickSort(lhs).concat(pivotDuplicates).concat(quickSort(rhs));
}

const test = [5, 4, 3, 2, 1, 6];
const test2 = [5, 1, 4, 2, 8, 5, 3, 5];

console.log(quickSort(test));
console.log(quickSort(test2));
