class BinaryMinHeap {
  constructor() {
    this.store = [];
  }

  count(){
    return (this.store.length);
  }

  extract() {
    if (this.count === 0) throw "no element to extract";
    if (this.count === 1) return (this.store.pop());
    let min = this.store[0];
    this.store[0] = this.store.pop();
    this.heapifyDown();

    return (min);
  }

  peek() {
    if (this.count === 0) throw "no element to peek";
    return(this.store[0]);
  }

  push(val) {

  }

  //helper functions

  childIndices(length, parentIdx) {
    return [2 * parentIdx + 1, 2 * parentIdx + 2].filter(idx => idx < length);
  }

  parentIndex(childIdx) {
    if (childIdx === 0) throw "root has no parent";
    return ((Math.floor(childIdx - 1)) / 2);
  }

  heapifyUp() {

  }

  heapifyDown(array = this.store, parentIdx = 0, length = this.count) {
    let childIdxs = this.childIndices(parentIdx);
    let left = childIdxs[0];
    let right = childIdxs[1];

    let parentVal = array[parentIdx];
    let children = [];
    if (left) children.push(array[left]);
    if (right) children.push(array[right]);

    if (children.every(el => el < parentVal)) return array;

    let swapIdx = null;
    if (children.length === 1) {
      swapIdx = left;
    } else {
      if (children[0] < children[1]) {
        swapIdx = children[0];
      } else {
        swapIdx = children[1];
      }
    }
    let temp = array[parentIdx];
    array[parentIdx] = array[swapIdx];
    array[swapIdx] = array[temp];

    return (this.heapifyDown(array, swapIdx, length));
  }
 }

 const heap = new BinaryMinHeap;
 heap.store = [1,2,3,4,5];
 console.log(heap.peek());
 console.log(heap.extract());
 console.log(heap.store);
