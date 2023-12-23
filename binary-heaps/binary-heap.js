class MaxBinaryHeap {
  constructor() {
    /*
        when storing a max binary heap in an array the following rule applies:
        for a number at index "n",
        it's left child is at index "2n+1" and its right child is at index "2n + 2"

        to get the parent of a child at index n use the following formula Math.floor((n-1)/2 )
        */
    this.values = [];
  }
  insert(value) {
    // first add the new number to the end of the array
    this.values.push(value);

    // then bubble the new value into it's correct position
    // add it to the end then check if the parent is smaller than it, if necessary swap
    // then check the new parent and see if that needs to be swapped
    // do this until the new value is at the right index
    let newItemIndex = this.values.length - 1; // new item starts out at the end
    let parentIndex = Math.floor((newItemIndex - 1) / 2);

   // console.log("parentIndex: " + parentIndex);
 //   console.log("newItemIndex: " + newItemIndex);

    while (this.values[parentIndex] < this.values[newItemIndex]) {
      let temp = this.values[parentIndex];
      let tempIndex = parentIndex;
      this.values[parentIndex] = this.values[newItemIndex];
      this.values[newItemIndex] = temp;

      // parentIndex = newItemIndex
      newItemIndex = tempIndex;
      parentIndex = Math.floor((newItemIndex - 1) / 2);
    }

    return this;
  }
  sinkDown() {
    let parentIndex = 0;
    let firstChildIndex = 2 * parentIndex + 1;
    let secondChildIndex = 2 * parentIndex + 2;

    // console.log(this.values)
    // console.log("firstChildIndex: " + firstChildIndex)
    // console.log("secondChildIndex: " + secondChildIndex)

    while (
      (this.values[firstChildIndex] > this.values[secondChildIndex] &&
        this.values[firstChildIndex] > this.values[parentIndex]) ||
      (this.values[secondChildIndex] > this.values[firstChildIndex] &&
        this.values[secondChildIndex] > this.values[parentIndex])
    ) {
      let indexToSwap = -1;
      if (
        this.values[firstChildIndex] > this.values[secondChildIndex] &&
        this.values[firstChildIndex] > this.values[parentIndex]
      ) {
        indexToSwap = firstChildIndex;
      } else if (
        this.values[secondChildIndex] > this.values[firstChildIndex] &&
        this.values[secondChildIndex] > this.values[parentIndex]
      ) {
        indexToSwap = secondChildIndex;
      }

      //console.log("indexToSwap: " + indexToSwap)

      if (indexToSwap !== -1) {
        // SWAP

        let tempIndex = indexToSwap;
        let temp = this.values[indexToSwap];

        this.values[indexToSwap] = this.values[parentIndex];
        this.values[parentIndex] = temp;

        parentIndex = tempIndex;

        firstChildIndex = 2 * parentIndex + 1;
        secondChildIndex = 2 * parentIndex + 2;
      }
    }
  }
  extractMax() {
    // in a max binary heap you typically only remove the root or the maximum (first) value in the array (heap)

    // first you remove the max value
    // then you update the heap so everything is in the correct spot (sometimes called sink-down)
    // - remove the max value and swap it with its child
    // - then sink down
    // - compare the new max to its children and determine which one is larger, then swap with the larger child
    // - continuously swap (sink-down) until the value is in the right place (the value that was swapped with the max value that was removed)

    // gswap first and final values
    let temp = this.values[this.values.length - 1];
    this.values[this.values.length - 1] = this.values[0];
    this.values[0] = temp;

    // remove final value (first value since it was swapped)
    let maxVal = this.values.pop(); // remove final value from array

    // ------------------------- complete sink-down process
    this.sinkDown()

    return {
      maxVal,
      heap: this,
    };
  }
}

let heap = new MaxBinaryHeap();
//heap.values = [41,39,33,18,27,12]

heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
console.log(heap)

//console.log(heap.extractMax());
//console.log(heap.extractMax());
