/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.cache = {};
  this.head = null;
  this.tail = null;
  this.lastAccessed = null;
  this.lastAdded = null;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  let savedNode = this.cache[key];

  if (!savedNode) {
    return -1;
  }

  this.shiftSavedNode(savedNode);

  return savedNode.value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  let savedNode = this.cache[key];

  // case1: entry is present in the list
  if (savedNode) {
    savedNode.value = value;
    this.shiftSavedNode(savedNode);
    // end of case 1
    return;
  }

  // case2: entry is not present in the list
  if (!this.capacity) {
    // first node needs to be removed since it's least recently used
    const nodeToRemove = this.head;
    delete this.cache[nodeToRemove.key];

    // increase capacity since we removed a node from cache
    this.capacity++;

    // handle list operations

    // override head
    this.head = this.head.next;

    if (!this.head) {
      // if list was of size 1 then head is null now, also set tail to null
      this.tail = null;
    } else {
      // if list size was not 1 then clear new head prev reference
      this.head.prev = null;
    }
  }

  const newNode = {
    key,
    value,
  };

  if (!this.head) {
    // if list was empty set new head and tail
    newNode.next = null;
    newNode.prev = null;
    this.head = newNode;
    this.tail = newNode;
  } else {
    // otherwise add new tail
    newNode.next = null;
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = this.tail.next;
  }

  this.cache[key] = newNode;
  this.capacity--;
};

LRUCache.prototype.shiftSavedNode = function (savedNode) {
  // case 1.1
  // saved node is tail
  // and this rules out the condition below, since if list is size one and saved node is there it is also the tail

  // NOT NEEDED: saved node is head and list size is 1
  if (savedNode === this.tail) {
    // do nothing
    return;
  }

  // case 1.2
  // saved node is head and is NOT tail and list is at least 2 items long

  if (savedNode === this.head) {
    const saveTail = this.tail;
    // move head to the end
    this.tail.next = this.head;
    // move head to next pointer
    this.head = this.head.next;
    // make previous head the new tail
    this.tail = this.tail.next;
    // make new tail (old head) prev the old tail
    this.tail.prev = saveTail;

    return;
  }

  // case 1.3
  // saved node is NOT head and is NOT tail and  list is at least 2 items long

  const saveTail = this.tail;
  // re-point prev node to next node
  savedNode.prev.next = savedNode.next;
  // clear next reference
  savedNode.next = null;

  // make saved node current tail next reference
  this.tail.next = savedNode;

  // override previous tail with savedNode
  this.tail = this.tail.next;

  // set new tail prev to old tail
  this.tail.prev = saveTail;
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
