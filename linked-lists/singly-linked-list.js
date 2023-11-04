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
            console.log("value: " + current.val)
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
        
        let current = this.head
        let finalValue;
        let previous;
        for (let i = 0; i < this.length; i++) {
            if (current.next === null) {
                finalValue = current.val
            } else {
                previous = current
                current = current.next
            }
        }

        this.tail = previous;
        this.tail.next = null

        this.length--

        return finalValue
    }
}
//console.log("test")

const list = new SinglyLinkedList();


list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)
list.push(6)
list.push(7)

list.traverse()

const res = list.pop()
console.log("value popped from end: " + res)

list.traverse()

// list.push(node2)
// list.push(node3)
// list.push(node4) 
// //const res = list.pop()
// //console.log(res)

// list.traverse()


