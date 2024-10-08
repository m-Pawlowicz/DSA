// Array index access operations are fast because they are just
// arithmetic operations which add a number to the initial element
// address. This is possible since all array elements are placed
// one after another in the memory. Like train parts.

// a Sequence is an interface which can be implemented by any data
// structure available as long as the ds has sequence interface methods

function getLast() {
  return this.at(-1);
}

function getFirst() {
  return this.at(0);
}
function setLast(item) {
  return (this[this.length - 1] = item);
}

function setFirst(item) {
  return (this[0] = item);
}

function removeLast() {
  return this.splice(-1, 1)[0];
}

function removeFirst() {
  return this.splice(0, 1)[0];
}

function buildSequenceArray(...initialData) {
  const arr = [...initialData];
  return Object.assign(arr, {
    setFirst,
    setLast,
    getFirst,
    getLast,
    removeFirst,
    removeLast,
  });
}

// problem 1
const sqnceArray = buildSequenceArray(1, 2, 3, 4, 5, 6, 7);
// swapEnds(sqnceArray);

// whole thing takes O(1)
function swapEnds(data) {
  // takes O(1)
  const last = data.getLast();

  // takes O(1)
  data.setLast(data.getFirst());

  // takes O(1)
  data.setFirst(last);
  return data;
}

// ac:
// k + 1 element should be the first element after function exits stack
// first k elements should be appended to the end of the sequence
function shiftKElements(data, k) {
  for (let index = 0; index < k; index++) {
    data.push(data.removeFirst());
  }

  return data;
}

function shiftKElementsRecursively(data, k) {
  if (k === 0 || data.length < k) {
    return data;
  }

  data.push(data.removeFirst());
  return shiftKElementsRecursively(data, k - 1);
}

shiftKElements(sqnceArray, 3);
shiftKElementsRecursively(sqnceArray, 3);
