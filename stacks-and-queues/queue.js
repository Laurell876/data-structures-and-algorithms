class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue { // FIFO --- add to end, remove from start
    constructor() {
      this.length = 0;
      this.first = null;
      this.head = null;
    }

    enqueue(val) {
        let newNode = new Node(val)
        if (this.length === 0) {
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        return ++this.length
    }

    dequeue() {
        if (this.length === 0) return null
        let temp = this.first
        if (this.length === 1) {
            this.first = null
            this.last = null
        } else {
            this.first = this.first.next
        }

        this.length--
        return temp
    }

    traverse() {
        let current = this.first
        while (current != null) {
            console.log(current)
            current = current.next
        }
    }
}

const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)
const res = queue.dequeue()
//console.log(res)

queue.traverse()