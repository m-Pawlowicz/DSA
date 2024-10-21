const array = [5, 4, 3, 2, 1];
const array2 = [5, 4, 3, 2, 1, 6];

function reverseArray(array, l = 0, r = array.length - 1) {
  if (l > r) {
    return;
  }

  [array[l], array[r]] = [array[r], array[l]];

  reverseArray(array, ++l, --r);
}

// reverseArray(array);
reverseArray(array2);
