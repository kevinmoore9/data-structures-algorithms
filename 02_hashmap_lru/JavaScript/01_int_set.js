class MaxIntSet {
  constructor(max) {
    this.max = max;
    this.store = new Array(max);
  }

  insert(num) {
    this.validate(num);
    this.store[num] = true;
  }

  remove(num) {
    this.validate(num);
    this.store[num] = false;
    return num;
  }

  include(num) {
    this.validate(num);
    return this.store[num] === true;
  }

  validate(num) {
    if ((num >= this.max) || (num < 0)) throw "num not in range";
  }

}

// let a = new MaxIntSet(10);
// a.insert(4);
// a.insert(6);
// console.log(a.store);
// a.remove(6);
// console.log(a.store);
// console.log(a.include(4));
// console.log(a.include(6));

class IntSet {
  constructor(numBuckets = 20) {
    this.store = [];
    this.numBuckets = numBuckets;
    for (let i=0; i<numBuckets; i++) {
      this.store.push([]);
    }
  }

  insert(num) {
    let bucket = Math.abs(num % this.numBuckets);
    this.store[bucket].push(num);
  }
  remove(num) {
    let bucket = Math.abs(num % this.numBuckets);
    let idx = this.store[bucket].indexOf(num);
    if (idx === -1) {
      throw "not in set";
    } else {
      this.store[bucket].splice(idx,1);
      return num;
    }
  }

  include(num) {
    let bucket = Math.abs(num % this.numBuckets);

  }
}

let a = new IntSet;
a.insert(2);
a.insert(4);
a.insert(-22);
console.log(a.store);

class ResizingIntSet {
  constructor(numBuckets = 20) {
    this.store = [];
    for (let i=0; i < numBuckets; i++) {
      this.store.push([]);
    }
  }

  insert(num) {

  }

  remove(num) {

  }

  include(num) {

  }

  resize() {

  }
}
