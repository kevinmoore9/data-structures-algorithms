function whichMissing(arr) {    /// Time: O(n), Space: O(1)
  let sum = arr.length * (arr.length + 1)/2;

  let actual = 0;
  arr.forEach(el => actual += el);

  return sum - actual;
}

// console.log(whichMissing([1,2,3,4,5]));
// console.log(whichMissing([0,1,2,3,5]));


class MaxStack {
  constructor() {
    this.store = [];
  }

  push(el) {
    if (this.max() === null || el > this.max()) {
      this.store.push([el, el]);
    } else {
      this.store.push([el, this.max()]);
    }
  }

  pop() {
    let last = this.store.pop();
    return last[0];
  }

  peek() {
    return this.store[this.store.length - 1][0];
  }

  max() {
    if (this.store.length) {
      return this.store[this.store.length - 1][1];
    } else {
      return null;
    }
  }
}

// let s = new MaxStack;

// s.push(2);
// s.push(3);
// console.log(s.max());
// s.pop(3);
// console.log(s.max());


class MaxStackQueue {
  constructor() {
    this.inStack = new MaxStack;
    this.outStack = new MaxStack;
  }

  enqueue(el) {
    this.inStack.push(el);
  }

  dequeue() {
    if (this.outStack.store.length === 0) {
      while (this.inStack.store.length) {
        this.outStack.push(this.inStack.pop());
      }
    }
    return this.outStack.pop();
  }

  max() {
    return this.inStack.max() > this.outStack.max() ? this.inStack.max() : this.outStack.max() ;
  }
}


// let s = new MaxStackQueue;
// s.enqueue(5);
// s.enqueue(1);
// s.enqueue(3);
// s.enqueue(4);
// console.log(s.max());
// s.dequeue();
// console.log(s.max());
