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

const values = [41,65,91,99,72,68,50,65,20,29,32,11,12,7]
values.forEach((item)=>{tree.insert(item)})

console.log("Tree structure")
console.log(JSON.stringify(tree))


const result = tree.search(68)

console.log("\nsearch result: " + JSON.stringify(result))