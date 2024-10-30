function Node(key, value, prev, next) {
  this.key = key;
  this.value = value;
  this.prev = prev;
  this.next = next;
}

function List() {
  this.head = new Node("head", "head", null, null);
  this.tail = new Node("tail", "tail", null, null);
  this.head.next = this.tail;
  this.tail.prev = this.head;
}

List.prototype.remove = function (node) {
  node.next.prev = node.prev;
  node.prev.next = node.next;
};

List.prototype.add = function (node) {
  const prevEnd = this.tail.prev;
  prevEnd.next = node;
  node.prev = prevEnd;
  node.next = this.tail;
  this.tail.prev = node;
};

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.cache = {};
  this.list = new List();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const savedNode = this.cache[key];

  if (!savedNode) {
    return -1;
  }

  this.list.remove(savedNode);
  this.list.add(savedNode);

  return savedNode.value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  let savedNode = this.cache[key];

  if (savedNode) {
    this.list.remove(savedNode);
    this.list.add(savedNode);
    savedNode.value = value;
    return;
  }

  const newNode = new Node(key, value, null, null);

  if (this.capacity < 1) {
    delete this.cache[this.list.head.next.key];
    this.list.remove(this.list.head.next);
  }

  this.list.add(newNode);
  this.cache[key] = newNode;
  this.capacity--;
};

const lruCache = new LRUCache(1);
lruCache.put(1, 1);
lruCache.put(1, 2);
lruCache.put(2, 1);
lruCache.get(2);
