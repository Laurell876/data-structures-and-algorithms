class Node {
    constructor(value) {
        this.value = value;
        this.left = null; // has smaller value
        this.right = null; // has larger value
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        var newNode = new Node(value)
        if (this.root === null) {
            this.root = newNode;    
            return this;
        } else {
            let current = this.root
            while(true) {
                if (newNode.value === current.value) {
                    // This tree ignores duplicates, a counter can be added to nodes in the future
                    return this;
                }
                else if (newNode.value < current.value) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left
                    }
                } else if (newNode.value > current.value) {
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right
                    }
                }
            }
        }
    }

    search(value) { // checks if a value exists in a tree
        let current = this.root
        while(current != null) {
            console.log("searching")
            if (value === current.value) {
                return current
            }
            else if (value < current.value) {
                current = current.left
            } else if (value > current.value) {
                current = current.right
            }
        }
        return -1
    }
}

let tree = new BinarySearchTree();
tree.insert(10)
tree.insert(5)
tree.insert(19)
tree.insert(21)
tree.insert(17)
tree.insert(2)

console.log("Tree structure")
console.log(JSON.stringify(tree))


const result = tree.search(17)

console.log("\nsearch result: " + JSON.stringify(result))