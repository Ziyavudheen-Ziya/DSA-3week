class RemoveBinaryHeap {
  constructor() {
    this.value = [41, 39, 33, 18, 27, 12];
  }

  exractMax() {
    const max = this.value[0];
    const end = this.value.pop();
    if (this.value.length > 0) {
      this.value[0] = end;
      this.sinkDown();
    }

    return max;
  }

  sinkDown() {
    let index = 0;
    const length = this.value.length;
    const element = this.value[0];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (swap === null) break;

      if (leftChildIndex < length) {
        leftChild = this.value[leftChildIndex];
        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }

      if (rightChild < length) {
        rightChild = this.value[rightChildIndex];

        if (
          swap === null &&
          rightChild > element &&
          swap !== null &&
          rightChild > leftChild
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;
      this.value[index] = this.value[swap];
      this.value[swap] = element;
      index = swap;
    }
  }
}

let heap = new RemoveBinaryHeap();

console.log(heap.exractMax());
console.log(heap.value);
