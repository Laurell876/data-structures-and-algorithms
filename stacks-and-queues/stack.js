class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack { // LIFO -- add to start, remove from start
  constructor() {
    this.length = 0;
    this.first = null;
    this.head = null;
  }

  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.length;
  }

  pop() {
    // return the first value
    let temp;
    if (this.length === 0) return null;
    else {
      temp = this.first;
      if (this.length === 1) {
        this.first = null;
        this.last = null;
      } else {
        this.first = this.first.next;
      }
    }

    this.length--;

    return temp;
  }

  traverse() {
    let current = this.first;
    while (current != null) {
      console.log(current);
      current = current.next;
    }
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
const res = stack.pop();
//console.log(res);

stack.traverse();
