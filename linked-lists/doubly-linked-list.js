class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  // the doubly linked list takes up more memory than the singly linked list

  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  traverse() {
    let current = this.head;
    for (let i = 0; i < this.length; i++) {
      console.log("\n\ncurrent node: ");
      console.log(current);
      console.log("current.val: " + current.val);
      current = current.next;
    }
  }

  push(val) {
    // add a value to the end of the list
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }

  pop() {
    // remove a node from the end of the list
    if (this.length === 0) return undefined;

    const nodeToReturn = this.tail;
    this.tail = this.tail.previous;
    this.tail.next = null;

    this.length--;

    return nodeToReturn;
  }

  shift() {
    // remove a node from the beginning of the list
    if (this.length === 0) return undefined;

    const nodeToReturn = this.head;
    if (this.length === 1) {
        this.head = null
        this.tail = null
    } else {
        this.head = this.head.next
        this.head.previous = null
    }
    

    this.length--;

    return nodeToReturn
  }
  unshift(val) {
    // add a node to the beginning of the list

    if (this.length === 0) {
        this.push(val)
    } else {
        const newNode = new Node(val)


        this.head.previous = newNode
        newNode.next = this.head

        this.head = newNode

        this.length++;
    }

    return this
  }
  get(index) {
    // get a node at an index 

    if (index < 0 || index >= this.length) return undefined

    if (index === 0) {
        return this.head
    } else if (index === (this.length - 1)) {
        return this.tail
    } else {
        let half = Math.ceil(this.length / 2)
        if (index >= half) {
            let current = this.tail
            for (let i = (this.length-1); i >= half; i--) {
                if (i === index) {
                    return current
                }  
                current = current.previous
            }
        } else if (index < half) {
            let current = this.head
            for (let i = 0; i < half; i++) {
                
                if (i === index) {
                    return current
                }  
                current = current.next
            }
        }
    }
  }
}

const list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.push(7);
list.push(8);
//list.unshift(10);


//list.traverse();

const res = list.get(5)
console.log(res)
