export function recursiveBinarySearch(items, findMe, l = 0, r, foundIndex) {

  // use the or assignment expression, if r is falsy then assign the searched array length  
  r ||= items.length;
  const middleIndex = Math.floor((l + r) / 2);

  // copy the array "window" given by l and r boundary indices
  const currentSlice = items.slice(l, r);
  const middleValue = currentSlice[Math.floor(currentSlice.length / 2)];

  const findMeIndex = middleValue === findMe ? middleIndex : null;

  // if the index was found early-return
  if (findMeIndex) {
    return findMeIndex;
  }

  // if the array was shrunk down to size one and we still have not found the item,
  // then use the recursion base-case to exit recursion
  if (currentSlice.length === 1) {
    return null;
  }

  if (middleValue > findMe) {
    r = middleIndex;
  }

  if (middleValue < findMe) {
    l = middleIndex;
  }

  return null || recursiveBinarySearch(items, findMe, l, r);
}

console.log(recursiveBinarySearch([8, 10, 23, 41, 67], 41));
console.log(recursiveBinarySearch([8, 10, 23, 41, 67], 23));
console.log(recursiveBinarySearch([2, 4, 6, 8, 10, 12, 14, 16], 4));
console.log(recursiveBinarySearch([2, 4, 6, 8, 10, 12, 14, 16], 320));
console.log(recursiveBinarySearch([-5, -3, -1, 0, 3, 5], -3));

