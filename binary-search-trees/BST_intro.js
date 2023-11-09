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
}

let tree = BinarySearchTree();
tree.root = new Node(10)
tree.root.right = new Node(29)
tree.root.right.right = new Node(35)
tree.root.right.left = new Node(25)

tree.root.left = new Node(5)
tree.root.left.right = new Node(8)
tree.root.left.left = new Node(2)