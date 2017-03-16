function Link(key = null, val = null) {
  this.key = key;
  this.val = val;
  this.prev = null;
  this.next = null;
}

class LinkedList {
  constructor() {
    this.head = new Link();
    this.tail = new Link();
    this.head.prev = this.tail;
    this.tail.next = this.head;
  }

  first() {
    if (this.isEmpty()) {
      return null;
    } else {
      return this.head.next;
    }
  }

  last() {
    if (this.isEmpty()) {
      return null;
    } else {
      return this.tail.prev;
    }
  }

  isEmpty() {
    if (this.head.next === this.tail) return true;
    return false;
  }

  get(key) {
    let node = this.first();
    while (node !== this.tail) {
      if (node.key === key) {
        return node.value;
      } else {
        node = node.next;
      }
    }
    return null;
  }

  includes(key) {
    let node = this.first();
    while (node !== this.tail) {
      if (node.key === key) {
        return true;
      } else {
        node = node.next;
      }
    }
    return false;
  }

  append(key, val) {
    let node = new Link(key, val);

    // attach to last node
    this.last.next = node;
    node.prev = this.last;

    // attach to tail
    this.tail.prev = node;
    node.next = this.tail;
  }

  update(key, val) {
    let node = this.first();
    while (node !== this.tail) {
      if (node.key === key) {
        node.value = val;
        return val;
      } else {
        node = node.next;
      }
    }
    return null;
  }

  remove(key) {
    let node = this.first();
    while (node !== this.tail) {
      if (node.key === key) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
        return key;
      } else {
        node = node.next;
      }
    }
    return null;
  }
}
