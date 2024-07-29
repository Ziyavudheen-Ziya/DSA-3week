class MinBinaryHeap{

   constructor(){

     this.arr = []
   }

   insert(element){

      this.arr.push(element)
      this.bubbleUp()
   }

   bubbleUp(){

     let index = this.arr.length-1
     let element = this.arr[index]

     while(index>0){

       let parentIndex = Math.floor((index-1)/2)
       let parent = this.arr[parentIndex]
        

       if(element>=parent)break;

       this.arr[parentIndex] = element
       this.arr[index] = parent
       index = parentIndex
     }
   }
}

const heap = new MinBinaryHeap()

heap.insert(80)
heap.insert(40)
heap.insert(15)
heap.insert(60)
heap.insert(4)

console.log(heap.arr);