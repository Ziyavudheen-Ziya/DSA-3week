class MinBinaryHeap {
  constructor() {
    this.value = [41, 39, 33, 18, 27, 12];
  }

  insert(element) {
    this.value.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.value.length - 1;
    const element = this.value[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.value[parentIndex];

      if (element < parent) {
        this.value[parentIndex] = element;
        this.value[index] = parent;
        index = parentIndex;
      }
    }
  }
}

const heap = new MinBinaryHeap();

heap.insert(13);

console.log(heap);
