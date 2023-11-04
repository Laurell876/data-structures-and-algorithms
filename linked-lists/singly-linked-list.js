class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  traverse() {
    let current = this.head;
    for (let i = 0; i < this.length; i++) {
      console.log("value: " + current.val);
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
      this.tail = newNode;
    }
    this.length++;
  }

  shift() {
    // remove a new node from the beginning of the list
    if (this.length === 0) return undefined;

    const temp = this.head;

    this.head = this.head.next;

    this.length--;

    return temp.val;
  }
  unshift(val) {
    // adda new node to the beginning of the list
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    //console.log("new head: " + this.head)

    this.length++;

    return this;
  }
  pop() {
    // remove the final value from the end of the list
    if (this.length === 0) return undefined;

    let current = this.head;
    let finalValue;
    let previous;
    for (let i = 0; i < this.length; i++) {
      if (current.next === null) {
        finalValue = current.val;
      } else {
        previous = current;
        current = current.next;
      }
    }

    this.tail = previous;
    this.tail.next = null;

    this.length--;

    return finalValue;
  }
  get(index) {
    // get a node's value by it's index
    if (this.length === 0 || index >= this.length || index < 0)
      return undefined;

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    return current.val;
  }
  set(index, newValue) {
    // set a node's value by it's index
    if (index >= this.length || index < 0) return undefined;

    if (index === 0) {
      this.head.val = newValue;
      return this.head.val;
    } else if (index === this.length - 1) {
      this.tail.val = newValue;
      return this.tail.val;
    } else {
      let current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }

      current.val = newValue;

      return current.val;
    }
  }
  insert(index, newValue) {
    // insert a new node at a given index

    if (index < 0 || index > this.length) return false;

    if (index === 0) {
        //console.log("trigger unshift")
        this.unshift(newValue) // add to the beginning of the list
        // incrementing is already done in this function
    } else if (index === this.length) {
        this.push(newValue) // add to the end of the list
        // incrementing is already done in this function
    } else {
        const newNode = new Node(newValue);
        let current = this.head
        for (let i = 0; i < (index-1); i++) { // get to the node before the index
            current = current.next
        }
        let temp = current.next
        current.next = newNode
        newNode.next = temp
        this.length++
    }
    return true
  }
  remove(index) {
    // remove the node at a given index
    if (index < 0 || index >= this.length) return false;

    if (index === 0) {
        // remove node from beginning of list
        this.shift()
    }
    else if (index === (this.length - 1)) {
        // remove node from end of list
        this.pop()
    }
    else {
        let current = this.head
        for (let i = 0; i < (index-1); i++) { // get to the node before the index
            current = current.next
        }

        let nodeToRemove = current.next
        current.next = nodeToRemove.next
        this.length--
    }

    return true
  }
  reverse(){
    // reverse the linked list in place, don't use an external array or list
    // 1 2 3 4 5 -> 5 4 3 2 1

    // create a new variable called node and set it to head
    // swap the head and tail using the node variable as a placeholder
    // create two new variables next and previous
    // loop through the list
    // in each iteration do the following:
    // set next to node.next  -- tells the loop where to go next
    // set node.next to previous -- reverses connections in list
    // set previous to node -- keeps track of previous value
    // set node to next -- moves the loop along


    let node = this.head
    this.head = this.tail
    this.tail = node
    
    let next;
    let prev;
    

    for (let i = 0; i < this.length; i++) {
        // set the next value and track the previous
        next = node.next
        node.next = prev // in the first iteration node.next is set to null since the next of tail would be null
        
        // move to the next step
        prev = node
        node = next
    }

  }
}
//console.log("test")

const list = new SinglyLinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.push(7);

list.reverse();

list.traverse();