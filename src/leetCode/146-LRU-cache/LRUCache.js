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

  this.moveToTail(savedNode);

  return savedNode.value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  let savedNode = this.cache[key];

  // update value at key
  if (savedNode) {
    savedNode.value = value;

    //remove saved node from it's place in the middle of the list
    if (savedNode !== this.head) {
      savedNode.prev.next = savedNode.next;
    }

    if (savedNode === this.head && this.head.next === this.tail) {
      const saveTail = this.tail;
      this.tail = this.head;
      this.tail.prev = saveTail.prev;
      saveTail.next = this.head.next;
      this.head = saveTail;
      this.head.prev = null;
    }

    // override tail
    this.tail.next = savedNode;
    savedNode.prev = this.tail;
    this.tail = savedNode;

    return;
  }

  if (!this.capacity) {
    // first node needs to be removed since it's least recently used
    const nodeToRemove = this.head;
    delete this.cache[nodeToRemove.key];

    // override head
    this.head = this.head.next;
    if (this.head) {
      // it will be undefined if list was of size 1
      this.head.prev = null;
    }
    this.capacity++;
  }

  const newNode = {
    key,
    value,
  };

  if (!this.head) {
    newNode.next = null;
    this.head = newNode;
  }

  this.overwriteTail(newNode);

  this.cache[key] = newNode;
  this.capacity--;
};

LRUCache.prototype.moveToTail = function (savedNode) {
  if (savedNode === this.tail) {
    // if found node is latest in the cache no need to do anything
    return;
  }

  if (savedNode === this.head && this.head?.next) {
    this.head = this.head.next;
    // not sure if this is necessary??
    this.head.prev = null;
  } else {
    savedNode.prev.next = savedNode.next;
  }

  this.overwriteTail(savedNode);
};

LRUCache.prototype.overwriteTail = function (newTailNode) {
  if (!this.tail) {
    newTailNode.next = null;
    this.tail = newTailNode;
  }

  newTailNode.prev = this.tail;
  this.tail.next = newTailNode;
  this.tail = newTailNode;
  this.tail.next = null;
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
