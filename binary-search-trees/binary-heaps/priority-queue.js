// a priority queue is an abstract idea like a list. It can be implemented in multiple ways
// e.g. a list can be an array or a linkedlist.

// this file includes a priority queue implemented as a binary heap.
// this can be a min or max heap, it doesn't matter as long as it's consistent with the idea of a priority queue
// this file will include a max heap

class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  // priority queue implemented as max binary heap
  // higher priority == higher priority
  constructor() {
    /*
    when storing a max binary heap in an array the following rule applies:
    for a number at index "n",
    it's left child is at index "2n+1" and its right child is at index "2n + 2"

    to get the parent of a child at index n use the following formula Math.floor((n-1)/2 )
    */
    this.values = [];
  }

  enqueue(value, priority) {
    // add a node to the priority queue then update the queue
    let newNode = new Node(value, priority);

    // first add the new number to the end of the array
    this.values.push(newNode);

    // then bubble the new value into it's correct position
    // add it to the end then check if the parent is smaller than it, if necessary swap
    // then check the new parent and see if that needs to be swapped
    // do this until the new value is at the right index
    let newItemIndex = this.values.length - 1; // new item starts out at the end
    let parentIndex = Math.floor((newItemIndex - 1) / 2);

    // console.log("parentIndex: " + parentIndex);
    //console.log(this.values);
    //   console.log("newItemIndex: " + newItemIndex);

    // console.log(this.values[parentIndex])

    //if (parentIndex < 0) return this

    while (
      this.values[parentIndex] &&
      this.values[newItemIndex] &&
      this.values[parentIndex].priority < this.values[newItemIndex].priority
    ) {
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

    while (true) {
      let indexToSwap = -1;

    //   if (this.values[firstChildIndex] === null && this.values[secondChildIndex] === null) {
    //     break;
    //   }
    //   else if (
    //     this.values[firstChildIndex] === null &&
    //     this.values[secondChildIndex] !== null
    //   ) {
    //     if (
    //       this.values[secondChildIndex].priority >
    //       this.values[parentIndex].priority
    //     ) {
    //       indexToSwap = secondChildIndex;
    //     }
    //   } else if (
    //     this.values[secondChildIndex] === null &&
    //     this.values[firstChildIndex] !== null
    //   ) {
    //     if (
    //       this.values[firstChildIndex].priority >
    //       this.values[parentIndex].priority
    //     ) {
    //       indexToSwap = firstChildIndex;
    //     }
    //   } else if (
    //     this.values[firstChildIndex].priority >
    //       this.values[secondChildIndex].priority &&
    //     this.values[firstChildIndex].priority >
    //       this.values[parentIndex].priority
    //   ) {
    //     indexToSwap = firstChildIndex;
    //   } else if (
    //     this.values[secondChildIndex].priority >
    //       this.values[firstChildIndex].priority &&
    //     this.values[secondChildIndex].priority >
    //       this.values[parentIndex].priority
    //   ) {
    //     indexToSwap = secondChildIndex;
    //   }

      //console.log("indexToSwap: " + indexToSwap)

    //   let firstChildExists = this.values[firstChildIndex] !== null
    //   let secondChildExists = this.values[secondChildIndex] !== null
    //   let bothChildrenExist = firstChildExists && secondChildExists
      
     if (
        this.values[firstChildIndex]?.priority >
          this.values[secondChildIndex]?.priority &&
        this.values[firstChildIndex]?.priority >
          this.values[parentIndex]?.priority
      ) {
        indexToSwap = firstChildIndex;
      } else if (
        this.values[secondChildIndex]?.priority >
          this.values[firstChildIndex]?.priority &&
        this.values[secondChildIndex]?.priority >
          this.values[parentIndex]?.priority
      ) {
        indexToSwap = secondChildIndex;
      }

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
      if (indexToSwap === -1) break;
    }
  }
  dequeue() {
    // removes root element then rearranges heap according to priority

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
    this.sinkDown();

    return {
      maxVal,
      heap: this,
    };
  }
}

const priorityQueue = new PriorityQueue();

// priorityQueue.values = [
//     { value: "", priority: 41 },
//     { value: "", priority: 39 },
//     { value: "", priority: 33 },
//     { value: "", priority: 18 },
//     { value: "", priority: 27 },
//     { value: "", priority: 12 },
// ]

priorityQueue.enqueue("cat", 41);
priorityQueue.enqueue("dog", 39);
priorityQueue.enqueue("caterpillar", 33);
priorityQueue.enqueue("caterpillar", 18);
priorityQueue.enqueue("caterpillar", 27);
priorityQueue.enqueue("caterpillar", 12);
priorityQueue.enqueue("cruise", 55);

console.log(JSON.stringify(priorityQueue));
console.log("\n\n")
console.log(JSON.stringify(priorityQueue.dequeue()));
