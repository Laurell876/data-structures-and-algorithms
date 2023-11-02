class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList {
    constructor () {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    traverse() {
        let current = this.head
        for (let i = 0; i < this.length; i++) {
            console.log(current.val)
            current = current.next
        }
    }

    push(val) {
        // add a value to the end of the list
        const newNode = new Node(val)
        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
    }

    pop() {
        // remove the final value from the end of the list
        if (this.length === 0) return undefined;

        

        this.length--
    }
}
//console.log("test")

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

const list = new SinglyLinkedList();


list.push(node1)
list.push(node2)
list.push(node3)
list.push(node4) 
//const res = list.pop()
//console.log(res)

list.traverse()

list.pop()
